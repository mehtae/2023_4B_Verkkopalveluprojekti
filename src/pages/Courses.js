import React from "react";
import { CourseList } from "../helper/CourseList";
import CourseItem from "../components/CourseItem.js";
import "../styles/courses.css";

function Courses() {
  return (
    <div className="course">
      <h1 className="courseTitle">Courses</h1>
      <div className="courseList">
        {CourseList.map((courseItem, key) => {
          return (
            <CourseItem
              key={key}
              image={courseItem.image}
              name={courseItem.name}
              price={courseItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
