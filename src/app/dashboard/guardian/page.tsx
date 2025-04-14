"use client"
import React, {useState} from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue,} from "@/components/ui/select"


function Page() {

    const [open, setOpen] = useState(false);
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [nic, setNic] = useState("")
    const [mobile, setMobile] = useState("")
    const [landno, setLandNo] = useState("")
    const [address, setAddress] = useState("")
    const [guardiantype_id, setGuardianType] = useState(null)
    const [gender, setGender] = useState("")
    const [note, setNote] = useState("");


    function handelGender (value:any):any{
        setGender(value);
        console.log(value);
    }





    return (
        <div>

            <div className="flex justify-center content-center h-[100px] p-2 m-2 rounded-2xl bg-green-600">
                <div className="text-3xl p-5 font-bold">Guardian</div>
            </div>


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
                            <Input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>


                        <div>
                            <Label className="text-lg font-bold">Last Name</Label>
                            <Input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)}/>
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
                            <Label className="text-lg font-bold">Land No <span className="text-blue-800">(Optional)</span>
                            </Label>
                            <Input type="text" value={landno} onChange={(e) => setLandNo(e.target.value)}></Input>
                        </div>


                        <div className="col-span-3">
                            <Label className="text-lg font-bold">Address</Label>
                            <Input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} ></Input>
                        </div>

                    </div>



                    <div className="grid grid-cols-4 gap-4">


                        <div className="col-span-1">
                            <Label className="text-lg font-bold">Guardian Type</Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Guardian Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>

                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>




                        <div className="col-span-1">
                            <Label className="text-lg font-bold">Gender</Label>
                            <Select onValueChange={handelGender}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value={"true"}>male</SelectItem>
                                        <SelectItem value={"false"}>female</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>



                        <div className="col-span-2">
                            <Label className="text-lg font-bold">Note <span className="text-blue-800">(optional)</span> </Label>
                            <Input type="text" value={note} onChange={(e) => setGender(e.target.value)}></Input>
                        </div>

                    </div>


                    <div className="grid grid-cols-3 gap-4">

                        <div>
                            <Button variant="destructive">Reset</Button>
                        </div>

                        <div className="text-center">
                            <Button variant="warning">Update</Button>
                        </div>


                        <div className="text-end">
                            <Button variant="success">Save</Button>
                        </div>


                    </div>





                </DialogContent>
            </Dialog>


        </div>
    );
}

export default Page;