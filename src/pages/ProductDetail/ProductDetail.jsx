import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ChooseSize from "../../components/ChooseSize/ChooseSize";
import AddPack from "../../components/AddPack/AddPack";
import ProductName from "../../components/ProductName/ProductName";
import ProductPrice from "../../components/ProductPrice/ProductPrice";
import ProductInstallment from "../../components/ProductInstallment/ProductInstallment";

const ProductDetail = () => {
  return (
    <>
      <Navbar />
      <ProductName text="Vestido Transpasse Bow" />
      <ProductPrice price="199,90" size="large" />
      <ProductInstallment quantity="3" value="68,90" />
      <ChooseSize />
      <AddPack />
    </>
  );
};

export default ProductDetail;
