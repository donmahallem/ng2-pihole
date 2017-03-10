import {
    Component,
    Inject
} from "@angular/core";
import {
    FormControl,
    FormGroup,
    FormBuilder,
    Validators
} from '@angular/forms';
@Component({
    selector: "upstream-dns-settings",
    templateUrl: "./upstream-dns-settings.component.html",
})
export class UpstreamDnsSettingsComponent {
    private upstreamDnsForm: FormGroup;
    constructor(private formBuiler: FormBuilder) {
        this.upstreamDnsForm = this.formBuiler.group({
            name: ["", Validators.required]
        });
    }
}