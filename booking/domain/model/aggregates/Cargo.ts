import { BookingId } from "./BookingId";
import { BookingAmount } from "../veluesObjects/BookingAmount";
import { Location } from "../entities/Location";
import { RouteEspecification } from "../veluesObjects/RouteSpecification";
import { CargoItinerary } from "../veluesObjects/CargoItinerary";
import { BookCargoCommand } from "../commands/BookCargoCommand";
import { Delivery } from "../veluesObjects/Delivery";
import { LastCargoHandledEvent } from "../veluesObjects/LastCargoHandledEvent";

export class Cargo { 
    private _id: number;

    private _bookingId: BookingId;

    private _bookingAmount: BookingAmount;

    private _origin: Location

    private _routeSpecification: RouteEspecification;

    private _itinerary: CargoItinerary;

    private _delivery: Delivery

    constructor(bookCargoCommand: BookCargoCommand) {
        this._bookingId = new BookingId(bookCargoCommand.bookingId);
        
        this._routeSpecification = new RouteEspecification(
            new Location(bookCargoCommand.originLocation),
            new Location(bookCargoCommand.destLocation),
            bookCargoCommand.destArrivalDeadline
        );

        this._origin = this._routeSpecification.origin;

        this._bookingAmount = new BookingAmount(bookCargoCommand.bookingAmount);

        this._itinerary = CargoItinerary.EMPTY_INTINERARY;

        this._delivery = Delivery.delivedFrom(this._routeSpecification, this._itinerary, LastCargoHandledEvent.EMPTY)

    }

    get bookingId() {
        return this._bookingId;
    }

    set origin(origin: Location) {
        this._origin = origin
    }

    get origin() {
        return this._origin
    }

    set bookingAmount( bookingAmount: BookingAmount ) {
        this._bookingAmount = bookingAmount
    }

    get bookingAmount() {
        return this._bookingAmount
    }

    get routeSpecification() {
        return this._routeSpecification;
    }

    set routeSpecification( routeSpecification: RouteEspecification) {
        this._routeSpecification = routeSpecification
    }

    get itinerary() {
        return this._itinerary;
    }

    set itinerary( cargoItinerary: CargoItinerary ) {
        this._itinerary = cargoItinerary
    }

    public assignToRoute(cargoItinerary: CargoItinerary): void {
        this._itinerary = cargoItinerary
    }
    
}