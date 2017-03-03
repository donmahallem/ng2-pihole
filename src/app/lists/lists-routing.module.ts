import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
    Data
} from '@angular/router';
import { ListsComponent, SelectListComponent } from './components';

const listsRoutes: Routes = [
    {
        path: "",
        component: SelectListComponent
    },
    {
        path: 'white',
        component: ListsComponent,
        data: {
            type: "white"
        }
    },
    {
        path: 'black',
        component: ListsComponent,
        data: {
            type: "black"
        }
    },
    {
        path: "**",
        redirectTo: "",
        data: {
            unknownList: true
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(listsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ListsRoutingModule { }