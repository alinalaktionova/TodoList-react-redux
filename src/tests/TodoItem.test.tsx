import React from "react";
import TodoItem from "../components/TodoItem";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import App from "../components/App";
import ReactTestUtils from "react-dom/test-utils";
import configureStore, { MockStore } from "redux-mock-store";
import renderer from "react-test-renderer";
import StateInterface from "../interfaces/StateInterface";
import {
  addTodo,
  removeTodo,
  toggleTodoComplete
} from "../actions/actionCreators";
import TodoInterface from "../interfaces/TodoInterface";


const mockStore = configureStore([]);

describe("My Connected React-Redux Component", () => {
  let store: MockStore;
  let component: any;
  let todo: TodoInterface;
  beforeEach(() => {
    store = mockStore({ todos: [], todo: {} });
    store.dispatch = jest.fn();
    todo = { ...store.getState().todo};
    component = renderer.create(
      <Provider store={store}>
        <TodoItem todo={todo}/>
      </Provider>
    );
  });
  it("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should toggle complete on button click", () => {
    renderer.act(() => {
      component.root.findByType("li").props.onClick();
    });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(toggleTodoComplete(todo.id));
  });
  it("should remove task on button click", () => {
    renderer.act(() => {
      component.root.findByType("i").props.onClick();
    });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(removeTodo(todo.id));
  });
});
