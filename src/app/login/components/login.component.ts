import { Component, Input } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { PiholeAuthService } from "./../../services/pihole-auth.service";
import {
    FormControl,
    FormGroup,
    FormBuilder,
    Validators,
    Validator
} from '@angular/forms';

@Component({
    templateUrl: "./login.component.html",
    providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class LoginComponent {
    private _isRequesting: boolean = false;
    private _wrongPassword: boolean = false;

    private loginForm: FormGroup;
    constructor(private piholeAuth: PiholeAuthService, private router: Router, private formBuiler: FormBuilder) {
        this.loginForm = new FormGroup({
            password: new FormControl("", Validators.required)
        });
    }

    public get isRequesting(): boolean {
        return this._isRequesting;
    }

    public get wrongPassword(): boolean {
        return this._wrongPassword;
    }

    protected login({ value, valid }: { value: { password: string }, valid: boolean }) {
        if (valid) {
            this._isRequesting = true;
            this.piholeAuth
                .login(value.password)
                .subscribe(data => {
                    this._wrongPassword = false;
                    this.router.navigate(["/"]);
                },
                error => {
                    this._wrongPassword = true;
                }, () => {
                    this._isRequesting = false;
                });
        }
    }
}