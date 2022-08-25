import { createAction } from "@reduxjs/toolkit";
import { TodoItemType } from "../../types";

export enum TodoItemActions {
    SET_DRAFT_ITEM = 'item/set-draft-item',
};

export type SetDraftItemActionType = { type: TodoItemActions.SET_DRAFT_ITEM, payload: { draftItem: TodoItemType }};
export const setDraftItemAction = createAction<{draftItem: TodoItemType}, TodoItemActions.SET_DRAFT_ITEM>(TodoItemActions.SET_DRAFT_ITEM);

export type ToDoItemActionsType =
    | SetDraftItemActionType;
