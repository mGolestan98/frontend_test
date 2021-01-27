import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useCityContext } from "../../contexts/CityContext";
import useDebounce from "../../hooks/useDebounce";
import { ICity } from "../../types";
import Button from "../../ui/Button.styled";
import Input from "../../ui/Input.styled";
import { Row } from "../../ui/Layout.styled";
import Paragraph from "../../ui/Paragraph.styled";
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
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  list-style: none;
`;

const CitiesList = () => {
  const { cities } = useCityContext();
  const [citiesListItems, setCitiesListItems] = useState<Array<ICity>>([]);
  const [search, setSearch] = useState("");
  const [noMoreResults, setNoMoreResults] = useState(false);

  const debouncedSearchValue = useDebounce(search, 1000);
  useEffect(() => {
    setCitiesListItems([]);
    setNoMoreResults(false);
  }, [debouncedSearchValue]);

  const loadNextCities = useCallback(
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

      setNoMoreResults(
        !newCities.length || !filteredCities[newCities.length + 1]
      );
    },
    [cities, citiesListItems, setCitiesListItems, search]
  );

  useEffect(() => {
    if (!citiesListItems.length && !noMoreResults) {
      loadNextCities();
    }
  }, [citiesListItems, loadNextCities, noMoreResults]);

  return (
    <>
      <ListWrapper>
        <Input
          placeholder="Search city by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Row withMargin>
          <StyledUl>
            {citiesListItems.map((city) => (
              <Item key={city.rank} city={city} />
            ))}
          </StyledUl>
        </Row>

        {!citiesListItems.length && search ? (
          <Row center withMargin>
            <Paragraph>No results based on your search</Paragraph>
          </Row>
        ) : null}

        {!noMoreResults ? (
          <Button onClick={() => loadNextCities(citiesListItems.length)}>
            Load more
          </Button>
        ) : null}
      </ListWrapper>
    </>
  );
};

export default CitiesList;
