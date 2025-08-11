"use client"
import React, {useEffect, useState} from 'react'
import {getAllStudentClassRegistrationService} from "@/services/studentClassRegistrationService";
import {DataTable} from "@/components/data-table";
import {
    getStudentClassRegistrationColumns
} from "@/app/dashboard/studentClassRegistration/studentClassRegistrationColumns";





const Page = () => {


    const [id, setId] = useState("");
    const [indexNumber, setIndexNumber] = useState("");
    const [fee,setFees] = useState("");
    const [addeddatetime, setAddeddatetime] = useState("");
    const [deletedatetime, setDeletedatetime] = useState("");
    const [modifydatetime, setModifydatetime] = useState("");
    const [note, setNote] = useState("");
    const [studentClassRegistrationList, setStudentClassRegistrationList] = useState([]);



    useEffect(()=>{
        getAllStudentClassRegistrations();
    },[])




    const getAllStudentClassRegistrations = ()=>{
        getAllStudentClassRegistrationService().then((res)=>{
            setStudentClassRegistrationList(res.data);
        }).catch((err)=>{
            console.log(err);
            setStudentClassRegistrationList([]);
        })
    }



    const refillStudentClassRegistration = ()=>{

    }


    const deleteStudentClassRegistration = ()=>{

    }


    const printStudentClassRegistration = ()=>{

    }





    return (
        <div>









        <div className="p-9">
            <DataTable columns={getStudentClassRegistrationColumns(refillStudentClassRegistration,deleteStudentClassRegistration,printStudentClassRegistration)} data={studentClassRegistrationList} ></DataTable>
        </div>

        </div>
    )
}
export default Page
