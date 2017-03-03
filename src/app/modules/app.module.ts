import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './../components/app.component';
import { PiholeHeadbarComponent } from './../components/pihole-headbar.component';
import { PiholeSidebarComponent } from './../components/pihole-sidebar.component';
import { PiholeSidebarStatusComponent } from './../components/pihole-sidebar-status.component';
import { AdminLteSidebarMenu } from "./../components/adminlte/sidebar/sidebar-menu.component";
import { PiholeContentComponent } from './../components/pihole-content.component';

import { PiholeRoutingModule } from './pihole-routing.module';
import { SettingsModule } from './../settings';
import { DashboardModule } from './../dashboard';
import { HistoryModule } from './../history';
import { ListsModule } from './../lists';

import { PiholeApiService } from './../services/pihole-api.service';
import { PiholeAuthService } from './../services/pihole-auth.service';
import { MockPiholeBackendService } from "./../services/mock-pihole-api.service";
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


@NgModule({
    declarations: [
        AppComponent,
        PiholeHeadbarComponent,
        PiholeSidebarComponent,
        PiholeSidebarStatusComponent,
        AdminLteSidebarMenu,
        PiholeContentComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        PiholeRoutingModule,
        SettingsModule,
        DashboardModule,
        HistoryModule
    ],
    providers: [
        PiholeApiService,
        PiholeAuthService,
        MockPiholeBackendService,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
