import { enableFetchMocks } from "jest-fetch-mock";

const catalog = [
  {
    name: "VESTIDO TRANSPASSE BOW",
    style: "20002605",
    on_sale: false,
    regular_price: "R$ 199,90",
    actual_price: "R$ 199,90",
    discount_percentage: "",
    installments: "3x R$ 66,63",
    image:
      "https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg",
  },
  {
    name: "REGATA ALCINHA FOLK",
    style: "20002570",
    on_sale: true,
    regular_price: "R$ 139,90",
    actual_price: "R$ 119,90",
    discount_percentage: "12%",
    installments: "3x R$ 33,30",
    image:
      "https://viniciusvinna.netlify.app/assets/api-fashionista/20002570_002_catalog_1.jpg",
  },
  {
    name: "TOP CROPPED SUEDE",
    style: "20002575",
    on_sale: false,
    regular_price: "R$ 129,90",
    actual_price: "R$ 129,90",
    discount_percentage: "",
    installments: "3x R$ 43,30",
    image: "",
  },
];
