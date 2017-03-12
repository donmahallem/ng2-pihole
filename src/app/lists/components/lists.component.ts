import {
    Component,
    Input,
    OnDestroy
} from '@angular/core';
import {
    PiholeApiService
} from "./../../services/pihole-api.service";
import {
    ListEntry
} from "./../../services/models";
import {
    ActivatedRoute,
    Params
} from '@angular/router';
import { AlertComponent } from 'ng2-bootstrap/alert'
import { Subscription } from 'rxjs/Subscription';
import { ListsService } from "./lists.service";
@Component({
    templateUrl: "./lists.component.html",
    providers: [ListsService]
})
export class ListsComponent implements OnDestroy {
    private loadingSubscription: Subscription;
    private notificationSubscription: Subscription;
    private domainList: ListEntry[];
    private error: Error = null;
    constructor(private listService: ListsService) {
        this.loadingSubscription = listService.loading.subscribe((loading) => {

        }, (error) => {

        }, () => {

        });
        this.notificationSubscription = listService.notification.subscribe((notification) => {
            if (notification instanceof Error) {
                console.log("Error", notification);
                this.error = notification;
            } else {
                console.log("no error", notification, typeof notification);
            }
        });
    }

    public ngOnDestroy() {
        this.notificationSubscription.unsubscribe();
        this.loadingSubscription.unsubscribe();
    }
}