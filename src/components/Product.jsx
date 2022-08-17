import React, { useState, useEffect } from "react";
import { getProduct } from "../api/products";
import { useLocation } from "react-router-dom";

export default function Product() {
  const [product, setProduct] = useState([]);
  //   const [productToDisplay, setProductToDisplay] = useState([]);
  const path = window.location.pathname;
  const id = path.slice(10);
  console.log("path id: ", id);

  useEffect(() => {
    const getOneProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    getOneProduct(id);
  }, []);

  return (
    <div>
      <h2>{product.name}</h2>
      {/* <h2>{window.location.pathname}</h2> */}
      <h3>{product.producttags[0].tags.name}</h3>
      <h3>{product.producttags[1].tags.name}</h3>
      <h3>{product.producttags[2].tags.name}</h3>
      <h3>{product.producttags[3].tags.name}</h3>
      <h3>{product.description}</h3>
      <img src={product.productphotos[0].photos.url} width="250" height="250" />
    </div>
  );
}
