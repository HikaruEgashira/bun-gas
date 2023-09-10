import { Id } from "../app/id";

export interface GasServices {
    main(): void;
    listId(): Promise<Id[]>;
}
