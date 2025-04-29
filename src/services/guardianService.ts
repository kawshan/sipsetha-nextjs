import axios from "axios";

const baseUrl:string = "http://localhost:8080";


export function getAllGuardianService():any{
    return axios.get(`${baseUrl}/guardian/findall`);
}

export function saveGuardianService(guardianObject:any):any{
    return axios.post(`${baseUrl}/guardian`, guardianObject);
}
















