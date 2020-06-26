import React from "react";
import { render } from "@testing-library/react";

import Detail from "../../components/Detail/Detail";

const mockProduct = {
  name: "VESTIDO TRANSPASSE BOW",
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

describe("Component Detail", () => {
  it("Should render the specific product", () => {
    const { getByTestId } = render(<Detail product={mockProduct} />);
    const container = getByTestId("detail-test");

    expect(container).toHaveClass("detail");
    expect(container.children.length).toBe(2);

  });
});
