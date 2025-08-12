import axios from "axios";
const baseURL = "http://localhost:8080";

export function getAllRegistrationStatusService(){
    return axios.get(`${baseURL}/registrationstatus/findall`)
}