import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import Signin from "./users/signin"
import axios from "axios";
import Account from './users/account';
import UserTable from './users/table';
import Signup from './users/signup';
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
            <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>} />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/signup" element={<Signup/>} />

          </Routes>

        </div>
      </div>
      </Provider>
      
    );
  }
  export default Kanbas;