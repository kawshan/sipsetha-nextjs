"use client"
import React, {useEffect, useState} from 'react'
import {DataTable} from "@/components/data-table";
import {getClassRoomAllocationColumns} from "@/app/dashboard/classRoomAllocation/ClassRoomAllocationColumns";
import {
    deleteClassRoomAllocationService,
    getAllClassRoomAllocationServices,
    saveClassRoomAllocationService,
    updateClassRoomAllocationService
} from "@/services/classRoomAllocationService";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {getAllWeekdayService} from "@/services/weekdayService";
import {getAllAllocationTypeService} from "@/services/allocationTypeService";
import {getAllClassHallService} from "@/services/classHallService";
import {getAllClassOfferingService} from "@/services/classOfferingService";


import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Check, ChevronsUpDown} from "lucide-react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {cn} from "@/lib/utils";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {toast} from "sonner";
import {getAllClassRoomAllocationStatusServices} from "@/services/classRoomAllocationStatusService";

const Page = () => {

    const [id,setId] = useState("");
    const [starttime, setStarttime] = useState("");
    const [endtime, setEndtime] = useState("");
    const [note, setNote] = useState("");
    const [addeddatetime, setAddeddatetime] = useState("");
    const [modifydatetime, setModifydatetime] = useState("");
    const [deletedatetime, setDeletedatetime] = useState("");
    const [allocationstatus_id,setAllocationstatus_id] = useState(null);
    const [allocationtype_id,setAllocationtype_id] = useState(null);
    const [weekday_id,setWeekday_id] = useState(null);
    const [classhall_id,setClasshall_id] = useState(null);
    const [classoffering_id,setClassoffering_id] = useState(null);


    const [classRoomAllocationList,setClassRoomAllocationList] = useState([]);
    const [weekdayList,setWeekdayList] = useState([]);
    const [allocationTypeList,setAllocationTypeList] = useState([]);
    const [classHallList,setClassHallList] = useState([]);
    const [classOfferingList,setClassOfferingList] = useState([]);
    const [allocationStatusList,setAllocationStatusList] = useState([]);

    const [clsCmbOpen,setClsCmbOpen] = useState(false);
    const [offeringCmbOpen,setOfferingCmbOpen] = useState(false);




    useEffect(()=>{
        getAllClassRoomAllocation();
        getAllWeekday();
        getAllAllocationTypeList();
        getAllClassHallList();
        getAllClassOfferingList();
        getAllClassRoomAllocationStatus();
    },[])



    const getAllClassRoomAllocation = async () => {
        const serverResponse = await getAllClassRoomAllocationServices();
        setClassRoomAllocationList(serverResponse.data);
        console.log('all class room allocations', serverResponse.data);
    }


    const getAllClassRoomAllocationStatus = async () => {
        const serverResponse  = await getAllClassRoomAllocationStatusServices();
        setAllocationStatusList(serverResponse.data);
        console.log(`Allocation Status List`, serverResponse.data);
    }


    const getAllWeekday = async () => {
        const serverResponse = await getAllWeekdayService();
        setWeekdayList(serverResponse.data);
        console.log('weekday list', serverResponse.data);
    }


    const getAllAllocationTypeList = async () => {
        const serverResponse = await getAllAllocationTypeService();
        setAllocationTypeList(serverResponse.data);
        console.log('all allocation types', serverResponse.data);
    }


    const getAllClassHallList = async () => {
        const serverResponse = await getAllClassHallService();
        setClassHallList(serverResponse.data);
        console.log('all class halls', serverResponse.data);
    }


    const getAllClassOfferingList = async () => {
        const serverResponse = await getAllClassOfferingService();
        setClassOfferingList(serverResponse.data);
        console.log('all class offering', serverResponse.data);
    }


    const refreshStates = ()=>{
        setId("");
        setStarttime("");
        setEndtime("");
        setNote("");
        setAddeddatetime("");
        setModifydatetime("");
        setDeletedatetime("");
        setAllocationstatus_id(null);
        setAllocationtype_id(null);
        setWeekday_id(null);
        setClasshall_id(null);
        setClassoffering_id(null);
    }




    const refillClassRoomAllocation =  (obj:any) => {
        setId(obj.id);
        setStarttime(obj.starttime);
        setEndtime(obj.endtime);
        setNote(obj.note == null ? "" : obj.note);
        setAddeddatetime(obj.addeddatetime);
        setModifydatetime(obj.modifydatetime);
        setDeletedatetime(obj.deletedatetime);
        setAllocationstatus_id(obj.allocationstatus_id);
        setAllocationtype_id(obj.allocationtype_id);
        setWeekday_id(obj.weekday_id);
        setClasshall_id(obj.classhall_id);
        setClassoffering_id(obj.classoffering_id);
    }

    const checkErrors = ()=>{
        let errors = ""

        if (allocationstatus_id==null){
            errors = errors + "Status Cannot Be Empty \n"
        }

        if (allocationtype_id == null){
            errors = errors + "Allocation Type Cannot Be Empty \n"
        }

        if (weekday_id == null){
            errors = errors + "Weekday cannot Be Empty \n"
        }

        if (classhall_id == null){
            errors = errors + "Class Hall cannot Be Empty \n"
        }

        if (classoffering_id == null){
            errors = errors + "Class Offering cannot Be Empty \n"
        }

        if (starttime == ""){
            errors = errors + "Start time cannot Be Empty \n"
        }

        if (endtime == ""){
            errors = errors + "End time cannot Be Empty \n"
        }



        return errors;
    }




    const saveClassRoomAllocation = async ()=>{

        const saveObject = {starttime,endtime,allocationtype_id,weekday_id,classhall_id,classoffering_id,allocationstatus_id,note}

            let errors = checkErrors();
            if (errors == ""){
                const userConfirm = confirm(`Are You Sure to add Following Information \n
                Start time is ${starttime}
                \n End time is ${endtime}
                \n Hall Is ${classhall_id.name} 
                `);
                if (userConfirm){
                    const serverResponse = await saveClassRoomAllocationService(saveObject);
                    if (serverResponse.data=="ok"){
                        toast.success("Class added successfully.");
                        refreshStates();
                        await getAllClassRoomAllocation();
                    }else {
                        toast.error(`Something went wrong.` , serverResponse.data);
                    }
                }
            }else {
                toast.error(`You Have Some Errors \n ${errors}`)
            }
    }


    const updateClassRoomAllocation = async ()=>{

        const updateObject = {id,starttime,endtime,note,addeddatetime,modifydatetime,deletedatetime,allocationstatus_id,allocationtype_id,weekday_id,classhall_id,classoffering_id};

        const errors = checkErrors();
        if (errors == ""){
            const userConfirm = confirm(`Are You Sure to add Following Information \n
                Start time is ${starttime}
                \n End time is ${endtime}
                \n Hall Is ${classhall_id.name} 
                `);
            if (userConfirm){
                const serverResponse = await updateClassRoomAllocationService(updateObject);
                if (serverResponse.data=="ok"){
                    toast.success("Class added successfully.");
                    refreshStates();
                    await getAllClassRoomAllocation();
                }else {
                    toast.error(`Something went wrong.` , serverResponse.data);
                }
            }
        }else {
            toast.info(`You Have some Errors \n ${errors}`);
        }
    }







    const deleteClassRoomAllocation = async  (obj:any) => {

        const userConfirm = confirm(`Are You Sure to add Following Information \n
                Start time is ${obj.starttime}
                \n End time is ${obj.endtime}
                \n Hall Is ${obj.classhall_id.name} 
                `);
        if (userConfirm){
            const serverResponse = await deleteClassRoomAllocationService(obj);
            if (serverResponse.data=="ok"){
                toast.success("Class deleted successfully.");
                refreshStates();
                await getAllClassRoomAllocation();
            }else {
                toast.error(`Something went wrong.` , serverResponse.data);
            }
        }
    }




    const printClassRoomAllocation =  () => {



    }





    const lblHeading = 'Class Room Allocation Master';

    return (
        <div>


            <div
                className="text-center bg-slate-900 dark:bg-slate-900 p-6 rounded-full text-white dark:text-white mb-5">
                <TextGenerateEffect words={lblHeading}/>
            </div>


            <div className="mt-20 p-9">



                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label htmlFor="textStartTime">Start Time <i className="text-red-600">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="time" className="h-[50px]" id="textStartTime" value={starttime} onChange={(e)=> setStarttime(e.target.value)}/>
                    </div>
                </div>



                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label htmlFor="textEndTime">End Time <i className="text-red-600">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Input type="time" className="h-[50px]" id="textEndTime" value={endtime} onChange={(e)=> setEndtime(e.target.value)}/>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label htmlFor="selectAllocationType">Allocation Type <i className="text-red-600">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Select value={allocationtype_id?.name ?? ''} onValueChange={(selectedValue)=>{
                            const selected = allocationTypeList.find(a=> a.name === selectedValue)
                            setAllocationtype_id(selected);
                        }}>
                            <SelectTrigger className="w-full min-h-[50px]">
                                <SelectValue placeholder="Select Allocation Type" />
                            </SelectTrigger>
                            <SelectContent>
                                {allocationTypeList.map((allocation:any,index:number)=>(
                                    <SelectItem value={allocation.name} key={index}>{allocation.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label htmlFor="selectWeekDay">Weekday <i className="text-red-600">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                            <Select value={weekday_id?.name ?? ''} onValueChange={(selectedValue)=>{
                                const selected = weekdayList.find(w=>w.name === selectedValue)
                                setWeekday_id(selected);
                            }}>
                                <SelectTrigger className="w-full min-h-[50px]">
                                    <SelectValue placeholder="Select Weekday" />
                                    <SelectContent>
                                        {weekdayList.map((weekday:any,index:number)=>(
                                            <SelectItem value={weekday.name} key={index}>{weekday.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </SelectTrigger>
                            </Select>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label htmlFor="selectClassHall">Class Hall <i className="text-red-600">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Popover open={clsCmbOpen} onOpenChange={setClsCmbOpen}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" role="combobox" aria-expanded={clsCmbOpen} className="w-full justify-between h-[50px]">
                                    {classhall_id ? classhall_id.name : 'select class hall'}
                                    <ChevronsUpDown className="opacity-50"/>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[1000px] p-0">
                                <Command>
                                    <CommandInput placeholder="Select Class Hall" />
                                    <CommandList>
                                        <CommandEmpty>NO Class Hall Found</CommandEmpty>
                                        <CommandGroup>
                                            {classHallList.map((hall)=>(
                                                <CommandItem key={hall.id} value={hall.name}
                                                onSelect={()=>{
                                                    setClasshall_id(classhall_id?.id === hall.id ? null : hall);
                                                }}
                                                >
                                                    {hall.name}
                                                    <Check className={cn(
                                                        "ml-auto",
                                                        classhall_id?.id == hall.id ? "opacity-100" : "opacity-0",
                                                    )} />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label htmlFor="selectClassOffering">Class Offering <i className="text-red-600">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Popover open={offeringCmbOpen} onOpenChange={setOfferingCmbOpen}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" role="combobox" aria-expanded={offeringCmbOpen} className="w-full justify-between h-[50px]">
                                    {classoffering_id? classoffering_id.classname : 'Select Class Offering'}
                                    <ChevronsUpDown className="opacity-50"/>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[1000px] p-0">
                                <Command>
                                    <CommandInput placeholder="Select Class Offering" />
                                    <CommandList>
                                        <CommandEmpty>NO Class Offering Found</CommandEmpty>
                                        <CommandGroup>
                                            {classOfferingList.map((offering:any,index:number)=>(
                                                <CommandItem key={index} value={offering.classname}
                                                onSelect={()=>{
                                                    setClassoffering_id(
                                                        classoffering_id?.id === offering.id ? null : offering
                                                    )
                                                }}
                                                >{offering.classname}

                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>



                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label htmlFor="Select Status"> Status <i className="text-red-500">*</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Select value={allocationstatus_id?.name ?? ''} onValueChange={(selectedValue)=>{
                            const selected  = allocationStatusList.find((s)=> s.name === selectedValue);
                            setAllocationstatus_id(selected);
                        }}>

                        <SelectTrigger className="w-full min-h-[50px]">
                            <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent>
                            {allocationStatusList.map((status)=>(
                                <SelectItem value={status.name} key={status.id}>{status.name}</SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                    </div>
                </div>




                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className="col-span-6">
                        <Label htmlFor="textNote"> Note <i className="text-blue-500">(optional)</i> </Label>
                    </div>
                    <div className="col-span-6">
                        <Textarea value={note} id="textNote" placeholder="Enter Note" onChange={(e)=>setNote(e.target.value)} />
                    </div>
                </div>



                <div className="grid grid-cols-12 gap-4 mt-20">
                    <div className="col-span-4">
                        <Button type="button" onClick={refreshStates}>reset</Button>
                    </div>
                    <div className="col-span-4 flex justify-center items-center">
                        <Button type="button" onClick={updateClassRoomAllocation}>Update</Button>
                    </div>
                    <div className="col-span-4 flex justify-end items-center">
                        <Button type="button" onClick={saveClassRoomAllocation}>save</Button>
                    </div>
                </div>



            </div>


            <div className="p-9">
                <DataTable columns={getClassRoomAllocationColumns(refillClassRoomAllocation,deleteClassRoomAllocation,printClassRoomAllocation)} data={classRoomAllocationList} />
            </div>


        </div>
    )
}
export default Page
