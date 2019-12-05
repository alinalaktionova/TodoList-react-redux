import {
  ADD_TODO,
  DELETE_ALL,
  REMOVE_TODO,
  TOGGLE_COMPLETE_TODO
} from "../constants/ActionTypes";
import {Dispatch} from "react";

export interface AddTodo {
  type: typeof ADD_TODO;
  id: number;
  text: string;
}
export interface ToggleTodoComplete {
  type: typeof TOGGLE_COMPLETE_TODO;
  id: number;
}
export interface RemoveTodo {
  type: typeof REMOVE_TODO;
  id: number;
}
export interface DeleteAll {
  type: typeof DELETE_ALL;
}

export type ActionType = AddTodo | ToggleTodoComplete | RemoveTodo | DeleteAll ;

