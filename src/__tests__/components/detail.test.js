import React from "react";
import { render } from "@testing-library/react";
import * as REACT_REDUX from "react-redux";

import Detail from "../../components/Detail/Detail";

const mockProduct = {
  name: "Regata",
  regular_price: "R$ 199,90",
  actual_price: "R$ 199,90",
  discount_percentage: "",
  installments: "3x R$ 66,63",
  image:
    "https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg",
  sizes: [
    { available: false, size: "PP", sku: "5807_343_0_PP" },
    { available: true, size: "P", sku: "5807_343_0_P" },
    { available: true, size: "M", sku: "5807_343_0_M" },
    { available: true, size: "G", sku: "5807_343_0_G" },
    { available: false, size: "GG", sku: "5807_343_0_GG" },
  ],
};

REACT_REDUX.useDispatch = () => jest.fn();

describe("Component Detail", () => {
  it("Should render the specific product", () => {
    REACT_REDUX.useSelector = jest.fn();
    const { getByTestId } = render(<Detail product={mockProduct} />);
    const container = getByTestId("detail-test");
    const firstChildren = container.children;
    const detailInfo = firstChildren[1];
    const detailBox = detailInfo.children[0];
    const productTitle = detailBox.children[0];
    const productTitlex = detailBox.children[1];

    expect(container.children.length).toBe(2);
    expect(container).toHaveClass("detail");    
    expect(detailInfo).toHaveClass("detail__info");    
    expect(productTitle).toHaveTextContent("Regata");
    expect(productTitlex).toHaveTextContent("R$ 199,90");
   

  });
  
});
