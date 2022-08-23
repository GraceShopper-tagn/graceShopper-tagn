import React, { useState, useEffect } from "react";
// import { getAllProducts } from "../api/products";
// import { useNavigate } from "react-router-dom";
import { getAllTags } from "../api/tags";

export default function Tags() {
  const [tags, setTags] = useState([]);
  const [brandsToDisplay, setBrandsToDisplay] = useState();
  const [brandId, setBrandId] = useState();
  const [colorsToDisplay, setColorsToDisplay] = useState();
  const [colorId, setColorId] = useState();
  const [activitiesToDisplay, setActivitiesToDisplay] = useState();
  const [activityID, setActivityId] = useState();
  const [gendersToDisplay, setGendersToDisplay] = useState();
  const [genderID, setGenderId] = useState();

  useEffect(() => {
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
  }, [brandId]);

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
  }, [colorId]);

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
  }, [activityID]);

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
  }, [genderID]);

  return (
    <form>
      <h3>Select Brand</h3>

      <select
        onChange={async (e) => {
          //console.log("BRAND ID", e.target.value);
          setBrandId(e.target.value);
        }}
        id="brands"
      >
        {brandsToDisplay}
      </select>

      <h3>Select Color</h3>

      <select
        onChange={async (e) => {
          //console.log("COLOR ID", e.target.value);
          setColorId(e.target.value);
        }}
        id="colors"
      >
        {colorsToDisplay}
      </select>

      <h3>Select Activity</h3>

      <select
        onChange={async (e) => {
          //console.log("ACTIVITY ID", e.target.value);
          setActivityId(e.target.value);
        }}
        id="activities"
      >
        {activitiesToDisplay}
      </select>

      <h3>Select Gender</h3>

      <select
        onChange={async (e) => {
          //   console.log("GENDER ID", e.target.value);
          setGenderId(e.target.value);
        }}
        id="genders"
      >
        {gendersToDisplay}
      </select>
    </form>
  );
}
