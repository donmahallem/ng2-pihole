import {
    Component,
    Input,
    ContentChild,
    NgZone
} from '@angular/core';
import {
    PiholeApiService,
    ListEntry
} from "./../../services/pihole-api.service";
import {
    ActivatedRoute,
    Params
} from '@angular/router';
import { AlertComponent } from 'ng2-bootstrap/alert'
import { Subscription } from 'rxjs/Subscription';
@Component({
    templateUrl: "./select-list.component.pug"
})
export class SelectListComponent {
    constructor(private piholeApi: PiholeApiService,
        private activatedRoute: ActivatedRoute) {
    }

}