import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useLocation, useParams } from 'react-router-dom';

function Breadcrumb() {
    const location = useLocation();
    const { courseId } = useParams();
    const heading = location.pathname.split('/').pop()
    let shouldDisplayButton;
    if (heading == 'Home') {
        shouldDisplayButton = 'Home';
    } else if (heading === 'Modules') {
        shouldDisplayButton = 'Modules';
    } else if (heading === 'Grades') {
        shouldDisplayButton = 'Grades';
    } else if (heading == 'Assignments') {
        shouldDisplayButton = 'Assignment...';
    } else {
        shouldDisplayButton = 'None';
    }
    
    console.log(heading)

    return(
        <div>
            {shouldDisplayButton && (
                    <button type="submit" className="btn float-end me-2 mt-3" 
                    style={{marginTop: 10, backgroundColor: "lightgray"}}>
                        <i className="fa fa-glasses" aria-hidden="true" style={{color: "black"}}></i>
                        Student View
                    </button>)}
            <div style={{marginLeft: 50, display:"flex", flexDirection:"row"}}>
            
            <i className="fa fa-grip-lines fa-2x" style={{marginTop: 20, color:"red"}}/>
            <p style={{color:"red", fontSize: 20, marginTop:20, marginLeft:10}}>{courseId} {"FA 2023"}
            <i className="fa fa-solid fa-greater-than" style={{marginLeft: 10, color:"black", fontSize:15}}></i></p>
            <p style={{color:"black", marginTop: 20, fontSize: 20, marginLeft: 10}}>{shouldDisplayButton}</p>
        </div>
        </div>
        
    );
}

export default Breadcrumb;