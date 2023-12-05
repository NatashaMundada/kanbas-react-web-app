import db from "../Database";
import './index.css';
import { NavLink } from "react-router-dom";
import { React, useState } from "react";

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  const colors = ["lightgray", "lightblue", "blue"]
  return (
    <div>
      <div>
        <p className="heading">Dashboard</p>
        <hr style={{width: 1200, marginLeft: 80}}/>
        <p className="subheading">Published Courses</p>
        <hr style={{width: 1200, marginLeft: 90}}/>
        <div style={{marginLeft:100, marginBottom: 10}}>
          <input value={course.name} className="form-control mb-2"
              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
          <input value={course.number} className="form-control mb-2"
              onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
          <input value={course.startDate} className="form-control mb-2" type="date"
              onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
          <input value={course.endDate} className="form-control mb-2" type="date"
              onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
          <button className="btn btn-success"onClick={addNewCourse}>
          Add
          </button>
          <button className="ms-2 btn btn-primary" onClick={updateCourse} >
        Update
      </button>
        </div>
      </div>

      <div className="d-none d-xl-block d-xxl-block d-lg-block">
        <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", marginLeft: 100, position: "relative"}}>
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
              <button className="mb-2 mt-2 btn btn-danger"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>
            <button className="ms-2 btn btn-primary"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>
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
                cardtext={JSON.stringify(course.number).replace(/\"/g, "") 
                + JSON.stringify(course.startDate).replace(/\"/g, "") 
                + JSON.stringify(course.endDate).replace(/\"/g, "") + " Fall 2023"}>
              </Card>
              <button className="mb-2 btn btn-danger"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>
            <button className="ms-2 btn btn-primary"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>
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
    <div className="card" style={{width: 270, height: 270, marginBottom: 10, marginRight: 40}}>
      <div className="card-header" style={{backgroundColor: Param.backgroundColor, height: 200}}>
      </div>
      <div className="card-body" style={{height: 50}}>
        <p className="card-text" style={{color:Param.backgroundColor}}>
            {Param.description}<br/>
            <span style={{color: "gray", fontWeight: 10}}>{Param.cardtext}</span></p>
      </div>
    </div>
  );
}
export default Dashboard;

