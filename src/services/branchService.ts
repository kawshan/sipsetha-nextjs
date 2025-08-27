import axios from "axios";
const baseURL:string = "http://localhost:8080";


export function getAllBranchesService(){
    return axios.get(`${baseURL}/branch/findall`);
}
