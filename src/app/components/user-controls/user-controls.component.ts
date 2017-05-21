import { Component, Input, Output, EventEmitter } from '@angular/core';
import Player from '../../../types/Player';

@Component({
    selector: 'rps-user-controls',
    templateUrl: 'user-controls.component.html',
    styleUrls: ['user-controls.component.scss']
})

export class UserControlsComponent {
    @Input() handArray: Array<string>;
    @Input() isLoopRunning: boolean;
    @Input() player: Player;
    @Output() stop: EventEmitter<any> = new EventEmitter();

    public select(selection) {
        this.player.select(selection);
        this.stop.emit(null);
    }
}
