import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useCityContext } from "../../contexts/CityContext";
import useDebounce from "../../hooks/useDebounce";
import { ICity } from "../../types";
import Button from "../../ui/Button.styled";
import Input from "../../ui/Input.styled";
import Item from "./Item";

const ListWrapper = styled.div`
  max-height: 555px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  overflow-y: scroll;
  list-style: none;
`;

const StyledUl = styled.div`
  margin: 0;
  padding: 0;
  overflow: hidden;
  overflow-y: scroll;
  list-style: none;
`;

const CitiesList = () => {
  const { cities } = useCityContext();
  const [citiesListItems, setCitiesListItems] = useState<Array<ICity>>([]);
  const [search, setSearch] = useState("");

  const debouncedSearchValue = useDebounce(search, 1000);
  useEffect(() => {
    setCitiesListItems([]);
  }, [debouncedSearchValue]);

  const loadNextCities = React.useCallback(
    (start = 0, limit = 50) => {
      if (!cities[start]) return;

      const filteredCities = search.length
        ? cities.filter((c) =>
            c.city.toLowerCase().includes(search.toLowerCase())
          )
        : cities;

      const newCities: Array<ICity> = [...citiesListItems];

      for (let i = start; i < start + limit; i++) {
        if (filteredCities[i]) {
          newCities.push(filteredCities[i]);
        }
      }

      setCitiesListItems(newCities);
    },
    [cities, citiesListItems, setCitiesListItems]
  );

  useEffect(() => {
    if (!citiesListItems.length) {
      loadNextCities();
    }
  }, [citiesListItems, loadNextCities]);

  return (
    <>
      <ListWrapper>
        <Input
          placeholder="Search city by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <StyledUl>
          {citiesListItems.map((city) => (
            <Item city={city} />
          ))}
        </StyledUl>

        <Button onClick={() => loadNextCities(citiesListItems.length)}>
          Load more
        </Button>
      </ListWrapper>
    </>
  );
};

export default CitiesList;
