import React from "react";
import { mount } from "enzyme";
import { Marker } from "react-leaflet";
import { CityContext, ICityContext } from "../../../contexts/CityContext";
import { ICity } from "../../../types";
import Map from "../index";
import Popup from "../Popup";

interface IProviderPropsType {
  children: React.ReactElement;
  value: ICityContext;
}

describe("Map", () => {
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
    },
    {
      city: "Huntington Park",
      growth_from_2000_to_2013: "-4.1%",
      latitude: 33.9816812,
      longitude: -118.2250725,
      population: "58879",
      rank: "612",
      state: "California"
    }
  ];
  const Provider = ({ children, value }: IProviderPropsType) => (
    <CityContext.Provider value={value}>{children}</CityContext.Provider>
  );

  it("should move to the first city's position and load markers", () => {
    const myComponent = mount(<Map />, {
      wrappingComponent: Provider,
      wrappingComponentProps: {
        value: { cities, selectedCity: null, setSelectedCity: onCityClick }
      }
    });

    expect(myComponent.find(Marker).length).toBe(1);
  });

  it("should move to the selected city's position and load markers", () => {
    const myComponent = mount(<Map />, {
      wrappingComponent: Provider,
      wrappingComponentProps: {
        value: { cities, selectedCity: cities[1], setSelectedCity: onCityClick }
      }
    });

    // City name popup should be loaded
    expect(myComponent.find(Popup).length).toBeTruthy();

    // Should load 2 markers because 'Huntington Park' is close to LA
    expect(myComponent.find(Marker).length).toBe(2);
  });
});
