import React, { useState, useEffect } from "react";
import { getProduct } from "../api/products";
import { useLocation } from "react-router-dom";

export default function Product() {
  const [product, setProduct] = useState([]);
  const [sizesToDisplay, setSizesToDisplay] = useState([]);
  const [selectedSize, setSelectedSize] = useState();

  const path = window.location.pathname;
  const id = path.slice(10);

  document.getElementById("shoe-size").addEventListener("change", function () {
    console.log("You selected: ", this.value);
    setSelectedSize(this.value);
  });

  console.log("This is the selected size: ", selectedSize);

  //   let e = document.getElementById("shoe-size");
  //   let inventorySize = e.options[e.selectedIndex].value;
  //   console.log("INVENTORY SIZE: ", inventorySize);

  //   function val() {
  //     d = document.getElementById("shoe-size").value;
  //     alert(d);
  //   }

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
        return <option value={size.sizes.size}>{size.sizes.size}</option>;
      });
      setSizesToDisplay(sizesToDisplay);
    };

    getSizes();
  }, [product]);

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
        <select id="shoe-size">{sizesToDisplay}</select>
      </form>
    </div>
  );
}
