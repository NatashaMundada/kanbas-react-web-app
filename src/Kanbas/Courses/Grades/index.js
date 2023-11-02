import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import db from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
        <div style={{marginTop:50}}>
        <div style={{marginLeft: 400}}>
            <div className="ms-5 me-2">
                <button type="submit" className="btn float-end" 
                style={{marginLeft: 5, backgroundColor: "lightgray", color: "black"}}>
                <i className="fas fa-solid fa-gear"></i>
                </button>
                <div className="btn-group float-end">
                    <button type="button" className="btn btn-default dropdown-toggle" style={{ 
                    backgroundColor: "lightgray"}} data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                        <i className="fa-solid fa-file-export"></i>
                        Export <span className="caret"></span>
                    </button>
                </div>
                
                <button type="submit" className="btn btn float-end me-2" 
                style={{marginLeft: 5, backgroundColor: "lightgray", color: "black"}}>
                <i className="fas fa-thin fa-file-import"></i>
                    Import
                </button>
            </div>
        </div>
        <p style={{color:"red"}}>Gradebook</p>
        <div className="row mt-4">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-6">
                        <b>Student Names</b>
                        <div class="dropdown">
                            <div id="myDropdown" className="dropdown-content">
                                <input type="text" placeholder="Search Students" id="myInput"></input>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <b>Assignment Names</b>
                        <div className="dropdown">
                            <div id="myDropdown" className="dropdown-content">
                                <input type="text" placeholder="Search Assignments" id="myInput"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button type="button" className="btn mt-3" 
            style={{marginLeft: 5, backgroundColor: "lightgray"}}>
            <i className="fas fa-thin fa-filter"></i>
                Apply Filters
            </button>
        <div className="table-responsive table table-bordered me-4">
            <table className="table-responsive table table-bordered table-striped table-responsive mt-3">
                <thead style={{textAlign:"center"}}>
                    <th>Student Name</th>
                    {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                </thead>
                <tbody>
                {enrollments.map((enrollment) => {
                const user = db.users.find((user) => user._id === enrollment.user);
                return (
                    <tr>
                    <td style={{color:"red"}}>{user.firstName} {user.lastName}</td>
                    {assignments.map((assignment) => {
                        const grade = db.grades.find(
                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                        return (<td style={{textAlign:"center"}}>{grade?.grade || ""}</td>);})}
                        </tr>);
                })}
                </tbody>
            </table>
      </div></div>
    </div>
    );
}
export default Grades;

