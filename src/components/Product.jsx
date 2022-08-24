import React, { useState, useEffect } from "react";
import { getProduct } from "../api/products";
import { useParams } from "react-router-dom";
import { getInventoryBySize } from "../api/products";
import { useNavigate } from "react-router-dom";
import "../components/styles/product.css";

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
    <div class="product-card">
      <img
        src={product.productphotos ? product.productphotos[0].photos.url : null}
        width="250"
        height="250"
      />
      <div class="product-card-titles">
        <h2>{product.name}</h2>
        <h4>${product.price.toFixed(2)}</h4>
        <h5>{product.producttags ? product.producttags[0].tags.name : null}</h5>
      </div>
      <div class="product-tags">
        <h6>{product.producttags ? product.producttags[1].tags.name : null}</h6>
        <h6>{product.producttags ? product.producttags[2].tags.name : null}</h6>
        <h6>{product.producttags ? product.producttags[3].tags.name : null}</h6>
        <h6>{product.description}</h6>
      </div>
      <div class="product-quantity">
        <form>
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
    </div>
  );
}
