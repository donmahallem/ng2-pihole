import { Component, Input } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormBuilder,
    Validators,
    Validator
} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ListsService } from "./lists.service";

@Component({
    templateUrl: "./notification-display.component.html",
    selector: "notification-display"
})
export class NotificationDisplayComponent {
    private notificationSubscription: Subscription;
    private alert: Error | boolean = null;
    private alertMessage: string = "";
    private alertType: string = "warning";
    constructor(private listService: ListsService) {
        this.notificationSubscription = listService.notification.subscribe((notification) => {
            if (notification instanceof Error) {
                console.log("Error", notification);
                this.alertMessage = notification.message;
                this.alert = notification;
                this.alertType = "danger";
            } else {
                this.alertMessage = notification;
                this.alert = true;
                this.alertType = "success";
                console.log("no error", notification, typeof notification);
            }
        });
    }

    public ngOnDestroy() {
        this.notificationSubscription.unsubscribe();
    }

    private alertClosed($event) {
        this.alert = null;
    }
}