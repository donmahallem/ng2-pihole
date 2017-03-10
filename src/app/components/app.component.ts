import { Component, HostBinding } from '@angular/core';
import { PiholeHeadbarComponent } from "./pihole-headbar.component";
import { PiholeSidebarComponent } from "./pihole-sidebar.component";

@Component({
    selector: 'app-root',
    templateUrl: "./app.component.html",
    styleUrls: ['./app.component.css'],
    host: { class: "skin-blue sidebar-mini" },
    moduleId: module.id
})
export class AppComponent {
    @HostBinding('class.layout-boxed') layoutBoxed: boolean = false;
}