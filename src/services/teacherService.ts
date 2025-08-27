import axios from "axios";
const BASE_URL = "http://localhost:8080";

export function getAllTeachersService() {
    return axios.get(`${BASE_URL}/teacher/findall`);
}

export function saveTeacherService(teacher:any ) {
    return axios.post(`${BASE_URL}/teacher`, teacher);
}

export function updateTeacherService(teacher:any ) {
    return axios.put(`${BASE_URL}/teacher`, teacher);
}


export function deleteTeacherService(teacher:any ) {
    return axios.delete(`${BASE_URL}/teacher`,{data:teacher});
}




