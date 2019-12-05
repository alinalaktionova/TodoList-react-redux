import React, {Dispatch} from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import {connect} from "react-redux";
import styled from "styled-components";
import PropsInterface from "../interfaces/PropsInterface";
import StateInterface from "../interfaces/StateInterface";
import TodoInterface from "../interfaces/TodoInterface";

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
`;

const Header = styled.h1`
  text-transform: capitalize;
  text-align: center;
  text-shadow: 2px 1px 3px black;
  color: dimgrey;
  font-size: 50px;
`;


export const App = (props: Partial<PropsInterface>) => {
  console.dir(props);
  return (
    <Container>
      <Header>ToDo list</Header>
      <TodoInput/>
      <TodoList
        todos={props.todos}
      />
    </Container>
  );
};

const mapStateToProps = (state: StateInterface) => ({
    todos: state.todos
});

export default connect(mapStateToProps)(App);
