import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wac-slide-ten',
    styleUrls: ['./slide-ten.component.scss'],
    templateUrl: './slide-ten.component.html'
})
export class SlideTenComponent {}
