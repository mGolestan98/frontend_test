import React from "react";
import { mount } from "enzyme";
import { CityContext, ICityContext } from "../../../contexts/CityContext";
import { ICity } from "../../../types";
import CitiesList from "../List";
import Item from "../Item";

interface IProviderPropsType {
  children: React.ReactElement;
  value: ICityContext;
}

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
  const Provider = ({ children, value }: IProviderPropsType) => (
    <CityContext.Provider value={value}>{children}</CityContext.Provider>
  );

  describe("Actions", () => {
    it("selects a city from the list", () => {
      const myComponent = mount(<CitiesList />, {
        wrappingComponent: Provider,
        wrappingComponentProps: {
          value: { cities, selectedCity: null, setSelectedCity: onCityClick }
        }
      });

      myComponent.find(Item).at(1).simulate("click");
      expect(onCityClick).toHaveBeenCalledTimes(1);

      const provider = myComponent.getWrappingComponent();
      provider.setProps({
        value: { cities, selectedCity: cities[1], setSelectedCity: onCityClick }
      });

      expect(myComponent.find(Item).at(0).childAt(0).prop("active")).toBe(
        false
      );
      expect(myComponent.find(Item).at(1).childAt(0).prop("active")).toBe(true);
    });
  });
});
