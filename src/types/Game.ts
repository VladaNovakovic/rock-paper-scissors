import Player from './Player';

export default class Game {
    playerOne: Player;
    playerTwo: Player;
    ongoingRound: boolean;
    selection: Array<string>;
    lastRoundResult: number;

    constructor(playerOneName: string, playerTwoName: string) {
        this.ongoingRound = false;
        this.selection = ['rock', 'paper', 'scissors'];
        this.playerOne = new Player(playerOneName ? playerOneName : 'Player 1');
        this.playerTwo = new Player(playerTwoName ? playerTwoName : 'Player 2');
    }

    startRound() {
        this.ongoingRound = true;
    }

    endRound() {
        this.ongoingRound = false;
    }

    calculateResult() {
        let playerOneSelection = this.selection.indexOf(this.playerOne.getSelection());
        let playerTwoSelection = this.selection.indexOf(this.playerTwo.getSelection());
        let result = playerOneSelection - playerTwoSelection;

        if (result === 1 || result === -2) {
            this.playerOne.wins();
            this.lastRoundResult = 1;
        }else if (result === -1 || result === 2) {
            this.playerTwo.wins();
            this.lastRoundResult = 2;
        } else {
            this.lastRoundResult = 0;
        }
    }

}
