"use client"
import React, {useEffect, useState} from 'react'
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



const Page = () => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const [id,setId] = useState<number | null>(null);
    const [stunum, setStunum] = useState("");
    const [firstname,setFirstName] = useState("");
    const [lastname,setLastName] = useState("");
    const [dob,setDob] = useState("");
    const [gender,setGender] = useState(true);
    const [address,setAddress] = useState("");
    const [mobile,setMobile] = useState("");
    const [status,setStatus] = useState(true);
    const [note,setNote] = useState("");
    const [addeddatetime, setAddeddatetime] = useState("");
    const [modifydatetime, setModifydatetime] = useState("");
    const [deletedatetime,setdeletedatetime] = useState("")
    const [guardian_id, setGuardianID] = useState(null);
    const [guardianList, setGuardianList] = useState([]);
    const [grade_id, setGradeID] = useState(null);
    const [gradeList, setGradeList] = useState([]);
    const [studentList, setStudentList] = useState([]);



    const lblHeading = `Student Management Master`;


    const handleStatus = (value : any):any=>{
        setStatus(value);
        console.log(`student status is ${value}`);
    }

    const handleGender = (value : any):any=>{
        setGender(value);
        console.log(`student gender is ${value}`);
    }

    useEffect(()=>{
        getGuardianList();
        getGradeList();
        getStudentList();
    },[]);


    const getGuardianList = ()=>{
        getAllGuardianService().then((res:any)=>{
            setGuardianList(res.data);
        })
    }



    const getGradeList = ()=>{
        getAllGrades().then((res:any)=>{
            setGradeList(res.data);
        })
    }

    const getStudentList = ()=>{
        getAllStudents().then((res:any)=>{
            setStudentList(res.data);
        })
    }


    const refillStudent = (studentObject :any)=>{
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


    const checkErrors = ()=>{
        let errors : string = '';

        if (grade_id==null) {
            errors=errors+'grade cannot be empty \n';
        }
        if (guardian_id==null) {
            errors=errors+'guardian cannot be empty \n';
        }
        if (firstname==""){
            errors=errors+"first name cannot be empty \n";
        }
        if (lastname==""){
            errors=errors+'last name cannot be empty \n";'
        }
        if (dob==""){
            errors=errors+'dob name cannot be empty \n";'
        }




        return errors;
    }


const handleInput = (
    setState: React.Dispatch<React.SetStateAction<string>>,
    regexPattern:string,
    fieldValue:string,
)=>{
          const regExp = new RegExp(regexPattern);
          if (regExp.test(fieldValue)){
              setState(fieldValue);
          }else {

          }

}





    const saveStudent = ()=>{
        const saveObject : Object = {firstname,lastname,dob,gender,address,mobile,status,grade_id,guardian_id,note};

        let error = checkErrors();
        if (error==''){
            const userConfirm = confirm(`are you sure to add following student \n
            First Name ${firstname} \n
            Last Name ${lastname} \n
            Dob is ${dob} \n
            Mobile is ${mobile}\n
           
            `);
            if (userConfirm){
                saveStudentService(saveObject).then((res:any)=>{
                    alert('student saved successfully');
                    setDialogOpen(false);
                    getStudentList();
                }).catch((err:any)=>{
                    console.log(err);
                    alert('something wrong');
                })
            }
        }else {
            alert(`you have some errors \n ${error}`)
        }



    }


    const modifyStudent = ()=>{
        let updateStudentObject : object = {id, stunum ,firstname,lastname,dob,gender,address,mobile,status,grade_id,guardian_id,note,addeddatetime,modifydatetime};
        let error = checkErrors();
        if (error==''){
            const userConfirm = confirm(`are you sure to update student \n`);
            if (userConfirm){
                updateStudentService(updateStudentObject).then((res:any)=>{
                    alert('student update successfully');
                    setDialogOpen(false);
                    getStudentList();
                }).catch((error:any)=>{
                    console.log(error);
                    alert('something wrong');
                })
            }
        }
    }



    const deleteStudent = (studentObject:any)=>{
    const userConfirm = confirm(`are you sure to delete student \n`)
        if (userConfirm){
            deleteStudentService(studentObject).then((res:any)=>{
                alert('student deleted successfully');
                setDialogOpen(false);
                getStudentList();
            }).catch((err:any)=>{
                console.log(err);
                alert('something wrong');
            });
        }
    }





    const printStudent = ()=>{

    }











    return (
        <div>


            <div className="text-center bg-slate-900 dark:bg-slate-900 p-6 text-white dark:text-white mb-5">
                <TextGenerateEffect words={lblHeading} />
            </div>



            <div>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger asChild>
                        <Button variant="default" className="ms-3">Add/Update Student</Button>
                    </DialogTrigger>
                    <DialogContent className="w-full lg:max-w-screen-2xl sm:max-w-screen-2xl">
                        <DialogHeader>
                            <DialogTitle className="text-center">Add / Update Student</DialogTitle>
                            <DialogDescription className="text-center">
                                Make Changes for Student
                            </DialogDescription>
                        </DialogHeader>


                        <div className="grid grid-cols-4 gap-4">

                            <div>
                                <Label className="text-lg font-bold">First Name</Label>
                                <Input className="h-[50px]" type="text" value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
                            </div>


                            <div>
                                <Label className="text-lg font-bold">Last Name</Label>
                                <Input className="h-[50px]" type="text" value={lastname} onChange={(e)=>setLastName(e.target.value)} />
                            </div>

                            <div>
                                <Label className="text-lg font-bold">DOB</Label>
                                <Input className="h-[50px]" type="date" value={dob} onChange={(e)=>setDob(e.target.value)}></Input>
                            </div>

                            <div>
                                <Label className="text-lg font-bold">Gender</Label>
                                <Select value={gender} onValueChange={(e)=>setGender(handleGender(e))}>
                                    <SelectTrigger className="w-full h-[50px]">
                                        <SelectValue placeholder="Select Gender" />
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
                                <Input className="h-[50px]" type="text" value={address} onChange={(e)=>setAddress(e.target.value)}></Input>
                            </div>


                            <div className="col-span-3">
                                <Label className="text-lg font-bold">Mobile</Label>
                                <Input className="h-[50px]" type="text" value={mobile} onChange={(e)=>handleInput(setMobile,'',e.target.value)}></Input>
                            </div>

                        </div>


                        <div className="grid grid-cols-4 gap-4">


                            <div className="col-span-1">
                                <Label className="text-lg font-bold">Status</Label>
                                <Select value={status} onValueChange={(e)=>setStatus(handleStatus(e))}>
                                    <SelectTrigger className="w-full h-[50px]">
                                        <SelectValue placeholder="Select Gender" />
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
                                <Label className="text-lg font-bold">note<i className="text-blue-800 font-semibold">(optional)</i></Label>
                                <Input className="h-[50px]" type="text" value={note ?? ""} onChange={(e)=>setNote(e.target.value)}/>

                            </div>


                        </div>


                        <div className="grid grid-cols-4 gap-4">
                            <div className="col-span-2">
                                <Label className="text-lg font-bold">Guardian</Label>
                                <Select value={guardian_id?.firstname ?? ''} onValueChange={(selectedName)=>{
                                    const selected = guardianList.find(g=> g.firstname === selectedName);
                                    setGuardianID(selected);
                                }}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="select guardian"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {guardianList.map((guardian:any, index:number)=>(
                                            <SelectItem value={guardian.firstname} key={index}>{guardian.firstname}</SelectItem>
                                        ))}
                                    </SelectContent>

                                </Select>
                            </div>


                            <div className="col-span-2">
                                <Label className="text-lg font-bold">Grade</Label>
                                <Select value={grade_id?.name ?? ''} onValueChange={(selectedName)=>{
                                    const selected = gradeList.find(gr=>gr.name ===selectedName);
                                    setGradeID(selected);
                                }} >
                                    
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="select grade"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {gradeList.map((grade:any, index:number)=>(
                                            <SelectItem value={grade.name} key={index}> {grade.name} </SelectItem>
                                        ))}
                                    </SelectContent>

                                </Select>
                            </div>


                        </div>


                        <div className="grid grid-cols-3 gap-4">

                            <div>
                                <Button variant="destructive">Reset</Button>
                            </div>

                            <div className="text-center">
                                <Button variant="warning" onClick={modifyStudent}>Update</Button>
                            </div>


                            <div className="text-end">
                                <Button variant="success" onClick={saveStudent}>Save</Button>
                            </div>


                        </div>


                    </DialogContent>
                </Dialog>
            </div>


            <div className="mt-5 p-3">
                <DataTable columns={getStudentColumns(refillStudent, deleteStudent, printStudent)}
                           data={studentList} />
            </div>



        </div>
    )
}
export default Page
