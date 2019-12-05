import TodoInterface from "./TodoInterface";
import {Dispatch} from "react";

export default interface PropsInterface {
    todo: TodoInterface;
    todos: TodoInterface[];
    deleteAll: () => void;
    addTodo: (text: string) => void;
    toggleTodoComplete: (id: number) => void;
    removeTodo: (id: number) => void;
    dispatch: Dispatch<any>;
}