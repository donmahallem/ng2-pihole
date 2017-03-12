import {
    Component,
    HostBinding,
    OnDestroy
} from '@angular/core';
import { PiholeHeadbarComponent } from "./pihole-headbar.component";
import { PiholeSidebarComponent } from "./pihole-sidebar.component";
import { AppService } from "./app.service";
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-root',
    templateUrl: "./app.component.html",
    providers: [AppService],
    styleUrls: ['./app.component.css'],
    host: { class: "skin-blue sidebar-mini" },
    moduleId: module.id
})
export class AppComponent implements OnDestroy {
    @HostBinding('class.layout-boxed') layoutBoxed: boolean = false;
    @HostBinding("class.sidebar-collapse") sidebarCollapsed: boolean = false;
    private collapseSubscription: Subscription;
    constructor(private appService: AppService) {
        this.collapseSubscription = appService.sidebarCollapseObservable.subscribe((collapsed) => {
            if (this.sidebarCollapsed != collapsed) {
                this.sidebarCollapsed = collapsed;
            }
        });
    }

    public ngOnDestroy() {
        this.collapseSubscription.unsubscribe();
    }
}