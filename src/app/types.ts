export type TodoItemType = {
    id: string | null;
    title: string | null;
    description: string | null;
};

export type Store = {
    todoList: TodoItemType[];
    toDoDraftItem: TodoItemType;
};
