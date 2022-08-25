import { createReducer } from '@reduxjs/toolkit';
import uniqeuId from 'lodash/uniqueId';
import { TodoItemType } from '../../types';
import { AddTodoItemActionType, TodoListActions } from '../actions';

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
        .addDefaultCase((): any => {
            return initialState;
        });
});


export default todoList;