export class Voyage {
    public _voyage: string;

    constructor(voyageId: string) {
        this._voyage = voyageId;
    }

    get voyage() {
        return this._voyage;
    }

    set voyage( voyage: string ) {
        this._voyage = voyage;
    }
}