export class RouteCargoCommand {
    private _cargoBookingId: string;

    constructor(cargoBookingId: string) {
        this.cargoBookingId  = cargoBookingId;
    }

    set cargoBookingId(cargoBookingId: string) {
        this._cargoBookingId = cargoBookingId;
    }

    get cargoBookingId() {
        return this._cargoBookingId;
    }
}