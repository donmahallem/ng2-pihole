import {
    Component,
    Input,
    ContentChild,
    NgZone,
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
import { ListState } from "./list-state.enum";
@Component({
    templateUrl: "./domain-list.component.html",
    selector: "domain-list"
})
export class DomainListComponent implements OnDestroy {
    private domainList: ListEntry[];
    private domainListSubscription: Subscription;

    constructor(private listsService: ListsService) {
        this.domainListSubscription = this.listsService.domainList.subscribe((data) => {
            this.domainList = data;
        });
    }

    public ngOnDestroy() {
        this.domainListSubscription.unsubscribe();
    }


}