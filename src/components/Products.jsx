import React, { useState, useEffect } from "react";
import { getAllProducts } from "../api/products";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const allProducts = await getAllProducts();
      setProducts(allProducts);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getProductsToDisplay = products.map((product, i) => {
      return (
        <div
          key={`Key ${i}`}
          onClick={() => navigate(`/products/${product.id}`)}
        >
          <h2>{product.name}</h2>
          <h2>{product.price}</h2>
          <h3>{product.producttags[0].tags.name}</h3>
          <h3>{product.producttags[1].tags.name}</h3>
          <h3>{product.producttags[2].tags.name}</h3>
          <h3>{product.producttags[3].tags.name}</h3>
          <h3>{product.description}</h3>
          <img
            src={product.productphotos[0].photos.url}
            width="250"
            height="250"
          />
        </div>
      );
    });
    setProductsToDisplay(getProductsToDisplay);
  }, [products]);

  return (
    <div>
      <h1>Products</h1>
      {productsToDisplay}
    </div>
  );
}
