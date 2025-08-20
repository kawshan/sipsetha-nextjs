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

export type Attendance={
    id:number,
    addeduser:number,
    updateuser:number,
    deleteuser:number,
    addeddate:string,
    updatedate:string,
    deletedate:string,
    note:string,
    attendancestatus_id:number,
    student_id:number,
    classoffering_id:number,



}

export function getAttendanceColumns(

    refillAttendance:(attendance:Attendance) => void,
    deleteAttendance:(attendance:Attendance) => void,
    printAttendance:(attendance:Attendance) => void
):ColumnDef<Attendance>[]{
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
            accessorFn:(row) => `${row.student_id.firstname} ${row.student_id.lastname}` ,
            header:"Student Name"
        },

        {
            accessorKey: "attendancestatus_id.name",
            header:"Attendance Status",
        },



        {
            accessorKey: "classoffering_id.classname",
            header: "Class Name",
        },



        {
            id: "actions",
            header: "Actions",
            cell: ({row}) => {
                const attendance = row.original

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
                            <DropdownMenuItem onClick={() => refillAttendance(attendance)}>Refill
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem onClick={()=> deleteAttendance(attendance)}>Delete</DropdownMenuItem>
                            <DropdownMenuItem onClick={()=>printAttendance(attendance)}>Print</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },



    ]
}
