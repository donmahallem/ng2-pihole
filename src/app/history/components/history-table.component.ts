import {
    Component,
    Input,
    NgZone
} from "@angular/core";
import { Query } from "./../../services/models";
import { PageChangedEvent } from "ng2-bootstrap/pagination/pagination.component";
import * as moment from "moment";
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';

/**
 * Sorts Query Objects by the sortByDate
 * @param asc defines if the Queries should be sorted ascending or descending
 */
function sortByDate(asc: boolean = true) {
    return function (a: Query, b: Query): number {
        return (asc ? 1 : -1) * moment.utc(a.timestamp).diff(moment.utc(b.timestamp));
    }
}

@Component({
    selector: "table[queries-table]",
    templateUrl: "./history-table.component.html",
    styleUrls: ["./history-table.component.css"]
})
export class HistoryTableComponent {

    private startIdx: number = 0;
    private endIdx: number = 10;
    private _rows: Query[] = [];
    private _currentPage: number = 0;
    private _itemsPerPage: number = 100;
    private _totalItems: number = 0;
    constructor(private zone: NgZone) {

    }

    public updateView() {
        this.startIdx = this.currentPage * this.itemsPerPage;
        this.endIdx = this.startIdx + this.itemsPerPage;
        console.log(this._totalItems, this._rows.length);
        this._totalItems = this._rows.length;
        this.zone.run(() => { });
        //this.visibleRows = this.mInputData.slice(startIdx, startIdx + this.config.itemsPerPage);
    }

    @Input("rows")
    public set rows(data: Query[]) {
        this._rows = data.sort((a, b) => {
            return a.timestamp.localeCompare(b.timestamp);
        });
        this.updateView();
    }

    public get rows(): Query[] {
        return this._rows;
    }

    @Input("currentPage")
    public set currentPage(currentPage: number) {
        this._currentPage = Math.max(currentPage, 0);
        this.updateView();
    }

    public get currentPage(): number {
        return this._currentPage;
    }

    public set totalItems(totalItems: number) {

    }

    public get totalItems(): number {
        console.log("totalItems", this._totalItems);
        return this._totalItems;
    }

    @Input("itemsPerPage")
    public set itemsPerPage(itemsPerPage: number) {
        this._itemsPerPage = Math.max(1, itemsPerPage);
        this.updateView();
    }

    public get itemsPerPage(): number {
        console.log("itemsPerPage", this._itemsPerPage);
        return this._itemsPerPage;
    }

    public onPageChanged($event: PageChangedEvent) {
        this.currentPage = $event.page;
        this.updateView();
        console.log("OnPageChanged", $event.page);
    }

    private numPages: number = 5;

}