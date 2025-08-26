"use client"
import React, {useEffect, useState} from 'react'
import {getAllTeachersService} from "@/services/teacherService";
import {DataTable} from "@/components/data-table";
import {getTeacherColumns} from "@/app/dashboard/teacher/getTeacherColumns";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

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

    const lblHeading = 'Teacher Information Master';



    return (
        <div>


            <div
                className="text-center bg-slate-900 dark:bg-slate-900 p-6 rounded-full text-white dark:text-white mb-5">
                <TextGenerateEffect words={lblHeading}/>
            </div>



            <div className="p-9 mb-20">

                <div className="grid grid-cols-12 gap-4 mb-5">
                   <p className="text-lg text-red-500"> Required *</p>
                </div>



                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="textFullName"> Full Name <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" id="textFullName" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                    </div>

                </div>



                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="textCallingName"> Calling Name <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" id="textCallingName" value={callingname} onChange={(e) => setCallingname(e.target.value)} />
                    </div>

                </div>



                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="textNIC"> NIC <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" id="textNIC" value={nic} onChange={(e) => setNic(e.target.value)} />
                    </div>

                </div>




                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="textMobile"> Mobile <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" id="textMobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    </div>

                </div>




                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="textLandNo"> Land No <i className="text-blue-500">(Optional)</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" id="textLandNo" value={landno} onChange={(e) => setLandno(e.target.value)} />
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="textEmail"> Email <i className="text-blue-500">(Optional)</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" id="textEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                </div>



                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="textAddress"> Address <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" id="textAddress" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>

                </div>



                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="selectQualification"> Qualification <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">

                    </div>

                </div>



                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="textTeachingSchool"> Teaching School <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" id="textTeachingSchool" value={teacherschool} onChange={(e) => setTeacherschool(e.target.value)} />
                    </div>

                </div>



                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="textDOB"> Date Of Birth <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" id="textDOB" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                    </div>

                </div>



                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="selectGender"> Gender <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">

                    </div>

                </div>



                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="selectAccountName"> Account Name <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">

                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="textBankAccountNumber"> Account Number <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" id="textBankAccountNumber" value={accountnumber} onChange={(e) => setAccountnumber(e.target.value)} />
                    </div>

                </div>



                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="selectBranch"> Branch <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">

                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="selectStatus"> Status <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">

                    </div>

                </div>




            </div>




            <div className="p-9">
                <DataTable columns={getTeacherColumns(refillTeacher, deleteTeacher, printTeacher)} data={teacherList}/>
            </div>


        </div>
    )
}
export default Page
