import {
    Component,
    Input
} from "@angular/core";
import { Query } from "./../../services/pihole-api.service";
import { PageChangedEvent } from "ng2-bootstrap/pagination/pagination.component";
import * as moment from "moment";
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';


class Item {
    disabled: boolean = false;
    page: number = 0;
    title: string = "1";
}

@Component({
    selector: "table-pagination",
    templateUrl: "./table-pagination.component.pug"
})
export class TablePaginationComponent {

    private _numPages: number = 30;
    private _currentPage: number = 0;
    private _maxItems: number = 10;
    private _items: any[] = [];

    constructor() {
    }

    private updateView() {
        this._items = [];
        let leftArrow = new Item();
        leftArrow.title = "<<";
        leftArrow.page = this.currentPage - 1;
        leftArrow.disabled = this.currentPage == 0;
        this._items.push(leftArrow);
        let startIdx = 0;
        let endIdx = this.numPages;
        if (this.numPages > this.maxItems && this.maxItems > 0) {
            let halfRange = this.maxItems / 2;
            if (this.currentPage + halfRange >= this.numPages) {
                endIdx = this.numPages - 1;
                startIdx = endIdx - this.maxItems;
            } else if (this.currentPage - halfRange < 0) {
                startIdx = 0;
                endIdx = this.maxItems;
            } else {
                startIdx = this.currentPage - halfRange;
                endIdx = this.currentPage + halfRange;
            }
        }
        for (let idx = startIdx; idx < endIdx; idx++) {
            let item = new Item();
            item.page = idx;
            item.title = "" + idx;
            item.disabled = idx == this.currentPage;
            this._items.push(item);
        }
    }

    @Input("maxItems")
    public set maxItems(maxItems: number) {
        this._maxItems = maxItems;
        this.updateView();
    }

    public get maxItems(): number {
        return this._maxItems;
    }

    @Input("numPages")
    public set numPages(numPages: number) {
        this._numPages = numPages;
        this.updateView();
    }

    public get numPages(): number {
        return this._numPages;
    }

    @Input("currentPage")
    public set currentPage(currentPage: number) {
        this._currentPage = currentPage;
        this.updateView();
    }

    public get currentPage(): number {
        return this._currentPage;
    }

    public get items(): any[] {
        return this._items;
    }

    public onPageSelected(page: Item) {
        this.currentPage = page.page;
        console.log("page selected", page);
    }
}