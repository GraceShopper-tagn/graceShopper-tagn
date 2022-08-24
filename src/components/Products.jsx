import React, { useState, useEffect } from "react";
import { getAllProducts } from "../api/products";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../components/styles/products.css";

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
        // Use cards to display products as a grid
        <div
          class="products-card"
          key={`Key ${i}`}
          onClick={() => navigate(`/products/${product.id}`)}
        >
          <div class="products-card-text">
            <img
              src={product.productphotos[0].photos.url}
              width="250"
              height="250"
            />
            <h3>{product.name}</h3>
            <h4>${product.price.toFixed(2)}</h4>
            <h5>{product.producttags[0].tags.name}</h5>
            <h5>{product.producttags[1].tags.name}</h5>
            <h5>{product.producttags[2].tags.name}</h5>
            <h5>{product.producttags[3].tags.name}</h5>
          </div>
        </div>
      );
    });
    setProductsToDisplay(getProductsToDisplay);
  }, [products]);

  return (
    <div>
      <h1 class="products-title">Products</h1>
      <div class="products-container">{productsToDisplay}</div>
    </div>
  );
}
