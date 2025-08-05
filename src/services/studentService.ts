import axios from "axios";
const baseURL : string = "http://localhost:8080";

export function getAllStudents() {
    return axios.get(`${baseURL}/student/findall`)
}


export function saveStudentService(student: any) {
    return axios.post(`${baseURL}/student`,student);
}

export function updateStudentService(student: any) {
    return axios.put(`${baseURL}/student`, student);
}


export function deleteStudentService(student: any) {
    return axios.delete(`${baseURL}/student`,{data:student});
}



