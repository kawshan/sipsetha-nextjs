import axios from "axios";
const baseURL :string = "http://localhost:8080";



export function getAllAttendanceStatusService() {
    return axios.get(baseURL + "/attendancestatus/findall");
}