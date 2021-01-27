import React from "react";
import styled from "styled-components";
import colors from "../../config/styles/colors";
import { ICity } from "../../types";
import { Row } from "../../ui/Layout.styled";
import Heading from "../../ui/Heading.styled";
import Paragraph from "../../ui/Paragraph.styled";
import { ArrowUp, ArrowDown } from "../../ui/Arrow.styled";

type StyledItemPropsType = {
  active?: boolean;
};
const StyledItem = styled.li<StyledItemPropsType>`
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? colors.greyBorder : colors.white};
  padding: 0.4em;

  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  transition: background 0.3s ease;
  :hover {
    background-color: ${colors.greyBorder};
  }
`;

const GrowthWrapper = styled.div`
  display: flex;
  align-items: center;
`;

type PropsType = { city: ICity };

const Item = ({ city }: PropsType) => (
  <StyledItem>
    <Row withMargin middleAlign>
      <Heading component={"h4"}>{city.city}</Heading>
      <Paragraph small>Rank: {city.rank}</Paragraph>
    </Row>
    <Row>
      <Paragraph>
        Population: {city.population.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </Paragraph>

      <GrowthWrapper>
        <Paragraph>Growth: {city.growth_from_2000_to_2013}</Paragraph>
        {parseFloat(city.growth_from_2000_to_2013) > 0 ? (
          <ArrowUp />
        ) : (
          <ArrowDown />
        )}
      </GrowthWrapper>
    </Row>
  </StyledItem>
);

export default Item;
