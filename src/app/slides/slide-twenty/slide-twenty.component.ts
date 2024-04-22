import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wac-slide-twenty',
    standalone: true,
    templateUrl: './slide-twenty.component.html'
})
export class SlideTwentyComponent {}
