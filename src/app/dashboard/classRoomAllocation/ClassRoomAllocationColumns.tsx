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

export type ClassRoomAllocation={
    id:number,
    starttime:string,
    endtime:string,
    note:string,
    addeddatetime:string,
    modifydatetime:string,
    deletedatetime:string,
    allocationstatus_id:number,
    allocationtype_id:number,
    weekday_id:number,
    classhall_id:number,
    classoffering_id:number,
}

export function getClassRoomAllocationColumns(

    refillClassRoomAllocation:(classroomallocation:ClassRoomAllocation) => void,
    deleteClassRoomAllocation:(classroomallocation:ClassRoomAllocation) => void,
    printClassRoomAllocation:(classroomallocation:ClassRoomAllocation) => void
):ColumnDef<ClassRoomAllocation>[]{
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
            accessorKey: "starttime",
            header: "Start time",
        },

        {
            accessorKey: "endtime",
            header: "End time",
        },


        {
            accessorKey: "allocationtype_id.name",
            header: "Allocation type",
        },

        {
            accessorKey: "classhall_id.name",
            header: "Class Hall",
        },

        {
            accessorKey: "classoffering_id.classname",
            header: "Class Name",
        },

        {
            accessorKey: "allocationstatus_id.name",
            header: "Status",
        },



        {
            id: "actions",
            header: "Actions",
            cell: ({row}) => {
                const classRoomAllocation = row.original

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
                            <DropdownMenuItem onClick={() => refillClassRoomAllocation(classRoomAllocation)}>Refill
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem onClick={()=> deleteClassRoomAllocation(classRoomAllocation)}>Delete</DropdownMenuItem>
                            <DropdownMenuItem onClick={()=>printClassRoomAllocation(classRoomAllocation)}>Print</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },



    ]
}
