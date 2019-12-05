import {ADD_TODO, TOGGLE_COMPLETE_TODO} from "../constants/ActionTypes";
import {REMOVE_TODO} from "../constants/ActionTypes";
import {DELETE_ALL} from "../constants/ActionTypes";
import {ActionType} from "./ActionInterface";


export let id = 0;

export const addTodo = (text: string) => ({
         type: ADD_TODO,
         id: id++,
         text
       });

export const toggleTodoComplete = (id: number) => ({
    type: TOGGLE_COMPLETE_TODO,
    id,
});

export const removeTodo = (id: number) => ({
    type: REMOVE_TODO,
    id
});

export const deleteAll = () => ({
    type: DELETE_ALL,
});




