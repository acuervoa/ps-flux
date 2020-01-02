import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

/*
 import React from "react";
 class CoursesPage extends React.Component {
    state = {
      courses: []
    };
    componentDidMount() {
      getCourses().then(courses => this.setState({ courses: courses }));
    }
    render(){
      return(...<tbody>{this.state.courses.map(course => {...</tbody>...)
    }
  }
*/

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
