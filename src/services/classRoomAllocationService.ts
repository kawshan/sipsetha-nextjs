import axios from "axios";
const baseUrl = "http://localhost:8080";


export function getAllClassRoomAllocationServices() {
    return axios.get(`${baseUrl}/classroomallocation/findall`);
}


