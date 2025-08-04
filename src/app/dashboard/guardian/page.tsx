"use client"
import React, { Suspense, useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { getGuardianTypeService } from "@/services/guardianTypeService";
import {
    deleteGuardianService,
    getAllGuardianService,
    saveGuardianService,
    updateGuardianService
} from "@/services/guardianService";
import { Guardian, getGuardianColumns } from "@/app/dashboard/guardian/guardianColumns"
import { DataTable } from "@/components/data-table"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Shell } from "lucide-react";
import { comment } from "postcss";


function Page() {

    const [open, setOpen] = useState(false);
    const [id, setId] = useState<number | null>(null);
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [nic, setNic] = useState("")
    const [mobile, setMobile] = useState("")
    const [landno, setLandNo] = useState("")
    const [address, setAddress] = useState("")
    const [guardiantype_id, setGuardianType] = useState<any | null>(null)
    const [gender, setGender] = useState(true)
    const [note, setNote] = useState("");
    const [guardianTypeList, setGuardianTypeList] = useState([]);
    const [guardianList, setGuardianList] = useState([]);
    const [status, setStatus] = useState(false);


    useEffect(() => {
        getGuardianTye();
        getAllGuardianList();
    }, [])


    function handelGender(value: any): any {

        setGender(value)
        console.log(value)

    }


    function handelStatus(value: any): any {
        setStatus(value);
        console.log(value);
    }


    function getGuardianTye(): any {
        getGuardianTypeService().then((res: any) => {
            console.log("guarding type from function",res.data);
            setGuardianTypeList(res.data);
        })
    }


    function handelGuardianType(value: any): any {
        console.log(value);
        setGuardianType(value);
    }

    function getAllGuardianList(): any {
        getAllGuardianService().then((res: any) => {
            setGuardianList(res.data);
        })
    }

    function saveGuardian(): any {
        const saveGuardianObject: Object = {
            firstname,
            lastname,
            nic,
            mobile,
            landno,
            address,
            guardiantype_id,
            gender,
            note,
            status
        }
        saveGuardianService(saveGuardianObject).then((res: any) => {
            alert("Guardian saved successfully")
            setOpen(false);
        }).catch((error: any) => {
            console.log(error);
            alert("Something went wrong")
        })
    }


    function refillGuardian(guardianObject: any): any {
        setOpen(true);
        console.log("refill guardian")
        setId(guardianObject.id);
        setFirstName(guardianObject.firstname);
        setLastName(guardianObject.lastname);
        setNic(guardianObject.nic);
        setMobile(guardianObject.mobile);
        setAddress(guardianObject.address);
        setNote(guardianObject.note);

        setGuardianType(guardianObject.guardiantype_id);
        setGender(guardianObject.gender);
        setStatus(guardianObject.status);

    }

    function deleteGuardian(guardianObject: any): any {
        //logic here
        console.log("guardian delete clicked")
        const userConfirm = confirm(`Are you sure to delete following guardian
        first name is ${guardianObject.firstname}
        last name is ${guardianObject.lastname}
        `)
        if (userConfirm) {
            deleteGuardianService(guardianObject).then((res: any) => {
                alert(`guardian deleted successfully`)
            }).catch((error: any) => {
                console.log(error);
                alert(`Something went wrong ${error}`)
            })
        }
    }


    async function printGuardian(guardianObject: any) {
    //     let's implement prints from back end ---> this is the time to learn jasper reports
    }


    function UpdateGuardian(): any {
        const updateGuardianObject: Object = {
            id,
            firstname,
            lastname,
            nic,
            mobile,
            landno,
            address,
            guardiantype_id,
            gender,
            note,
            status
        }
        const userConfirm = confirm(`Are you sure to update following guardian`)
        if (userConfirm) {
            updateGuardianService(updateGuardianObject).then((res: any) => {
                alert("Guardian updated successfully")
                setOpen(false);
            }).catch((error: any) => {
                console.log(error);
                alert("Something went wrong")
            })
        }
    }


    const guardianManagementMaster = `Guardian Management Master`;

    console.log("guardian id ",guardiantype_id);

    // @ts-ignore
    return (
        <div>

            <div className="text-center bg-slate-900 dark:bg-slate-900 p-6 text-white dark:text-white mb-5">
                <TextGenerateEffect words={guardianManagementMaster} />
            </div>


            <div>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button variant="default" className="ms-3">Add/Update Guardian</Button>
                    </DialogTrigger>
                    <DialogContent className="w-full lg:max-w-screen-2xl sm:max-w-screen-2xl">
                        <DialogHeader>
                            <DialogTitle className="text-center">Add / Update Guardian</DialogTitle>
                            <DialogDescription className="text-center">
                                Make Changes for Guardians
                            </DialogDescription>
                        </DialogHeader>


                        <div className="grid grid-cols-4 gap-4">

                            <div>
                                <Label className="text-lg font-bold">First Name</Label>
                                <Input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                            </div>


                            <div>
                                <Label className="text-lg font-bold">Last Name</Label>
                                <Input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                            </div>

                            <div>
                                <Label className="text-lg font-bold">NIC</Label>
                                <Input type="text" value={nic} onChange={(e) => setNic(e.target.value)}></Input>
                            </div>

                            <div>
                                <Label className="text-lg font-bold">Mobile</Label>
                                <Input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)}></Input>
                            </div>


                        </div>


                        <div className="grid grid-cols-4 gap-4">

                            <div className="col-span-1">
                                <Label className="text-lg font-bold">Land No <span
                                    className="text-blue-800">(Optional)</span>
                                </Label>
                                <Input type="text" value={landno} onChange={(e) => setLandNo(e.target.value)}></Input>
                            </div>


                            <div className="col-span-3">
                                <Label className="text-lg font-bold">Address</Label>
                                <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)}></Input>
                            </div>

                        </div>


                        <div className="grid grid-cols-4 gap-4">


                            <div className="col-span-1">
                                <Label className="text-lg font-bold">Guardian Type</Label>
                                <Select
                                    value={guardiantype_id?.name ?? ''}
                                    onValueChange={(selectedName) => {
                                        const selected = guardianTypeList.find(gt => gt.name === selectedName);
                                        setGuardianType(selected); // Store full object in state
                                    }}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Guardian Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {guardianTypeList.map((guardianType: any, index: number) => (
                                            <SelectItem value={guardianType.name} key={index}>
                                                {guardianType.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                            </div>


                            <div className="col-span-1">
                                <Label className="text-lg font-bold">Gender</Label>
                                <Select value={gender} onValueChange={handelGender}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value={true}>male</SelectItem>
                                            <SelectItem value={false}>female</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>


                            <div className="col-span-2">
                                <Label className="text-lg font-bold">Note <span
                                    className="text-blue-800">(optional)</span> </Label>
                                <Input type="text" value={note} onChange={(e) => setNote(e.target.value)}></Input>
                            </div>

                        </div>


                        <div className="grid grid-cols-4 gap-4">

                            <div className="col-span-1">
                                <div className="col-span-1">
                                    <Label className="text-lg font-bold">Status</Label>
                                    <Select value={status} onValueChange={handelStatus}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Gender" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value={true}>Available</SelectItem>
                                                <SelectItem value={false}>Not-available</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                        </div>


                        <div className="grid grid-cols-3 gap-4">

                            <div>
                                <Button variant="destructive">Reset</Button>
                            </div>

                            <div className="text-center">
                                <Button variant="warning" onClick={UpdateGuardian}>Update</Button>
                            </div>


                            <div className="text-end">
                                <Button variant="success" onClick={saveGuardian}>Save</Button>
                            </div>


                        </div>


                    </DialogContent>
                </Dialog>
            </div>


            <div className="mt-5 p-3">
                <DataTable columns={getGuardianColumns(refillGuardian, deleteGuardian, printGuardian)}
                    data={guardianList} />
            </div>


        </div>
    );
}

export default Page;