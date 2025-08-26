import axios from "axios";
const BASE_URL = "http://localhost:8080";

export function getAllTeachersService() {
    return axios.get(`${BASE_URL}/teacher/findall`);
}





