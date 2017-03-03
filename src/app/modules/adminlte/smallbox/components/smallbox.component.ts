import {
    Component,
    Input,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

@Component({
    selector: 'div.small-box[smallbox]',
    templateUrl: "./smallbox.component.pug",
    styleUrls: ['./smallbox.component.css'],
    animations: [
        trigger('visibilty', [
            state('1', style({ opacity: 1 })),
            transition('void => *', [
                style({ opacity: 0 }),
                animate(250)
            ]),
            transition('* => void', [
                animate(250, style({ opacity: 0 }))
            ])
        ])
    ]
})
export class SmallboxComponent {
    @Input("box-title") boxTitle: string = "";
    @Input("box-subtitle") boxSubtitle: string = null;
    @Input("box-icon") boxIcon: string = null;
    @Input("loading") isLoading: boolean = false;
}
