import reducer from "../reducers/todos";
import * as types from "../constants/ActionTypes";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(reducer({ todos: [] }, {})).toEqual({ todos: [] });
  });

  it("should handle ADD_TODO", () => {
    expect(
      reducer(
        { todos: [] },
        {
          type: types.ADD_TODO,
          text: "Run the tests",
          id: 1
        }
      )
    ).toEqual({
      todos: [
        {
          id: 1,
          text: "Run the tests",
          isCompleted: false
        }
      ]
    });
  });
  it("should handle TOGGLE_COMPLETE", () => {
    expect(
      reducer(
        {
          todos: [
            {
              id: 1,
              text: "Run the tests",
              isCompleted: false
            }
          ]
        },
        {
          type: types.TOGGLE_COMPLETE_TODO,
          id: 1
        }
      )
    ).toEqual({
      todos: [
        {
          id: 1,
          text: "Run the tests",
          isCompleted: true
        }
      ]
    });
  });

  it("should handle REMOVE_TODO", () => {
    expect(
      reducer(
        { todos: [{ id: 1, text: "Learn react", isCompleted: false }] },
        {
          type: types.REMOVE_TODO,
          id: 1
        }
      )
    ).toEqual({ todos: [] });
  });
  it("should handle DELETE_ALL", () => {
    expect(
      reducer(
        { todos: [] },
        {
          type: types.DELETE_ALL
        }
      )
    ).toEqual({ todos: [] });
  });
});
