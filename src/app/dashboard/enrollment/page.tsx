"use client"
import React from 'react'
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Select} from "@/components/ui/select";
import {Input} from "@/components/ui/input";
import {Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table"


const Page = () => {


    const lblHeading = 'Teacher Enrollment Master';

    const refreshStates = () => {

    }


    const updateEnrollment = () => {

    }


    const saveEnrollment = () => {

    }


    return (
        <div>

            <div
                className="text-center bg-slate-900 dark:bg-slate-900 p-6 rounded-full text-white dark:text-white mb-5">
                <TextGenerateEffect words={lblHeading}/>
            </div>


            <div className="p-9">
                <div className="grid grid-cols-12 gap-4 mt-5">
                    <div className="col-span-4">
                        <Button type="button" onClick={refreshStates}>reset</Button>
                    </div>
                    <div className="col-span-4 flex justify-center items-center">
                        <Button type="button" onClick={updateEnrollment}>Update</Button>
                    </div>
                    <div className="col-span-4 flex justify-end items-center">
                        <Button type="button" onClick={saveEnrollment}>save</Button>
                    </div>
                </div>


                <div className="grid mt-5">
                    <p className="text-red-500 font-bold">Required *</p>
                </div>

                {/*header start*/}
                <div className="grid grid-cols-12 gap-6 mt-10">


                    <div className="col-span-3">
                        <Label htmlFor="selectTeacher" className="text-lg">Teacher <i className="text-red-500">*</i>
                        </Label>
                    </div>


                    <div className="col-span-3">
                        <Label htmlFor="selectMonth" className="text-lg">Month <i className="text-red-500">*</i></Label>
                        <Input type="month"  placeholder="Enter Month"/>
                    </div>



                    <div className="col-span-6 flex justify-end items-end gap-4">

                        <Table className="border-2 border-slate-300">
                            <TableBody>

                                {/*first row start*/}
                                <TableRow>
                                    <TableCell className="border-2 border-slate-300">
                                        <Label htmlFor="textTotalIncome" className="text-lg">Total Income <i
                                            className="text-red-500">*</i> </Label>
                                    </TableCell>

                                    <TableCell>
                                        <Input type="text" className="w-full h-[50px]" placeholder="Enter Total Income" />
                                    </TableCell>
                                </TableRow>
                            {/*    first row end*/}





                                {/*second row start*/}
                                <TableRow>
                                    <TableCell className="border-2 border-slate-300">
                                        <Label htmlFor="textServiceCharge" className="text-lg">Service Charge <i
                                            className="text-red-500">*</i> </Label>
                                    </TableCell>

                                    <TableCell>
                                        <Input type="text" className="w-full h-[50px]" placeholder="Enter Service Charge" />
                                    </TableCell>
                                </TableRow>
                                {/*    second row end*/}



                                {/*second row start*/}
                                <TableRow>
                                    <TableCell className="border-2 border-slate-300">
                                        <Label htmlFor="textServiceCharge" className="text-lg">Additional Charge <i
                                            className="text-red-500">*</i> </Label>
                                    </TableCell>

                                    <TableCell>
                                        <Input type="text" className="w-full h-[50px]" placeholder="Enter Additional Charge" />
                                    </TableCell>
                                </TableRow>
                                {/*    second row end*/}


                                {/*second row start*/}
                                <TableRow>
                                    <TableCell className="border-2 border-slate-300">
                                        <Label htmlFor="textToBePayed" className="text-lg">To Be Payed <i
                                            className="text-red-500">*</i> </Label>
                                    </TableCell>

                                    <TableCell>
                                        <Input type="text" className="w-full h-[50px]" placeholder="Enter To Be Payed" />
                                    </TableCell>
                                </TableRow>
                                {/*    second row end*/}



                                {/*second row start*/}
                                <TableRow>
                                    <TableCell className="border-2 border-slate-300">
                                        <Label htmlFor="textPayedAmout" className="text-lg">Payed Amount <i
                                            className="text-red-500">*</i> </Label>
                                    </TableCell>

                                    <TableCell>
                                        <Input type="text" className="w-full h-[50px]" placeholder="Enter Payed Amout" />
                                    </TableCell>
                                </TableRow>
                                {/*    second row end*/}



                                {/*second row start*/}
                                <TableRow>
                                    <TableCell className="border-2 border-slate-300">
                                        <Label htmlFor="selectStatus" className="text-lg">Enrollment Status <i
                                            className="text-red-500">*</i> </Label>
                                    </TableCell>

                                    <TableCell>
                                    {/*implement Select*/}
                                    </TableCell>
                                </TableRow>
                                {/*    second row end*/}



                            </TableBody>
                        </Table>

                    </div>


                </div>
                {/*header start*/}




            {/*    details area start*/}

                <div className="mt-5">
                    <Table>
                        <TableBody>

                            <TableRow>
                                <TableCell className="border-2 border-slate-300">
                                    <Label htmlFor="selectClassOffering" className="text-lg">Class Offering <i
                                        className="text-red-500">*</i> </Label>
                                    <Input type="text" className="w-full h-[50px]" placeholder="Enter Class Offering" />
                                </TableCell>

                                <TableCell className="border-2 border-slate-300">
                                    <Label htmlFor="textClassFee" className="text-lg">Class Fee <i
                                        className="text-red-500">*</i> </Label>
                                    <Input type="text" id="textClassFee" className="w-full h-[50px]" placeholder="Enter Class Fee" />
                                </TableCell>


                                <TableCell className="border-2 border-slate-300">
                                    <Label htmlFor="textClassIncome" className="text-lg">Class Income <i
                                        className="text-red-500">*</i> </Label>
                                    <Input type="text" id="textClassIncome" className="w-full h-[50px]" placeholder="Enter Class Income" />
                                </TableCell>


                                <TableCell className="border-2 border-slate-300">
                                    <Label htmlFor="textRegisteredStudentCount" className="text-lg">Registered Student count <i
                                        className="text-red-500">*</i> </Label>
                                    <Input type="text" id="textRegisteredStudentCount" className="w-full h-[50px]" placeholder="Enter Registered Student Count" />
                                </TableCell>


                                <TableCell className="border-2 border-slate-300">
                                    <Label htmlFor="textPayedCount" className="text-lg">Payed Count<i
                                        className="text-red-500">*</i> </Label>
                                    <Input type="text" id="textPayedCount" className="w-full h-[50px]" placeholder="Enter Payed Count" />
                                </TableCell>


                                <TableCell className="border-2 border-slate-300">
                                    <Label htmlFor="textFreeStudentCount" className="text-lg">Free Student Count<i
                                        className="text-red-500">*</i> </Label>
                                    <Input type="text" id="textFreeStudentCount" className="w-full h-[50px]" placeholder="Enter Free Student Count" />
                                </TableCell>


                                <TableCell className="border-2 border-slate-300">
                                    <Label htmlFor="textServiceCharge" className="text-lg">Service Charge<i
                                        className="text-red-500">*</i> </Label>
                                    <Input type="text" id="textServiceCharge" className="w-full h-[50px]" placeholder="Enter Service Charge" />
                                </TableCell>


                                <TableCell className="border-2 border-slate-300">
                                    <Label htmlFor="textAdditionalCharge" className="text-lg">Additional Charge<i
                                        className="text-red-500">*</i> </Label>
                                    <Input type="text" id="textAdditionalCharge" className="w-full h-[50px]" placeholder="Enter Additional Charge" />
                                </TableCell>


                                <TableCell className="border-2 border-slate-300">
                                    <div className="space-x-1.5">
                                        <Button type="button">reset</Button>
                                        <Button type="button">Update</Button>
                                        <Button type="button">save</Button>
                                    </div>
                                </TableCell>


                            </TableRow>


                        </TableBody>
                    </Table>
                </div>


            {/*    details area end*/}



            </div>


        </div>
    )
}
export default Page
