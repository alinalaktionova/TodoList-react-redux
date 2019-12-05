import React, {Dispatch} from "react";
import {TOGGLE_COMPLETE_TODO, REMOVE_TODO} from "../constants/ActionTypes";
import { connect } from "react-redux";
import styled from "styled-components";
import PropsInterface from "../interfaces/PropsInterface";
import {ActionType} from "../actions/ActionInterface";


const Task = styled.li`
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  position: relative;
  border: 1px solid #999
  border-radius: 3px
  display: block
  width: 100%
  box-sizing: border-box
  outline: none;
  font-size: 16px;
  margin-bottom: 20px;
`;

const DeleteBtn = styled.span`
  display: block;
  position: absolute;
  top: 12px;
  left: 10px;
  font-size: 20px;
  color: dimgrey;
  cursor: pointer;
`;


const TodoItem = (props: Partial<PropsInterface>) => {
  console.dir(props);
  return (
    <Task
      style={{
        textDecoration: props.todo.isCompleted ? "line-through" : "none"
      }}
      onClick={() => props.toggleTodoComplete(props.todo.id)}
    >
      <p>{props.todo.text}</p>
      <DeleteBtn>
        <i
          className="fas fa-trash-alt"
          onClick={() => props.removeTodo(props.todo.id)}
        />
      </DeleteBtn>
    </Task>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
  toggleTodoComplete: (id: number) => dispatch({type: TOGGLE_COMPLETE_TODO, id: id}),
  removeTodo: (id: number) => dispatch({type: REMOVE_TODO, id: id }),
  dispatch
});

export default connect(null, mapDispatchToProps)(TodoItem);
