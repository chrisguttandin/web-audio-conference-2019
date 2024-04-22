import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wac-slide-five',
    standalone: true,
    styleUrls: ['./slide-five.component.scss'],
    templateUrl: './slide-five.component.html'
})
export class SlideFiveComponent {}
