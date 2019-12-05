import React, {Dispatch} from "react";
import { connect } from "react-redux";
import {id} from "../actions/actionCreators";
import styled from "styled-components";
import {ActionType} from "../actions/ActionInterface";
import {ADD_TODO} from "../constants/ActionTypes";
import PropsInterface from "../interfaces/PropsInterface";

const TodoInputForm = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  flex-direction: row;
`;

const InputField = styled.input`
  width: 85%;
  border-radius: 7px;
  overflow: auto;
  background-color: white;
  box-shadow: 0px 0.25rem 1rem rgba(black, 0.25);
`;

const StyledButton = styled.button`
  width: 15%;
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


let idEnc = id;

const TodoInput = (props: Partial<PropsInterface>) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  let [input, setInputState] = React.useState("");
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputState(event.target.value);
  }

  return (
    <TodoInputForm>
      <InputField
        type="text"
        placeholder="add a todo item"
        onChange={event => handleInputChange(event)}
        ref={inputRef}
      />
      <StyledButton
        type="button"
        onClick={(event: React.MouseEvent) => {
          props.addTodo(input);
          if (inputRef && inputRef.current) {
            inputRef.current.value = "";
          }
        }}
      >
        + Add
      </StyledButton>
    </TodoInputForm>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
   addTodo: (text: string) => dispatch({type: ADD_TODO, id: idEnc++, text}),
    dispatch
});
export default connect(null, mapDispatchToProps)(TodoInput);
