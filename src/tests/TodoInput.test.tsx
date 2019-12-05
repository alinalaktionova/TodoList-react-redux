import React from "react";
import { Provider } from "react-redux";
import TodoInput from "../components/TodoInput";
import ReactTestUtils from "react-dom/test-utils";
import configureStore, { MockStore } from "redux-mock-store";
import renderer from "react-test-renderer";
import { addTodo } from "../actions/actionCreators";

const mockStore = configureStore([]);

describe("My Connected React-Redux Component", () => {
  let store: MockStore;
  let component: any;
  beforeEach(() => {
    store = mockStore({ todos: [] });
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <TodoInput />
      </Provider>
    );
  });
  it("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
  it("should dispatch an action on button click", () => {
    renderer.act(() => {
      component.root.findByType("button").props.onClick();
    });

    renderer.act(() => {
      component.root.findByType("input");
      ReactTestUtils.Simulate.change(component);
    });
    ReactTestUtils.Simulate.click(
      component,
      store.dispatch(addTodo(component))
    );
  });
});
