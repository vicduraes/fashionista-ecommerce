import React from "react";
import { render } from "@testing-library/react";

import * as REACT_REDUX from "react-redux";

import SearchBar from "../../components/SearchBar/SearchBar";

import Products from "../products.json";

REACT_REDUX.useDispatch = () => jest.fn();

const mockCatalog = {
  catalog: Products,
  loading: false,
  error: null,
};

describe("Component Search", () => {
  it("Should render the search modal", async () => {
    REACT_REDUX.useSelector = jest.fn().mockReturnValue(mockCatalog);

    const { getByTestId } = render(<SearchBar />);

    const searchContainer = getByTestId("search");
    const input = searchContainer.children[0].children[0];
    expect(searchContainer).toHaveClass("search");
    expect(input).toHaveClass("search__input");
  });
});
