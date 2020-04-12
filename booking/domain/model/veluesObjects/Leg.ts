import { Voyage } from "./Voyage";
import { Location } from "../entities/Location";

export class Leg {
    private _id: number;

    private _voyage: Voyage;

    private _loadLocation: Location;

    private _unloadLocation: Location;

    private _loadTime: Date;

    private _unloadTime: Date;

    constructor(voyage: Voyage, loadLocation: Location, 
        unloadLocation: Location, loadTime: Date, unloadTime: Date) {
            this._voyage = voyage;
            this._loadLocation = loadLocation;
            this._unloadLocation = unloadLocation;
            this._loadTime = loadTime;
            this._unloadTime = unloadTime;
    }
}