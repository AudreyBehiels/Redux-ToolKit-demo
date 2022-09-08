import { createReducer } from '@reduxjs/toolkit';
import uniqeuId from 'lodash/uniqueId';
import { TodoItemType } from '../../types';
import {
    AddTodoItemActionType,
    RemoveTodoItemActionType,
    SetDraftItemActionType,
    TodoItemActions,
    TodoListActions,
    UpdateTodoItemActiontype,
} from '../actions';

export const initialState: TodoItemType[] = [
    { id: 'item-0', title: 'Test', description: 'This is a test item' },
];

const todoList = createReducer(initialState, (builder) => {
    builder
        .addCase(TodoListActions.ADD_ITEM, (state, action: AddTodoItemActionType) => {
            // Adds item to the list
            const item = { id: uniqeuId('item-'), ...action.payload }
            state.push(item);
        })
        .addCase(TodoListActions.REMOVE_ITEM, (state, action: RemoveTodoItemActionType) => {
            // Removes the item with id from the list
            state = state.filter((item: TodoItemType) => item.id !== action.payload.id);
            return state;
        })
        .addCase(TodoListActions.UPDATE_ITEM, (state, action: UpdateTodoItemActiontype)  => {
            // Updates the selected item in the list
            const { id, title, description } = action.payload;
            const item = state.find((item: TodoItemType) => item.id === id);
            if (!item) return state;
            item.description = description;
            item.title = title;
            return state;
        })
        .addCase(TodoItemActions.SET_DRAFT_ITEM, (state, action: SetDraftItemActionType) => {
            return state;
        })
        .addDefaultCase((): any => {
            return initialState;
        });
});


export default todoList;