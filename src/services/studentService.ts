import axios from "axios";
const baseURL : string = "http://localhost:8080";

export function getAllStudents() {
    return axios.get(`${baseURL}/student/findall`)
}