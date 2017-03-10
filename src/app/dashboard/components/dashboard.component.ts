import { Component } from '@angular/core';
import { PiholeAuthService } from "./../../services/pihole-auth.service";
import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl: "./dashboard.component.html"
})
export class DashboardComponent {
    private isLoggedIn: boolean;
    private loginSubscription: Subscription;
    constructor(private piholeAuth: PiholeAuthService) {
        this.loginSubscription = this.piholeAuth
            .loginState.subscribe(
            loggedIn => {
                this.isLoggedIn = loggedIn;
            });
    }

    ngOnDestory() {
        this.loginSubscription.unsubscribe();
    }
}