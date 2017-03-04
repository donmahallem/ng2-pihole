import { Component } from '@angular/core';
import { PiholeApiService } from './../../services/pihole-api.service';
import { Summary } from './../../services/models';

@Component({
    selector: '.row[summary]',
    templateUrl: "./summary.component.pug",
    styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
    summary: Summary;
    errorMessage: string;
    private loading: boolean = false;
    constructor(private piholeApi: PiholeApiService) {
        this.getSummary();
    }

    private get adsPercentageDisplay(): string {
        if (this.summary) {
            return (this.summary.adsPercentage * 100).toFixed(2) + "%";
        } else {
            return "---";
        }
    }
    private getSummary() {
        if (!this.loading) {
            this.loading = true;
            this.piholeApi.getSummary()
                .subscribe(
                heroes => this.summary = heroes,
                error => console.error(error),
                () => {
                    this.loading = false;
                });
        }
    }
}
