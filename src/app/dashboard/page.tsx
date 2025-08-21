"use client"
import React from 'react'
import Link from "next/link";

const Page = () => {
    return (
        <div className="mt-10">

            <p className="text-lg text-center text-green-900 font-bold">Student Section</p>
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


        </div>
)
}
export default Page
