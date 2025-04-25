import React from 'react';
import Image from 'next/image';


function FooterPage() {
    return (
        <div>
            <div className="h-[150px] bg-green-50 flex flex-col justify-between p-6">

                <div className="text-center">
                    {/* Example: Some content above */}
                    <h1 className="text-xl font-bold text-black">Sipsetha Institute</h1>
                </div>


                {/* ❤️ Made with Love */}
                <div className="text-center text-sm text-black">
                    <p>made with ❤</p>
                </div>


            </div>
        </div>
    );
}

export default FooterPage;