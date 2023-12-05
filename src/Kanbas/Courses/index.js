import db from "../../Kanbas/Database";
import axios from "axios";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import Breadcrumb from "./breadcrumb";
import { useState, useEffect } from "react";
function Courses({courses}) {
  const URL = "https://kanbas-node-server-app-1.onrender.com/api/courses"
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  return (
    <div>
        <div> 
        <Breadcrumb />
        <hr style={{width:1300, marginLeft:50}}/>
        <CourseNavigation />
        </div>
            <div
            className="overflow-y-scroll position-fixed bottom-0 end-0"
            style={{
                left: "320px",
                top: "50px",
            }}>
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home/>} />
                <Route path="Modules" element={<Modules/>} />
                <Route path="Assignments" element={<Assignments/>} />
                <Route
                    path="Assignments/:assignmentId"
                    element={<AssignmentEditor/>}/>
                <Route path="Grades" element={<Grades/>} />
            </Routes>
            </div>
    </div>
  );
}
export default Courses;