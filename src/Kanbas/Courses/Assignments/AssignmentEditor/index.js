import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
        <div style={{marginTop:50}}>
            <button type="submit" className="btn btn-secondary float-end me-3" 
            style={{marginLeft: 5, backgroundColor: "lightgray", color: "black"}}>
                <i className="fas fa-solid fa-ellipsis-vertical"></i>
            </button>
            <div>
                <label for="published" className="float-end me-2 mt-2" style={{color: "green"}}>Published</label>
                <i id="published" className="fas fa-solid fa-circle-check float-end me-2" style={{color: "green", marginTop:11}}></i>
            </div>
            <br/>
            <hr style={{width:1100, marginTop:20}}/>
            <label for="assignmentname">Assignment Name</label>
            <input value={assignment.title}
                className="form-control mb-2" style={{width:1000}}/>
                <hr style={{width:1100}}/>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger float-end me-2">
            Cancel
            </Link>
            <button onClick={handleSave} className="btn btn-success me-2 float-end">
                Save
            </button>
            <br/>
            <hr style={{marginTop:20, width:1100}}/>
        </div>
    </div>
  );
}


export default AssignmentEditor;