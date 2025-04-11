import React from 'react';
import Image from 'next/image';


function FooterPage() {
    return (
        <div>
            <div className="h-[200px] bg-indigo-950 text-white flex flex-col justify-between p-6">

                <div className="text-center">
                    {/* Example: Some content above */}
                    <h1 className="text-xl font-bold">Sipsetha Institute</h1>
                    <p className="mt-2 text-sm text-gray-300">.</p>
                </div>


                {/* ❤️ Made with Love */}
                <div className="text-center text-sm text-white">
                    <p>made with ❤</p>
                </div>


            </div>
        </div>
    );
}

export default FooterPage;