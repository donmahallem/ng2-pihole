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
