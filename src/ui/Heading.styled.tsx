import styled, { css } from "styled-components";

export type StyledPropsType = {
  xLarge?: boolean;
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  meta?: boolean;
  alignCenter?: boolean;
  component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  secondary?: boolean;
};

const headingStyles = {
  xLarge: css`
    font-size: 2.5rem;
    letter-spacing: -1px;
    line-height: 2.75rem;

    @media screen and (min-width: 768px) {
      font-size: 3rem;
      letter-spacing: -1.75px;
      line-height: 3rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 3.75rem;
      letter-spacing: -2.5px;
      line-height: 3.75rem;
      opacity: 0.9;
    }
  `,
  large: css`
    font-size: 2rem;
    letter-spacing: -1px;
    line-height: 2.5rem;

    @media screen and (min-width: 768px) {
      font-size: 2.25rem;
      letter-spacing: -1.35px;
      line-height: 2.75rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 2.5rem;
      letter-spacing: -1.5px;
      line-height: 2.75rem;
    }
  `,
  medium: css`
    font-size: 1.5rem;
    letter-spacing: -1px;
    line-height: 2rem;
  `,
  small: css`
    font-size: 1rem;
    letter-spacing: -0.2px;
    line-height: 1.375rem;
  `,
  meta: css`
    font-size: 0.75rem;
    letter-spacing: 0.5px;
    line-height: 1.25rem;
    text-transform: uppercase;
  `
};

const Heading = styled.h2<StyledPropsType>`
  font-family: inherit;
  margin: 0;
  padding: 0;
  text-align: ${(props) => (props.alignCenter ? "center" : "inherit")};
  ${(props) => {
    if (props.component === "h1") {
      return headingStyles.xLarge;
    }
    if (props.component === "h2") {
      return headingStyles.large;
    }
    if (props.component === "h3") {
      return headingStyles.medium;
    }
    if (props.component === "h4") {
      return headingStyles.small;
    }
    if (props.component === "h5" || props.component === "h6") {
      return headingStyles.meta;
    }
  }};
`;

export default Heading;
