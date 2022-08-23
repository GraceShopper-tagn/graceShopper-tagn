import React, { useState, useEffect } from "react";
import { getAllProducts } from "../api/products";
import { getAllTags } from "../api/tags";
import { getProductsByTags } from "../api/products";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [tags, setTags] = useState();
  const [brandsToDisplay, setBrandsToDisplay] = useState([]);
  const [brandId, setBrandId] = useState();
  const [colorsToDisplay, setColorsToDisplay] = useState();
  const [colorId, setColorId] = useState();
  const [activitiesToDisplay, setActivitiesToDisplay] = useState();
  const [activityID, setActivityId] = useState();
  const [gendersToDisplay, setGendersToDisplay] = useState();
  const [genderID, setGenderId] = useState();
  const [filteredProducts, setFilteredProducts] = useState();
  const [filteredProductsToDisplay, setFilteredProductsToDisplay] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    const getTags = async () => {
      const allTags = await getAllTags();
      // window.location.reload(false);
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
      // window.location.reload(false);
    };

    getBrands();
  }, []);

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

  // useEffect(() => {
  //   const getFilteredProductsToDisplay = filteredProducts.map(
  //     (filteredProduct, i) => {
  //       return (
  //         <div
  //           key={`Key ${i}`}
  //           onClick={() => navigate(`/products/${filteredProduct.id}`)}
  //         >
  //           <h2>{filteredProduct.name}</h2>
  //           <h2>{filteredProduct.price}</h2>
  //           <h3>{filteredProduct.producttags[0].tags.name}</h3>
  //           <h3>{filteredProduct.producttags[1].tags.name}</h3>
  //           <h3>{filteredProduct.producttags[2].tags.name}</h3>
  //           <h3>{filteredProduct.producttags[3].tags.name}</h3>
  //           <h3>{filteredProduct.description}</h3>
  //           <img
  //             src={filteredProduct.productphotos[0].photos.url}
  //             width="250"
  //             height="250"
  //           />
  //         </div>
  //       );
  //     }
  //   );
  //   setFilteredProductsToDisplay(getFilteredProductsToDisplay);
  // }, [filteredProducts]);

  return (
    <div>
      <h1>Products</h1>
      {productsToDisplay}
      {/* {filteredProductsToDisplay} */}

      <div className="productFilter">
        <form>
          <h3>Select Brand</h3>

          <select
            onChange={async (e) => {
              event.preventDefault();
              // window.location.reload(false);
              console.log(e.target.value);
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
              event.preventDefault();
              console.log(e.target.value);
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
              event.preventDefault();
              console.log(e.target.value);
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
              event.preventDefault();
              console.log(e.target.value);
              setGenderId(e.target.value);
            }}
            className="gendersDisplay"
          >
            {gendersToDisplay}
          </select>
        </form>

        <form>
          <button
            onClick={async () => {
              event.preventDefault();
              let filtered = await getProductsByTags(
                +brandId,
                +colorId,
                +activityID,
                +genderID
              );
              console.log("FILTERED: ", filtered);
              setFilteredProducts(filtered);
            }}
          >
            Submit Filter
          </button>
        </form>

        <form>
          <button
            onClick={async () => {
              event.preventDefault();
              setBrandId(1);
              setColorId(18);
              setActivityId(30);
              setGenderId(39);
            }}
          >
            Clear Filter
          </button>
        </form>

        {/* <form>
          <h3>Select Brand</h3>

          <select
            onChange={async (e) => {
              event.preventDefault();
              window.location.reload(false);
              setBrandId(e.target.value);
            }}
            className="brandsDisplay"
          >
            {brandsToDisplay}
          </select>

          <h3>Select Color</h3>

          <select
            onChange={async (e) => {
              event.preventDefault();
              setColorId(e.target.value);
            }}
            className="colorsDisplay"
          >
            {colorsToDisplay}
          </select>

          <h3>Select Activity</h3>

          <select
            onChange={async (e) => {
              event.preventDefault();
              setActivityId(e.target.value);
            }}
            className="activitiesDisplay"
          >
            {activitiesToDisplay}
          </select>

          <h3>Select Gender</h3>

          <select
            onChange={async (e) => {
              event.preventDefault();
              setGenderId(e.target.value);
            }}
            className="gendersDisplay"
          >
            {gendersToDisplay}
          </select>

          <button
            onClick={async () => {
              event.preventDefault();
              let filtered = await getProductsByTags(
                +brandId,
                +colorId,
                +activityID,
                +genderID
              );
              console.log("FILTERED: ", filtered);
              setFilteredProducts(filtered);
            }}
          >
            Submit Filter
          </button>

          <button
            onClick={async () => {
              event.preventDefault();
              await setBrandId(1);
              await setColorId(18);
              await setActivityId(30);
              await setGenderId(39);
            }}
          >
            Clear Filter
          </button>
        </form> */}
      </div>
    </div>
  );
}
