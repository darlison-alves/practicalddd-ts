export class BookingAmount {
    private _bookingAmount: number;

    constructor(bookingAmount: number) {
        this._bookingAmount = bookingAmount
    }

    get bookingAmount(): number {
        return this._bookingAmount;
    }

    set bookingAmount(bookingAmount: number) {
        this._bookingAmount = bookingAmount;
    }
}