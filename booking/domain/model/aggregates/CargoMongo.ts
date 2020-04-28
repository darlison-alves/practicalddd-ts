import { Schema } from "mongoose";

const LocationSchema = new Schema({
    name: { type: String }
})

interface ILocation {
    name: string
}

interface ICargo {
    bookingAmount: string;
    location: ILocation
    teste(): void;
}

const CargoSchema = new Schema<ICargo>({
    bookingAmount: { type: String },
    location: LocationSchema
})

CargoSchema.methods.teste = function () {
    this.bookingAmount = ""
    return;
}
