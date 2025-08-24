"use client"
import React, {useEffect, useState} from 'react'
import {DataTable} from "@/components/data-table";
import {getClassRoomAllocationColumns} from "@/app/dashboard/classRoomAllocation/ClassRoomAllocationColumns";
import {getAllClassRoomAllocationServices} from "@/services/classRoomAllocationService";
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

    const [clsCmbOpen,setClsCmbOpen] = useState(false);
    const [offeringCmbOpen,setOfferingCmbOpen] = useState(false);




    useEffect(()=>{
        getAllClassRoomAllocation();
        getAllWeekday();
        getAllAllocationTypeList();
        getAllClassHallList();
        getAllClassOfferingList();
    },[])



    const getAllClassRoomAllocation = async () => {
        const serverResponse = await getAllClassRoomAllocationServices();
        setClassRoomAllocationList(serverResponse.data);
        console.log('all class room allocations', serverResponse.data);
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







    const refillClassRoomAllocation =  () => {}
    const deleteClassRoomAllocation =  () => {}
    const printClassRoomAllocation =  () => {}

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



            </div>


            <div className="p-9">
                <DataTable columns={getClassRoomAllocationColumns(refillClassRoomAllocation,deleteClassRoomAllocation,printClassRoomAllocation)} data={classRoomAllocationList} />
            </div>


        </div>
    )
}
export default Page
