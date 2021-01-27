import styled, { css } from "styled-components";

type ParagraphPropsType = {
  small?: boolean;
};

const Paragraph = styled.p<ParagraphPropsType>`
  font-family: inherit;
  font-size: 0.9rem;
  margin: 0;
  padding: 0;

  ${(props) =>
    props.small &&
    css`
      font-size: 0.8rem;
    `}
`;

export default Paragraph;
