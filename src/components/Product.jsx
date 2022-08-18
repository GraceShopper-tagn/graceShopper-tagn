import React, { useState, useEffect } from "react";
import { getProduct } from "../api/products";
import { useLocation, useParams } from "react-router-dom";
import { getInventoryBySize } from "../api/products";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [sizesToDisplay, setSizesToDisplay] = useState([]);
  const [selectedSizeId, setSelectedSizeId] = useState(1);
  const [singleSizeInventory, setSingleSizeInventory] = useState();
  const [sizeId, setSizeid] = useState();

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
        return <option value={size.sizes.id}>{size.sizes.size}</option>;
      });
      setSizesToDisplay(sizesToDisplay);
      selectedSizeId(1);
    };

    getSizes();
  }, [product]);

  useEffect(() => {
    const getSizeInventory = async () => {
      const sizeInventory = await getInventoryBySize(id, selectedSizeId);
      console.log("Size Inventory: ", sizeInventory);
      console.log("sizeInventory.inventory: ", sizeInventory.inventory);
      let setInventory = +sizeInventory.inventory;
      setSingleSizeInventory(setInventory);
      console.log("SINGLE SIZE INVENTORY!!!: ", singleSizeInventory);
    };
    getSizeInventory();
  }, [selectedSizeId]);

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
            setSelectedSizeId(e.target.value);
          }}
          id="shoe-size"
        >
          {sizesToDisplay}
        </select>
        <h4>There are {singleSizeInventory} of this model left.</h4>
      </form>
    </div>
    //need to add button for add cart item
  );
}
