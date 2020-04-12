export class BookCargoCommand {
    private _bookingId: string;

    private _bookingAmount: number;

    private _originLocation: string;

    private _destLocation: string;

    private _destArrivalDeadline: Date;

    constructor(bookingAmount: number, originLocation: string, 
        destLocation: string, destArrivalDeadline: Date) {
            this._bookingAmount = bookingAmount;
            this._originLocation = originLocation;
            this._destLocation = destLocation;
            this._destArrivalDeadline = destArrivalDeadline;
    }

    set bookingId(bookingId: string) {
        this._bookingId = bookingId;
    }

    get bookingId() {
        return this._bookingId;
    }

    set bookingAmount( bookingAmount: number ) {
        this._bookingAmount = bookingAmount;
    }

    get bookingAmount() {
        return this._bookingAmount;
    }

    set originLocation(originLocation: string) {
        this._originLocation = originLocation;
    }

    get originLocation() {
        return this._originLocation;
    }

    set destLocation(destLocation: string) {
        this._destLocation = destLocation;
    }

    get destLocation() {
        return this._destLocation;
    }

    get destArrivalDeadline() { return this._destArrivalDeadline }

    set destArrivalDeadline(destArrivalDeadline: Date ) { 
        this._destArrivalDeadline = destArrivalDeadline; 
    }
}