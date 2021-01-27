import colors from "./colors";
import spacing from "./spacing";

const borderRadius = "8px";

const variables = {
  layout: {
    column: {
      border: `1px solid ${colors.greyBorder}`,
      borderRadius,
      containerPadding: `${spacing.large}`,
      marginBottomPhone: spacing.mediumLarge,
      marginLeft: `calc(${spacing.gutter} / 2)`,
      marginRight: `calc(${spacing.gutter} / 2)`,
      containerTop: {
        borderRadius: `${borderRadius} ${borderRadius} 0 0`
      },
      containerMiddle: {
        borderRadius: 0,
        borderTop: 0,
        borderBottom: 0
      },
      containerBottom: {
        borderRadius: `0 0 ${borderRadius} ${borderRadius}`
      }
    },
    mainContainer: {
      minHeight: "calc(100vh - 100px)"
    },
    row: {
      marginTop: spacing.mediumLarge,
      marginBottom: spacing.mediumLarge,
      maxWidth: "1200px",
      borderTop: `1px solid ${colors.greyBorder}`,
      borderBottom: `1px solid ${colors.greyBorder}`
    },
    section: {
      margin: {
        default: `${spacing.mediumLarge} 0`,
        tablet: `${spacing.extraLarge} 0`
      }
    }
  }
};

export default variables;
