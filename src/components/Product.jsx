import React, { useState, useEffect } from "react";
import { getProduct } from "../api/products";
import { useLocation } from "react-router-dom";
import { getInventoryBySize } from "../api/products";

export default function Product() {
  const [product, setProduct] = useState([]);
  const [sizesToDisplay, setSizesToDisplay] = useState([]);
  const [selectedSize, setSelectedSize] = useState();
  const [singleSizeInventory, setSingleSizeInventory] = useState();
  const [sizeId, setSizeid] = useState();

  const path = window.location.pathname;
  const id = path.slice(10);

  useEffect(() => {
    const getOneProduct = async () => {
      const product = await getProduct(id);
      console.log("One Product: ", product);
      setProduct(product);
    };
    getOneProduct();
  }, []);

  useEffect(() => {
    const getSizes = async () => {
      const sizesToDisplay = product.productsizes.map((size) => {
        console.log("SIZE: ", size);
        console.log(size.sizes.size);
        console.log(size.inventory);
        const valueArray = [size.sizes.size, size.inventory];

        return <option value={valueArray}>{size.sizes.size}</option>;
      });
      setSizesToDisplay(sizesToDisplay);
    };

    getSizes();
  }, [product]);

  useEffect(() => {
    const getSizeInventory = async () => {
      const sizeInventory = await getInventoryBySize(id, selectedSize);
      console.log("Size Inventory: ", sizeInventory);
      setSingleSizeInventory(sizeInventory);
    };
    getSizeInventory();
  }, [selectedSize]);

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
        <select
          onChange={async (e) => {
            console.log(e.target.value);
            await setSelectedSize(e.target.value[0]);
            setSingleSizeInventory(e.target.value[1]);
            console.log("SELECTED SIZE: ", selectedSize);
            console.log("Single Inventory: ", singleSizeInventory);
          }}
          id="shoe-size"
        >
          {sizesToDisplay}
        </select>
      </form>
    </div>
  );
}
