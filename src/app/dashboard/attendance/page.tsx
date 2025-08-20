"use client"
import React, {useEffect, useState} from 'react'
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {DataTable} from "@/components/data-table";
import {getAttendanceColumns} from "@/app/dashboard/attendance/attendanceColumns";
import {getAllAttendanceServices} from "@/services/attendanceService";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {getAllStudents} from "@/services/studentService";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {Check, ChevronsUpDown} from "lucide-react";
import {cn} from "@/lib/utils";


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


    const [stuCmbOpen, setStuCmbOpen] = useState(false);


    const refillAttendance = () => {
    }
    const deleteAttendance = () => {
    }
    const printAttendance = () => {
    }

    useEffect(() => {
        getAllAttendance();
        getStudent();
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
                    <div className="col-span-6"></div>
                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label>Attendance Status <i className="text-red-700">*</i> </Label>
                    </div>
                    <div className="col-span-6"></div>
                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label>Note <i className="text-indigo-700">(optional)</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Textarea placeholder="Enter Note Here"/>
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
