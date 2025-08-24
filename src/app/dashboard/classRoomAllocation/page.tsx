"use client"
import React, {useEffect, useState} from 'react'
import {DataTable} from "@/components/data-table";
import {getClassRoomAllocationColumns} from "@/app/dashboard/classRoomAllocation/ClassRoomAllocationColumns";
import {getAllClassRoomAllocationServices} from "@/services/classRoomAllocationService";

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


    useEffect(()=>{
        getAllClassRoomAllocation();
    },[])



    const getAllClassRoomAllocation = async () => {
        const serverResponse = await getAllClassRoomAllocationServices();
        setClassRoomAllocationList(serverResponse.data);
        console.log('all class room allocations', serverResponse.data);
    }

    const refillClassRoomAllocation =  () => {}
    const deleteClassRoomAllocation =  () => {}
    const printClassRoomAllocation =  () => {}



    return (
        <div>





            <div className="p-9">
                <DataTable columns={getClassRoomAllocationColumns(refillClassRoomAllocation,deleteClassRoomAllocation,printClassRoomAllocation)} data={classRoomAllocationList} />
            </div>


        </div>
    )
}
export default Page
