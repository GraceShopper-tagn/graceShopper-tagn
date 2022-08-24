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
        <div class="row">
          <div class="col-lg-4 col-md-4 col-xs-6">
            <div
              key={`Key ${i}`}
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <img
                src={product.productphotos[0].photos.url}
                width="250"
                height="250"
              />
              <h2>{product.name}</h2>
              <h2>{product.price}</h2>
              <h3>{product.producttags[0].tags.name}</h3>
              <h3>{product.producttags[1].tags.name}</h3>
              <h3>{product.producttags[2].tags.name}</h3>
              <h3>{product.producttags[3].tags.name}</h3>
              <h3>{product.description}</h3>
            </div>
          </div>
        </div>
      );
    });
    setProductsToDisplay(getProductsToDisplay);
  }, [products]);

  return (
    <Container>
      <div>
        <h1>Products</h1>
        {productsToDisplay}
      </div>
    </Container>
  );
}
