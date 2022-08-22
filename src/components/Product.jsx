import React, { useState, useEffect } from "react";
import { getProduct } from "../api/products";
import { useParams } from "react-router-dom";
import { getInventoryBySize } from "../api/products";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [sizesToDisplay, setSizesToDisplay] = useState([]);
  const [selectedSizeId, setSelectedSizeId] = useState(1);
  const [singleSizeInventory, setSingleSizeInventory] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    const getOneProduct = async () => {
      const product = await getProduct(id);
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
    };

    getSizes();
  }, [product]);

  useEffect(() => {
    const getSizeInventory = async () => {
      const sizeInventory = await getInventoryBySize(id, selectedSizeId);
      let inventory = sizeInventory.inventory;
      localStorage.setItem("size-inventory", JSON.stringify(inventory));
      setSingleSizeInventory(inventory);
    };
    getSizeInventory();
  }, [selectedSizeId]);

  useEffect(() => {
    localStorage.setItem("shoeid", JSON.stringify(id));
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
        <h3>Select Size</h3>
        <select
          onChange={async (e) => {
            localStorage.setItem("sizeid", JSON.stringify(e.target.value));
            setSelectedSizeId(e.target.value);
          }}
          id="shoe-size"
        >
          {sizesToDisplay}
        </select>
        <h4>
          There are {singleSizeInventory} of this model left in this size.
        </h4>
      </form>
      <form>
        <button
          onClick={() => {
            navigate(`/addtocart`);
          }}
        >
          Add To Cart
        </button>
      </form>
    </div>
  );
}
