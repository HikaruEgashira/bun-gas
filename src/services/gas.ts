import { Todo } from "../app/todo";

export interface GasServices {
    main(): void;
    listTodo(): Promise<Todo[]>;
}
