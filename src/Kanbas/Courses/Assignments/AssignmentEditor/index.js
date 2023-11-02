import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment, setAssignment } from "../assignmentsReducer";


function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  const dispatch = useDispatch();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const isNewAssignment = assignmentId === "Editor" ? true : false
  const [assignment, setAssignmentData] = useState(
    isNewAssignment
      ? {
          title: "New Assignment",
          due: "mm/dd/yyyy",
          availableFrom: "mm/dd/yyyy",
          until: "mm/dd/yyyy"
        }
      : assignments.find((a) => a._id === assignmentId) || {}
  );
  const navigate = useNavigate();
  useEffect(() => {
    // If we're editing an existing assignment, set the assignment data in the state
    if (!isNewAssignment) {
      dispatch(setAssignment(assignment));
    }
  }, [dispatch, assignment, isNewAssignment]);

  const handleSave = () => {
    if (isNewAssignment) {
      // Create a new assignment
      console.log("here new ass")
      dispatch(addAssignment({...assignment, course: courseId}));
    } else {
      // Update the existing assignment
      dispatch(updateAssignment(assignment));
    }
    // After saving, navigate back to the Assignments screen
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  function isValidDate(dateString) {
    const regExp = /^\d{4}-\d{2}-\d{2}$/;
    return regExp.test(dateString);
  }
  
  // Helper function to format the date string
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  }
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
              <label style={{textAlign: "end"}} for="assignmentname">Assignment Name</label>
              <input value={assignment.title}
              onChange={(e) => setAssignmentData({ ...assignment, title: e.target.value })}
                  className="form-control mb-2" style={{width:1000}}/>
              <label for="assignmentpoint">Points</label>
              <input value={assignment.points}
              onChange={(e) => setAssignmentData({ ...assignment, points: e.target.value })}
                  className="form-control mb-2" style={{width:700}}/>
              <div className="row mt-2">
                  <label for="name"
                      className="col-sm-2 col-form-label" style={{textAlign: "end"}}>
                      Assign
                  </label>
                  <div class="col-5 mt-2 ms-1" style={{marginLeft: 15,paddingRight: 40,borderColor: "gray",borderStyle: "solid", 
                    borderWidth: 1,borderRadius: 5,backgroundColor: "transparent",width: 500}}>
                    <label className="form-check-label mt-3 ms-1" for="duedate"><b>Due</b></label>
                    <input id="duedate" className="form-control mt-2" type="date" value=
                    {isValidDate(assignment.due) ? formatDate(assignment.due) : ''}
                     onChange={(e) => setAssignmentData({ ...assignment, due: e.target.value })}/> 
                    <div className="row mt-3 mb-4">
                      <div className="col-6">
                          <label className="form-check-label ms-1" for="flexCheckDefault">
                              <b>Available from</b>
                          </label>
                          <input id="availabledate" style={{width: 150}} className="form-control" type="date" 
                          value={isValidDate(assignment.availableFrom) ? formatDate(assignment.availableFrom) : ''}
                          onChange={(e) => setAssignmentData({ ...assignment, availableFrom: e.target.value })}/>
                      </div>
                      <div className="col-6">
                          <label className="form-check-label ms-1" for="flexCheckDefault">
                              <b>Until</b>
                          </label>
                          <input id="availabledate" style={{width: 150}} className="form-control" type="date" 
                          value={isValidDate(assignment.until) ? formatDate(assignment.until) : ''}
                          onChange={(e) => setAssignmentData({ ...assignment, until: e.target.value })}/>
                      </div>
                    </div>
                  </div>
                  </div>
                  
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