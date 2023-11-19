import ModuleList from "../Modules/ModuleList";
import {  useParams } from "react-router-dom";
function Home() {
    const { courseId } = useParams();
    return (
      <div style={{position:"absolute"}}>

        <ModuleList isSmall={true}/>

        <div style={{marginLeft:800, marginTop:50, position:"absolute"}}>
            <button type="submit" className="btn btn-secondary mb-1" 
                style={{backgroundColor: "lightgray", color: "black", width: 250, textAlign: "start"}}>
                <i className="fas fa-light fa-file-import me-2"></i>
                    Import Existing Content
            </button>
            <button type="submit" className="btn btn-secondary mb-1" 
            style={{backgroundColor: "lightgray", color: "black", width: 250, textAlign: "start"}}>
            <i className="fas fa-light fa-upload fa-rotate-90 me-2"></i>
                Import from Commons
            </button>
            <button type="submit" className="btn btn-secondary mb-1" 
            style={{backgroundColor: "lightgray", color: "black", width: 250, textAlign: "start"}}>
            <i className="fas fa-light fa-circle me-2"></i>
                Choose Home Page
            </button>
            <button type="submit" className="btn btn-secondary mb-1" 
            style={{backgroundColor: "lightgray", color: "black", width: 250, textAlign: "start"}}>
            <i className="fas fa-solid fa-signal me-2"></i>
                View Course Stream
            </button>
            <button type="submit" className="btn btn-secondary mb-1" 
            style={{backgroundColor: "lightgray", color: "black", width: 250, textAlign: "start"}}>
            <i className="fas fa-regular fa-bullhorn me-2"></i>
                New Announcement
            </button>
            <button type="submit" className="btn btn-secondary mb-1" 
                style={{backgroundColor: "lightgray", color: "black", width: 250, textAlign: "start"}}>
                <i className="fas fa-light fa-signal me-2"></i>
                    New Analytics
            </button>
            <button type="submit" className="btn btn-secondary mb-1" 
                style={{backgroundColor: "lightgray", color: "black", width: 250, textAlign: "start"}}>
                <i className="fas fa-regular fa-bell me-2"></i>
                    View course Notifications
            </button>
            <br/>
            <b>To Do</b>
            <hr/>
            <span style={{color: "red", textDecoration: "none"}}>
                Grade A1 - {courseId}
            </span><br/>
            <small>100 points * Sep 18 at 11:50 pm</small>
            <br/>
            <br/>
            <b>Coming Up</b>

            <span style={{marginLeft: 35}}><i className="fa-regular fa-calendar"></i>View Calendar</span>
            <hr/>
            <i className="fa-regular fa-calendar me-1"></i>
            <span style={{color: "red", textDecoration: "none"}}>
                Lecture
            </span><br/>
            <small>{courseId}.12456.120404</small>
            <br/>
            <small>Sep 11 at 11:45am</small>
            <br/>
            <br/>
            <i className="fa-regular fa-calendar me-1"></i>
            <span style={{color: "red", textDecoration: "none"}}>
                {courseId} SP23 Lecture
            </span><br/>
            <small>{courseId}.12456.120404</small>
            <br/>
            <small>Sep 11 at 11:45am</small>
            
        </div>
      </div>);
  }
  export default Home;
  