import {
    Component,
    SimpleChanges,
    Input
} from '@angular/core';
import { AbstractChartBoxComponent } from "./abstract-chart-box.component";
import { PiholeApiService } from "./../../services/pihole-api.service";
import { Observable } from "rxjs";
import 'rxjs/add/operator/zip';

class Query {
    name: string;
    value: number;
    percentage: number;
}

@Component({
    selector: 'top-domains-box',
    templateUrl: "./top-domains-box.component.pug"
})
export class TopDomainsBoxComponent {
    private domains: Query[] = [];
    private _type: string = "queries";
    constructor(private piholeApi: PiholeApiService) {
    }

    @Input("statType")
    public set type(type: string) {
        if (type === "queries" || type === "ads") {
            this._type = type;
            this.refresh();
        } else {
            throw new Error("Unknown type: " + type);
        }
    }

    public get type(): string {
        return this._type;
    }

    private refresh() {
        let topItems = this.piholeApi.getTopItems()
            .map(topDomains => {
                if (this.type === "queries") {
                    return topDomains.topQueries;
                } else {
                    return topDomains.topAds;
                }
            })
            .map(topQueries => {
                //Transform map to an array 
                let data: Query[] = [];
                for (let key in topQueries) {
                    if (topQueries.hasOwnProperty(key)) {
                        let q = new Query();
                        q.name = key;
                        q.value = topQueries[key];
                        data.push(q);
                    }
                }
                return data;
            })
            .map(topQueries => {
                return topQueries.sort((a, b) => {
                    return b.value - a.value;
                })
            })
            .map(topQueries => {
                return topQueries.slice(0, 10);
            });
        let summary = this.piholeApi.getSummary();
        Observable.zip(topItems,
            summary,
            (a, b) => {
                return { top: a, summary: b };
            })
            .map(zipped => {
                for (let i = 0; i < zipped.top.length; i++) {
                    zipped.top[i].percentage = zipped.top[i].value * 100 / zipped.summary.dnsQueriesToday;
                }
                return zipped.top;
            })
            .subscribe(topDomains => {
                this.domains = topDomains;
            },
            error => {

            },
            () => {

            });
    }
}
