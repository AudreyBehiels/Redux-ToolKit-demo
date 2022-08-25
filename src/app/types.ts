export type TodoItemType = {
    id: string;
    title: string;
    description: string;
};

export type Store = {
    todoList: TodoItemType[];
};
