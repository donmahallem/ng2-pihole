import {
    Component
} from '@angular/core';
import { DoughnutChartBoxComponent } from "./doughnut-chart-box.component"
import { PiholeApiService } from "./../../services/pihole-api.service";


@Component({
    selector: 'query-types-chart-box',
    templateUrl: "./doughnut-chart-box.component.html"
})
export class QueryTypesChartComponent extends DoughnutChartBoxComponent {

    constructor(private piholeApi: PiholeApiService) {
        super();
        this.title = "Query Types";
        this.chartLabels = [];
        this.chartData = [];
        this.queryData();
    }

    private queryData() {
        this.piholeApi.getQueryTypes().subscribe(queryTypes => {
            let chartLabels: string[] = [];
            let chartData: number[] = [];
            for (let key in queryTypes) {
                if (queryTypes.hasOwnProperty(key)) {
                    chartLabels.push(key);
                    chartData.push(queryTypes[key]);
                }
            }
            this.chartData = chartData;
            this.chartLabels = chartLabels;
        });
    }
}
