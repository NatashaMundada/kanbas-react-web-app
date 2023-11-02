import db from "../../Kanbas/Database";
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
function Courses({courses}) {
  const { defaultcourseId } = useParams();
  console.log(useParams())
  const course = courses.find((course) => course._id === defaultcourseId);
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