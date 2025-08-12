"use client"
import React, {useEffect, useState} from 'react'
import {
    deleteStudentRegistrationService,
    getAllStudentClassRegistrationService, saveStudentRegistrationService, updateStudentRegistrationService
} from "@/services/studentClassRegistrationService";
import {DataTable} from "@/components/data-table";
import {
    getStudentClassRegistrationColumns
} from "@/app/dashboard/studentClassRegistration/studentClassRegistrationColumns";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {getAllStudents} from "@/services/studentService";
import {getAllRegistrationStatusService} from "@/services/registrationStatusService";
import {getAllClassOfferingService} from "@/services/classOfferingService";
import {getAllRegisteredTypeService} from "@/services/registeredTypeService";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Check, ChevronsUpDown} from "lucide-react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {cn} from "@/lib/utils";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";


const Page = () => {


    const [id, setId] = useState("");
    const [indexnumber, setIndexNumber] = useState("");
    const [fee, setfee] = useState("");
    const [addeddatetime, setAddeddatetime] = useState("");
    const [deletedatetime, setDeletedatetime] = useState("");
    const [modifydatetime, setModifydatetime] = useState("");
    const [note, setNote] = useState("");
    const [student_id, setStudentId] = useState(null);
    const [classoffering_id, setClassofferingId] = useState(null);
    const [registrationstatus_id, setRegistrationstatus_id] = useState(null);
    const [registerdtype_id, setRegisterdtypeId] = useState(null);


    const [studentClassRegistrationList, setStudentClassRegistrationList] = useState([]);
    const [studentList, setStudentList] = useState([]);
    const [classOfferingList, setClassOfferingList] = useState([]);
    const [registrationStatusList, setRegistrationStatusList] = useState([]);
    const [registeredTypeList, setRegisteredTypeList] = useState([]);


    const [studentOpen, setStudentOpen] = useState(false);
    const [classOfferingOpen, setClassOfferingOpen] = useState(false);


    const [updateButton, setUpdateButton] = useState(true);
    const [saveButton, setSaveButton] = useState(false);


    useEffect(() => {
        getAllStudentClassRegistrations();
        getAllStudentsList();
        getAllClassOfferings();
        getAllRegistrationStatus();
        getAllRegistrationType();
    }, [])




    const refreshForm = ()=>{
        setId("");
        setIndexNumber("");
        setfee("")
        setAddeddatetime("");
        setNote("");
        setStudentId(null);
        setClassofferingId(null);
        setRegistrationstatus_id(null);
        setRegisterdtypeId(null);
    }










    const lblHeading = 'Student Class Registration Master';


    // for table
    const getAllStudentClassRegistrations = () => {
        getAllStudentClassRegistrationService().then((res) => {
            setStudentClassRegistrationList(res.data);
        }).catch((err) => {
            console.log(err);
            setStudentClassRegistrationList([]);
        })
    }

    // for select combo
    const getAllStudentsList = () => {
        getAllStudents().then((res) => {
            setStudentList(res.data);
        }).catch((err) => {
            console.log(err);
            setStudentList([]);
        })
    }


    //for class offering
    const getAllClassOfferings = () => {
        getAllClassOfferingService().then((res) => {
            setClassOfferingList(res.data);
        }).catch((err) => {
            console.log(err);
            setClassOfferingList([]);
        })
    }


    // for select combo
    const getAllRegistrationStatus = () => {
        getAllRegistrationStatusService().then((res) => {
            setRegistrationStatusList(res.data);
        }).catch((err) => {
            console.log(err);
            setRegistrationStatusList([]);
        })
    }

    //for select combo
    const getAllRegistrationType = () => {
        getAllRegisteredTypeService().then((res) => {
            setRegisteredTypeList(res.data);
        }).catch((err) => {
            console.log(err);
            setRegisteredTypeList([]);
        })
    }


    const refillStudentClassRegistration = (ob: any) => {
        setId(ob.id);
        setIndexNumber(ob.indexnumber);
        setStudentId(ob.student_id);
        setClassofferingId(ob.classoffering_id);
        setfee(ob.fee);
        setRegistrationstatus_id(ob.registrationstatus_id);
        setRegisterdtypeId(ob.registerdtype_id);
        setAddeddatetime(ob.addeddatetime);
        setNote(ob.note);

        setSaveButton(true)
    }


    const deleteStudentClassRegistration = (ob: any) => {

        const userConfirm = confirm(`Are You Sure To Delete Following Registration? \n 
        Index Number is ${ob.student_id.stunum}
        Student name is ${ob.student_id.firstname + " " + ob.student_id.lastname}
        fee is ${ob.fee}
        Registration status is ${ob.registrationstatus_id.name}
        Registration Type is ${ob.registerdtype_id.name}
        `);
        if (userConfirm) {
            deleteStudentRegistrationService(ob).then((res) => {
                console.log(res);
                alert("Successfully Deleted");
                getAllStudentClassRegistrations();
            }).catch((err) => {
                console.log(err);
                alert("something went wrong!");
                getAllStudentClassRegistrations();
            })
        }


    }


    const updateStudentClassRegistration = () => {
        const updateObject = {
            id,
            indexnumber,
            student_id,
            classoffering_id,
            fee,
            addeddatetime,
            registrationstatus_id,
            registerdtype_id,
            note
        }
        const userConfirm = confirm(`Are You Sure To Update Following Registration? `);
        if (userConfirm) {
            updateStudentRegistrationService(updateObject).then((res) => {
                console.log(res);
                alert(`Successfully Update ${res}`);
                getAllStudentClassRegistrations();
            }).catch((err: any) => {
                console.log(err);
                alert("something went wrong!");
                getAllStudentClassRegistrations();
            })
        }
    }


    const checkErrors = () => {
        let errors = " ";

        if (student_id == null) {
            errors = errors + "Student cannot be empty \n";
        }

        if(classoffering_id == null) {
            errors=errors+"class offering cannot be empty \n";
        }

        if (registrationstatus_id == null) {
            errors = errors + "Status cannot be empty \n";
        }

        if (registerdtype_id == null) {
            errors = errors + "Registered Type cannot be empty \n";
        }


        return errors;
    }


    const saveStudentRegistration = async () => {
        const saveObject = {student_id, classoffering_id, fee, registrationstatus_id, registerdtype_id, note}
        let errors = checkErrors();
        if (errors==" ") {
            const userConfirm = confirm(`Are You Sure To add Following Registration? \n`);
            if (userConfirm) {
                const serverResponse = await  saveStudentRegistrationService(saveObject);

                if (serverResponse.data == "ok"){
                    alert("Successfully Saved");
                    getAllStudentClassRegistrations();
                    refreshForm();
                }else {
                    alert(`something went wrong! ${serverResponse}`);
                    console.log(serverResponse);
                    getAllStudentClassRegistrations();
                }
            }
        }else {
            alert(`you have some errors \n ${errors}`)
        }
    }


    const printStudentClassRegistration = () => {

    }


    return (
        <div>

            <div
                className="text-center bg-slate-900 dark:bg-slate-900 p-6 rounded-full text-white dark:text-white mb-5">
                <TextGenerateEffect words={lblHeading}/>
            </div>

            <div className="p-9">
                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6 font-semibold">Select Student <i className="text-red-800">*</i></div>
                    <div className="col-span-6">

                        <Popover open={studentOpen} onOpenChange={setStudentOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={studentOpen}
                                    className="w-full justify-between"
                                >
                                    {student_id ? student_id.firstname + " " + student_id.lastname : "Select Student"}
                                    <ChevronsUpDown className="opacity-50"/>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[1000px] p-0">
                                <Command>
                                    <CommandInput placeholder="Search Student" className="h-9"/>
                                    <CommandList>
                                        <CommandEmpty>No Student Found</CommandEmpty>
                                        <CommandGroup>
                                            {studentList.map((student) => (
                                                <CommandItem
                                                    key={student.id}
                                                    value={student.firstname + " " + student.lastname}
                                                    onSelect={() => {
                                                        setStudentId(
                                                            student_id?.id === student.id ? null : student
                                                        )
                                                        setStudentOpen(false)
                                                    }}
                                                >
                                                    {student.firstname + " " + student.lastname}
                                                    <Check
                                                        className={cn(
                                                            "ml-auto",
                                                            student_id?.id === student.id
                                                                ? "opacity-100"
                                                                : "opacity-0",
                                                        )}
                                                    />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>


                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6 font-semibold">Select Class Offering <i className="text-red-800">*</i>
                    </div>
                    <div className="col-span-6">

                        <Popover open={classOfferingOpen} onOpenChange={setClassOfferingOpen}>
                            <PopoverTrigger asChild>
                                <Button className="w-full justify-between"
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={classOfferingOpen}>
                                    {classoffering_id ? classoffering_id.classname : "select class name"}
                                    <ChevronsUpDown className="opacity-50"/>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[1000px] p-0">
                                <Command>
                                    <CommandInput placeholder="Search ClassName"/>
                                    <CommandList>
                                        <CommandEmpty>No Class Found</CommandEmpty>
                                        <CommandGroup>
                                            {classOfferingList.map((cls) => (
                                                <CommandItem
                                                    key={cls.id}
                                                    value={cls.classname}
                                                    onSelect={() => {
                                                        setClassofferingId(
                                                            classoffering_id?.id === cls.id ? null : cls
                                                        )
                                                        setClassOfferingOpen(false);
                                                        setfee(cls.fees ?? "");
                                                    }}
                                                >
                                                    {cls.classname}
                                                    <Check
                                                        className={cn(
                                                            "ml-auto",
                                                            classoffering_id?.id === cls.id
                                                                ? "opacity-100"
                                                                : "opacity-0",
                                                        )}

                                                    />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>


                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6 font-semibold">fee <i className="text-red-800">*</i></div>
                    <div className="col-span-6">
                        <Input className="w-full h-[50px]" value={fee} disabled={true}
                               onChange={(e) => setfee(e.target.value)}></Input>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6 font-semibold">Registration Status</div>
                    <div className="col-span-6">
                        <Select value={registrationstatus_id?.name ?? ''} onValueChange={(selectedValue) => {
                            const selected = registrationStatusList.find(s => s.name === selectedValue);
                            setRegistrationstatus_id(selected);
                        }}>

                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="select status"/>
                            </SelectTrigger>
                            <SelectContent>
                                {registrationStatusList.map((status: any, index: number) => (
                                    <SelectItem value={status.name} key={index}>{status.name}</SelectItem>
                                ))}
                            </SelectContent>

                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6 font-semibold">Registration Type</div>
                    <div className="col-span-6">
                        <Select value={registerdtype_id?.name ?? ''} onValueChange={(selectedValue) => {
                            const selected = registeredTypeList.find(rt => rt.name === selectedValue)
                            setRegisterdtypeId(selected);
                        }}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="select type"/>
                            </SelectTrigger>
                            <SelectContent>
                                {registeredTypeList.map((type: any, index: number) => (
                                    <SelectItem value={type.name} key={index}>{type.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6 font-semibold">Note <i className="text-blue-800">(optional)</i></div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" value={note}
                               onChange={(e) => setNote(e.target.value)}></Input>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mt-5">

                    <div className="col-span-4">
                        <Button variant="destructive">Reset</Button>
                    </div>

                    <div className="col-span-4 flex justify-center items-center">
                        <Button variant="warning" disabled={updateButton}
                                onClick={updateStudentClassRegistration}>Update</Button>
                    </div>


                    <div className="col-span-4 flex justify-end items-end">
                        <Button variant="success" disabled={saveButton} onClick={saveStudentRegistration}>Save</Button>
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
