"use client"
import React from 'react'
import {ColumnDef} from "@tanstack/react-table";
import {Button} from "@/components/ui/button";
import {ArrowUpDown, MoreHorizontal} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export type Payment={
    id:number,
    fees:number,
    month:string,
    billnumber:string,
    payedamount:string,
    balanceamount:string,
    referencenumber:string,
    cardno:string,
    addeddatetime:string,
    modifydatetime:string,
    addeduser:string,
    modifyuser:string,
    paytype_id:number,
    student_id:number,
    studentregistration_id:number,
    paymentcategory_id:number,


}

export function getPaymentColumns(

    refillPayment:(payment:Payment) => void,
    printPayment:(payment:Payment) => void
):ColumnDef<Payment>[]{
    return [

        {
            accessorKey: "id",
            header: ({column}) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        #
                        <ArrowUpDown className="ml-2 h-4 w-4"/>
                    </Button>
                )
            },
            cell:({row}) => row.index+1,
        },

        {
          accessorKey: "student_id.firstname",
          header:"Student name"
        },


        {
            accessorKey: "studentregistration_id.classoffering_id.classname",
            header: "Class Name"
        },


        {
            accessorKey: "paymentcategory_id.name",
            header: "Payment Type"
        },

        {
            accessorKey: "fees",
            header: "Fees",
            cell: ({ row, column }) => {
                // Get the value of this cell
                const value = row.getValue<number>(column.id);
                return value?.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) ?? "";
            },
        },



        {
            accessorKey: "month",
            header: "Month",
        },


        {
            accessorKey: "billnumber",
            header: "Bill Number",
        },



        {
            accessorKey: "payedamount",
            header: "Payed Amount",
        },



        {
            accessorKey: "balanceamount",
            header: "Balance amount",
        },


        {
            accessorKey: "addeddatetime",
            header: "Payment Date",
        },

        {
            id: "actions",
            header: "Actions",
            cell: ({row}) => {
                const payOB = row.original

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4"/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => refillPayment(payOB)}>Refill
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem onClick={()=>printPayment(payOB)}>Print</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },



    ]
}
