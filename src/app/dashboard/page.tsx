"use client"
import React from 'react'
import Link from "next/link";

const Page = () => {
    return (
        <div>

            <p className="text-lg text-center text-green-900 font-bold mt-20">Administration Section</p>
            <div className="grid grid-cols-5 gap-6 mt-10">

                <div className="ms-10">
                    <Link href="/dashboard/employee">
                        <img src="/images/icons/guardian.png" alt="Guardian image" />
                        <br/>
                        <p className="text-lg text-slate-700">Employee Master</p>
                    </Link>
                </div>

                <div>
                    <Link href="/dashboard/user">
                        <img src="/images/icons/student.png" alt="Student image"/>
                    </Link>
                    <br/>
                    <p className="text-lg text-slate-700">User Master</p>
                </div>

                <div>
                    <Link href="/dashboard/privilege">
                        <img src="/images/icons/registration.png" alt="Registration image"/>
                    </Link>
                    <br/>
                    <p className="text-lg text-slate-700">Privilege Master</p>
                </div>







            </div>



            <p className="text-lg text-center text-green-900 font-bold mt-20">Student Section</p>
            <div className="grid grid-cols-5 gap-6 mt-10">

                <div className="ms-10">
                    <Link href="/dashboard/guardian">
                        <img src="/images/icons/guardian.png" alt="Guardian image" />
                        <br/>
                        <p className="text-lg text-slate-700">Guardian Master</p>
                    </Link>
                </div>

                <div>
                    <Link href="/dashboard/student">
                        <img src="/images/icons/student.png" alt="Student image"/>
                    </Link>
                        <br/>
                        <p className="text-lg text-slate-700">Student Master</p>
                </div>

                <div>
                    <Link href="/dashboard/studentClassRegistration">
                        <img src="/images/icons/registration.png" alt="Registration image"/>
                    </Link>
                    <br/>
                    <p className="text-lg text-slate-700">Student Class Registration Master</p>
                </div>


                <div>
                    <Link href="/dashboard/payment">
                        <img src="/images/icons/payment.png" alt="Payment image"/>
                    </Link>
                    <br/>
                    <p className="text-lg text-slate-700">Payment Master</p>
                </div>


                <div>
                    <Link href="/dashboard/attendance">
                        <img src="/images/icons/attendance.png" alt="Attendance image"/>
                    </Link>
                    <br/>
                    <p className="text-lg text-slate-700">Attendance Master</p>
                </div>






            </div>



            <p className="text-lg text-center text-green-900 font-bold mt-20">Class Section</p>
            <div className="grid grid-cols-5 gap-6 mt-10">

                <div className="ms-10">
                    <Link href="/dashboard/classhall">
                        <img src="/images/icons/classhall.png" alt="Class Hall image" />
                        <br/>
                        <p className="text-lg text-slate-700">Class Hall Master</p>
                    </Link>
                </div>

                <div>
                    <Link href="/dashboard/classRoomAllocation">
                        <img src="/images/icons/allocation.png" alt="allocation image"/>
                    </Link>
                    <br/>
                    <p className="text-lg text-slate-700">Class Room Allocation Master</p>
                </div>











            </div>


            <p className="text-lg text-center text-green-900 font-bold mt-20">Teacher Section</p>
            <div className="grid grid-cols-5 gap-6 mt-10">

                <div className="ms-10">
                    <Link href="/dashboard/teacher">
                        <img src="/images/icons/teacher.png" alt="Teacher image" />
                        <br/>
                        <p className="text-lg text-slate-700">Teacher Information Master</p>
                    </Link>
                </div>

                <div>
                    <Link href="/dashboard/student">
                        <img src="/images/icons/offering.png" alt="offering image"/>
                    </Link>
                    <br/>
                    <p className="text-lg text-slate-700">Class Offering Master</p>
                </div>

                <div>
                    <Link href="/dashboard/studentClassRegistration">
                        <img src="/images/icons/enrollment.png" alt="enrollment image"/>
                    </Link>
                    <br/>
                    <p className="text-lg text-slate-700">Enrollment Master</p>
                </div>


                <div>
                    <Link href="/dashboard/payment">
                        <img src="/images/icons/teacherpayment.png" alt="Payment image for teacher"/>
                    </Link>
                    <br/>
                    <p className="text-lg text-slate-700">Teacher Payment Master</p>
                </div>









            </div>




        </div>
)
}
export default Page
