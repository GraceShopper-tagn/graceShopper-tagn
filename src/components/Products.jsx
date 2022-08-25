import React, { useState, useEffect } from "react";
import { getAllProducts } from "../api/products";
import { getAllTags } from "../api/tags";
import { getProductsByTags } from "../api/products";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../components/styles/products.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [tags, setTags] = useState([]);
  const [brandsToDisplay, setBrandsToDisplay] = useState([]);
  const [brandId, setBrandId] = useState(1);
  const [colorsToDisplay, setColorsToDisplay] = useState([]);
  const [colorId, setColorId] = useState(18);
  const [activitiesToDisplay, setActivitiesToDisplay] = useState([]);
  const [activityID, setActivityId] = useState(30);
  const [gendersToDisplay, setGendersToDisplay] = useState([]);
  const [genderID, setGenderId] = useState(39);
  const [filteredProducts, setFilteredProducts] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    window.history.replaceState(null, "", "/products");
    const getTags = async () => {
      const allTags = await getAllTags();
      console.log("ALL TAGS: ", allTags);
      setTags(allTags);
    };
    getTags();
  }, []);

  useEffect(() => {
    const getBrands = async () => {
      const brands = tags
        .filter((tag) => {
          return tag.categoryid === 1;
        })
        .map((tag) => {
          return <option value={tag.id}>{tag.name}</option>;
        });
      setBrandsToDisplay(brands);
    };

    getBrands();
  }, [tags]);

  useEffect(() => {
    const getColors = async () => {
      const colors = tags
        .filter((tag) => {
          return tag.categoryid === 2;
        })
        .map((tag) => {
          return <option value={tag.id}>{tag.name}</option>;
        });
      setColorsToDisplay(colors);
    };

    getColors();
  }, [tags]);

  useEffect(() => {
    const getActivities = async () => {
      const activities = tags
        .filter((tag) => {
          return tag.categoryid === 3;
        })
        .map((tag) => {
          return <option value={tag.id}>{tag.name}</option>;
        });
      setActivitiesToDisplay(activities);
    };

    getActivities();
  }, [tags]);

  useEffect(() => {
    const getGenders = async () => {
      const genders = tags
        .filter((tag) => {
          return tag.categoryid === 4;
        })
        .map((tag) => {
          return <option value={tag.id}>{tag.name}</option>;
        });
      setGendersToDisplay(genders);
    };

    getGenders();
  }, [tags]);

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
      <h1>Products</h1>

      {productsToDisplay}

      <div className="productFilter">
        <form>
          <h3>Select Brand</h3>

          <select
            onChange={async (e) => {
              e.preventDefault();
              setBrandId(e.target.value);
            }}
            className="brandsDisplay"
          >
            {brandsToDisplay}
          </select>
        </form>

        <form>
          <h3>Select Color</h3>

          <select
            onChange={async (e) => {
              e.preventDefault();
              setColorId(e.target.value);
            }}
            className="colorsDisplay"
          >
            {colorsToDisplay}
          </select>
        </form>

        <form>
          <h3>Select Activity</h3>

          <select
            onChange={async (e) => {
              e.preventDefault();
              setActivityId(e.target.value);
            }}
            className="activitiesDisplay"
          >
            {activitiesToDisplay}
          </select>
        </form>

        <form>
          <h3>Select Gender</h3>

          <select
            onChange={async (e) => {
              e.preventDefault();
              setGenderId(e.target.value);
            }}
            className="gendersDisplay"
          >
            {gendersToDisplay}
          </select>
        </form>

        <form>
          <button
            onClick={async (e) => {
              e.preventDefault();
              let filtered = await getProductsByTags(
                +brandId,
                +colorId,
                +activityID,
                +genderID
              );
              localStorage.setItem(
                "filtered-products",
                JSON.stringify(filtered)
              );
              setFilteredProducts(filtered);
              navigate("/products/filtered");
            }}
          >
            Submit Filter
          </button>
        </form>
      </div>
    </div>
  );
}
