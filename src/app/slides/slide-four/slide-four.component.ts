import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wac-slide-four',
    standalone: true,
    styleUrls: ['./slide-four.component.scss'],
    templateUrl: './slide-four.component.html'
})
export class SlideFourComponent {}
