import React from 'react'
import erp from "../Assets/erp.jpg";

export default function backgroundImage() {
  return (
     <div className="flex gap-x-44 items-center p-12 pb-0">
            <div className="p-5 mr-5 transform waving-sea">
                <img className="max-w-xl h-auto" height="15" src={erp} />
            </div>
            <div className="flex-col ml-5">
                <div className="text-6xl p-3 mb-5 text-center text-blue-primary font-bold">
                Eazy ERP 4.0
                </div>
                <div className="text-3xl p-3 mb-5 text-center">
                Bridge towards Simpler Operations!
                </div>
                <div className="px-6 flex justify-center items-center">
                    <button className="bg-pink-primary hover:bg-pink-300 text-white font-bold rounded-full text-xl px-10 py-4 mt-5">Contact Us</button>
                </div>
            </div>
        </div>
  )
}
