import axios from "axios";
const baseURL:string = "http://localhost:8080";


export function getAllTeacherStatusService(){
    return axios.get(`${baseURL}/teacherstatus/findall`);
}





