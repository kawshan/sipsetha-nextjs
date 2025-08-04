import axios from "axios";
const baseURL:string = "http://localhost:8080";


export function getAllGrades():any{
    return axios.get(`${baseURL}/grade/findall`);

}