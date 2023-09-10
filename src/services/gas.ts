import { Id } from "../app/id";

export interface IGasServices {
    listId(): Promise<Id[]>;
}

export class GasServices implements IGasServices {
    async listId(): Promise<Id[]> {
        return Promise.resolve([
            { id: 1 },
            { id: 2 },
        ]);
    }
}
