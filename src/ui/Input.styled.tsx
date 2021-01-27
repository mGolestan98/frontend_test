import styled from "styled-components";
import variables from "../config/styles/variables";

const { formElements } = variables;

const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid transparent;
  font-family: "Messina Sans Web Book", sans-serif;
  font-variant-numeric: tabular-nums;
  font-weight: 100;
  border-bottom-color: ${formElements.inputStyles.default.borderBottomColor};
  padding: ${formElements.inputStyles.padding};
  font-size: 18px;
  letter-spacing: 0;
  background: ${formElements.inputStyles.default.backgroundColor};

  &:focus {
    outline: none;
    background: ${formElements.inputStyles.focus.backgroundColor};
    border-bottom-color: ${formElements.inputStyles.focus.borderBottomColor};
  }

  &:disabled {
    background: ${formElements.inputStyles.disabled.background};
    border: 0;
    cursor: not-allowed;
  }
`;

export default Input;
