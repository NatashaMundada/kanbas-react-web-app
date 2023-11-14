import axios from "axios";
const COURSES_URL = "https://kanbas-node-server-app-1.onrender.com/api/courses";
const ASSIGNMENTS_URL = "https://kanbas-node-server-app-1.onrender.com/api/assignments";
export const deleteAssignments = async (assignmentId) => {
  const response = await axios
    .delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
  return response.data;
};

export const createAssignments = async (courseId, module) => {
    const response = await axios.post(
      `${COURSES_URL}/${courseId}/assignments`,
      module
    );
    return response.data;
  };

  
export const findAssignmentsForCourse = async (courseId) => {
    
    const response = await axios
      .get(`${COURSES_URL}/${courseId}/assignments`);
    return response.data;
  };