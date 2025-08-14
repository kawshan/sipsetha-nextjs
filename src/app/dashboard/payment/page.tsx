"use client"
import React, {useEffect, useState} from 'react'
import {getAllPaymentsService} from "@/services/paymentService";
import {DataTable} from "@/components/data-table";
import {getPaymentColumns} from "@/app/dashboard/payment/paymentColumns";
import {Label} from "@/components/ui/label";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {Input} from "@/components/ui/input";


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


    useEffect(() => {
        getAllPayments();
    }, [])


    const lblHeading = 'Payment Master';


    const getAllPayments = async () => {
        const serverResponse = await getAllPaymentsService();
        setPaymentList(serverResponse.data);
        console.log(serverResponse.data);

    }


    const refillPayment = ()=>{

    }


    const printPayment = ()=>{}







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

                    </div>

                </div>



                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6">
                        <Label className="text-lg">Payment Category <i className="text-red-600">*</i></Label>
                    </div>

                    <div className="col-span-6">

                    </div>

                </div>




                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6">
                        <Label className="text-lg">Registered Classes <i className="text-red-600">*</i></Label>
                    </div>

                    <div className="col-span-6">

                    </div>

                </div>



                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6">
                        <Label className="text-lg">Payment Type <i className="text-red-600">*</i></Label>
                    </div>

                    <div className="col-span-6">

                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6">
                        <Label className="text-lg">Fees <i className="text-red-600">*</i></Label>
                    </div>

                    <div className="col-span-6">

                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6">
                        <Label className="text-lg">Month <i className="text-red-600">*</i></Label>
                    </div>

                    <div className="col-span-6">

                    </div>

                </div>


                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6">
                        <Label className="text-lg">Payed Amount <i className="text-red-600">*</i></Label>
                    </div>

                    <div className="col-span-6">
                        <Input type="number" className="h-[50px]" placeholder="Enter Payed Amount" value={payedamount} onChange={(e)=>setPayedamount(e.target.value)}></Input>
                    </div>

                </div>



                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6">
                        <Label className="text-lg">Balance Amount <i className="text-red-600">*</i></Label>
                    </div>

                    <div className="col-span-6">
                        <Input type="number" className="h-[50px]" placeholder="Enter Balance Amount" value={balanceamount} onChange={(e)=>setBalanceamount(e.target.value)}></Input>
                    </div>

                </div>



                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6">
                        <Label className="text-lg">Reference Number <i className="text-blue-700">(optional)</i></Label>
                    </div>

                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" placeholder="Enter Reference Number" value={referencenumber} onChange={(e)=>setReferencenumber(e.target.value)}></Input>
                    </div>

                </div>



                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-6">
                        <Label className="text-lg">Card Number <i className="text-blue-700">(optional)</i></Label>
                    </div>

                    <div className="col-span-6">
                        <Input type="number" className="h-[50px]" placeholder="Enter Card Numbner" value={cardno} onChange={(e)=>setCardno(e.target.value)}></Input>
                    </div>

                </div>



            </div>






            <div className="p-9">
                <DataTable columns={getPaymentColumns(refillPayment,printPayment)} data={paymentList} ></DataTable>
            </div>


        </div>
    )
}
export default Page
