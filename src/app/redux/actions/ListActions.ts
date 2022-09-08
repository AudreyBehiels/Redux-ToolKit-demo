import { createAction } from "@reduxjs/toolkit";

export enum TodoListActions {
    ADD_ITEM = 'list/add-item',
    REMOVE_ITEM = 'list/remove-item',
    UPDATE_ITEM = 'list/update-item',
};

export type AddTodoItemActionType = { type: TodoListActions.ADD_ITEM, payload: { title: string, description: string }};
export const addTodoItemAction = createAction<{ title: string, description: string }, TodoListActions.ADD_ITEM>(TodoListActions.ADD_ITEM);

export type RemoveTodoItemActionType = { type: TodoListActions.REMOVE_ITEM, payload: { id: string }};
export const removeTodoItemAction = createAction<{id: string}, TodoListActions.REMOVE_ITEM>(TodoListActions.REMOVE_ITEM);

export type UpdateTodoItemActiontype = { type: TodoListActions.UPDATE_ITEM, payload: { id: string, title: string, description: string }};
export const updateTodoItemAction = createAction<{ id: string, title: string, description: string }, TodoListActions.UPDATE_ITEM>(TodoListActions.UPDATE_ITEM);

export type ToDoListActionsType =
    | AddTodoItemActionType
    | RemoveTodoItemActionType
    | UpdateTodoItemActiontype;
