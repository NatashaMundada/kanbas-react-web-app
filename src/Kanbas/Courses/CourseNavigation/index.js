import { NavLink, useParams, useLocation } from "react-router-dom";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", 
  "Panopto Video", "Discussions", "Announcements", "Pages", "Files"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div style={{ width: 150, marginLeft: 50, display: "flex", flexDirection: "column", position:"absolute"}}>
        <p style={{marginLeft: 10}}>Fall 2023 Semester</p>
      {links.map((link, index) => (
        <NavLink
        style={({ isActive }) => ({
            color: isActive ? 'black' : 'red', padding: 10, textDecoration:"none", 
            borderLeft: isActive ? 'solid' : 'none', borderColor: isActive ? 'black' : 'none', 
            borderWidth: isActive ? 'medium' : 'none'})}
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`${pathname.includes(link)}`}>
            {link}
        </NavLink>
      ))}
    </div>
  );
}

export default CourseNavigation;