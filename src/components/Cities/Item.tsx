import React from "react";
import styled from "styled-components";
import { ICity } from "../../types";

const StyledItem = styled.li``;

type PropsType = { city: ICity };

const Item = ({ city }: PropsType) => <StyledItem>{city.city}</StyledItem>;

export default Item;
