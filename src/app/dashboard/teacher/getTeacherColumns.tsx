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

export type Teacher={

    id:number,
    teachernum:string,
    fullname:string,
    callingname:string,
    nic:string,
    mobile:string,
    landno:string,
    email:string,
    address:string,
    teacherschool:string,
    birthdate:string,
    gender:string,
    accountname:string,
    accountnumber:string,
    qualifications_id:number,
    branch_id:number,
    teacherstatus_id:number,



}

export function getTeacherColumns(

    refillTeacher:(teacher:Teacher) => void,
    deleteTeacher:(teacher:Teacher) => void,
    printTeacher:(teacher:Teacher) => void
):ColumnDef<Teacher>[]{
    return [

        {
            accessorKey: "#",
            header: ({column}) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        #
                    </Button>
                )
            },
            cell:({row})=>row.index+1
        },

        {
            accessorKey: "fullname",
            header: "Full Name",
        },


        {
            accessorKey: "callingname",
            header: "Calling Name",
        },


        {
            accessorKey: "mobile",
            header: "Mobile",
        },

        {
            accessorKey: "email",
            header: "Email",
        },

        {
            accessorKey: "birthdate",
            header: "Birth Date",
        },

        {
            accessorKey: "nic",
            header: "NIC",
        },

        {
            accessorKey: "address",
            header: "Address",
        },

        {
            accessorKey: "teacherstatus_id.name",
            header: "Status",
        },



        {
            id: "actions",
            header: "Actions",
            cell: ({row}) => {
                const teacher = row.original

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
                            <DropdownMenuItem onClick={() => refillTeacher(teacher)}>Refill
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem onClick={()=> deleteTeacher(teacher)}>Delete</DropdownMenuItem>
                            <DropdownMenuItem onClick={()=>printTeacher(teacher)}>Print</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },



    ]
}
