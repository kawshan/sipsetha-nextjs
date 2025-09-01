"use client"
import React, {useEffect, useState} from 'react'
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table"
import {getAllTeachersService} from "@/services/teacherService";

import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Check, ChevronsUpDown} from "lucide-react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {cn} from "@/lib/utils";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {getAllEnrollmentStatusService} from "@/services/enrollmentStausService";
import {getAllClassOfferingService} from "@/services/classOfferingService";


const Page = () => {

    const [id,setId] = useState("");
    const [enrolmentnum, setEnrolmentnum] = useState("");
    const [note, setNote] = useState("");
    const [addeddatetime, setAddeddatetime] = useState("");
    const [modifydatetime, setModifydatetime] = useState("");
    const [deletedatetime, setDeletedatetime] = useState("");
    const [addeduser_id,setAddeduser_id] = useState(null);
    const [modifyuser_id,setModifyuser_id] = useState(null);
    const [deleteuser_id,setDeleteuser_id] = useState(null);
    const [month,setMonth] = useState("");
    const [totalclassincome,setTotalclassincome] = useState("");
    const [totalservicecharge,setTotalservicecharge] = useState("");
    const [totaladditionalcharge,setTotaladditionalcharge] = useState("");
    const [totaltobepayed,setTotaltobepayed] = useState("");
    const [payedamount,setPayedamount] = useState("");
    const [enrolmentstatus_id,setEnrolmentstatus] = useState(null);
    const [teacher_id,setTeacher_id] = useState(null);
    const [classOfferings,setClassOfferings] = useState([]);




    // enrollment has class offering states
    const [enrl_id,setEnrl_id] = useState(null);
    const [classfee,setClassfee] = useState(null);
    const [classincome,setClassincome] = useState(null);
    const [regstudentcount,setRegstudentcount] = useState("");
    const [payedcount,setPayedcount] = useState("");
    const [freestudentscount,setFreestudentscount] = useState("");
    const [servicecharge,setServicecharge] = useState("");
    const [additionalcharge,setAdditionalcharge] = useState("");
    const [enrolment_id,setEnrolment_id] = useState(null);
    const [classoffering_id,setClassoffering_id] = useState(null);








    const [teacherList,setTeacherList] = useState([]);
    const [enrollmentStatusList,setEnrollmentStatusList] = useState([]);
    const [classOfferingList,setClassOfferingList] = useState([]);



    const [teacherCmbOpen, setTeacherCmbOpen] = useState(false);
    const [classOffCmbOpen, setClassOffCmbOpen] = useState(false);



    useEffect(() => {
        getAllTeacher();
        getAllEnrollmentStatusList();
        getAllClassOfferings();
    },[])


    const lblHeading = 'Teacher Enrollment Master';

    const refreshStates = () => {

    }


    const updateEnrollment = () => {

    }


    const saveEnrollment = () => {

    }


    const getAllTeacher = async () => {
        const serverResponse = await getAllTeachersService();
        setTeacherList(serverResponse.data);

    }


    const getAllEnrollmentStatusList = async ()=>{
        const serverResponse = await getAllEnrollmentStatusService();
        setEnrollmentStatusList(serverResponse.data);

    }


    const getAllClassOfferings = async () => {
        const serverResponse = await getAllClassOfferingService();
        setClassOfferingList(serverResponse.data);
    }




    return (
        <div>

            <div
                className="text-center bg-slate-900 dark:bg-slate-900 p-6 rounded-full text-white dark:text-white mb-5">
                <TextGenerateEffect words={lblHeading}/>
            </div>


            <div className="p-9">
                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-4">
                        <Button type="button" onClick={refreshStates}>reset</Button>
                    </div>
                    <div className="col-span-4 flex justify-center items-center">
                        <Button type="button" onClick={updateEnrollment}>Update</Button>
                    </div>
                    <div className="col-span-4 flex justify-end items-center">
                        <Button type="button" onClick={saveEnrollment}>save</Button>
                    </div>
                </div>


                <div className="grid mt-5">
                    <p className="text-red-500 font-bold">Required *</p>
                </div>

                {/*header start*/}
                <div className="grid grid-cols-12 gap-6 mt-10">


                    <div className="col-span-3">
                        <Label htmlFor="selectTeacher" className="text-lg">Teacher <i className="text-red-500">*</i>
                        </Label>
                        <Popover open={teacherCmbOpen} onOpenChange={setTeacherCmbOpen}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" role="combobox" className="min-w-full justify-start">
                                    {teacher_id ? teacher_id.fullname : 'Select Teacher'}
                                    <ChevronsUpDown className="opacity-50"/>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[500px]">
                                <Command>
                                    <CommandInput placeholder="Search Teacher" />
                                    <CommandList>
                                        <CommandEmpty>NO Teacher Found</CommandEmpty>
                                        <CommandGroup>
                                            {teacherList.map((teacher:any,index:number)=>(
                                                <CommandItem key={index} value={teacher.fullname}
                                                onSelect={()=>{
                                                    setTeacher_id(teacher_id?.id === teacher.id ? null :teacher)
                                                    setTeacherCmbOpen(false)
                                                }}
                                                >
                                                    {teacher.fullname}
                                                    <Check className={cn(
                                                        "ml-auto",
                                                        teacher_id?.id === teacher.id ? "opacity-100" : "opacity-0",
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


                    <div className="col-span-3">
                        <Label htmlFor="selectMonth" className="text-lg">Month <i className="text-red-500">*</i></Label>
                        <Input type="month"  placeholder="Enter Month"/>
                    </div>



                    <div className="col-span-6 flex justify-end items-end gap-4">

                        <Table className="border-2 border-slate-300">
                            <TableBody>

                                {/*first row start*/}
                                <TableRow>
                                    <TableCell className="border-2 border-slate-300">
                                        <Label htmlFor="textTotalIncome" className="text-lg">Total Class Income <i
                                            className="text-red-500">*</i> </Label>
                                    </TableCell>

                                    <TableCell>
                                        <Input type="text" className="w-full h-[50px]" placeholder="Enter Total Income" />
                                    </TableCell>
                                </TableRow>
                            {/*    first row end*/}





                                {/*second row start*/}
                                <TableRow>
                                    <TableCell className="border-2 border-slate-300">
                                        <Label htmlFor="textServiceCharge" className="text-lg">Total Service Charge <i
                                            className="text-red-500">*</i> </Label>
                                    </TableCell>

                                    <TableCell>
                                        <Input type="text" className="w-full h-[50px]" placeholder="Enter Service Charge" />
                                    </TableCell>
                                </TableRow>
                                {/*    second row end*/}



                                {/*second row start*/}
                                <TableRow>
                                    <TableCell className="border-2 border-slate-300">
                                        <Label htmlFor="textServiceCharge" className="text-lg">Total Additional Charge <i
                                            className="text-red-500">*</i> </Label>
                                    </TableCell>

                                    <TableCell>
                                        <Input type="text" className="w-full h-[50px]" placeholder="Enter Additional Charge" />
                                    </TableCell>
                                </TableRow>
                                {/*    second row end*/}


                                {/*second row start*/}
                                <TableRow>
                                    <TableCell className="border-2 border-slate-300">
                                        <Label htmlFor="textToBePayed" className="text-lg">Total To Be Payed <i
                                            className="text-red-500">*</i> </Label>
                                    </TableCell>

                                    <TableCell>
                                        <Input type="text" className="w-full h-[50px]" placeholder="Enter To Be Payed" />
                                    </TableCell>
                                </TableRow>
                                {/*    second row end*/}



                                {/*second row start*/}
                                <TableRow>
                                    <TableCell className="border-2 border-slate-300">
                                        <Label htmlFor="textPayedAmout" className="text-lg">Payed Amount <i
                                            className="text-red-500">*</i> </Label>
                                    </TableCell>

                                    <TableCell>
                                        <Input type="text" className="w-full h-[50px]" placeholder="Enter Payed Amout" />
                                    </TableCell>
                                </TableRow>
                                {/*    second row end*/}



                                {/*second row start*/}
                                <TableRow>
                                    <TableCell className="border-2 border-slate-300">
                                        <Label htmlFor="selectStatus" className="text-lg">Enrollment Status <i
                                            className="text-red-500">*</i> </Label>
                                    </TableCell>

                                    <TableCell>
                                        <Select value={enrolmentstatus_id?.name ?? ''} onValueChange={(selectedValue)=>{
                                            const selected = enrollmentStatusList.find((enrl:any)=> enrl.name === selectedValue );
                                            setEnrolmentstatus(selected);
                                        }}>
                                            <SelectTrigger className="w-full min-h-[50px]">
                                                <SelectValue placeholder="Select Status" />
                                            </SelectTrigger>

                                            <SelectContent>
                                                {enrollmentStatusList.map((es:any,index:number)=>(
                                                    <SelectItem value={es.name} key={index}>{es.name}</SelectItem>
                                                ))}
                                            </SelectContent>

                                        </Select>
                                    </TableCell>
                                </TableRow>
                                {/*    second row end*/}



                            </TableBody>
                        </Table>

                    </div>


                </div>
                {/*header start*/}




            {/*    details area start*/}

                <div className="mt-5">
                    <Table>
                        <TableBody>

                            <TableRow>
                                <TableCell className="border-2 border-slate-300">
                                    <Label htmlFor="selectClassOffering" className="text-lg">Class Offering <i
                                        className="text-red-500">*</i> </Label>
                                        <Popover open={classOffCmbOpen} onOpenChange={setClassOffCmbOpen}>
                                            <PopoverTrigger asChild>
                                                    <Button variant="outline" role="combobox" className="w-full min-h-[50px]">
                                                            {classoffering_id ? classoffering_id.classname : 'Select Class'}
                                                        <ChevronsUpDown className="opacity-50" />
                                                    </Button>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <Command>
                                                    <CommandInput placeholder="Search Class Offering" />
                                                    <CommandEmpty>NO Class Offering Found</CommandEmpty>
                                                    <CommandGroup>
                                                        {classOfferingList.map((cls:any,index:number)=>(
                                                            <CommandItem value={cls.classname} key={index}
                                                            onSelect={()=>{
                                                                setClassoffering_id(classoffering_id?.id === cls.id ? null : cls);
                                                                setClassOffCmbOpen(false);
                                                            }}
                                                            >
                                                                {cls.classname}
                                                                <Check
                                                                className={cn(
                                                                    "ml-auto",
                                                                    classoffering_id?.id === cls.id ? "opacity-100" : "opacity-0",
                                                                )}

                                                                />
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
                                </TableCell>

                                <TableCell className="border-2 border-slate-300">
                                    <Label htmlFor="textClassFee" className="text-lg">Class Fee <i
                                        className="text-red-500">*</i> </Label>
                                    <Input type="text" id="textClassFee" className="w-full h-[50px]" placeholder="Enter Class Fee" />
                                </TableCell>


                                <TableCell className="border-2 border-slate-300">
                                    <Label htmlFor="textClassIncome" className="text-lg">Class Income <i
                                        className="text-red-500">*</i> </Label>
                                    <Input type="text" id="textClassIncome" className="w-full h-[50px]" placeholder="Enter Class Income" />
                                </TableCell>


                                <TableCell className="border-2 border-slate-300">
                                    <Label htmlFor="textRegisteredStudentCount" className="text-lg">Registered Student count <i
                                        className="text-red-500">*</i> </Label>
                                    <Input type="text" id="textRegisteredStudentCount" className="w-full h-[50px]" placeholder="Enter Registered Student Count" />
                                </TableCell>


                                <TableCell className="border-2 border-slate-300">
                                    <Label htmlFor="textPayedCount" className="text-lg">Payed Count<i
                                        className="text-red-500">*</i> </Label>
                                    <Input type="text" id="textPayedCount" className="w-full h-[50px]" placeholder="Enter Payed Count" />
                                </TableCell>


                                <TableCell className="border-2 border-slate-300">
                                    <Label htmlFor="textFreeStudentCount" className="text-lg">Free Student Count<i
                                        className="text-red-500">*</i> </Label>
                                    <Input type="text" id="textFreeStudentCount" className="w-full h-[50px]" placeholder="Enter Free Student Count" />
                                </TableCell>


                                <TableCell className="border-2 border-slate-300">
                                    <Label htmlFor="textServiceCharge" className="text-lg">Service Charge<i
                                        className="text-red-500">*</i> </Label>
                                    <Input type="text" id="textServiceCharge" className="w-full h-[50px]" placeholder="Enter Service Charge" />
                                </TableCell>


                                <TableCell className="border-2 border-slate-300">
                                    <Label htmlFor="textAdditionalCharge" className="text-lg">Additional Charge<i
                                        className="text-red-500">*</i> </Label>
                                    <Input type="text" id="textAdditionalCharge" className="w-full h-[50px]" placeholder="Enter Additional Charge" />
                                </TableCell>


                                <TableCell className="border-2 border-slate-300">
                                    <div className="space-x-1.5">
                                        <Button variant="secondary" type="button">reset</Button>
                                        <Button variant="secondary" type="button">Update</Button>
                                        <Button variant="secondary" type="button">save</Button>
                                    </div>
                                </TableCell>


                            </TableRow>


                        </TableBody>
                    </Table>
                </div>


            {/*    details area end*/}



            </div>


        </div>
    )
}
export default Page
