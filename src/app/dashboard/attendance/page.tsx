"use client"
import React, {useEffect, useState} from 'react'
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {DataTable} from "@/components/data-table";
import {getAttendanceColumns} from "@/app/dashboard/attendance/attendanceColumns";
import {getAllAttendanceServices} from "@/services/attendanceService";

const Page = () => {

    const [id,setId] = useState(null);
    const [addeduser, setAddeduser] = useState(null);
    const [updateuser, setUpdateuser] = useState(null);
    const [deleteuser, setDeleteuser] = useState(null);
    const [addeddate, setAddeddate] = useState("");
    const [updatedate, setUpdatedate] = useState("");
    const [deletedate, setDeletedate] = useState("");
    const [note, setNote] = useState("");
    const [attendancestatus_id,setAttendancestatus_id] = useState(null);
    const [student_id,setStudentId] = useState(null);
    const [classoffering_id,setClassoffering_id] = useState(null);



    const [attendanceList,setAttendanceList] = useState([]);







const refillAttendance = ()=>{}
const deleteAttendance = ()=>{}
const printAttendance = ()=>{}

    useEffect(()=>{
      getAllAttendance();
    },[])



    const  getAllAttendance = async ()=>{
        const serverResponse = await getAllAttendanceServices();
        setAttendanceList(serverResponse.data);
        console.log(serverResponse.data);
    }






    const lblHeading = 'Attendance Master';


    return (
        <div>

            <div
                className="text-center bg-slate-900 dark:bg-slate-900 p-6 rounded-full text-white dark:text-white mb-5">
                <TextGenerateEffect words={lblHeading}/>
            </div>




            <div className="p-9">
                <DataTable columns={getAttendanceColumns(refillAttendance,deleteAttendance,printAttendance)} data={attendanceList} />
            </div>



        </div>
    )
}
export default Page
