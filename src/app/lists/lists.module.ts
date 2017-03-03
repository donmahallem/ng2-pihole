import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ListsComponent,
    SelectListComponent
} from "./components"
import {
    AlertModule,
    PaginationModule
} from 'ng2-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ListsRoutingModule } from "./lists-routing.module"

@NgModule({
    imports: [
        CommonModule,
        ListsRoutingModule,
        AlertModule,
        PaginationModule,
        ReactiveFormsModule
    ],
    declarations: [
        ListsComponent,
        SelectListComponent
    ], exports: [

    ]
})
export class ListsModule { }