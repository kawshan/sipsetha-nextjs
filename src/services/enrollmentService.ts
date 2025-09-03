import axios from "axios";
const baseURL = "http://localhost:8080";

export function getAllEnrollmentService(){
    return axios.get(`${baseURL}/enrolment/findall`)
}

export function saveEnrollmentService(enrollment:any){
    return axios.post(`${baseURL}/enrolment`,enrollment)
}


export function updateEnrollmentService(enrollment:any){
    return axios.put(`${baseURL}/enrolment`,enrollment)
}


export function deleteEnrollmentService(enrollment:any){
    return axios.delete(`${baseURL}/enrolment`,{data:enrollment})
}

