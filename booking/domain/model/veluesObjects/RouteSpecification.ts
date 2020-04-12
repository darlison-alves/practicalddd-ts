import { Location } from "../entities/Location";

export class RouteEspecification {

    private static readonly serialVersionUID: number = 1;

    private _origin: Location;
    
    private _destination: Location;

    private _arrivalDeadline: Date;

    constructor(origin: Location, destination: Location, arrivalDeadLine: Date) {
        this._origin = origin;
        this._destination = destination;
        this._arrivalDeadline = arrivalDeadLine;
    }

    get origin() {
        return this._origin;
    }

    get destination() {
        return this._destination;
    }

    get arrivalDeadLine() {
        return new Date(this._arrivalDeadline.getTime())
    }
}