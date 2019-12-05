import {
  ADD_TODO,
  DELETE_ALL,
  REMOVE_TODO,
  TOGGLE_COMPLETE_TODO
} from "../constants/ActionTypes";
import StateInterface from "../interfaces/StateInterface";
import { ActionType } from "../actions/ActionInterface";

export const initialState: StateInterface = {
  todos: []
};
const todos = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ADD_TODO:
      if (action.text.length !== 0) {
        return Object.assign({}, state, {
          todos: [
            ...state.todos,
            {
              id: action.id,
              text: action.text,
              isCompleted: false
            }
          ]
        });
      }
    case TOGGLE_COMPLETE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return Object.assign({}, todo, {
              isCompleted: !todo.isCompleted
            });
          }
          return todo;
        })
      });
    case REMOVE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo.id !== action.id)
      });

    case DELETE_ALL:
      return Object.assign({}, state, {
        todos: []
      });
    default:
      return state;
  }
};

export default todos;
