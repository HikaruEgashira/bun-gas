import { expect, test, beforeEach } from "bun:test";
import { IGasServices } from "./gas";
import { fixture } from "../app/id.test";

let mockGasService: IGasServices;

beforeEach(() => {
    mockGasService = {
        listId: () => fixture,
    };
});

test("id must be unique", async () => {
    const ids = mockGasService.listId();
    const uniqueIds = [...new Set(ids.map((id) => id.id))];
    expect(ids.map((id) => id.id)).toStrictEqual(uniqueIds);
});
