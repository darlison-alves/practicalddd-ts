export class LastCargoHandledEvent {
    private _handlingEventId: number;

    private _handlingEventType: string;

    private _handlingEventVoyage: string;

    private _handlingEventLocation: string;

    //Null object pattern.
    public static readonly EMPTY = new LastCargoHandledEvent();

    constructor( handlerEventId?: number, handlingEventType?: string,
        handlingEventVoyage?: string, handlingEventLocation?: string ) {
        this._handlingEventId = handlerEventId;
        this._handlingEventType = handlingEventType;
        this._handlingEventVoyage = handlingEventVoyage;
        this._handlingEventLocation = handlingEventLocation;
    }

    get handlingEventId() {
        return this._handlingEventId;
    }

    set handlingEventId(handlingEventId: number) {
        this._handlingEventId = handlingEventId
    }

    get handlingEventType(){
        return this._handlingEventType;
    }

    set handlingEventType(handlingEventType: string) {
        this._handlingEventType = handlingEventType;
    }

    get handlingEventVoyage() {
        return this._handlingEventVoyage;
    }

    set handlingEventVoyage(handlingEventVoyage: string) {
        this._handlingEventVoyage = handlingEventVoyage;
    }

    get handlingEventLocation() {
        return this._handlingEventLocation;
    }

    set handlingEventLocation(handlingEventLocation: string) {
        this._handlingEventLocation = handlingEventLocation;
    }

}