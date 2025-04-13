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
    const [user_id, setUserId] = useState(null)
    const [note, setNote] = useState("")
    const [addeddatetime, setAddeddatetime] = useState("")
    const [modifydatetime, setModifydatetime] = useState("")
    const [deletedatetime, setDeletedatetime] = useState("")


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
                        <DialogTitle>Add / Update Guardian</DialogTitle>
                        <DialogDescription>
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

                        <div>
                            <Label className="text-lg font-bold">Land No <span className="text-blue-800">(Optional)</span>
                            </Label>
                            <Input type="text" value={landno} onChange={(e) => setLandNo(e.target.value)}></Input>
                        </div>



                    </div>


                </DialogContent>
            </Dialog>


        </div>
    );
}

export default Page;