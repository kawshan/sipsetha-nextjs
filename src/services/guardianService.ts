import axios from "axios";

const baseUrl:string = "http://localhost:8080";


export function getAllGuardianService():any{
    return axios.get(`${baseUrl}/guardian/findall`);
}