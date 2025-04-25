"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import {Button} from "@/components/ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Guardian = {
    id: number
    firstname: string
    lastname: string
    nic: string
    mobile: string
    landno: string
    address: string
    email: string
}

export const columns: ColumnDef<Guardian>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
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
        accessorKey: "nic",
        header: "NIC",
    },

    {
        accessorKey: "mobile",
        header: "Mobile",
    },

    {
        accessorKey: "landno",
        header: "Land Num",
    },

    {
        accessorKey: "address",
        header: "Address",
    },

    {
        accessorKey: "status",
        header: "Status",
    },
]
