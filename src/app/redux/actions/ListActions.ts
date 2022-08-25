import { createAction } from "@reduxjs/toolkit";

export enum TodoListActions {
    ADD_ITEM = 'list/add-item',
};

export type AddTodoItemActionType = { type: TodoListActions.ADD_ITEM, payload: { title: string, description: string }};
export const addTodoItemAction = createAction<{ title: string, description: string }, TodoListActions.ADD_ITEM>(TodoListActions.ADD_ITEM);

export type ToDoListActionsType = AddTodoItemActionType;
