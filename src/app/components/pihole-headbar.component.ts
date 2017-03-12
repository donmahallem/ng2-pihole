import { Component } from '@angular/core';
import { AppService } from "./app.service";
@Component({
    selector: 'pihole-headbar',
    templateUrl: "./pihole-headbar.component.html"
})
export class PiholeHeadbarComponent {

    constructor(private appService: AppService) {

    }

    private toggleSidebar() {
        this.appService.toggleSidebar();
    }
}
