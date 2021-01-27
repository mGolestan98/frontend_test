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
  border?: boolean;
  noBorderTop?: boolean;
  noBorderBottom?: boolean;
  borderRadiusTop?: boolean;
  borderRadiusBottom?: boolean;
  verticalPadding?: boolean;
  noMarginBottom?: boolean;
  hideInPhone?: boolean;
};

type SectionPropsType = {
  withMargin?: boolean;
};

export const Section = styled.section<SectionPropsType>`
  width: 100%;
  max-height: 700px;
  overflow: auto;
`;

export const Column = styled.div<ColumnPropsType>`
  display: ${(props) => (props.hideInPhone ? "none" : "flex")};
  flex-direction: column;
  width: ${(props) => `calc(100% * ${props.columnCountPhone} / 4)`};
  margin-bottom: ${(props) => (props.noMarginBottom ? "0" : "40px")};

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

    ${(props) =>
      props.border &&
      css`
        border: ${layout.column.border};
      `}
    ${(props) =>
      props.noBorderTop &&
      props.border &&
      css`
        border-top: 0;
      `}
    ${(props) =>
      props.noBorderBottom &&
      props.border &&
      css`
        border-bottom: 0;
      `}
    ${(props) =>
      props.borderRadiusTop &&
      css`
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      `}
    ${(props) =>
      props.borderRadiusBottom &&
      css`
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      `}
    ${(props) =>
      props.verticalPadding &&
      css`
        padding: ${layout.column.containerPadding};

        &:first-child {
          padding-left: ${layout.column.containerPadding};
        }

        &:last-child {
          padding-right: ${layout.column.containerPadding};
        }
      `}
  }
  ${media.desktop} {
    width: ${(props) => `calc(100% * ${props.columnCountDesktop} / 12)`};

    ${(props) =>
      props.verticalPadding &&
      css`
        padding: ${layout.column.containerPadding};
      `}
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
