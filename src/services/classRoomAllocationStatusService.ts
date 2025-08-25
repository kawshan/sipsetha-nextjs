import axios from "axios";
const baseUrl = "http://localhost:8080";


export function getAllClassRoomAllocationStatusServices() {
    return axios.get(`${baseUrl}/allocationstatus/findall`);
}






