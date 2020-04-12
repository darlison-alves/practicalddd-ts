import { Leg } from "./Leg";

export class CargoItinerary {
    public static readonly EMPTY_INTINERARY = new CargoItinerary();
    private _legs: Array<Leg> = [];

    constructor(legs: Array<Leg> = []) {
        this._legs = legs;
    }

    get legs() {
        return this._legs;
    }
}