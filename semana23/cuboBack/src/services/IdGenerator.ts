import { v4 } from "uuid";

export class IdGenerator {

    generete(): string {
        return v4();
    }
}

export default new IdGenerator()


