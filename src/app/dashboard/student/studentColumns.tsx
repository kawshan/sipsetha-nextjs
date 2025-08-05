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

export type Student={
    stunum:string,
    firstname:string,
    lastname:string,
    dob:string,
    gender:string,
    address:string,
    mobile:string,
    status:string,
    note:string,

}

export function getStudentColumns(

    refillStudent:(student:Student) => void,
    deleteStudent:(student:Student) => void,
    printStudent:(student:Student) => void
):ColumnDef<Student>[]{
    return [

        {
            accessorKey: "stunum",
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
        },

        {
            accessorKey: "firstname",
            header: "First Name",
        },

        {
            accessorKey: "lastname",
            header: "Last Name",
        },


        {
            accessorKey: "dob",
            header: "Date Of Birth",
        },



        {
            accessorKey: "gender",
            header: "Gender",
        },



        {
            accessorKey: "address",
            header: "Address",
        },


        {
            accessorKey: "mobile",
            header: "Mobile",
        },

        {
            accessorKey: "status",
            header: "Status",
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
                            <DropdownMenuItem onClick={() => refillStudent(student)}>Refill
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem onClick={()=> deleteStudent(student)}>Delete</DropdownMenuItem>
                            <DropdownMenuItem onClick={()=>printStudent(student)}>Print</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },



    ]
}
