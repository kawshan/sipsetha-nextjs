"use client"
import React, {useEffect, useState} from 'react'
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {DataTable} from "@/components/data-table";
import {getAttendanceColumns} from "@/app/dashboard/attendance/attendanceColumns";
import {
    deleteAttendanceService,
    getAllAttendanceServices,
    saveAttendanceService,
    updateAttendanceService
} from "@/services/attendanceService";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {getAllStudents} from "@/services/studentService";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {Check, ChevronsUpDown} from "lucide-react";
import {cn} from "@/lib/utils";
import {getAllClassOfferingService} from "@/services/classOfferingService";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {getAllAttendanceStatusService} from "@/services/attendanceStatus";


const Page = () => {

    const [id, setId] = useState(null);
    const [addeduser, setAddeduser] = useState(null);
    const [updateuser, setUpdateuser] = useState(null);
    const [deleteuser, setDeleteuser] = useState(null);
    const [addeddate, setAddeddate] = useState("");
    const [updatedate, setUpdatedate] = useState("");
    const [deletedate, setDeletedate] = useState("");
    const [note, setNote] = useState("");
    const [attendancestatus_id, setAttendancestatus_id] = useState(null);
    const [student_id, setStudentId] = useState(null);
    const [classoffering_id, setClassoffering_id] = useState(null);


    const [attendanceList, setAttendanceList] = useState([]);
    const [studentList, setStudentList] = useState([]);
    const [classOfferingList, setClassOfferingList] = useState([]);
    const [attendanceStatusList, setAttendanceStatusList] = useState([]);


    const [stuCmbOpen, setStuCmbOpen] = useState(false);
    const [clsCmbOpn, setClsCmbOpn] = useState(null);


    useEffect(() => {
        getAllAttendance();
        getStudent();
        getClassOfferingList();
        getAllAttendanceStatus();
    }, [])


    const getAllAttendance = async () => {
        const serverResponse = await getAllAttendanceServices();
        setAttendanceList(serverResponse.data);
        console.log(serverResponse.data);
    }


    const getStudent = async () => {
        const serverResponse = await getAllStudents();
        setStudentList(serverResponse.data);
        console.log(serverResponse.data);
    }


    const getClassOfferingList = async () => {
        const serverResponse = await getAllClassOfferingService();
        setClassOfferingList(serverResponse.data);
        console.log('class offering list', serverResponse.data);
    }

    const getAllAttendanceStatus = async () => {
        const serverResponse = await getAllAttendanceStatusService();
        setAttendanceStatusList(serverResponse.data);
        console.log('attendance status list', serverResponse.data);
    }


    const checkErrors = () => {
        let errors = "";

        if (student_id == null) {
            errors = errors + "Student cannot be empty. \n";
        }

        if (classoffering_id == null) {
            errors = errors + "Class cannot be empty. \n";
        }

        if (attendancestatus_id == null) {
            errors = errors + "Status cannot be empty. \n";
        }


        return errors;
    }


    const refreshStates = () => {
        setId(null);
        setAddeduser(null);
        setUpdateuser(null);
        setDeleteuser(null);
        setAddeddate("");
        setUpdatedate("");
        setDeletedate("");
        setNote("");
        setAttendancestatus_id(null);
        setStudentId(null);
        setClassoffering_id(null);
    }


    const saveAttendance = async () => {

        const saveObject = {student_id, attendancestatus_id, classoffering_id, note}


        let errors = checkErrors();
        if (errors == "") {
            const userConfirm = confirm(`Are You Sure To Add Following Attendace
            Student name is ${student_id.firstname} ${student_id.lastname}
            class name is ${classoffering_id.classname}
            Status is ${attendancestatus_id.name}
            `);
            if (userConfirm) {
                const ServerResponse = await saveAttendanceService(saveObject);
                if (ServerResponse.data == "ok") {
                    alert("Successfully added!");
                    refreshStates();
                    getAllAttendance();
                } else {
                    alert("Something went wrong!");
                }
            }
        } else {
            alert(`You Have Following errors \n ${errors}`)
        }
    }


    const refillAttendance = (obj:any) => {
        setId(obj.id);
        setAddeduser(obj.addeduser);
        setUpdateuser(obj.updateuser);
        setDeleteuser(obj.deleteuser);
        setAddeddate(obj.addeddate);
        setUpdatedate(obj.updatedate);
        setDeletedate(obj.deletedate);
        setNote(obj.note);
        setAttendancestatus_id(obj.attendancestatus_id);
        setStudentId(obj.student_id);
        setClassoffering_id(obj.classoffering_id);


    }

    const updateAttendance = async () => {

        const updateObj = {id,addeduser,updateuser,deleteuser,addeddate,updatedate,deletedate,note,attendancestatus_id,classoffering_id,student_id}
        let errors = checkErrors();
        if (errors == "") {
            const userConfirm = confirm(`Are You Sure To Update Attendace
            Student name is ${student_id.firstname} ${student_id.lastname}
            class name is ${classoffering_id.classname}
            Status is ${attendancestatus_id.name}
            `);
            if (userConfirm) {
               let serverResponse = await updateAttendanceService(updateObj);
               if (serverResponse.data == "ok") {
                   alert("Successfully updated!");
                   refreshStates();
                   await getAllAttendance();
               }else {
                   alert("Something went wrong!");
               }
            }
        }



    }


    const deleteAttendance = async (obj:any) => {
        const userConfirm = confirm(`Are You Sure To Update Attendace
            Student name is ${obj.firstname} ${obj.lastname}
            class name is ${obj.classoffering_id.classname}
            Status is ${obj.attendancestatus_id.name}
            `);

        if (userConfirm) {
            const serverResponse = await deleteAttendanceService(obj);
            if (serverResponse.data == "ok") {
                alert("Successfully deleted!");
                refreshStates();
                await getAllAttendance();
            }else {
                alert("Something went wrong!");
            }
        }
    }









    const printAttendance = () => {
    }


    const lblHeading = 'Attendance Master';


    return (
        <div>

            <div
                className="text-center bg-slate-900 dark:bg-slate-900 p-6 rounded-full text-white dark:text-white mb-5">
                <TextGenerateEffect words={lblHeading}/>
            </div>


            <div className="mt-20 p-9">

                <div className="grid grid-cols-12 gap-4 mb-5">
                    <p className="text-red-700">Required *</p>
                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label>Student name <i className="text-red-700">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Popover open={stuCmbOpen} onOpenChange={setStuCmbOpen}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" role="combobox" aria-expanded={stuCmbOpen}
                                        className="w-full h-[50px] justify-between"
                                >
                                    {student_id ? student_id.firstname + " " + student_id?.lastname : "Select Student"}
                                    <ChevronsUpDown className="opacity-50"/>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[1000px] p-0">
                                <Command>
                                    <CommandInput placeholder="Search Student"/>
                                    <CommandList>
                                        <CommandEmpty>No Student Found</CommandEmpty>
                                        <CommandGroup>
                                            {studentList.map((student) => (
                                                <CommandItem
                                                    key={student.id}
                                                    value={student.firstname + " " + student.lastname}
                                                    onSelect={() => {
                                                        setStudentId(student_id?.id === student.id ? null : student);
                                                        setStuCmbOpen(false);
                                                    }}
                                                >
                                                    {student.firstname + " " + student.lastname}
                                                    <Check className={cn(
                                                        "ml-auto",
                                                        student_id?.id == student.id
                                                            ? "opacity-100"
                                                            : "opacity-0"
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


                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label>Class Name <i className="text-red-700">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Popover open={clsCmbOpn} onOpenChange={setClsCmbOpn}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" role="combobox" className="w-full h-[50px] justify-between">
                                    {classoffering_id ? classoffering_id.classname : "Select Class"}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[1000px] p-0">
                                <Command>
                                    <CommandInput placeholder="Select Class" className="h-9"/>
                                    <CommandEmpty>No Class found</CommandEmpty>
                                    <CommandGroup>
                                        {classOfferingList.map((cls) => (
                                            <CommandItem key={cls.id} value={cls.classname}
                                                         onSelect={() => {
                                                             setClassoffering_id(classoffering_id?.id === cls.id ? null : cls);
                                                             setClsCmbOpn(false);
                                                         }}
                                            >
                                                {cls.classname}
                                                <Check className={cn(
                                                    "ml-auto",
                                                    classoffering_id?.id === cls.id ? "opacity-100" : "opacity-0"
                                                )}

                                                />
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label>Attendance Status <i className="text-red-700">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Select value={attendancestatus_id?.name ?? ''} onValueChange={(selectedValue) => {
                            const selected = attendanceStatusList.find((attendance) => attendance.name === selectedValue)
                            setAttendancestatus_id(selected);
                        }}>
                            <SelectTrigger className="w-full min-h-[50px]">
                                <SelectValue placeholder="Select Status"/>
                            </SelectTrigger>
                            <SelectContent>
                                {attendanceStatusList.map((status: any, index: number) => (
                                    <SelectItem key={index} value={status.name}>{status.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label>Note <i className="text-indigo-700">(optional)</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Enter Note Here"/>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4 mt-20">
                    <div className="col-span-4">
                        <Button type="button" onClick={refreshStates}>reset</Button>
                    </div>
                    <div className="col-span-4 flex justify-center items-center">
                        <Button type="button" onClick={updateAttendance}>Update</Button>
                    </div>
                    <div className="col-span-4 flex justify-end items-center">
                        <Button type="button" onClick={saveAttendance}>save</Button>
                    </div>
                </div>


            </div>


            <div className="p-9">
                <DataTable columns={getAttendanceColumns(refillAttendance, deleteAttendance, printAttendance)}
                           data={attendanceList}/>
            </div>


        </div>
    )
}
export default Page
