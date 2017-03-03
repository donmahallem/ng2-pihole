import {
    NgModule,
    ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallboxComponent } from "./components";


@NgModule({
    declarations: [SmallboxComponent],
    exports: [SmallboxComponent],
    imports: [CommonModule]
})
export class SmallboxModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: SmallboxModule, providers: [] };
    }
}