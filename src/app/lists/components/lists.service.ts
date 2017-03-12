import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import {
    PiholeApiService,
} from "./../../services/pihole-api.service";
import {
    ListEntry
} from "./../../services/models";
import { ListState } from "./list-state.enum";


@Injectable()
export class ListsService {  // Observable string sources
    private loadingSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private domainListSource: BehaviorSubject<ListEntry[]> = new BehaviorSubject<ListEntry[]>([]);
    private notificationSubject: Subject<Error | string> = new Subject<Error | string>();

    /**
     * Ovservable if something is loading to display loading indicators
     */
    public readonly loading: Observable<boolean> = this.loadingSource.asObservable();
    public readonly domainList: Observable<ListEntry[]> = this.domainListSource.asObservable();
    public readonly notification: Observable<Error | string> = this.notificationSubject.asObservable();

    constructor(private piholeApi: PiholeApiService) {
        this.refresh();
    }

    public add(domain: string) {
        if (!this.loadingSource.getValue()) {
            console.log("add");
            this.loadingSource.next(true);
            this.piholeApi
                .addDomainToList("white", domain)
                .subscribe(
                data => {
                    this.notificationSubject.next("Domain added to list");
                },
                error => {
                    this.notificationSubject.next(error);
                    this.loadingSource.next(false);
                }, () => {
                    this.loadingSource.next(false);
                });
        }
    }

    public refresh() {
        if (!this.loadingSource.getValue()) {
            this.loadingSource.next(true);
            this.piholeApi
                .getList("white")
                .subscribe(
                data => {
                    this.domainListSource.next(data);
                },
                error => {
                    this.notificationSubject.next(error);
                    this.loadingSource.next(false);
                }, () => {
                    this.loadingSource.next(false);
                });
        }
    }

    public remove(listEntry: ListEntry) {
        if (!this.loadingSource.getValue()) {
            this.loadingSource.next(true);
            this.piholeApi
                .removeDomainFromList("white", listEntry.domain)
                .subscribe(
                data => {
                    this.notificationSubject.next("Domain removed from list");
                },
                error => {
                    this.notificationSubject.next(error);
                    this.loadingSource.next(false);
                }, () => {
                    this.loadingSource.next(false);
                });
        }
    }
}