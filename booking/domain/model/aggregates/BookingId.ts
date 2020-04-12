export class BookingId {
    private _bookingId: string;    
    
    constructor(bookingId: string) {
        this._bookingId = bookingId;
    }

    public get bookingId() { return this._bookingId; }
}