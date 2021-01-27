import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import useCities from "../swr/useCities";
import { ICity } from "../types";

interface ICityProviderType {
  children: React.ReactElement;
}

export interface ICityContext {
  cities: Array<ICity>;
  selectedCity: ICity | null;
  setSelectedCity: Dispatch<SetStateAction<ICity | null>>;
}

const initialContext: ICityContext = {
  cities: [],
  selectedCity: null,
  setSelectedCity: () => {}
};

export const CityContext = React.createContext(initialContext);

export const useCityContext = () => React.useContext(CityContext);

export const CityProvider = ({ children }: ICityProviderType) => {
  const { data: fetchedCities } = useCities();

  const [cities, setCities] = useState(initialContext.cities);
  const [selectedCity, setSelectedCity] = useState(initialContext.selectedCity);

  useEffect(() => {
    if (fetchedCities) setCities(fetchedCities);
  }, [fetchedCities]);

  const CityContextValue: ICityContext = {
    cities,
    selectedCity,
    setSelectedCity
  };

  return (
    <CityContext.Provider value={CityContextValue}>
      {children}
    </CityContext.Provider>
  );
};
