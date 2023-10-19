import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import './index.css';

function ModuleList({ isSmall }) {
  const { courseId } = useParams();
  const modules = db.modules;
  const moduleSizeClass = isSmall ? "smallmodule" : "largemodule";
  console.log(moduleSizeClass)
  return (
        <ul className="list-group">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
            <div>
                {/* <button type="submit" className="btn btn-secondary float-end me-2" style={{color:"black"}}>
                    <i className="fa fa-glasses" aria-hidden="true" style={{color: "black"}}></i>
                    Student View
                </button> */}
                <div className={moduleSizeClass}
                    style={{marginLeft:10, marginTop:50, position:"absolute"}}>
                    <button type="submit" className="btn btn-secondary float-end mb-2" 
                            style={{color: "black", fontSize:13, backgroundColor: "lightgray"}}>
                                <i className="fas fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <button type="submit" className="btn btn-danger float-end" style={{fontSize:13, marginRight: 3}}>
                        <i className="fas fa-solid fa-plus me-2" style={{color: "white"}}></i>
                                Module
                    </button>
                    <button type="button" className="btn btn-secondary dropdown-toggle float-end"  
                    style={{backgroundColor: "lightgray", color: "black", fontSize:13, marginRight: 3}}
                    data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i className="fas fa-solid fa-circle-check me-2" style={{color: "green"}}></i>
                            Publish All <span className="caret"></span>
                    </button>
                    <button type="submit" className="btn btn-secondary float-end" 
                    style={{backgroundColor: "lightgray", color: "black", fontSize:13, marginRight: 3}}>
                        View Progress
                    </button>
                    <button type="submit" className="btn btn-secondary float-end" 
                        style={{backgroundColor: "lightgray", color: "black", fontSize:13, marginRight: 3}}>
                            Collapse All
                    </button>
                    <hr style={{marginTop: 20, textAlign:"left", marginLeft:20}} className={moduleSizeClass}/>

                    <div className={moduleSizeClass}>
                        <div key={index} className="list-group" style={{marginTop: 40, marginLeft: 20}}>
                            <li className="list-group-item list-group-item-secondary rounded-0">
                                <i className="fas fa-regular fa-ellipsis-vertical float-start" style={{marginTop:20}}></i>
                                <i className="fas fa-regular fa-ellipsis-vertical float-start me-2" style={{marginTop:20}}></i>
                                <i className="fas fa-solid fa-ellipsis-vertical float-end mt-3"></i>
                                <i className="fa fa-plus float-end ms-1 mt-3" style={{color: "black", marginRight: 5}}></i>
                                <i className="fas fa-solid fa-circle-check float-end mt-3" style={{color: "green"}}></i>
                                <p className="mt-3">{module.name}</p>
                            </li>
                            <br/>
                            <li className="list-group-item list-group-item-secondary rounded-0">
                                <i className="fas fa-regular fa-ellipsis-vertical float-start" style={{marginTop:20}}></i>
                                <i className="fas fa-regular fa-ellipsis-vertical float-start me-2" style={{marginTop:20}}></i>
                                <i className="fas fa-solid fa-ellipsis-vertical float-end mt-3"></i>
                                <i className="fa fa-plus float-end ms-1 mt-3" style={{color: "black", marginRight: 5}}></i>
                                <i className="fas fa-solid fa-circle-check float-end mt-3" style={{color: "green"}}></i>
                                <p className="mt-3">{module.textboot}</p>
                            </li>
                            <br/>
                            <li className="list-group-item list-group-item-secondary rounded-0">
                                <i className="fas fa-regular fa-ellipsis-vertical float-start" style={{marginTop:20}}></i>
                                <i className="fas fa-regular fa-ellipsis-vertical float-start me-2" style={{marginTop:20}}></i>
                                <i className="fas fa-solid fa-ellipsis-vertical float-end mt-3"></i>
                                <i className="fa fa-plus float-end ms-1 mt-3" style={{color: "black", marginRight: 5}}></i>
                                <i className="fas fa-solid fa-circle-check float-end mt-3" style={{color: "green"}}></i>
                                <p className="mt-3">{module.week0}</p>
                            </li>
                            <br/>
                            <li className="list-group-item list-group-item-secondary rounded-0">
                                <i className="fas fa-regular fa-ellipsis-vertical float-start" style={{marginTop:20}}></i>
                                <i className="fas fa-regular fa-ellipsis-vertical float-start me-2" style={{marginTop:20}}></i>
                                <i className="fas fa-solid fa-ellipsis-vertical float-end mt-3"></i>
                                <i className="fa fa-plus float-end ms-1 mt-3" style={{color: "black", marginRight: 5}}></i>
                                <i className="fas fa-solid fa-circle-check float-end mt-3" style={{color: "green"}}></i>
                                <p className="mt-3">{module.week1}</p>
                            </li>   
                        </div>
                    </div>
                    
                </div>
                
            </div>
      ))
      }
    </ul>
    
  );
}
export default ModuleList;