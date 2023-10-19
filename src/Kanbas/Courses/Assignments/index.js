import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <div style={{marginTop:50}}>
            <button type="submit" className="btn btn-secondary float-end" 
            style={{marginRight: 20, backgroundColor: "lightgray", color: "black"}}>
                <i className="fas fa-solid fa-ellipsis-vertical"></i>
            </button>
            <button type="submit" class="btn btn-danger float-end" style={{marginRight: 5}}>
                <i className="fa fa-plus" style={{color: "white"}}></i>
                    Assignment
            </button>
            <button type="submit" className="btn btn-secondary float-end" 
            style={{marginRight: 5, backgroundColor: "lightgray", color: "black"}}>
                <i className="fa fa-plus" style={{color: "black", marginRight: 5}}></i>
                Group
            </button>
            <div className="assignment-info w-25">
                <div className="col-auto">
                    <input type="text" className="form-control" id="titleinput" placeholder="Search for Assignment"></input>
                </div>
            </div>
            <hr style={{width: 1100}}/>
      </div>
      <div style={{marginTop: 50, width: 1100}}>
        <div className="list-group">
          <li className="list-group-item rounded-0" 
            style={{backgroundColor: "lightgray", color: "black"}}>
            <i className="fas fa-solid fa-ellipsis-vertical float-end mt-2"></i>
            <i className="fa fa-plus float-end ms-1 mt-2" style={{color: "black", marginRight: 5}}></i>
            <b className="mt-2">ASSIGNMENTS</b>
            <span className="rounded-pill list-group-item float-end" style={{height: 40, display: "inline-block", 
            backgroundColor:  "lightgray", borderColor: "black"}}>
                <p>40% of Total</p>
            </span>
          </li>
          <div style={{borderLeft: "solid", borderColor: "green", borderWidth: 4, height: 195}}>
          {courseAssignments.map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item rounded-0">
              <div className="col">
                <i className="fas fa-regular fa-ellipsis-vertical float-start mt-4"></i>
                <i className="fas fa-regular fa-ellipsis-vertical float-start mt-4 me-4 mb-4"></i>
                <i className="fas fa-regular fa-file-pen float-start mt-4 me-4 mb-4" style={{color: "green"}}></i>
              </div>
              <div className="float-end">
                <i className="fas fa-solid fa-circle-check mt-4 me-4" style={{color: "green"}}></i>
                <i className="fas fa-solid fa-ellipsis-vertical mt-4"></i>
              </div>
              <b>{assignment.title}</b><br/>
              <small> <span style={{color: "red"}}>Multiple Modules </span>
              <b>| Due</b> {assignment.date}</small>
            </Link>
          ))}
          </div>
          
        </div>
      </div>
    </div>
    
  );
}
export default Assignments;