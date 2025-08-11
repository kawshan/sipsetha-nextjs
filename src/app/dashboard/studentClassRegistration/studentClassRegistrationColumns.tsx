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

export type StudentClassRegistration={
    id:number,
    indexnumber:string,
    fee:number,
    addeddatetime:string,
    deletedatetime:string,
    modifydatetime:string,
    note:string,
    student_id:number,
    classoffering_id:number,
    registrationstatus_id:number,
    registerdtype_id:number,


}

export function getStudentClassRegistrationColumns(

    refillStudentClassRegistration:(studentClassRegistration:StudentClassRegistration) => void,
    deleteStudentClassRegistration:(studentClassRegistration:StudentClassRegistration) => void,
    printStudentClassRegistration:(studentClassRegistration:StudentClassRegistration) => void
):ColumnDef<StudentClassRegistration>[]{
    return [

        {
            accessorKey: "indexnumber",
            header: ({column}) => {
                return (
                    <Button
                        variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
            Index Number
                <ArrowUpDown className="ml-2 h-4 w-4"/>
                    </Button>
            )
            },
        },

        {
            accessorKey: "fee",
            header: "Fees",
        },

        {
            accessorKey: "addeddatetime",
            header: "Payed date",
        },


        {
            accessorKey: "student_id.firstname",
            header: "Student Name",
        },



        {
            accessorKey: "classoffering_id.classname",
            header: "Class Name",
        },



        {
            accessorKey: "registrationstatus_id.name",
            header: "Registration Status",
        },


        {
            accessorKey: "registerdtype_id.name",
            header: "Registered Type",
        },

        {
            id: "actions",
            header: "Actions",
            cell: ({row}) => {
                const student = row.original

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
                    <DropdownMenuItem onClick={() => refillStudentClassRegistration(student)}>Refill
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem onClick={()=> deleteStudentClassRegistration(student)}>Delete</DropdownMenuItem>
                <DropdownMenuItem onClick={()=>printStudentClassRegistration(student)}>Print</DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            )
            },
        },



    ]
}
