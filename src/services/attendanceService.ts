import axios from "axios";
const baseURL = "http://localhost:8080";


export function getAllAttendanceServices() {
    return axios.get(`${baseURL}/attendance/findall`)
}





