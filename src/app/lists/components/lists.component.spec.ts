/* tslint:disable:no-unused-variable */

import {
    TestBed,
    async
} from '@angular/core/testing';
import {
    ComponentFixture,
    fakeAsync

} from '@angular/core/testing';
import {
    DebugElement

} from '@angular/core';
import { ListsComponent } from './lists.component';
import { PiholeAuthService } from './../../services/pihole-auth.service';
import { MockPiholeBackendService } from "./../../services/mock-pihole-api.service";
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';
import {
    Router, ActivatedRoute
} from '@angular/router';

let comp: ListsComponent;
let fixture: ComponentFixture<ListsComponent>;
let page: Page;
class Page {
    gotoSpy: jasmine.Spy;
    navSpy: jasmine.Spy;

    submitBtn: DebugElement;
    nameDisplay: HTMLElement;
    nameInput: HTMLInputElement;

    constructor() {
        const router = TestBed.get(Router); // get router from root injector
        this.navSpy = spyOn(router, 'navigate');
    }

    /** Add page elements after hero arrives */
    addPageElements() {
        if (comp) {
            // have a hero so these elements are now in the DOM
            const buttons = fixture.debugElement.queryAll(By.css('btn'));
            this.btnAdd = buttons[0];
            this.btnRefresh = buttons[1];
            this.btn
            this.submitBtn = buttons[0];
            this.nameDisplay = fixture.debugElement.query(By.css('span')).nativeElement;
            this.nameInput = fixture.debugElement.query(By.css('input')).nativeElement;
        }
    }
}
class RouterStub {
    navigateByUrl(url: string) { return url; }
    navigate(url: string) {

    }
}
class PiholeAuthServiceStub {

}
function createComponent() {
    fixture = TestBed.createComponent(ListsComponent);
    comp = fixture.componentInstance;
    page = new Page();

    // 1st change detection triggers ngOnInit which gets a hero
    fixture.detectChanges();
    return fixture.whenStable().then(() => {
        // 2nd change detection displays the async-fetched hero
        fixture.detectChanges();
        page.addPageElements();
    });
}
describe('LoginComponent', () => {
    beforeEach(() => {
    });
    describe('with FormsModule setup', formsModuleSetup);
});




/**
 * Create custom DOM event the old fashioned way
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Event/initEvent
 * Although officially deprecated, some browsers (phantom) don't accept the preferred "new Event(eventName)"
 */
export function newEvent(eventName: string, bubbles = false, cancelable = false) {
    let evt = document.createEvent('CustomEvent');  // MUST be 'CustomEvent'
    evt.initCustomEvent(eventName, bubbles, cancelable, null);
    return evt;
}
/////////////////////
import { ReactiveFormsModule } from '@angular/forms';

function formsModuleSetup() {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [ListsComponent],
            providers: [
                { provide: PiholeAuthService, useClass: PiholeAuthServiceStub }
            ]
        })
            .compileComponents()
            .then(createComponent);
    }));

    it('should display 1st hero\'s name', async(() => {
    }));
    it('should save stub hero change', fakeAsync(() => {
        const newName = 'New Name';

        page.nameInput.value = newName;
        page.nameInput.dispatchEvent(newEvent('input')); // tell Angular

    }));
}