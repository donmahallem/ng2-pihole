import {
    Component,
    Input
} from '@angular/core';
import {
    ListEntry
} from "./../../services/models";
import { ListsService } from "./lists.service";

@Component({
    templateUrl: "./domain-list-item.component.html",
    selector: "domain-list-item"
})
export class DomainListItemComponent {
    @Input("domain")
    protected listEnty: ListEntry;

    constructor(private listsService: ListsService) {

    }

    private remove() {
        this.listsService.remove(this.listEnty);
    }

}