import axios from "axios";
const baseURL = "http://localhost:8080";

export function getAllEnrollmentStatusService(){
    return axios.get(`${baseURL}/enrolmentstatus/findall`)
}