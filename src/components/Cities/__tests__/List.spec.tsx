import React from "react";
import Item from "../Item";
import CitiesList from "../List";
import { mount } from "enzyme";
import { ICity } from "../../../types";
import { CityContext } from "../../../contexts/CityContext";

describe("CitiesList", () => {
  const onCityClick = jest.fn();
  const cities: Array<ICity> = [
    {
      city: "New York",
      growth_from_2000_to_2013: "4.8%",
      latitude: 40.7127837,
      longitude: -74.0059413,
      population: "8405837",
      rank: "1",
      state: "New York"
    },
    {
      city: "Los Angeles",
      growth_from_2000_to_2013: "4.8%",
      latitude: 34.0522342,
      longitude: -118.2436849,
      population: "3884307",
      rank: "2",
      state: "California"
    }
  ];

  describe("Actions", () => {
    it("selects a city from the list", () => {
      const myComponent = mount(
        <CityContext.Provider
          value={{ cities, selectedCity: null, setSelectedCity: onCityClick }}
        >
          <CitiesList />
        </CityContext.Provider>
      );

      myComponent.find(Item).at(0).simulate("click");
      expect(onCityClick).toHaveBeenCalledTimes(1);
    });
  });
});
