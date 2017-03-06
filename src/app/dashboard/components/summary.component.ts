import { Component } from '@angular/core';
import { PiholeApiService } from './../../services/pihole-api.service';
import { Summary } from './../../services/models';

@Component({
    selector: '.row[summary]',
    templateUrl: "./summary.component.pug",
    styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
    private _summary: Summary;
    errorMessage: string;
    private _loading: boolean = false;
    private _error: Error;

    constructor(private piholeApi: PiholeApiService) {
        this.refresh();
    }

    public get summary(): Summary {
        return this._summary;
    }

    public get adsPercentageDisplay(): string {
        if (this.summary) {
            return (this.summary.adsPercentage * 100).toFixed(2) + "%";
        } else {
            return "---";
        }
    }

    public get hasError(): boolean {
        return this._error != null;
    }

    public get error(): Error {
        return this._error;
    }

    public get loading(): boolean {
        return this._loading;
    }

    public get refreshing(): boolean {
        return this._loading;
    }

    public refresh() {
        if (!this._loading) {
            this._loading = true;
            this._error = null;
            this.piholeApi.getSummary()
                .subscribe(
                heroes => {
                    this._summary = heroes;
                },
                error => {
                    this._error = error;
                },
                () => {
                    this._loading = false;
                });
        }
    }

}
