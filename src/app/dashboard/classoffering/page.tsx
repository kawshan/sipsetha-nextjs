"use client"
import React, {useEffect, useState} from 'react'
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {getAllTeachersService} from "@/services/teacherService";


import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Check, ChevronsUpDown} from "lucide-react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {cn} from "@/lib/utils";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {getAllSubjectsServices} from "@/services/subjectService";
import {getAllGrades} from "@/services/grade";
import {getAllAcademicYearService} from "@/services/academicYearService";
import {getAllClassTypeService} from "@/services/classTypeService";
import {getAllClassOfferingStatusService} from "@/services/classOfferingStatus";
import {DataTable} from "@/components/data-table";
import {getClassOfferingColumns} from "@/app/dashboard/classoffering/getClassOfferingColumns";
import {getAllClassOfferingService} from "@/services/classOfferingService";


const Page = () => {


    const [id, setId] = useState<any>(null);
    const [classname, setClassname] = useState<string>("");
    const [fees, setFees] = useState<string>("");
    const [duration, setDuration] = useState<string>("");
    const [note, setNote] = useState<string>("");
    const [addeduserid, setAddeduserid] = useState<any>(null);
    const [addeddatetime, setAddeddatetime] = useState<string>("");
    const [modifydatetime, setModifydatetime] = useState<string>("");
    const [deletedatetime, setDeletedatetime] = useState<string>("");
    const [servicecharge, setServicecharge] = useState<string>("");
    const [grade_id, setGradeId] = useState<any>(null);
    const [classtype_id, setClasstypeId] = useState<any>(null);
    const [academicyear_id, setAcademicyearId] = useState<any>(null);
    const [subject_id, setSubjectId] = useState<any>(null);
    const [teacher_id, setTeacherId] = useState<any>(null);
    const [classofferingstatus_id, setClassofferingstatus_id] = useState<any>(null);

    const [classOfferingList, setClassOfferingList] = useState<any>([]);
    const [teacherList, setTeacherList] = useState<[]>([]);
    const [subjectList, setSubjectList] = useState<[]>([]);
    const [gradeList, setGradeList] = useState<[]>([]);
    const [academicYearList, setAcademicYearList] = useState<[]>([]);
    const [classTypeList, setClassTypeList] = useState<[]>([]);
    const [classOfferingStatusList, setClassOfferingStatusList] = useState<[]>([]);


    const [teacherCmbOpen, setTeacherCmbOpen] = useState(false);
    const [subjectCmbOpen, setSubjectCmbOpen] = useState(false);
    const [gradeCmbOpen, setGradeCmbOpen] = useState(false);


    useEffect(() => {
        getAllClassOfferings();
        getAllTeacher();
        getAllSubjects();
        getGrades();
        getAcademicYears();
        getAllClassType();
        getAllClassOfferingStatus();
    }, [])


    const getAllClassOfferings = async ()=>{
        const serverResponse =await getAllClassOfferingService();
        setClassOfferingList(serverResponse.data);
    }


    const getAllTeacher = async () => {
        const serverResponse = await getAllTeachersService();
        setTeacherList(serverResponse.data);

    }


    const getAllSubjects = async () => {
        const serverResponse = await getAllSubjectsServices();
        setSubjectList(serverResponse.data);
    }

    const getGrades = async () => {
        const serverResponse = await  getAllGrades();
        setGradeList(serverResponse.data);
    }



    const getAcademicYears = async () => {
        const serverResponse = await getAllAcademicYearService();
        setAcademicYearList(serverResponse.data);
    }


    const getAllClassType = async () => {
        const serverResponse = await getAllClassTypeService();
        setClassTypeList(serverResponse.data);
    }


    const getAllClassOfferingStatus = async () => {
        const serverResponse = await getAllClassOfferingStatusService();
        setClassOfferingStatusList(serverResponse.data);
    }

    const refillClassOffering = ()=>{



    }



    const deleteClassOffering = ()=>{



    }



    const printClassOffering = ()=>{



    }






    const resetClassOffering = ()=>{



    }
    const updateClassOffering = ()=>{



    }
    const saveClassOffering = ()=>{



    }



    const lblHeading = 'Class Offering Master';


    return (
        <>


            {/*main content area start*/}


            <div>
                <div
                    className="text-center bg-slate-900 dark:bg-slate-900 p-6 rounded-full text-white dark:text-white mb-5">
                    <TextGenerateEffect words={lblHeading}/>
                </div>
            </div>

            {/*form area start*/}
            <div className="p-9">


                <div className="grid grid-cols-12 gap-4 mb-5">

                    <div className="col-span-6">
                        <Label htmlFor="selectTeacher">Teacher <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Popover open={teacherCmbOpen} onOpenChange={setTeacherCmbOpen}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" role="combobox"
                                        className="min-w-full justify-start min-h-[50px]">
                                    {teacher_id ? teacher_id.fullname : "Select Teacher"}
                                    <ChevronsUpDown className="opacity-50"/>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[1000px]">
                                <Command>
                                    <CommandInput placeholder="Search Teacher"/>
                                    <CommandList>
                                        <CommandEmpty>No Teacher Found</CommandEmpty>
                                        <CommandList>
                                            {teacherList.map((teacher: any, index: number) => (
                                                <CommandItem key={index} value={teacher.fullname}
                                                             onSelect={() => {
                                                                 setTeacherId(teacher_id?.id === teacher.id ? null : teacher)
                                                                 setTeacherCmbOpen(false);
                                                             }}
                                                >{teacher.fullname}
                                                    <Check className={cn(
                                                        "ml-auto", teacher_id?.id === teacher.id ? "opacity-100" : "opacity-0",
                                                    )}
                                                    />
                                                </CommandItem>
                                            ))}
                                        </CommandList>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>

                </div>

                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label htmlFor="selectSubject">Subject <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Popover open={subjectCmbOpen} onOpenChange={setSubjectCmbOpen}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" role="combobox"
                                        className="min-w-full justify-start min-h-[50px]">
                                    {subject_id ? subject_id.name : "Select Subject"}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[1000px]">
                                <Command>
                                    <CommandInput placeholder="Search Subject"/>
                                    <CommandList>
                                        <CommandEmpty>NO Subjects Found</CommandEmpty>
                                        <CommandGroup>
                                            {subjectList.map((subject: any, index: number) => (
                                                <CommandItem key={index} value={subject.name}
                                                    onSelect={()=>{
                                                        setSubjectId(subject_id === subject.id ? null :subject)
                                                        setSubjectCmbOpen(false);
                                                    }}
                                                >
                                                    {subject.name}
                                                    <Check className={cn(
                                                        "ml-auto", subject_id?.id === subject.id ? "opacity-100" : "opacity-0",
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
                        <Label htmlFor="selectGrade">Grade</Label>
                    </div>
                    <div className="col-span-6">
                        <Popover open={gradeCmbOpen} onOpenChange={setGradeCmbOpen}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" role="combobox" className="min-w-full justify-start min-h-[50px]">
                                    {grade_id ? grade_id.name : "Select Grade"}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[1000px]">
                                <Command>
                                    <CommandInput placeholder="Search Grade"/>
                                    <CommandList>
                                        <CommandEmpty>No Grades Found</CommandEmpty>
                                        <CommandGroup>
                                            {gradeList.map((grade: any, index: number) => (
                                                <CommandItem key={index} value={grade.name}
                                                onSelect={() => {
                                                    setGradeCmbOpen(false);
                                                    setGradeId(grade_id === grade.id ? null : grade)
                                                }}
                                                >
                                                    {grade.name}
                                                    <Check className={cn(
                                                        "ml-auto", grade_id?.id === grade.id ? "opacity-100" : "opacity-0",
                                                    )} />
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
                        <Label htmlFor="selectAcademicYear">Academic Year</Label>
                    </div>
                    <div className="col-span-6">
                        <Select value={academicyear_id? academicyear_id.name : ''}
                        onValueChange={(selectedValue)=>{
                            const selected = academicYearList.find((ay:any)=> ay.name === selectedValue);
                            setAcademicyearId(selected);
                        }}
                        >
                            <SelectTrigger className="w-full min-h-[50px]">
                                <SelectValue placeholder="select academic year"/>
                            </SelectTrigger>

                            <SelectContent>
                                {academicYearList.map((year: any, index: number) => (
                                    <SelectItem value={year.name} key={index}>{year.name}</SelectItem>
                                ))}
                            </SelectContent>


                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label htmlFor="selectGrade">Class Type <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Select value={classtype_id ? classtype_id.name : ''} onValueChange={(selectedValue)=>{
                            const selected = classTypeList.find((ct:any)=> ct.name === selectedValue);
                            setClasstypeId(selected);
                        }}>
                            <SelectTrigger className="w-full min-h-[50px]">
                                <SelectValue placeholder="Select Class Type"/>
                            </SelectTrigger>
                            <SelectContent>
                                {classTypeList.map((ct:any, index: number) => (
                                    <SelectItem value={ct.name} key={index}>{ct.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label htmlFor="textClassName">Class Name <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-5">
                        <Input type="text" value={classname} onChange={(e)=> setClassname(e.target.value)} placeholder="Class Name will Be Generated" className="h-[50px]" disabled={true}/>
                    </div>
                    <div className="col-span-1">
                        <Button type="button" variant="default" className="h-[50px]">Generate Class Name</Button>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label htmlFor="textFees">Fees <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" id="textFees" value={fees} onChange={(e)=> setFees(e.target.value)} placeholder="Enter Fees" className="h-[50px]"/>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label htmlFor="textDuration">Duration <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" id="textDuration" value={duration} onChange={(e)=> setDuration(e.target.value)} placeholder="Enter Duration" className="h-[50px]"/>
                    </div>
                </div>



                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label htmlFor="textServiceCharge">Service Charge <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" id="textServiceCharge" value={servicecharge} onChange={(e)=> setServicecharge(e.target.value)} placeholder="Enter Service Charge" className="h-[50px]"/>
                    </div>
                </div>




                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label htmlFor="selectClassOfferingStatus">Class Offering Status <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">

                        <Select value={classofferingstatus_id ? classofferingstatus_id.name : ''} onValueChange={(selectedValue)=>{
                            const selected = classOfferingStatusList.find((s:any)=> s.name === selectedValue);
                            setClassofferingstatus_id(selected);
                        }}>
                            <SelectTrigger className="w-full min-h-[50px]">
                                <SelectValue placeholder="select academic year"/>
                            </SelectTrigger>
                            <SelectContent>
                                {classOfferingStatusList.map((ct:any, index: number) => (
                                    <SelectItem value={ct.name} key={index}>{ct.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mt-20">
                    <div className="col-span-4">
                        <Button type="button" onClick={resetClassOffering}>reset</Button>
                    </div>
                    <div className="col-span-4 flex justify-center items-center">
                        <Button type="button" onClick={updateClassOffering}>Update</Button>
                    </div>
                    <div className="col-span-4 flex justify-end items-center">
                        <Button type="button" onClick={saveClassOffering}>save</Button>
                    </div>
                </div>

            </div>
            {/*form area end*/}



            {/*table area start*/}
            <div className="p-9">
                <DataTable columns={getClassOfferingColumns(refillClassOffering,deleteClassOffering,printClassOffering)} data={classOfferingList} />
            </div>
            {/*table area end*/}




            {/*main content area end*/}


        </>
    )
}
export default Page
