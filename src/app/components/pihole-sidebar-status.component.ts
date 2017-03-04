import { Component } from '@angular/core';
import { PiholeApiService } from "./../services/pihole-api.service";
import { Status } from "./../services/models";
@Component({
    selector: 'pihole-sidebar-status',
    templateUrl: "./pihole-sidebar-status.component.pug"
})
export class PiholeSidebarStatusComponent {

    private status: Status = new Status();

    constructor(private piholeApi: PiholeApiService) {
        this.loadStatus();
    }

    private get memoryUsageDisplay(): boolean | string {
        if (this.status.memory) {
            return (this.status.memory * 100).toFixed(1);
        } else {
            return false;
        }
    };

    private get loadAverageDisplay(): boolean | string {
        if (this.status.loadAverage) {
            return this.status.loadAverage.map(item => {
                return item.toFixed(2);
            }).join(",");
        } else {
            return false;
        }
    };

    private get temperatureDisplay(): boolean | string {
        if (this.status.temperature) {
            return this.status.temperature.toFixed(1) + "°C";
        } else {
            return false;
        }
    };
    private loadStatus(): void {
        this.piholeApi
            .getStatus()
            .subscribe(
            data => {
                this.status = data;
            },
            error => {
            },
            () => {
                setTimeout(this.loadStatus.bind(this), 60000);
            }
            )
    }
}
