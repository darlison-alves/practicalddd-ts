import { Location } from "../entities/Location";
import { Voyage } from "./Voyage";

export class CargoHandlingActivity {
    private static readonly serialVersionUID: number = 1;
    private _type: string;
    private _location: Location;
    private _voyage: Voyage;

    constructor(type?: string, location?: Location, voyage?: Voyage) {
        this._type = type;
        this._location = location;
        this._voyage = voyage;
    }

    get type() {
        return this._type;
    }

    get location() {
        return this._location
    }

    get voyage() {
        return this._voyage;
    }
}