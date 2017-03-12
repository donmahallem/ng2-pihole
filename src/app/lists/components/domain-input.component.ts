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
    templateUrl: "./domain-input.component.html",
    selector: "domain-input"
})
export class DomainInputComponent {

    private readonly domainRegex = /^(?!:\/\/)(?!.{256,})(([a-z0-9][a-z0-9_-]*?\.)+?[a-z]{2,6}?)$/i;
    private loadingSubscription: Subscription;
    private domainForm: FormGroup;
    /**
     * loading state for the refresh button
     */
    private loading: boolean = false;
    constructor(private listsService: ListsService) {
        this.domainForm = new FormGroup({
            domain: new FormControl("", Validators.compose([Validators.required, Validators.pattern(this.domainRegex)]))
        });
        this.loadingSubscription = listsService.loading.subscribe((loading) => {
            this.loading = loading;
            if (loading) {
                this.domainForm.disable();
            } else {
                this.domainForm.enable();
            }
        });
    }

    private add() {
        if (this.domainForm.valid) {
            this.listsService.add(this.domainForm.value["domain"]);
        }
    }

    private refresh() {
        this.listsService.refresh();
    }
}