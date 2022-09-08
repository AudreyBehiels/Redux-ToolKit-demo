import { createReducer, current } from '@reduxjs/toolkit';
import { TodoItemType } from '../../types';
import { SetDraftItemActionType, TodoItemActions } from '../actions';

export const initialState: TodoItemType = {
    id: null,
    title: null,
    description: null,
};

const draftItem = createReducer(initialState, (builder) => {
    builder
        .addCase(TodoItemActions.SET_DRAFT_ITEM, (_state, action: SetDraftItemActionType) => {
            return action.payload.draftItem;
        })
        .addDefaultCase((): any => {
            return initialState;
        });
});


export default draftItem;