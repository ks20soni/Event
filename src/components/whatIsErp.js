import React from 'react'
import erp1 from "../Assets/erp1.jpg";

export default function backgroundImage() {
  return (
     <div className="flex gap-x-44 items-center p-12 pt-0">
            <div className="flex-col ml-5">
                <div className="text-5xl p-3 mb-5 text-center text-blue-primary font-bold">
                Enterprise Resource Planning System
                </div>
                <div className="text-2xl p-3 mb-5 text-center">
                a software which made a significant impact in the life of Indian Manufacturers by remodeling their existing manual system of working to Automating it,
                </div>
            </div>
            <div className="p-5 mr-5 transform waving-sea">
                <img className="max-w-xl h-auto" height="15" src={erp1} />
            </div>
        </div>
  )
}
