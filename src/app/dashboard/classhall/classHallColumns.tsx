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

export type ClassHall={
    id:number,
    name:string,
    location:string,
    mincount:number,
    maxcount:number,
    tablecount:number,
    benchcount:number,
    maxtablecount:number,
    maxbenchcount:number,
    note:string,
    addeddatetime:string,
    modifydatetime:string,
    deletedatetime:string,
    addeduserid:number,
    classhallstatus_id:number,
    features:[],


}

export function getClassHallColumns(

    refillClassHall:(classHall:ClassHall) => void,
    deleteClassHall:(classHall:ClassHall) => void,
    printClassHall:(classHall:ClassHall) => void
):ColumnDef<ClassHall>[]{
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
                        <ArrowUpDown className="ml-2 h-4 w-4"/>
                    </Button>
                )
            },
            cell:({row})=>row.index+1
        },

        {
            accessorKey: "name",
            header: "Name",
        },

        {
            accessorKey: "location",
            header: "Location",
        },

        {
            accessorKey: "mincount",
            header: "Student Count",
        },

        {
            accessorKey: "tablecount",
            header: "Table Count",
        },



        {
            accessorKey: "benchcount",
            header: "Bench count",
        },



        {
            accessorKey: "classhallstatus_id.name",
            header: "Class Hall Status",
        },



        {
            id: "actions",
            header: "Actions",
            cell: ({row}) => {
                const classHall = row.original

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
                            <DropdownMenuItem onClick={() => refillClassHall(classHall)}>Refill
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem onClick={()=> deleteClassHall(classHall)}>Delete</DropdownMenuItem>
                            <DropdownMenuItem onClick={()=>printClassHall(classHall)}>Print</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },



    ]
}
