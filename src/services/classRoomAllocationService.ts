import axios from "axios";
const baseUrl = "http://localhost:8080";


export function getAllClassRoomAllocationServices() {
    return axios.get(`${baseUrl}/classroomallocation/findall`);
}

export function saveClassRoomAllocationService(classRoomAllocationService :any){
    return axios.post(`${baseUrl}/classroomallocation`, classRoomAllocationService)
}

export function updateClassRoomAllocationService(classRoomAllocationService :any){
    return axios.put(`${baseUrl}/classroomallocation`, classRoomAllocationService)
}

export function deleteClassRoomAllocationService(classRoomAllocationService :any){
    return axios.delete(`${baseUrl}/classroomallocation`,{data:classRoomAllocationService});
}


