"use client"
import React, {useEffect, useState} from 'react'
import {getAllPayments, getAllPaymentsService} from "@/services/paymentService";
import {DataTable} from "@/components/data-table";
import {getPaymentColumns} from "@/app/dashboard/payment/paymentColumns";


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







            <div className="p-9">
                <DataTable columns={getPaymentColumns(refillPayment,printPayment)} data={paymentList} ></DataTable>
            </div>


        </div>
    )
}
export default Page
