import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import draftItem from './redux/reducers/draftItem';
import todoList from './redux/reducers/todoList';

export const store = configureStore({
  reducer: {
    todoList,
    toDoDraftItem: draftItem,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
