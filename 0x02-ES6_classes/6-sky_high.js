import Building from "./5-building";

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        this._floors = floors;
    }

    // floor getter
    get floors() {
        return (this._floors);
    }
    
      evacuationWarningMessage() {
        return (`Evacuate slowly the ${this.floors} floors`);
      }
}