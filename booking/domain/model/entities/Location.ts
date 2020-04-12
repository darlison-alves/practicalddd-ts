export class Location {
    private _unLocCode: string;

    constructor(unLocCode: string) {
        this._unLocCode = unLocCode
    }

    get unLocCode() : string {
        return this._unLocCode;
    }

    set unLocCode(unLocCode: string) {
        this._unLocCode = unLocCode;
    }

}