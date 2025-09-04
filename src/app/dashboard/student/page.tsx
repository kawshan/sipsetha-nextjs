"use client"
import React, {useEffect, useState, useRef} from 'react'
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {getAllGuardianService} from "@/services/guardianService";
import {getAllGrades} from "@/services/grade";
import {DataTable} from "@/components/data-table";
import {getGuardianColumns} from "@/app/dashboard/guardian/guardianColumns";
import {getStudentColumns} from "@/app/dashboard/student/studentColumns";
import {
    deleteStudentService,
    getAllStudents,
    saveStudentService,
    updateStudentService
} from "@/services/studentService";


import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {Check, ChevronsUpDown} from "lucide-react";
import {cn} from "@/lib/utils";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { useReactToPrint } from "react-to-print";


const Page = () => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const [id, setId] = useState<number | null>(null);
    const [stunum, setStunum] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState(true);
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [status, setStatus] = useState(true);
    const [note, setNote] = useState("");
    const [addeddatetime, setAddeddatetime] = useState("");
    const [modifydatetime, setModifydatetime] = useState("");
    const [deletedatetime, setdeletedatetime] = useState("")
    const [guardian_id, setGuardianID] = useState(null);
    const [guardianList, setGuardianList] = useState([]);
    const [grade_id, setGradeID] = useState(null);
    const [gradeList, setGradeList] = useState([]);
    const [studentList, setStudentList] = useState([]);

    const [open, setOpen] = useState(false);


    const contentRef = useRef<HTMLDivElement>(null);

    const printAllStudents = useReactToPrint({contentRef})





    const lblHeading = `Student Management Master`;


    const handleStatus = (value: any): any => {
        setStatus(value);
        console.log(`student status is ${value}`);
    }

    const handleGender = (value: any): any => {
        setGender(value);
        console.log(`student gender is ${value}`);
    }

    useEffect(() => {
        getGuardianList();
        getGradeList();
        getStudentList();
    }, []);


    const getGuardianList = () => {
        getAllGuardianService().then((res: any) => {
            setGuardianList(res.data);
        })
    }


    const getGradeList = () => {
        getAllGrades().then((res: any) => {
            setGradeList(res.data);
        })
    }

    const getStudentList = () => {
        getAllStudents().then((res: any) => {
            setStudentList(res.data);
        })
    }


    const refillStudent = (studentObject: any) => {
        setDialogOpen(true);
        setId(studentObject.id);
        setStunum(studentObject.stunum);
        setFirstName(studentObject.firstname);
        setLastName(studentObject.lastname);
        setDob(studentObject.dob);
        setGender(studentObject.gender);
        setAddress(studentObject.address);
        setMobile(studentObject.mobile);
        setStatus(studentObject.status);
        setNote(studentObject.note);
        setAddeddatetime(studentObject.addeddatetime);
        setModifydatetime(studentObject.modifydatetime);
        setdeletedatetime(studentObject.deletedatetime);
        setGuardianID(studentObject.guardian_id);
        setGradeID(studentObject.grade_id);

    }


    const checkErrors = () => {
        let errors: string = '';

        if (grade_id == null) {
            errors = errors + 'grade cannot be empty \n';
        }
        if (guardian_id == null) {
            errors = errors + 'guardian cannot be empty \n';
        }
        if (firstname == "") {
            errors = errors + "first name cannot be empty \n";
        }
        if (lastname == "") {
            errors = errors + 'last name cannot be empty \n";'
        }
        if (dob == "") {
            errors = errors + 'dob name cannot be empty \n";'
        }


        return errors;
    }


    const handleInput = (
        setState: React.Dispatch<React.SetStateAction<string>>,
        regexPattern: string,
        fieldValue: string,
    ) => {
        const regExp = new RegExp(regexPattern);
        if (regExp.test(fieldValue)) {
            setState(fieldValue);
        } else {

        }

    }


    const saveStudent = () => {
        const saveObject: Object = {
            firstname,
            lastname,
            dob,
            gender,
            address,
            mobile,
            status,
            grade_id,
            guardian_id,
            note
        };

        let error = checkErrors();
        if (error == '') {
            const userConfirm = confirm(`are you sure to add following student \n
            First Name ${firstname} \n
            Last Name ${lastname} \n
            Dob is ${dob} \n
            Mobile is ${mobile}\n
           
            `);
            if (userConfirm) {
                saveStudentService(saveObject).then((res: any) => {
                    alert('student saved successfully');
                    setDialogOpen(false);
                    getStudentList();
                }).catch((err: any) => {
                    console.log(err);
                    alert('something wrong');
                })
            }
        } else {
            alert(`you have some errors \n ${error}`)
        }


    }


    const modifyStudent = () => {
        let updateStudentObject: object = {
            id,
            stunum,
            firstname,
            lastname,
            dob,
            gender,
            address,
            mobile,
            status,
            grade_id,
            guardian_id,
            note,
            addeddatetime,
            modifydatetime
        };
        let error = checkErrors();
        if (error == '') {
            const userConfirm = confirm(`are you sure to update student \n`);
            if (userConfirm) {
                updateStudentService(updateStudentObject).then((res: any) => {
                    alert('student update successfully');
                    setDialogOpen(false);
                    getStudentList();
                }).catch((error: any) => {
                    console.log(error);
                    alert('something wrong');
                })
            }
        }
    }


    const deleteStudent = (studentObject: any) => {
        const userConfirm = confirm(`are you sure to delete student \n`)
        if (userConfirm) {
            deleteStudentService(studentObject).then((res: any) => {
                alert('student deleted successfully');
                setDialogOpen(false);
                getStudentList();
            }).catch((err: any) => {
                console.log(err);
                alert('something wrong');
            });
        }
    }


    const printStudent = () => {

    }


    return (

        <>



        {/*  CONTENT AREA START   */}
        <div>


            <div className="text-center bg-slate-900 dark:bg-slate-900 p-6 text-white dark:text-white mb-5">
                <TextGenerateEffect words={lblHeading}/>
            </div>


            <div className="ms-9">
            <Button type="button" onClick={printAllStudents}>Print Students</Button>
            </div>


            <div className="p-9">


                <div className="grid grid-cols-4 gap-4">

                    <div>
                        <Label className="text-lg font-bold">First Name</Label>
                        <Input className="h-[50px]" type="text" value={firstname}
                               onChange={(e) => setFirstName(e.target.value)}/>
                    </div>


                    <div>
                        <Label className="text-lg font-bold">Last Name</Label>
                        <Input className="h-[50px]" type="text" value={lastname}
                               onChange={(e) => setLastName(e.target.value)}/>
                    </div>

                    <div>
                        <Label className="text-lg font-bold">DOB</Label>
                        <Input className="h-[50px]" type="date" value={dob}
                               onChange={(e) => setDob(e.target.value)}></Input>
                    </div>

                    <div>
                        <Label className="text-lg font-bold">Gender</Label>
                        <Select value={gender} onValueChange={(e) => setGender(handleGender(e))}>
                            <SelectTrigger className="w-full h-[50px]">
                                <SelectValue placeholder="Select Gender"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value={true}>Male</SelectItem>
                                    <SelectItem value={false}>Female</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>


                </div>


                <div className="grid grid-cols-4 gap-4">

                    <div className="col-span-1">
                        <Label className="text-lg font-bold">Address
                        </Label>
                        <Input className="h-[50px]" type="text" value={address}
                               onChange={(e) => setAddress(e.target.value)}></Input>
                    </div>


                    <div className="col-span-3">
                        <Label className="text-lg font-bold">Mobile</Label>
                        <Input className="h-[50px]" type="text" value={mobile}
                               onChange={(e) => handleInput(setMobile, '', e.target.value)}></Input>
                    </div>

                </div>


                <div className="grid grid-cols-4 gap-4">


                    <div className="col-span-1">
                        <Label className="text-lg font-bold">Status</Label>
                        <Select value={status} onValueChange={(e) => setStatus(handleStatus(e))}>
                            <SelectTrigger className="w-full h-[50px]">
                                <SelectValue placeholder="Select Gender"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value={true}>Active</SelectItem>
                                    <SelectItem value={false}>Inactive</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                    </div>


                    <div className="col-span-2">
                        <Label className="text-lg font-bold">note<i
                            className="text-blue-800 font-semibold">(optional)</i></Label>
                        <Input className="h-[50px]" type="text" value={note ?? ""}
                               onChange={(e) => setNote(e.target.value)}/>

                    </div>


                </div>


                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-2">
                        <Label className="text-lg font-bold">Guardian</Label>
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className="w-full justify-between"
                                >

                                    {guardian_id ? guardian_id.firstname : "select guardian"}
                                    <ChevronsUpDown className="opacity-50"/>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                                <Command>
                                    <CommandInput placeholder="Search Guardian" className="h-9"/>
                                    <CommandList>
                                        <CommandEmpty>NO Guardian Found</CommandEmpty>
                                        <CommandGroup>
                                            {guardianList.map((guardian) => (
                                                <CommandItem
                                                    key={guardian.id}
                                                    value={guardian.firstname}
                                                    onSelect={() => {
                                                        setGuardianID(
                                                            guardian_id?.id === guardian.id ? null : guardian
                                                        )
                                                        setOpen(false)
                                                    }}
                                                >
                                                    {guardian.firstname}
                                                    <Check
                                                        className={cn(
                                                            "ml-auto",
                                                            guardian_id?.id === guardian.id
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


                    <div className="col-span-2 mb-10">
                        <Label className="text-lg font-bold">Grade</Label>
                        <Select value={grade_id?.name ?? ''} onValueChange={(selectedName) => {
                            const selected = gradeList.find(gr => gr.name === selectedName);
                            setGradeID(selected);
                        }}>

                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="select grade"/>
                            </SelectTrigger>
                            <SelectContent>
                                {gradeList.map((grade: any, index: number) => (
                                    <SelectItem value={grade.name} key={index}> {grade.name} </SelectItem>
                                ))}
                            </SelectContent>

                        </Select>
                    </div>


                </div>


                <div className="grid grid-cols-3 gap-4">

                    <div>
                        <Button>Reset</Button>
                    </div>

                    <div className="text-center">
                        <Button onClick={modifyStudent}>Update</Button>
                    </div>


                    <div className="text-end">
                        <Button onClick={saveStudent}>Save</Button>
                    </div>


                </div>

            </div>


            <div className="mt-5 p-9">
                <DataTable columns={getStudentColumns(refillStudent, deleteStudent, printStudent)}
                           data={studentList}/>
            </div>


        </div>
        {/*CONTENT ARE END*/}



            <div className="sr-only">
                <div ref={contentRef}>

                    <h3 className="text-center text-slate-950 text-2xl mt-5">Student List</h3>

                    <div className="m-10">
                    <Table>
                        <TableHeader>
                                <TableRow>
                                    <TableHead>#</TableHead>
                                    <TableHead>First Name</TableHead>
                                    <TableHead>Last Name</TableHead>
                                    <TableHead>Date Of Birth</TableHead>
                                    <TableHead>Gender</TableHead>
                                    <TableHead>Address</TableHead>
                                    <TableHead>Mobile</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                        </TableHeader>

                        <TableBody>
                            {studentList.map((student: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell>{index+1}</TableCell>
                                    <TableCell>{student.firstname}</TableCell>
                                    <TableCell>{student.lastname}</TableCell>
                                    <TableCell>{student.dob}</TableCell>
                                    <TableCell>{student.gender == "1" ? "Male" : "Female"}</TableCell>
                                    <TableCell>{student.address}</TableCell>
                                    <TableCell>{student.mobile}</TableCell>
                                    <TableCell>{student.status == "1" ? "Active" : "Inactive"}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                    </div>






                </div>
            </div>


        </>
    )
}
export default Page
