"use client"
import React, {useEffect, useState} from 'react'
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";
import {DataTable} from "@/components/data-table";
import {getClassHallColumns} from "@/app/dashboard/classhall/classHallColumns";
import {getAllClassHallService} from "@/services/classHallService";

const Page = () => {


    const [id, setId] = useState(null);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [mincount, setMinCount] = useState("");
    const [maxcount, setMaxCount] = useState("");
    const [tablecount, setTablecount] = useState("");
    const [benchcount, setBenchCount] = useState("");
    const [maxtablecount, setMaxtablecount] = useState("");
    const [maxbenchcount, setMaxbenchcount] = useState("");
    const [note, setNote] = useState("");
    const [addeddatetime, setAddeddatetime] = useState("");
    const [modifydatetime, setModifydatetime] = useState("");
    const [deletedatetime, setDeletedatetime] = useState("");
    const [addeduserid, setAddeduserid] = useState(null);
    const [classhallstatus_id,setClasshallstatus_id] = useState(null);
    const [features, setFeatures] = useState([]);


    const [classHallList, setClassHallList] = useState([]);



    const lblHeading = 'Class Hall Master';


    useEffect(() => {
        getAllClassHall();
    },[])



    const refillClassHall = ()=>{

    }



    const deleteClassHall = ()=>{

    }



    const printClassHall = ()=>{

    }



    const getAllClassHall = async () => {
            const serverResponse = await getAllClassHallService();
            setClassHallList(serverResponse.data);
    }


    return (
        <div>

            <div
                className="text-center bg-slate-900 dark:bg-slate-900 p-6 rounded-full text-white dark:text-white mb-5">
                <TextGenerateEffect words={lblHeading}/>
            </div>


            <div className="mt-20 p-9">

                <div className="grid grid-cols-12 gap-4 mb-5">
                    <p className="text-red-700">Required *</p>
                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label>Name <i className="text-red-500"> *</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name"/>
                    </div>
                </div>



                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label>Location <i className="text-red-500"> *</i></Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="text" className="h-[50px]" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter Location"/>
                    </div>
                </div>



                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label>Min Student Count <i className="text-red-500"> *</i></Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="number" className="h-[50px]" value={mincount} onChange={(e) => setMinCount(e.target.value)} placeholder="Enter Min Student Count"/>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label>Max Student Count <i className="text-red-500"> *</i></Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="number" className="h-[50px]" value={maxcount} onChange={(e) => setMaxCount(e.target.value)} placeholder="Enter Max Student Count"/>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label>Min Table Count <i className="text-red-500"> *</i></Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="number" className="h-[50px]" value={tablecount} onChange={(e) => setTablecount(e.target.value)} placeholder="Enter Min Table Count"/>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label>Max Table Count <i className="text-red-500"> *</i></Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="number" className="h-[50px]" value={maxtablecount} onChange={(e) => setMaxtablecount(e.target.value)} placeholder="Enter Max Table Count"/>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label>Min Bench Count <i className="text-red-500">* </i></Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="number" className="h-[50px]" value={benchcount} onChange={(e) => setBenchCount(e.target.value)} placeholder="Enter Min Bench Count"/>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label>Max Bench Count <i className="text-red-500"> *</i></Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="number" className="h-[50px]" value={maxbenchcount} onChange={(e) => setMaxbenchcount(e.target.value)} placeholder="Enter Max Bench Count"/>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label>Note <i className="text-indigo-700">(optional)</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Textarea value={note} className="h-[50px]" onChange={(e) => setNote(e.target.value)} placeholder="Enter Note Here"/>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label>Class Hall Status <i className="text-red-700">*</i> </Label>
                    </div>
                    <div className="col-span-6">

                    </div>
                </div>



                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label>Features <i className="text-red-700">*</i> </Label>
                    </div>
                    <div className="col-span-6">

                    </div>
                </div>



            </div>


            <div className="p-9">
                <DataTable columns={getClassHallColumns(refillClassHall,deleteClassHall,printClassHall)} data={classHallList} />
            </div>




        </div>
    )
}
export default Page
