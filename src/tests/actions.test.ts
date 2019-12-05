import * as actions from "../actions/actionCreators";
import * as types from "../constants/ActionTypes";
const shortid = require("shortid");
import { id } from "../actions/actionCreators";

let idEnc = id;
describe("actions", () => {
  it("should create an action to add a todo", () => {
    let expectedAction: { id: number; text: string; type: string };
    const text = "Finish docs";
    expectedAction = {
      type: types.ADD_TODO,
      id: idEnc++,
      text
    };
    expect(actions.addTodo(text)).toEqual(expectedAction);
  });
  it("should create an action to toggle complete tasks", () => {
    const id = 56;
    const expectedAction = {
      type: types.TOGGLE_COMPLETE_TODO,
      id: 56
    };
    expect(actions.toggleTodoComplete(id)).toEqual(expectedAction);
  });

  it("removeTodo should remove todo from todos by id", () => {
    const id = 56;
    const expectedAction = {
      type: types.REMOVE_TODO,
      id: 56
    };
    expect(actions.removeTodo(id)).toEqual(expectedAction);
  });
  it("deleteAll should clear the list", () => {
    const expectedAction = {
      type: types.DELETE_ALL
    };
    expect(actions.deleteAll()).toEqual(expectedAction);
  });
});
