import axios from "axios";
const baseURL : string = "http://localhost:8080";

export function getAllSubjectsServices() {
    return axios.get(`${baseURL}/subject/findall`)
}



