import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AppService {  // Observable string sources
    private sidebarCollapseSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    /**
     * Ovservable if something is loading to display loading indicators
     */
    public readonly sidebarCollapseObservable: Observable<boolean> = this.sidebarCollapseSource.asObservable();

    constructor() {
    }

    public toggleSidebar() {
        this.sidebarCollapseSource.next(!this.sidebarCollapseSource.getValue());
    }

    public collapseSidebar() {
        if (this.sidebarCollapseSource.getValue()) {
            this.sidebarCollapseSource.next(false);
        }
    }

    public expandSidebar() {
        if (!this.sidebarCollapseSource.getValue()) {
            this.sidebarCollapseSource.next(true);
        }
    }
}