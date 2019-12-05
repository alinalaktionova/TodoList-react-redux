import React, {ReactChild, ReactChildren, ReactComponentElement} from "react";
import App from "../components/App";
import { Provider } from "react-redux";
import configureStore, { MockStore } from "redux-mock-store";
import renderer from "react-test-renderer";

const mockStore = configureStore([]);

describe("My Connected React-Redux Component", () => {
  let store: MockStore;
  let component: any;
  beforeEach(() => {
    store = mockStore({ todos: [] });
    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
