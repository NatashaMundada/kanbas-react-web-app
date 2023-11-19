import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
function Kanbas() {
  const handleClick = (parameter = "Hello") => {
    console.log(parameter)
  }
  const [courses, setCourses] = useState([]);
  const URL = "https://kanbas-node-server-app-1.onrender.com/api/courses";

  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = async() => {
    const response = await axios.post(URL, course);

    setCourses([response.data,...courses]);
  };
  console.log("date", new Date().getTime().toString())
  const deleteCourse = async(courseId) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );

    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        } else{
          return c;
        }
      })
    );
    setCourse({ name: course.name });
  };
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  
  useEffect(() => {
    findAllCourses();
  }, []);

    return (
      <Provider store={store}>
        <div className="d-flex float-left" style={{position:'absolute'}}>
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1></h1>} />
            <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>} />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
          </Routes>

        </div>
      </div>
      </Provider>
      
    );
  }
  export default Kanbas;