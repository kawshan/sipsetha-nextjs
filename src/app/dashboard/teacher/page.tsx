"use client"
import React, {useEffect, useState} from 'react'
import {
    deleteTeacherService,
    getAllTeachersService,
    saveTeacherService,
    updateTeacherService
} from "@/services/teacherService";
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
import {Check, ChevronDownIcon, ChevronsUpDown} from "lucide-react";
import {cn} from "@/lib/utils";
import {getAllBranchesService} from "@/services/branchService";
import {getAllTeacherStatusService} from "@/services/teacherStatusService";
import {toast} from "sonner";
import {Calendar} from "@/components/ui/calendar"


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
    const [birthdate, setBirthdate] = useState<Date | undefined>(undefined);
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
    const [dateCmbOpen, setDateCmbOpen] = useState(false);


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

    const refreshStates = () => {
        setId("");
        setTeachernum("");
        setFullname("");
        setCallingname("");
        setNic("");
        setMobile("");
        setLandno("")
        setEmail("");
        setAddress("");
        setTeacherschool("")
        setBirthdate(undefined);
        setGender("");
        setAccountname("");
        setAccountnumber("");
        setQualificationsId(null);
        setBranchId(null);
        setTeacherstatus_id(null);

    }


    const refillTeacher = (obj: any) => {
        setId(obj.id);
        setTeachernum(obj.teachernum);
        setFullname(obj.fullname);
        setCallingname(obj.callingname);
        setNic(obj.nic);
        setMobile(obj.mobile);
        setLandno(obj.landno);
        setEmail(obj.email);
        setAddress(obj.address);
        setTeacherschool(obj.teacherschool);
        setBirthdate(obj.birthdate ? new Date(obj.birthdate) : undefined);
        setGender(obj.gender);
        setAccountname(obj.accountname);
        setAccountnumber(obj.accountnumber);
        setQualificationsId(obj.qualifications_id);
        setBranchId(obj.branch_id);
        setTeacherstatus_id(obj.teacherstatus_id);

    }
    const deleteTeacher = async (obj:any) => {
        const userConfirm = confirm(`Are You Sure To Add Following Teacher
            \n Full Name is ${obj.fullname}
            \n Calling Name is ${obj.callingname};
            \n NIC is ${obj.nic}
            `)
        if (userConfirm) {
            const serverResponse = await deleteTeacherService(obj);
            if (serverResponse.data == "ok") {
                toast.success("Teacher deleted successfully!");
                getAllTeachers();
                refreshStates();

            } else {
                toast.error("Something went wrong");
            }

        }

    }
    const printTeacher = () => {


    }


    const checkErrors = () => {
        let errors = "";

        if (fullname == "") {
            errors = errors + "Full Name Cannot Be Empty \n"
        }

        if (callingname == "") {
            errors = errors + "Calling Name Cannot Be Empty \n"
        }

        if (nic == "") {
            errors = errors + "NIC Cannot Be Empty \n"
        }

        if (mobile == "") {
            errors = errors + "Mobile Cannot Be Empty \n"
        }

        if (address == "") {
            errors = errors + "Address Cannot Be Empty \n"
        }

        if (qualifications_id == null) {
            errors = errors + "Qualifications Cannot Be Empty \n"
        }

        if (teacherschool == null) {
            errors = errors + "Teachers school Cannot Be Empty \n"
        }

        if (birthdate == undefined) {
            errors = errors + "Birthdate cannot be Empty \n"
        }

        if (gender == null) {
            errors = errors + "Gender cannot be Empty \n"
        }

        if (accountname == null) {
            errors = errors + "Account Name cannot be Empty \n"
        }

        if (accountnumber == null) {
            errors = errors + "Account Number cannot be Empty \n"
        }

        if (branch_id == null) {
            errors = errors + "Branch cannot be Empty \n"
        }

        if (teacherstatus_id == null) {
            errors = errors + "Teacher status cannot be Empty \n"
        }


        return errors;
    }


    const addTeacher = async () => {
        const saveObject = {
            fullname,
            callingname,
            nic,
            mobile,
            landno,
            email,
            address,
            qualifications_id,
            teacherschool,
            birthdate,
            gender,
            accountname,
            accountnumber,
            branch_id,
            teacherstatus_id
        };

        let errors = checkErrors();

        if (errors == "") {
            const userConfirm = confirm(`Are You Sure To Add Following Teacher
            \n Full Name is ${saveObject.fullname}
            \n Calling Name is ${saveObject.callingname};
            \n NIC is ${saveObject.nic}
            `)
            if (userConfirm) {
                const serverResponse = await saveTeacherService(saveObject);
                if (serverResponse.data == "ok") {
                    toast.success("Teacher Added successfully!");
                    refreshStates();
                    getAllTeachers();
                }
            }


        } else {
            toast.error(`You Have Some Errors \n ${errors}`)
        }
    }


    const updateTeacher = async () => {
        const updateObject = {
            id,
            teachernum,
            fullname,
            callingname,
            nic,
            mobile,
            landno,
            email,
            address,
            teacherschool,
            birthdate,
            gender,
            accountname,
            accountnumber,
            qualifications_id,
            branch_id,
            teacherstatus_id,
        };


        let errors = checkErrors();

        if (errors == "") {
            const userConfirm = confirm(`Are You Sure To Add Following Teacher
            \n Full Name is ${updateObject.fullname}
            \n Calling Name is ${updateObject.callingname};
            \n NIC is ${updateObject.nic}
            `)
            if (userConfirm) {
                const serverResponse = await updateTeacherService(updateObject);
                if (serverResponse.data == "ok") {
                    toast.success("Teacher updated succesfully");
                    refreshStates();
                    getAllTeachers();
                }
            }


        } else {
            toast.error(`You Have Some Errors \n ${errors}`)
        }


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
                        {/*<Input type="date" className="h-[50px]" id="textDOB" value={birthdate}*/}
                        {/*       onChange={(e) => setBirthdate(e.target.value)}/>*/}

                        <Popover open={dateCmbOpen} onOpenChange={setDateCmbOpen}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className="w-70 justify-between h-[50px]">
                                    {birthdate ? birthdate.toLocaleDateString() : "Select Birth Date"}
                                    <ChevronDownIcon/>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                <Calendar
                                mode="single" selected={birthdate} captionLayout="dropdown"
                                onSelect={(date)=>{
                                    setBirthdate(date);
                                    setDateCmbOpen(false);
                                }}
                                />
                            </PopoverContent>
                        </Popover>


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
                                    {branch_id ? branch_id.name + " (" + branch_id.bank_id.name + ")" : "Select Branch"}
                                    <ChevronsUpDown className="opacity-50"/>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <Command>
                                    <CommandInput placeholder="Select Branch"/>
                                    <CommandList>
                                        <CommandEmpty>NO Branch Found</CommandEmpty>
                                        <CommandGroup>
                                            {branchList.map((branch: any, index: number) => (
                                                <CommandItem key={index} value={branch.name}
                                                             onSelect={() => {
                                                                 setBranchId(branch_id?.id === branch.id ? null : branch)
                                                             }}
                                                >
                                                    {branch.name + " (" + branch.bank_id.name + ")"}
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
                        <Select value={teacherstatus_id?.name ?? ''} onValueChange={(selectedValue) => {
                            const selected = teacherStatusList.find((t) => t.name === selectedValue);
                            setTeacherstatus_id(selected);
                        }}>
                            <SelectTrigger className="w-full min-h-[50px]">
                                <SelectValue placeholder="Select Teacher Status"/>
                            </SelectTrigger>
                            <SelectContent>
                                {teacherStatusList.map((ts: any, index: number) => (
                                    <SelectItem value={ts.name} key={index}>{ts.name}</SelectItem>
                                ))}
                            </SelectContent>

                        </Select>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mt-20">
                    <div className="col-span-4">
                        <Button type="button" onClick={refreshStates}>reset</Button>
                    </div>
                    <div className="col-span-4 flex justify-center items-center">
                        <Button type="button" onClick={updateTeacher}>Update</Button>
                    </div>
                    <div className="col-span-4 flex justify-end items-center">
                        <Button type="button" onClick={addTeacher}>save</Button>
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
