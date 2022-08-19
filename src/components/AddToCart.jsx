import React, { useState, useEffect } from "react";
import { getProduct } from "../api/products";
import { useLocation, useParams } from "react-router-dom";

export default function AddToCart() {
  const [product, setProduct] = useState([]);
  const localShoeId = JSON.parse(localStorage.getItem("shoeid"));

  useEffect(() => {
    const getOneProduct = async () => {
      const product = await getProduct(localShoeId);
      setProduct(product);
    };
    getOneProduct();
  }, []);

  return (
    <div>
      <h2>{product.name}</h2>
      <h3>{product.price}</h3>
      <h3>{product.producttags ? product.producttags[0].tags.name : null}</h3>
      <h3>{product.producttags ? product.producttags[1].tags.name : null}</h3>
      <h3>{product.producttags ? product.producttags[2].tags.name : null}</h3>
      <h3>{product.producttags ? product.producttags[3].tags.name : null}</h3>
      <h3>{product.description}</h3>
      <img
        src={product.productphotos ? product.productphotos[0].photos.url : null}
        width="250"
        height="250"
      />
      <form>
        <output name="calculate">Test</output>
      </form>
    </div>
  );
}
