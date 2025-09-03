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

export type Enrollment={
    id:number,
    enrolmentnum:string,
    note:string,
    addeddatetime:string,
    modifydatetime:string,
    deletedatetime:string,
    addeduser_id:number,
    modifyuser_id:number,
    deleteuser_id:number,
    month:string,
    totalclassincome:string,
    totalservicecharge:string,
    totaladditionalcharge:string,
    totaltobepayed:string,
    payedamount:string,
    enrolmentstatus_id:number,
    teacher_id:number,
    classOfferings:[]
}

export function getEnrollmentColumns(

    refillEnrollment:(enrollment:Enrollment) => void,
    deleteEnrollment:(enrollment:Enrollment) => void,
    printEnrollment:(enrollment:Enrollment) => void
):ColumnDef<Enrollment>[]{
    return [

        {
            accessorKey: "indexnumber",
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
            cell:({row}) => row.index+1
        },

        {
            accessorKey: "enrolmentnum",
            header: "Enrolment NO",
        },


        {
            accessorKey: "month",
            header: "Month",
        },


        {
          accessorKey: "totalclassincome",
          header: "Total  Income",
        },

        {
            accessorKey: "totalservicecharge",
            header: "Total Service charge",
        },


        {
            accessorKey:"totaladditionalcharge",
            header: "Total Additional charge",
        },


        {
            accessorKey: "totaltobepayed",
            header: "Total ToBePayed",
        },









        {
            id: "actions",
            header: "Actions",
            cell: ({row}) => {
                const enrollment = row.original

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
                            <DropdownMenuItem onClick={() => refillEnrollment(enrollment)}>Refill
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem onClick={()=> deleteEnrollment(enrollment)}>Delete</DropdownMenuItem>
                            <DropdownMenuItem onClick={()=>printEnrollment(enrollment)}>Print</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },



    ]
}
