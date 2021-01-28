import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Item from "../Item";

describe("City", () => {
  describe("Snaphosts", () => {
    function getTreeComponent(props = {}) {
      return renderer
        .create(
          <Item
            city={{
              city: "New York",
              growth_from_2000_to_2013: "4.8%",
              latitude: 40.7127837,
              longitude: -74.0059413,
              population: "8405837",
              rank: "1",
              state: "New York"
            }}
            {...props}
          />
        )
        .toJSON();
    }
    it("renders", () => {
      expect(getTreeComponent()).toMatchSnapshot();
    });
  });
});
