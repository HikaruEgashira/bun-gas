import { expect, test } from "bun:test";
import { GasServices } from "./gas";
import { fixture } from "../app/todo.test";

test("todo", async () => {
    const mockGas: GasServices = {
        main: () => { },
        listTodo: () => Promise.resolve(fixture),
    };

    const todos = await mockGas.listTodo();
    expect(todos).toStrictEqual(fixture);
});
