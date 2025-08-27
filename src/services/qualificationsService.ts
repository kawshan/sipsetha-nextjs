import axios from "axios";
const baseURL:string = "http://localhost:8080";


export function getAllQualificationService(){
    return axios.get(`${baseURL}/qualifications/findall`);
}





