import { Voyage } from "./Voyage";
import { LastCargoHandledEvent } from "./LastCargoHandledEvent";
import { CargoHandlingActivity } from "./CargoHandlingActivity";
import { CargoItinerary } from "./CargoItinerary";
import { RouteEspecification } from "./RouteSpecification";
import { Location } from "../entities/Location";

export enum RoutingStatus {
    NOT_ROUTED =  "NOT_ROUTED",
    ROUTED = "ROUTED"
}

export enum TransportStatus {
    NOT_RECEIVED = "NOT_RECEIVED",
    ONBOARD_CARRIER = "ONBOARD_CARRIER",
    IN_PORT = "IN_PORT",
    CLAIMED = "CLAIMED",
    UNKNOWN = "UNKNOWN"
}

export class Delivery {
    public static readonly ETA_UNKOWN: Date = null;

    private _routingStatus: RoutingStatus;

    private _transportStatus: TransportStatus;

    private _lastKnownLocation: Location;

    private _currentVoyage: Voyage;

    private _lastEvent: LastCargoHandledEvent;

    public static readonly NO_ACTIVITY  = new CargoHandlingActivity();

    private _nextExpectedActivity: CargoHandlingActivity

    constructor(lastEvent: LastCargoHandledEvent, 
        itinairary: CargoItinerary, routeSpecification: RouteEspecification) {
            this._lastEvent = lastEvent;
            this._routingStatus = this.calculateRoutingStatus(itinairary, routeSpecification);
            this._transportStatus = this.calculateTransportStatus();
            this._lastKnownLocation = this.calculateLastKnownLocation();
            this._currentVoyage = this.calculateCurrentVoyage();
        }

    public updateOnRouting(routeSpecification: RouteEspecification, itinerary: CargoItinerary): Delivery {
        return new Delivery(this._lastEvent, itinerary, routeSpecification);
    }

    public static delivedFrom( routeSpecification: RouteEspecification, itinerary: CargoItinerary, lastCargoHandledEvent: LastCargoHandledEvent ): Delivery {
        return new Delivery(lastCargoHandledEvent, itinerary, routeSpecification);
    }
    
    private calculateRoutingStatus(itinerary: CargoItinerary, routeSpecification: RouteEspecification): RoutingStatus {
        if(itinerary == null || itinerary == CargoItinerary.EMPTY_INTINERARY)
            return RoutingStatus.NOT_ROUTED;
        else
            return RoutingStatus.ROUTED
    }

    private calculateTransportStatus(): TransportStatus {
        if(this._lastEvent.handlingEventType == null) 
            return TransportStatus.NOT_RECEIVED;
        
        switch(this._lastEvent.handlingEventType) {
            case "LOAD":
                return TransportStatus.ONBOARD_CARRIER;
            case "UNLOAD":
            case "RECEIVE":
            case "CUSTOMS":
                return TransportStatus.IN_PORT;
            case "CLAIM":
                return TransportStatus.CLAIMED;
            default:
                return TransportStatus.UNKNOWN;
        }
    }

    get transportStatus() {
        return this._transportStatus;
    }

    private calculateLastKnownLocation(): Location {
        if(!this._lastEvent)
            return new Location(this._lastEvent.handlingEventLocation)
        return null;
    }

    private calculateCurrentVoyage(): Voyage {
        if(this.transportStatus === TransportStatus.ONBOARD_CARRIER && !this._lastEvent)
            return new Voyage(this._lastEvent.handlingEventVoyage);
        else
            return null
    }
}