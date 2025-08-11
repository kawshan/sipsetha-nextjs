"use client"
import React from 'react'
import Link from "next/link";

const Page = () => {
    return (
        <div>

            <p className="text-lg text-center text-green-900 font-bold">Student Section</p>
            <div className="grid grid-cols-6 gap-6 mt-10">

                <div className="ms-3">
                    <Link href="/dashboard/guardian">
                        <img src="/images/icons/guardian.png" alt="Guardian image" />
                        <br/>
                        <p className="text-lg text-green-700">Guardian Master</p>
                    </Link>
                </div>

                <div>
                    <Link href="/dashboard/student">
                        <img src="/images/icons/student.png" alt="Student image"/>
                    </Link>
                        <br/>
                        <p className="text-lg text-green-700">Student Master</p>
                </div>

                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>


            </div>


        </div>
)
}
export default Page
