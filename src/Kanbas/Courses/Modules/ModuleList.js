import React , { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import './index.css';
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
  } from "./modulesReducer";
function ModuleList({ isSmall }) {
  const { courseId } = useParams();
  
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  

  const moduleSizeClass = isSmall ? "smallmodule" : "largemodule";
  console.log(moduleSizeClass)
  return (
    <div>
        <div className={moduleSizeClass}
            style={{marginLeft:10, marginTop:70, position:"absolute"}}>
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
        </div>
        <div style={{marginTop:130, position:"absolute"}}>
            <ul className="list-group" >
                <li className="list-group-item ms-4">
                    
                    <input value={module.name}
                    onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                    /><br/>
                    <textarea value={module.description}
                    onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
                }
                    /><br/>
                    <button className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
                    <button className="btn btn-primary ms-2" onClick={() => dispatch(updateModule(module))}>Update</button>

                </li>

                {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <div>
                            <div className={moduleSizeClass}>
                                <div key={index} className="list-group" style={{ marginTop:10, marginLeft: 20}}>
                                    <li className="list-group-item list-group-item-secondary rounded-0">
                                        <i className="fas fa-regular fa-ellipsis-vertical float-start" style={{marginTop:20}} ></i>
                                        <i className="fas fa-regular fa-ellipsis-vertical float-start me-1" style={{marginTop:20}}></i>
                                        <i className="fas fa-solid fa-ellipsis-vertical float-end mt-3"></i>
                                        <i className="fa fa-plus float-end ms-1 mt-3" style={{color: "black", marginRight: 5}}></i>
                                        <i className="fas fa-solid fa-circle-check float-end mt-3" style={{color: "green"}}></i>
                                        <button className="float-end me-2 mt-2 btn btn-danger" onClick={() => dispatch(deleteModule(module._id))}>Delete</button>
                                        <button className="float-end btn btn-success mt-2 me-2" onClick={() => dispatch(setModule(module))}>Edit</button>
                                        <p className="mt-3">{module.name}</p>
                                        <p>{module.description}</p>
                                    </li>
                                    <br/>  
                                </div>
                            </div>
                            
                        </div>
                    ))}
            </ul>
        </div>
    </div>
  );
}
export default ModuleList;