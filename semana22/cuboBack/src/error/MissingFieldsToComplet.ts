import { BaseError } from "./BaseError";

export class MissingFieldsToComplet extends BaseError{
    constructor(){
        super("Missing fields to complet");
    }
}
