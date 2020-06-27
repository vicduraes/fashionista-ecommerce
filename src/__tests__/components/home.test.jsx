import React from "react";
import { render, within } from "@testing-library/react";
import * as REACT_REDUX from "react-redux";

import Navbar from "../../components/Navbar/Navbar";
import ItensCount from "../../components/ItensCount/ItensCount";
import Card from "../../components/Card/Card";
import ProductImg from "../../components/ProductImg/ProductImg";
import Error from "../../components/Error/Error";

import * as mockCatalog from "../products.json";

const mockProduct1 = {
  name: "REGATA ALCINHA FOLK",
  style: "20002570",
  on_sale: true,
  regular_price: "R$ 139,90",
  actual_price: "R$ 119,90",
  discount_percentage: "12%",
  installments: "3x R$ 33,30",
  image:
    "https://viniciusvinna.netlify.app/assets/api-fashionista/20002570_002_catalog_1.jpg",
};

const mockProduct2 = {
  name: "TOP CROPPED SUEDE",
  style: "20002575",
  on_sale: false,
  regular_price: "R$ 129,90",
  actual_price: "R$ 129,90",
  discount_percentage: "",
  installments: "3x R$ 43,30",
  image: "",
};

REACT_REDUX.useDispatch = () => jest.fn();

describe("Navbar component", () => {
  it("Should render navbar", async () => {
    REACT_REDUX.useSelector = jest.fn().mockReturnValueOnce(mockCatalog);
    const { getByTestId } = render(
      <>
        <div id="modal-root" />
        <Navbar />
      </>
    );
    const container = getByTestId("navbar");
    expect(container).toHaveClass("navbar");
  });
});

describe("ItensCount component", () => {
  it("Should render itens count", () => {
    const { getByTestId } = render(
      <ItensCount totalCount={mockCatalog.length} />
    );
    const container = getByTestId("itens-count");
    expect(container).toHaveClass("itens-count");
    expect(container.children.length).toBe(3);
  });
});

describe("Card component", () => {
  it("Should render card", () => {
    const { getByTestId } = render(
      <Card key={mockProduct1.style} product={mockProduct1} />
    );
    const container = getByTestId("card");
    expect(container).toHaveClass("card");
  });

  it("Should render discount percentage", () => {
    const { queryByTestId } = render(
      <Card key={mockProduct1.style} product={mockProduct1} />
    );
    const container = queryByTestId("card-discount");
    expect(container).toHaveClass("card__discount");
    expect(container).toHaveTextContent(
      `- ${mockProduct1.discount_percentage}`
    );
  });

  it("Should not render discount percentage when value is null", () => {
    const { queryByTestId } = render(
      <Card key={mockProduct2.style} product={mockProduct2} />
    );
    const container = queryByTestId("card-discount");
    expect(container).toBeNull();
  });

  it("Should render old price without discount", () => {
    const { getByTestId } = render(
      <Card key={mockProduct1.style} product={mockProduct1} />
    );
    const container = getByTestId("old-price");
    expect(container).toHaveClass("card__price-old");
  });

  it("Should not render old price when doesn't have discount", () => {
    const { queryByTestId } = render(
      <Card key={mockProduct2.style} product={mockProduct2} />
    );
    const container = queryByTestId("old-price");
    expect(container).toBeNull();
  });

  it("Should render default image when product doesn't have own image", () => {
    const { getByTestId } = render(
      <ProductImg src={mockProduct2.image} imgDesciption={mockProduct2.name} />
    );
    const container = getByTestId("product-img");
    expect(container).toHaveAttribute("src", "img-default.jpg");
  });
});

describe("Error component", () => {
  it("Should render error component when API not response", () => {
    const { getByTestId } = render(<Error />);
    const container = getByTestId("error-message");
    expect(container).toHaveClass("error-block");
  });
});
