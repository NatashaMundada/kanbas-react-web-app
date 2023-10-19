import db from "../Database";
import './index.css';
import { NavLink } from "react-router-dom";

function Dashboard() {
  const courses = db.courses;
  const colors = ["lightgray", "lightblue", "blue"]
  return (
    <div>
      <div>
        <p className="heading">Dashboard</p>
        <hr style={{width: 1200, marginLeft: 80}}/>
        <p className="subheading">Published Courses</p>
        <hr style={{width: 1200, marginLeft: 90}}/>
      </div>
      
      <div className="d-none d-xl-block d-xxl-block d-lg-block">
        <div style={{display: "flex", flexDirection: "row", marginLeft: 100, position: "relative"}}>
          {
            courses.map((course, index) => (
              <NavLink 
              key={index}
              style={{textDecoration:"none"}}
              to={`/Kanbas/Courses/${course._id}`}>
              <Card
                backgroundColor={colors[index]}
                description={JSON.stringify(course.name).replace(/\"/g, "")}
                cardtext={JSON.stringify(course.number).replace(/\"/g, "") + " Fall 2023"}>
              </Card>
              </NavLink>
            ))
          } 
        </div>
      </div>

      <div className="d-none d-xl-none d-xxl-none d-sm-block d-lg-none">
        <div style={{display: "flex", flexDirection: "column", marginLeft: 100, position: "relative"}}>
          {
            courses.map((course, index) => (
              <NavLink 
              key={index}
              style={{textDecoration:"none"}}
              to={`/Kanbas/Courses/${course._id}`}>
              <Card
                backgroundColor={colors[index]}
                description={JSON.stringify(course.name).replace(/\"/g, "")}
                cardtext={JSON.stringify(course.number).replace(/\"/g, "") + " Fall 2023"}>
              </Card>
              </NavLink>
            ))
          } 
        </div>
      </div>
    </div>
    
  );
}

function Card(Param) {
  return (
    <div className="card" style={{width: 270, height: 270, marginBottom: 20, marginRight: 40}}>
      <div className="card-header" style={{backgroundColor: Param.backgroundColor, height: 200}}>
      </div>
      <div className="card-body" style={{height: 50}}>
        <p className="card-text" style={{color:Param.backgroundColor}}>
            {Param.description}<br/>
            <span style={{color: "gray", fontWeight: 10}}>{Param.cardtext}</span></p></div>
      </div>
  );
}
export default Dashboard;

