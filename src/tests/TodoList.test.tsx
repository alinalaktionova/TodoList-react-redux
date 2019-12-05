import React from "react";
import TodoList from "../components/TodoList";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import ReactTestUtils from "react-dom/test-utils";
import configureStore, { MockStore } from "redux-mock-store";
import TodoItem from "../components/TodoItem";
import {
  addTodo,
  deleteAll,
  removeTodo,
  toggleTodoComplete
} from "../actions/actionCreators";
import TodoInput from "../components/TodoInput";
import TodoInterface from "../interfaces/TodoInterface";

const mockStore = configureStore([]);

describe("My Connected React-Redux Component", () => {
  let store: MockStore;
  let component: any;
  let todos: TodoInterface[];
  beforeEach(() => {
    store = mockStore({ todos: [] });
    store.dispatch = jest.fn();
    todos = [{...store.getState()}];
    component = renderer.create(
      <Provider store={store}>
        <TodoList todos={todos}/>
      </Provider>
    );
  });
  it("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should dispatch an action on button click", () => {
    renderer.act(() => {
      component.root.findByType("button");
    });
    ReactTestUtils.Simulate.click(component, store.dispatch(deleteAll()));
    expect(component.toJSON()).toMatchSnapshot();
  });
});
