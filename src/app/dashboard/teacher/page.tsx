"use client"
import React, {useEffect, useState} from 'react'
import {getAllTeachersService} from "@/services/teacherService";
import {DataTable} from "@/components/data-table";
import {getTeacherColumns} from "@/app/dashboard/teacher/getTeacherColumns";

const Page = () => {

    const [id, setId] = useState("");
    const [teachernum, setTeachernum] = useState("");
    const [fullname, setFullname] = useState("");
    const [callingname, setCallingname] = useState("");
    const [nic, setNic] = useState("");
    const [mobile, setMobile] = useState("");
    const [landno, setLandno] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [teacherschool, setTeacherschool] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [accountname, setAccountname] = useState("");
    const [accountnumber, setAccountnumber] = useState("");
    const [qualifications_id, setQualificationsId] = useState(null);
    const [branch_id, setBranchId] = useState(null);
    const [teacherstatus_id, setTeacherstatus_id] = useState(null);


    const [teacherList, setTeacherlist] = useState([]);


    useEffect(() => {
        getAllTeachers();
    }, [])


    const getAllTeachers = async () => {
        const serverResponse = await getAllTeachersService();
        setTeacherlist(serverResponse.data);
    }


    const refillTeacher = () => {



    }
    const deleteTeacher = () => {



    }
    const printTeacher = () => {



    }


    return (
        <div>





            <div className="p-9">
                <DataTable columns={getTeacherColumns(refillTeacher,deleteTeacher,printTeacher)} data={teacherList} />
            </div>


        </div>
    )
}
export default Page
