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

export type ClassOffering={
    id:string,
    classname:string,
    fees:string,
    duration:string,
    note:string,
    addeduserid:number,
    addeddatetime:string,
    modifydatetime:string,
    deletedatetime:string,
    servicecharge:string,
    grade_id:number,
    classtype_id:number,
    academicyear_id:number,
    subject_id:number,
    teacher_id:number,
    classofferingstatus_id:number,
}

export function getClassOfferingColumns(

    refillClassOffering:(classOffering:ClassOffering) => void,
    deleteClassOffering:(classOffering:ClassOffering) => void,
    printClassOffering:(classOffering:ClassOffering) => void
):ColumnDef<ClassOffering>[]{
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
            accessorKey: "classname",
            header : "Class Name",
        },

        {
            accessorKey: "fees",
            header : "Fees",
        },

        {
            accessorKey: "duration",
            header : "Duration",
        },

        {
            accessorKey: "servicecharge",
            header : "Service charge",
        },

        {
            accessorKey: "classtype_id.name",
            header : "Class Type",
        },

        {
            accessorKey: "academicyear_id.name",
            header : "Academic Year",
        },


        {
            accessorKey: "subject_id.name",
            header : "Subject",
        },

        {
            accessorKey: "teacher_id.fullname",
            header : "Teacher",
        },


        {
            accessorKey: "grade_id.name",
            header : "Grade",
        },

        {
            accessorKey: "classofferingstatus_id.name",
            header : "Status",
        },



        {
            id: "actions",
            header: "Actions",
            cell: ({row}) => {
                const classOffering = row.original

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
                            <DropdownMenuItem onClick={() => refillClassOffering(classOffering)}>Refill
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem onClick={()=> deleteClassOffering(classOffering)}>Delete</DropdownMenuItem>
                            <DropdownMenuItem onClick={()=>printClassOffering(classOffering)}>Print</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },



    ]
}
