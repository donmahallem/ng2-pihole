import { Component } from '@angular/core';
import { DoughnutChartBoxComponent } from "./doughnut-chart-box.component"
import { PiholeApiService } from "./../../services/pihole-api.service";


@Component({
    selector: 'forward-destinations-chart-box',
    templateUrl: "./doughnut-chart-box.component.html"
})
export class ForwardDestinationsChartComponent extends DoughnutChartBoxComponent {

    constructor(private piholeApi: PiholeApiService) {
        super();
        this.title = "Forward Destinations";
        this.chartLabels = [];
        this.chartData = [];
        this.queryData();
    }

    private queryData() {
        this.piholeApi.getForwardDestinations().subscribe(forwardDestinations => {
            let chartLabels: string[] = [];
            let chartData: number[] = [];
            for (let key in forwardDestinations) {
                if (forwardDestinations.hasOwnProperty(key)) {
                    chartLabels.push(key);
                    chartData.push(forwardDestinations[key]);
                }
            }
            this.chartData = chartData;
            this.chartLabels = chartLabels;
        });
    }
}
