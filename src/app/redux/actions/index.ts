import { ToDoListActionsType } from "./listActions";
import { ToDoItemActionsType } from "./itemActions";

export * from './listActions';
export * from './itemActions';

export type ActionsType =
    | ToDoListActionsType
    | ToDoItemActionsType;
