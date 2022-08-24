import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FilteredProducts() {
  const [filteredProductsToDisplay, setFilteredProductsToDisplay] = useState(
    []
  );

  const navigate = useNavigate();

  const filteredProducts = JSON.parse(
    localStorage.getItem("filtered-products")
  );

  if (filteredProducts.length === 0) {
    alert(
      "There aren't any products that match your search, please try again."
    );

    navigate("/products");
  }

  useEffect(() => {
    const getFilteredProductsToDisplay = filteredProducts.map(
      (filteredProduct, i) => {
        return (
          <div
            key={`Key ${i}`}
            onClick={() => navigate(`/products/${filteredProduct.id}`)}
          >
            <h2>{filteredProduct.name}</h2>
            <h2>{filteredProduct.price}</h2>
            <h3>
              {filteredProduct.producttags
                ? filteredProduct.producttags[0].tags.name
                : null}
            </h3>
            <h3>
              {filteredProduct.producttags
                ? filteredProduct.producttags[1].tags.name
                : null}
            </h3>
            <h3>
              {filteredProduct.producttags
                ? filteredProduct.producttags[2].tags.name
                : null}
            </h3>
            <h3>
              {filteredProduct.producttags
                ? filteredProduct.producttags[3].tags.name
                : null}
            </h3>
            <h3>{filteredProduct.description}</h3>
            <img
              src={filteredProduct.productphotos[0].photos.url}
              width="250"
              height="250"
            />
          </div>
        );
      }
    );
    setFilteredProductsToDisplay(getFilteredProductsToDisplay);
  }, []);

  return (
    <div>
      <h4>Search Results</h4>

      {filteredProductsToDisplay}

      <div>
        <form>
          <button
            onClick={() => {
              event.preventDefault();
              navigate("/products");
            }}
          >
            Clear Filter
          </button>
        </form>
      </div>
    </div>
  );
}
