import {v4} from "uuid"//5
export class IdGeneration {
    public generate(): string{
        return v4();
    }
}