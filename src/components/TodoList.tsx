import React, { Dispatch } from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import {DELETE_ALL} from '../constants/ActionTypes'
import TodoInterface from "../interfaces/TodoInterface";
import styled from "styled-components";
import PropsInterface from "../interfaces/PropsInterface";
import {ActionType} from "../actions/ActionInterface";

const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  text-align: center;
  margin: 30px auto;
  padding: 0;
`;

const ClearButton = styled.button`
  width: 20%;
  margin: 0 auto;
  padding: 5px;
  border-radius: 5px;
  background: dimgrey;
  color: white;
  font-size: 16px;
  text-transform: capitalize;
  letter-spacing: 1px;
  display: inline-block;
  cursor: pointer;
`;


const TodoList = (props: Partial<PropsInterface>) => {
  return (
    <TaskList>
      {props.todos.map((todo: TodoInterface) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        );
      })}
      <ClearButton type="button" onClick={(event: React.MouseEvent) => props.deleteAll()}>
        delete all
      </ClearButton>
    </TaskList>
  );
};


const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
  deleteAll: () => dispatch({type: DELETE_ALL}),
  dispatch
});

export default connect(null, mapDispatchToProps)(TodoList);
