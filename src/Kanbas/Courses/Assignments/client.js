import axios from "axios";
const API_LAB_BASE = process.env.REACT_APP_API_LAB_BASE;
const ASSIGNMENTS_URL = `${API_LAB_BASE}/api/courses`;
const URL = `${API_LAB_BASE}/api/assignments`;
export const getAssignmentsForCourse = async(courseId) => {
    const response = await axios.get(`${ASSIGNMENTS_URL}/${courseId}/assignments`);
    return response.data;
};

export const createAssignment = async(courseId, assignment) => {
    const response = await axios.post(`${ASSIGNMENTS_URL}/${courseId}/assignments`, assignment);
    return response.data;
};

export const updateAssignment = async(assignmentId, assignment) => {
    const response = await axios.put(`${URL}/${assignmentId}`, assignment);
    return response.data;
};

export const deleteAssignment = async(assignmentId) => {
    const response = await axios.delete(`${URL}/${assignmentId}`);
    return response.data;
};