"use client"
import React, {useEffect, useState} from 'react'
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";
import {DataTable} from "@/components/data-table";
import {getClassHallColumns} from "@/app/dashboard/classhall/classHallColumns";
import {
    deleteClassHallService,
    getAllClassHallService,
    saveClassHallService,
    updateClassHallService
} from "@/services/classHallService";
import {getAllClassHallFeaturesService} from "@/services/classHallFeatures";

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {Check, ChevronsUpDown} from "lucide-react";
import {cn} from "@/lib/utils";
import {getAllClassHallStatusService} from "@/services/classHallStatusService";
import { toast } from "sonner";



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
    const [features, setFeatures] = useState<any[]>([]);


    const [classHallList, setClassHallList] = useState([]);
    const [classHallFeaturesList, setClassHallFeaturesList] = useState([]);
    const [classHallStatusList, setClassHallStatusList] = useState([]);


    const [ftrCmbOpen, setFtrCmbOpen] = useState(false);



    const lblHeading = 'Class Hall Master';


    useEffect(() => {
        getAllClassHall();
        getAllClassHallFeatures();
        getAllClassHallStatus();
    },[])



    const refillClassHall = (obj:any)=>{
        setId(obj.id);
        setName(obj.name);
        setLocation(obj.location);
        setMinCount(obj.mincount);
        setMaxCount(obj.maxcount);
        setTablecount(obj.tablecount);
        setBenchCount(obj.benchcount);
        setMaxtablecount(obj.maxtablecount);
        setMaxbenchcount(obj.maxbenchcount)
        setNote(obj.note == null ? "" : obj.note);
        setAddeddatetime(obj.addeddatetime);
        setModifydatetime(obj.modifydatetime);
        setDeletedatetime(obj.deletedatetime);
        setAddeduserid(obj.addeduserid);
        setClasshallstatus_id(obj.classhallstatus_id);
        setFeatures(obj.features);

    }



    const deleteClassHall = async (obj:any)=>{
        const userConfirm = confirm(`Are You Sure To Update Following Information
            Name Is ${obj.name}
            location Is ${obj.location}
            `);

        if (userConfirm) {
            const serverResponse = await deleteClassHallService(obj);
            if (serverResponse.data=="ok") {
                toast.success("Successfully Deleted", {
                    className: "h-[100px]", // width 24rem
                });
                await getAllClassHall();
                refreshStates();
            }else {
                alert(`Something went wrong`);
            }
        }
    }



    const printClassHall = ()=>{

    }



    const getAllClassHall = async () => {
            const serverResponse = await getAllClassHallService();
            setClassHallList(serverResponse.data);
    }




    const getAllClassHallFeatures = async () => {
        const serverResponse = await getAllClassHallFeaturesService();
        setClassHallFeaturesList(serverResponse.data);
        console.log(serverResponse.data);
    }


    const getAllClassHallStatus = async () => {
        const serverResponse = await getAllClassHallStatusService();
        setClassHallStatusList(serverResponse.data);

    }



    const checkErrors = ()=>{
        let errors = "";

        if (name == ""){
            errors = errors + "Name Cannot Be Empty \n";
        }

        if (location == ""){
            errors = errors + "Location Cannot Be Empty \n";
        }

        if (mincount == ""){
            errors = errors + "MinCount Cannot Be Empty \n";
        }

        if (maxcount == ""){
            errors = errors + "MaxCount Cannot Be Empty \n";
        }

        if (tablecount == ""){
            errors = errors + "Min TableCount Cannot Be Empty \n";
        }

        if (benchcount == ""){
            errors = errors + "Min BenchCount Cannot Be Empty \n";
        }

        if (maxtablecount == ""){
            errors = errors + "MaxTableCount Cannot Be Empty \n";
        }

        if (maxbenchcount == ""){
            errors = errors + "Max Bench Count Cannot Be Empty \n";
        }

        if (classhallstatus_id == null) {
            errors = errors + "ClassHallStatus Cannot Be Empty \n";
        }


        return errors;
    }


    const saveClassHall = async ()=>{

        const saveObject = {name,location,mincount,maxcount,tablecount,benchcount,maxtablecount,maxbenchcount,note,classhallstatus_id,features}


        let errors = checkErrors();
        if (errors == ""){

            const userConfirm = confirm(`Are you sure you want to Add this Class Hall ? \n ${name}`);
            if (userConfirm) {
                const serverResponse = await saveClassHallService(saveObject);
                if (serverResponse.data == "ok") {
                    alert("Successfully Saved!");
                    await getAllClassHall();
                    refreshStates();
                }
            }



        }else {
            alert(`You Have Following Errors \n ${errors}`);
        }
    }



    const updateClassHall = async ()=>{

        const updateObject = {id,name,location,mincount,maxcount,tablecount,benchcount,maxtablecount,maxbenchcount,note,addeddatetime,modifydatetime,deletedatetime,addeduserid,classhallstatus_id,features};

        let errors = checkErrors();
        if (errors == ""){
            const userConfirm = confirm(`Are You Sure To Update Following Information
            Name Is ${name}
            location Is ${location}
            `);
            if (userConfirm) {
                const serverResponse = await updateClassHallService(updateObject);
                if (serverResponse.data == "ok") {
                    alert("Successfully Updated!");
                    await getAllClassHall();
                    refreshStates();
                }else {
                    alert(`Something went wrong!`);
                }
            }
        }else {
            alert(`You Have Some Errors \n ${errors}`);
        }







    }


    const refreshStates = ()=>{
        setId(null);
        setName("");
        setLocation("");
        setMinCount("");
        setMaxCount("");
        setTablecount("");
        setBenchCount("");
        setMaxtablecount("");
        setMaxbenchcount("");
        setNote("");
        setAddeddatetime("");
        setModifydatetime("");
        setDeletedatetime("");
        setAddeduserid(null);
        setClasshallstatus_id(null);
        setFeatures([]);
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
                        <Select value={classhallstatus_id?.name ?? ''} onValueChange={(selectedValue)=>{
                            const selected = classHallStatusList.find((status)=>status.name === selectedValue);
                            setClasshallstatus_id(selected);
                        }}>
                           <SelectTrigger className="w-full min-h-[50px]">
                               <SelectValue placeholder="Select Status" />
                           </SelectTrigger>
                            <SelectContent>
                                {classHallStatusList.map((status)=>(
                                    <SelectItem value={status.name} key={status.id}>{status.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>



                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label>Features <i className="text-red-700">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Popover open={ftrCmbOpen} onOpenChange={setFtrCmbOpen}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" role="combobox" aria-expanded={ftrCmbOpen} className="w-full h-[50px] justify-between">
                                    {features.length > 0 ? features.map(f=> f.name).join(', ') : 'Select Features' }
                                    <ChevronsUpDown className="opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[1000px] p-0">
                                <Command>
                                    <CommandInput placeholder="Search Feature" />
                                    <CommandList>
                                        <CommandEmpty>No Feature Found</CommandEmpty>
                                        <CommandGroup>
                                            {classHallFeaturesList.map((feature)=>(
                                                <CommandItem
                                                key={feature.id}
                                                value={feature.name}
                                                onSelect={()=>{
                                                    if (features.some(f=> f.id === feature.id)){
                                                        setFeatures(features.filter(f => f.id !== feature.id))
                                                    }else {
                                                        setFeatures([...features,feature])
                                                    }
                                                }}
                                                >
                                                    {feature.name}
                                                    <Check className={cn(
                                                        "ml-auto",
                                                        features.some(s=> s.id === feature.id) ? "opacity-100" : "opacity-0"
                                                    )}
                                                           />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>



                <div className="grid grid-cols-12 gap-4 mt-20">
                    <div className="col-span-4">
                        <Button type="button" onClick={refreshStates}>reset</Button>
                    </div>
                    <div className="col-span-4 flex justify-center items-center">
                        <Button type="button" onClick={updateClassHall}>Update</Button>
                    </div>
                    <div className="col-span-4 flex justify-end items-center">
                        <Button type="button" onClick={saveClassHall}>save</Button>
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
