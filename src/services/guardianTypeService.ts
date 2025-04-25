import axios from "axios";

const baseUrl : string = "http://localhost:8080";

export function getGuardianTypeService():any{
    return axios.get(`${baseUrl}/guardiantype/findall`);
}































