import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    HistoryComponent,
    HistoryTableComponent
} from "./components"
import {
    AlertModule,
    PaginationModule
} from 'ng2-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HistoryRoutingModule } from "./history-routing.module"
import { MomentJsPipe } from "./pipes";

@NgModule({
    imports: [
        CommonModule,
        HistoryRoutingModule,
        AlertModule,
        PaginationModule,
        ReactiveFormsModule
    ],
    declarations: [
        HistoryComponent,
        HistoryTableComponent,
        MomentJsPipe
    ], exports: [

    ]
})
export class HistoryModule { }