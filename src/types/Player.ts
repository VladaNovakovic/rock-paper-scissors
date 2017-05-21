export default class Player {
    name: string;
    selection: string;
    score: number;

    constructor(name: string) {
        this.score = 0;
        this.name = name;
    }

    select(selection: string) {
        console.log('set selection');
        this.selection = selection;
    }

    getSelection() {
        let returnSelection = this.selection;
        this.selection = '';
        return returnSelection;
    }

    wins() {
        this.score++;
    }
}
