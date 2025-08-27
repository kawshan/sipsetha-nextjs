"use client"
import React, {useEffect, useState} from 'react'
import {getAllTeachersService} from "@/services/teacherService";
import {DataTable} from "@/components/data-table";
import {getTeacherColumns} from "@/app/dashboard/teacher/getTeacherColumns";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {getAllQualificationService} from "@/services/qualificationsService";

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {Check, ChevronsUpDown} from "lucide-react";
import {cn} from "@/lib/utils";
import {getAllBranchesService} from "@/services/branchService";
import {getAllTeacherStatusService} from "@/services/teacherStatusService";

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
    const [qualificationList, setQualificationList] = useState([]);
    const [branchList, setBranchList] = useState([]);
    const [teacherStatusList, setTeacherStatusList] = useState([]);



    const [branchCmbOpen, setBranchCmbOpen] = useState(false);


    useEffect(() => {
        getAllTeachers();
        getAllQualificationList();
        getAllBranch();
        getAllTeacherStatus();
    }, [])


    const getAllTeachers = async () => {
        const serverResponse = await getAllTeachersService();
        setTeacherlist(serverResponse.data);
    }


    const getAllQualificationList = async () => {
        const serverResponse = await getAllQualificationService();
        setQualificationList(serverResponse.data);

    }



    const getAllBranch = async () => {
        const serverResponse = await getAllBranchesService();
        setBranchList(serverResponse.data);
    }

    const getAllTeacherStatus = async () => {
        const serverResponse = await getAllTeacherStatusService();
        setTeacherStatusList(serverResponse.data);
    }


    const refillTeacher = () => {


    }
    const deleteTeacher = () => {


    }
    const printTeacher = () => {


    }


    const lblHeading = 'Teacher Information Master';


    const genderOptions = ["male", "female"];


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
                        <Input type="text" className="h-[50px]" id="textFullName" value={fullname}
                               onChange={(e) => setFullname(e.target.value)}/>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="textCallingName"> Calling Name <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" id="textCallingName" value={callingname}
                               onChange={(e) => setCallingname(e.target.value)}/>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="textNIC"> NIC <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" id="textNIC" value={nic}
                               onChange={(e) => setNic(e.target.value)}/>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="textMobile"> Mobile <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" id="textMobile" value={mobile}
                               onChange={(e) => setMobile(e.target.value)}/>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="textLandNo"> Land No <i className="text-blue-500">(Optional)</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" id="textLandNo" value={landno}
                               onChange={(e) => setLandno(e.target.value)}/>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="textEmail"> Email <i className="text-blue-500">(Optional)</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" id="textEmail" value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="textAddress"> Address <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" id="textAddress" value={address}
                               onChange={(e) => setAddress(e.target.value)}/>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="selectQualification"> Qualification <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Select
                            value={qualifications_id?.name ?? ''} onValueChange={(selectedValue) => {
                            const selected = qualificationList.find((q) => q.name === selectedValue);
                            setQualificationsId(selected);
                        }}
                        >
                            <SelectTrigger className="w-full min-h-[50px]">
                                <SelectValue placeholder="Select Qualification"/>
                            </SelectTrigger>
                            <SelectContent>
                                {qualificationList.map((qualification) => (
                                    <SelectItem value={qualification.name}
                                                key={qualification.name}>{qualification.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="textTeachingSchool"> Teaching School <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" id="textTeachingSchool" value={teacherschool}
                               onChange={(e) => setTeacherschool(e.target.value)}/>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="textDOB"> Date Of Birth <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" id="textDOB" value={birthdate}
                               onChange={(e) => setBirthdate(e.target.value)}/>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="selectGender"> Gender <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Select value={gender} onValueChange={setGender}>
                            <SelectTrigger className="w-full min-h-[50px]">
                                <SelectValue placeholder="Select Gender"/>
                            </SelectTrigger>
                            <SelectContent>
                                {genderOptions.map((option: string, index: number) => (
                                    <SelectItem value={option} key={index}>{option}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="selectAccountName"> Account Name <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" value={accountname} onChange={(e) => setAccountname(e.target.value)}
                               placeholder="Enter Account Name"/>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="textBankAccountNumber"> Account Number <i className="text-red-500">*</i>
                        </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" id="textBankAccountNumber" value={accountnumber}
                               onChange={(e) => setAccountnumber(e.target.value)}/>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="selectBranch"> Branch <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Popover open={branchCmbOpen} onOpenChange={setBranchCmbOpen}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" role="combobox" className="w-full justify-between h-[50px]">
                                    {branch_id? branch_id.name + " ("+ branch_id.bank_id.name + ")" : "Select Branch"}
                                        <ChevronsUpDown className="opacity-50"/>
                                        </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <Command>
                                    <CommandInput placeholder="Select Branch" />
                                    <CommandList>
                                        <CommandEmpty>NO Branch Found</CommandEmpty>
                                        <CommandGroup>
                                            {branchList.map((branch:any,index:number) => (
                                                <CommandItem key={index} value={branch.name}
                                                onSelect={()=>{
                                                    setBranchId(branch_id?.id === branch.id ? null : branch)
                                                }}
                                                >
                                                    {branch.name + " ("+ branch.bank_id.name + ")"}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="selectStatus"> Status <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                            <Select value={teacherstatus_id?.name ?? ''} onValueChange={(selectedValue)=>{
                                const selected = teacherStatusList.find((t)=> t.name === selectedValue);
                                setTeacherstatus_id(selected);
                            }}>
                                <SelectTrigger className="w-full min-h-[50px]">
                                    <SelectValue placeholder="Select Teacher Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    {teacherStatusList.map((ts:any,index:number)=>(
                                        <SelectItem value={ts.name} key={index}>{ts.name}</SelectItem>
                                    ))}
                                </SelectContent>

                            </Select>
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
