import axios from "axios";
const baseURL : string = "http://localhost:8080";

export function getAllWeekdayService() {
    return axios.get(`${baseURL}/weekday/findall`);
}





