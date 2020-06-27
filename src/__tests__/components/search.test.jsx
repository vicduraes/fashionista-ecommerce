import React from "react";
import { render } from "@testing-library/react";

import * as REACT_REDUX from "react-redux";

import SearchBar from "../../components/SearchBar/SearchBar";
import * as Products from "../products.json";

REACT_REDUX.useDispatch = () => jest.fn();

const catalog = {
  catalog: Products,
  loading: false,
  error: null,
};

describe("Component Search", () => {
  it("Should render the search modal", async () => {
    REACT_REDUX.useSelector = jest.fn().mockReturnValueOnce({ ...catalog });

    const { getByTestId } = render(<SearchBar />);

    const searchContainer = getByTestId("search");
    expect(searchContainer).toHaveClass("search");

    const input = searchContainer.children[0].children[0];
  });
});
