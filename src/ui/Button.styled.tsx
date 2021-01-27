import styled from "styled-components";
import variables from "../config/styles/variables";

const { button } = variables;
const Button = styled.button`
  margin: 0;
  padding: 10px 20px;
  border: 0;
  text-transform: capitalize;
  background-color: ${button.backgroundColor};
  color: ${button.color};
  border-radius: 4px;
  font-size: 0.9rem;
  letter-spacing: -0.24px;
  text-align: center;
  line-height: 1;
  width: 100%;
  font-family: inherit;
  font-weight: 700;
`;

export default Button;
