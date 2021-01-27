import styled, { css } from "styled-components";
import media from "../config/styles/mediaQueries";
import variables from "../config/styles/variables";

const { layout } = variables;

type RowPropsType = {
  center?: boolean;
  middleAlign?: boolean;
  bottomAlign?: boolean;
  withMargin?: boolean;
  rightAlign?: boolean;
  leftAlign?: boolean;
};

type ColumnPropsType = {
  middleAlign?: boolean;
  bottomAlign?: boolean;
  rightAlign?: boolean;
  centered?: boolean;
  columnCountDesktop: number;
  columnCountTablet: number;
  columnCountPhone: number;
};

export const Column = styled.div<ColumnPropsType>`
  display: flex;
  flex-direction: column;
  width: ${(props) => `calc(100% * ${props.columnCountPhone} / 4)`};

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    margin-bottom: 0;
    padding-right: 0;
  }

  ${(props) =>
    props.middleAlign &&
    css`
      flex-direction: row;
      align-items: center;
    `}
  ${(props) =>
    props.bottomAlign &&
    css`
      flex-direction: row;
      align-items: flex-end;
    `}
  ${(props) =>
    props.rightAlign &&
    css`
      flex-direction: row;
      justify-content: flex-end;
    `};
  ${(props) =>
    props.centered &&
    css`
      align-items: center;
      text-align: center;
    `}
  ${(props) =>
    props.centered &&
    props.middleAlign &&
    css`
      flex-direction: row;
      justify-content: center;
    `}
    
  ${media.tablet} {
    width: ${(props) => `calc(100% * ${props.columnCountTablet} / 6)`};
    margin-bottom: 0;
    display: flex;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
  }
  ${media.desktop} {
    width: ${(props) => `calc(100% * ${props.columnCountDesktop} / 12)`};
  } ;
`;

export const Row = styled.div<RowPropsType>`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;

  ${media.desktop} {
    max-width: ${layout.row.maxWidth};
  }

  ${(props) =>
    props.rightAlign &&
    css`
      justify-content: flex-end;
    `}
  ${(props) =>
    props.leftAlign &&
    css`
      justify-content: flex-start;
    `}
  ${(props) =>
    props.center &&
    css`
      justify-content: center;
    `};
  ${(props) =>
    props.middleAlign &&
    css`
      align-items: center;
    `};
  ${(props) =>
    props.bottomAlign &&
    css`
      align-items: flex-end;
    `};
  ${(props) =>
    props.withMargin &&
    css`
      margin-bottom: ${layout.row.marginBottom};

      ${media.print} {
        margin-bottom: 20px;
      }
    `}
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: ${layout.mainContainer.minHeight};
`;
