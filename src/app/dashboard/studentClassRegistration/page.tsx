"use client"
import React, {useEffect, useState} from 'react'
import {getAllStudentClassRegistrationService} from "@/services/studentClassRegistrationService";
import {DataTable} from "@/components/data-table";
import {
    getStudentClassRegistrationColumns
} from "@/app/dashboard/studentClassRegistration/studentClassRegistrationColumns";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";


const Page = () => {


    const [id, setId] = useState("");
    const [indexNumber, setIndexNumber] = useState("");
    const [fee, setFees] = useState("");
    const [addeddatetime, setAddeddatetime] = useState("");
    const [deletedatetime, setDeletedatetime] = useState("");
    const [modifydatetime, setModifydatetime] = useState("");
    const [note, setNote] = useState("");
    const [studentClassRegistrationList, setStudentClassRegistrationList] = useState([]);


    useEffect(() => {
        getAllStudentClassRegistrations();
    }, [])


    const lblHeading = 'Student Class Registration Master';



    const getAllStudentClassRegistrations = () => {
        getAllStudentClassRegistrationService().then((res) => {
            setStudentClassRegistrationList(res.data);
        }).catch((err) => {
            console.log(err);
            setStudentClassRegistrationList([]);
        })
    }


    const refillStudentClassRegistration = () => {

    }


    const deleteStudentClassRegistration = () => {

    }


    const printStudentClassRegistration = () => {

    }


    return (
        <div>

            <div className="text-center bg-slate-900 dark:bg-slate-900 p-6 rounded-full text-white dark:text-white mb-5">
                <TextGenerateEffect words={lblHeading}/>
            </div>

            <div className="p-9">
                    <div className="grid grid-cols-12 gap-4 mt-5">
                        <div className="col-span-6 font-semibold">Select Student <i className="text-red-800">*</i> </div>
                        <div className="col-span-6"></div>
                    </div>


                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6 font-semibold">Select Class Offering <i className="text-red-800">*</i> </div>
                </div>



                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6 font-semibold">Fee <i className="text-red-800">*</i> </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6 font-semibold">Registration Status</div>
                </div>

                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6 font-semibold">Registration Type</div>
                </div>



                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6 font-semibold">Note</div>
                </div>


                <div className="grid grid-cols-12 gap-4 mt-5">

                    <div className="col-span-4">
                        <Button variant="destructive">Reset</Button>
                    </div>

                    <div className="col-span-4 flex justify-center items-center">
                        <Button variant="warning">Update</Button>
                    </div>


                    <div className="col-span-4 flex justify-end items-end">
                        <Button variant="success">Save</Button>
                    </div>


                </div>


            </div>


            <div className="p-9">
                <DataTable
                    columns={getStudentClassRegistrationColumns(refillStudentClassRegistration, deleteStudentClassRegistration, printStudentClassRegistration)}
                    data={studentClassRegistrationList}></DataTable>
            </div>

        </div>
    )
}
export default Page
