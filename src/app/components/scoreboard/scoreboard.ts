import { Component, Input } from '@angular/core';
import Game from '../../../types/Game';

@Component({
    selector: 'rps-scoreboard',
    templateUrl: 'scoreboard.html',
    styleUrls: ['scoreboard.scss']
})

export class ScoreboardComponent {
    @Input() game: Game;

}
