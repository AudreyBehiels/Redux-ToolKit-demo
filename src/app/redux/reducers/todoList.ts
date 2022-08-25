import { createReducer } from '@reduxjs/toolkit';
import { TodoItemType } from '../../types';

export const initialState: TodoItemType[] = [
    { id: 'item-0', title: 'Test', description: 'This is a test item' },
];

const todoList = createReducer(initialState, (builder) => {
    builder
        .addDefaultCase((): any => {
            return initialState;
        });
});


export default todoList;