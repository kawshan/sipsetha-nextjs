"use client"
import React, {useEffect, useState} from 'react'
import {getAllPaymentsService, savePaymentsService, updatePaymentsService} from "@/services/paymentService";
import {DataTable} from "@/components/data-table";
import {getPaymentColumns} from "@/app/dashboard/payment/paymentColumns";
import {Label} from "@/components/ui/label";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {Input} from "@/components/ui/input";
import {getAllStudents} from "@/services/studentService";
import {getAllPaymentCategoryService} from "@/services/paymentCategoryService";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Check, ChevronsUpDown} from "lucide-react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {getAllPaymentTypeService, getStudentRegistrationListService} from "@/services/paymentType";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";


const Page = () => {


    const [id, setId] = useState("");
    const [fees, setFees] = useState("");
    const [month, setMonth] = useState("");
    const [billnumber, setBillnumber] = useState("");
    const [payedamount, setPayedamount] = useState("");
    const [balanceamount, setBalanceamount] = useState("");
    const [referencenumber, setReferencenumber] = useState("");
    const [cardno, setCardno] = useState("");
    const [addeddatetime, setAddeddatetime] = useState("");
    const [modifydatetime, setModifydatetime] = useState("");
    const [addeduser, setAddeduser] = useState("");
    const [modifyuser, setModifyuser] = useState("");
    const [paytype_id, setPaytype_id] = useState(null);
    const [student_id, setStudent_id] = useState(null);
    const [studentregistration_id, setStudentregistration_id] = useState(null);
    const [paymentcategory_id, setPaymentcategory_id] = useState(null);


    const [paymentList, setPaymentList] = useState([]);
    const [studentList, setStudentList] = useState([]);
    const [paymentCategoryList, setPaymentCategoryList] = useState([]);
    const [paymentTypeList, setPaymentTypeList] = useState([]);
    const [studentRegistrationList, setStudentRegistrationList] = useState([]);


    const [stuCmbOpen, setStuCmbOpen] = useState(false);
    const [payCatCmb, setPayCatCmb] = useState(false);
    const [stuRegCmb, setStuRegCmb] = useState(false);


    useEffect(() => {
        getAllPayments();
        getStudents();
        getPaymentCategory();
        getPaymentType();
    }, [])


    const lblHeading = 'Payment Master';


    const getAllPayments = async () => {
        const serverResponse = await getAllPaymentsService();
        setPaymentList(serverResponse.data);
        console.log(`all payment \n `, serverResponse.data);

    }


    const getStudents = async () => {
        const serverResponse = await getAllStudents();
        setStudentList(serverResponse.data);
        console.log(`all students \n `, serverResponse.data);
    }


    const getPaymentCategory = async () => {
        const serverResponse = await getAllPaymentCategoryService();
        setPaymentCategoryList(serverResponse.data);
        console.log(`all payment category \n `, serverResponse.data);
    }


    //need to implement registered classes


    const getPaymentType = async () => {
        const serverResponse = await getAllPaymentTypeService();
        setPaymentTypeList(serverResponse.data);
        console.log(`all payment type \n `, serverResponse.data);
    }

    const getStudentRegistrationList = async (indexNum:any)=>{
        const serverResponse = await getStudentRegistrationListService(indexNum);
        setStudentRegistrationList(serverResponse.data);
        console.log(`student registration \n `, serverResponse.data);
    }






    const refillPayment = (ob:any) => {
        setId(ob.id);
        setFees(ob.fees);
        setMonth(ob.month);
        setBillnumber(ob.billnumber);
        setPayedamount(ob.payedamount);
        setBalanceamount(ob.balanceamount);
        setReferencenumber(ob.referencenumber ?? '');
        setCardno(ob.cardno ?? '');
        setAddeddatetime(ob.addeddatetime);
        setModifydatetime(ob.modifydatetime);
        setAddeduser(ob.addeduser);
        setModifyuser(ob.modifyuser);
        setPaytype_id(ob.paytype_id);
        setStudent_id(ob.student_id);
        setStudentregistration_id(ob.studentregistration_id);
        setPaymentcategory_id(ob.paymentcategory_id);
    }


    const printPayment = () => {



    }


    const checkErrors = ()=>{
        let errors = "";

        if (student_id == null){
            errors = errors+"Student Cannot Be Empty \n";
        }

        if (paymentcategory_id == null){
            errors = errors+"Payment category Cannot Be Empty \n";
        }


        if (studentregistration_id == null){
            errors = errors+"Student Registration Cannot Be Empty \n";
        }



        return errors;
    }



    const refreshStates = ()=>{
        setStudent_id(null);
        setPaymentcategory_id(null);
        setStudentregistration_id(null);
        setPaytype_id(null);
        setFees("");
        setMonth("");
        setPayedamount("");
        setBalanceamount("")
        setReferencenumber("");
        setCardno("");
    }




    const saveStudentPayment =async () => {

        const saveObject = {student_id,paymentcategory_id,studentregistration_id,paytype_id,fees,month,payedamount,balanceamount,referencenumber,cardno}
        let errors = checkErrors();
        if (errors==""){
            const userConfirm = confirm(`Are You Sure To Add Following Payment Information \n
            Student Is ${student_id.firstname}
            Payment Category is ${paymentcategory_id.name}
            Registration Is ${studentregistration_id.classoffering_id.classname}
            `);

            if (userConfirm){
                const serverResponse = await savePaymentsService(saveObject);
                if (serverResponse.data === "ok"){
                    alert("Save Successfully");
                    getAllPayments();
                    refreshStates();
                }else {
                    alert(`something went wrong!  ${serverResponse.data}`);
                }
            }
        }else {
            alert(`You Have Some Errors \n ${errors}`);
        }




    }




    const updatePayment =async () =>{
        const updateObject = {id,fees,month,billnumber,payedamount,balanceamount,referencenumber,cardno,addeddatetime,modifydatetime,addeduser,modifyuser,paytype_id,student_id,studentregistration_id,paymentcategory_id}
        let errors = checkErrors();
        if (errors==""){
            const userConfirm = confirm(`Are You Sure To Update Following Payment Information \n
            id is ${id}
            Student Is ${student_id.firstname}
            Payment Category is ${paymentcategory_id.name}
            Registration Is ${studentregistration_id.classoffering_id.classname}
            `);
            if (userConfirm){
                const serverResponse = await updatePaymentsService(updateObject);
                if (serverResponse.data === "ok"){
                    alert("Update Successfully");
                    getAllPayments();
                    refreshStates();
                }else {
                    alert(`something went wrong!  ${serverResponse.data}`);

                }
            }





        }else {
            alert(`You Have Some Errors \n ${errors} `);
        }




    }








    return (
        <div>

            <div
                className="text-center bg-slate-900 dark:bg-slate-900 p-6 rounded-full text-white dark:text-white mb-5">
                <TextGenerateEffect words={lblHeading}/>
            </div>


            <div className="p-9 mb-10">


                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6">
                        <Label className="text-lg">Student <i className="text-red-600">*</i></Label>
                    </div>

                    <div className="col-span-6">
                        <Popover open={stuCmbOpen} onOpenChange={setStuCmbOpen}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" role="combobox" aria-expanded={stuCmbOpen}
                                        className="w-full h-[50px] justify-between">
                                    {student_id ? student_id.firstname + " " + student_id.lastname : "select student"}
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
                                                        setStudent_id(student_id?.id === student.id ? null : student);
                                                        setStuCmbOpen(false);

                                                    }}

                                                    onChange={()=>{
                                                        getStudentRegistrationList(student.stunum);
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
                    <div className="col-span-6">
                        <Label className="text-lg">Payment Category <i className="text-red-600">*</i></Label>
                    </div>

                    <div className="col-span-6">
                        <Popover open={payCatCmb} onOpenChange={setPayCatCmb}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" role="combobox" aria-expanded={payCatCmb} className="w-full h-[50px] justify-between">
                                    {paymentcategory_id ? paymentcategory_id.name : 'Select Payment Category'}
                                    <ChevronsUpDown className="opacity-50"/>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[1000px] p-0">
                                <Command>
                                    <CommandInput placeholder="Search Student" className="h-9"/>
                                    <CommandList>
                                        <CommandGroup>
                                            {paymentCategoryList.map((category) => (
                                                <CommandItem
                                                key={category.id}
                                                value={category.name}
                                                onSelect={() => {
                                                    setPaymentcategory_id(paymentcategory_id?.id === category.id ? null : category);
                                                    setPayCatCmb(false);
                                                }}
                                                >
                                                    {category.name}
                                                    <Check

                                                    className={cn(
                                                        "ml-auto",
                                                        paymentcategory_id?.id === category.id
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
                    <div className="col-span-6">
                        <Label className="text-lg">Registered Classes <i className="text-red-600">*</i></Label>
                    </div>

                    <div className="col-span-6">
                        <Popover open={stuRegCmb} onOpenChange={setStuRegCmb}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" role="combobox" className="w-full h-[50px] justify-between">
                                    {studentregistration_id ? studentregistration_id.classoffering_id.classname : 'select registration'}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[1000px] p-0">
                                <Command>
                                    <CommandInput placeholder="Select Registration" className="h-9"/>
                                    <CommandEmpty>No Registration Found</CommandEmpty>
                                    <CommandGroup>
                                        {studentRegistrationList.map((registration)=>(
                                            <CommandItem
                                            key={registration.id}
                                            value={registration.classoffering_id.classname}
                                            onSelect={()=>{
                                                setStudentregistration_id(
                                                    studentregistration_id?.id === registration.id ? null :registration
                                                );
                                                setStuRegCmb(false);
                                            }}
                                            >
                                                {registration.classoffering_id.classname}
                                                <Check className={cn(
                                                    "ml-auto",
                                                    studentregistration_id?.id === registration.id
                                                    ? "opacity-100"
                                                        : "opacity-0",
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


                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6">
                        <Label className="text-lg">Payment Type <i className="text-red-600">*</i></Label>
                    </div>

                    <div className="col-span-6">
                        <Select value={paytype_id?.name ?? ''} onValueChange={(selectedValue)=>{
                            const selected = paymentTypeList.find((pt)=>pt.name === selectedValue);
                            setPaytype_id(selected);
                        }}>
                            <SelectTrigger className="w-full min-h-[50px]">
                                <SelectValue placeholder="Select Payment Type" />
                            </SelectTrigger>
                            <SelectContent>
                                {paymentTypeList.map((pay:any,index:number)=>(
                                    <SelectItem key={index} value={pay.name}>{pay.name}</SelectItem>
                                ))}
                            </SelectContent>


                        </Select>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6">
                        <Label className="text-lg">Fees <i className="text-red-600">*</i></Label>
                    </div>

                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" value={fees} onChange={(e)=> setFees(e.target.value)}></Input>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6">
                        <Label className="text-lg">Month <i className="text-red-600">*</i></Label>
                    </div>

                    <div className="col-span-6">
                        <Input type="month" className="h-[50px]" value={month} onChange={(e)=> setMonth(e.target.value)}></Input>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6">
                        <Label className="text-lg">Payed Amount <i className="text-red-600">*</i></Label>
                    </div>

                    <div className="col-span-6">
                        <Input type="number" className="h-[50px]" placeholder="Enter Payed Amount" value={payedamount}
                               onChange={(e) => setPayedamount(e.target.value)}></Input>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6">
                        <Label className="text-lg">Balance Amount <i className="text-red-600">*</i></Label>
                    </div>

                    <div className="col-span-6">
                        <Input type="number" className="h-[50px]" placeholder="Enter Balance Amount"
                               value={balanceamount} onChange={(e) => setBalanceamount(e.target.value)}></Input>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6">
                        <Label className="text-lg">Reference Number <i className="text-blue-700">(optional)</i></Label>
                    </div>

                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" placeholder="Enter Reference Number"
                               value={referencenumber} onChange={(e) => setReferencenumber(e.target.value)}></Input>
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6">
                        <Label className="text-lg">Card Number <i className="text-blue-700">(optional)</i></Label>
                    </div>

                    <div className="col-span-6">
                        <Input type="number" className="h-[50px]" placeholder="Enter Card Numbner" value={cardno}
                               onChange={(e) => setCardno(e.target.value)}></Input>
                    </div>

                </div>



                <div className="grid grid-cols-12 gap-4 mt-20">
                    <div className="col-span-4">
                        <Button type="button" onClick={refreshStates}>reset</Button>
                    </div>
                    <div className="col-span-4 flex justify-center items-center">
                        <Button type="button" onClick={updatePayment}>Update</Button>
                    </div>
                    <div className="col-span-4 flex justify-end items-center">
                        <Button type="button" onClick={saveStudentPayment}>save</Button>
                    </div>
                </div>


            </div>


            <div className="p-9">
                <DataTable columns={getPaymentColumns(refillPayment, printPayment)} data={paymentList}></DataTable>
            </div>


        </div>
    )
}
export default Page
