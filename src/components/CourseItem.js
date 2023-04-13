import React from "react";


function CourseItem({ image, name, price }) {
  return (
    <div className="courseItem">
      <h1> {name} </h1>
      <p> € {price} </p>
    </div>
  );
}

export default CourseItem;
