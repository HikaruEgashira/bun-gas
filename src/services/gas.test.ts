import { expect, test, beforeEach } from "bun:test";
import { GasServices } from "./gas";
import { fixture } from "../app/id.test";

let mockGas: GasServices;

beforeEach(() => {
    mockGas = {
        main: () => { },
        listId: () => Promise.resolve(fixture),
    };
});

test("id must be unique", async () => {
    const ids = await mockGas.listId();
    const uniqueIds = [...new Set(ids.map((id) => id.id))];
    expect(ids.map((id) => id.id)).toStrictEqual(uniqueIds);
});
