import { Cargo } from "../../domain/model/aggregates/Cargo";
import { BookingId } from "../../domain/model/aggregates/BookingId";

export class CargoRepository {
    private MOCKDB: Map<string, Cargo>;

    public findById(bookingId: BookingId): Cargo {

        if(!this.MOCKDB.has(bookingId.bookingId))
            throw Error("NOT FOUND");

        return this.MOCKDB.get(bookingId.bookingId)
    }

    public store (cargo: Cargo): Cargo {
        this.MOCKDB.set(cargo.bookingId.bookingId, cargo)
        return cargo
    }

}