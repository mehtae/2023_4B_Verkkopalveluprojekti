import React from "react";
import Math from "../Courses/Math.js"


function CourseItem({ image, name, price }) {
  return (
    <div className="courseItem">
      <h1> {name} </h1>
      <p> € {price} </p>
      <button>Read more</button>
      
    </div>
  );
}

export default CourseItem;
