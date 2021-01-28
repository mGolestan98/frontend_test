import styled, { css } from "styled-components";
import media from "../config/styles/mediaQueries";

type HideInProps = {
  phone?: boolean;
  tablet?: boolean;
  desktop?: boolean;
};

export const HideIn = styled.div<HideInProps>`
  ${(props) =>
    props.phone &&
    css`
      display: none;

      ${media.tablet} {
        display: block;
      }
    `}
  ${(props) =>
    props.tablet &&
    css`
      display: block;

      ${media.tablet} {
        display: none;
      }
    `}
  ${(props) =>
    props.phone &&
    props.tablet &&
    css`
      display: none;

      ${media.desktop} {
        display: block;
      }
    `}

  ${(props) =>
    props.desktop &&
    css`
      display: block;

      ${media.desktop} {
        display: none;
      }
    `}
`;
