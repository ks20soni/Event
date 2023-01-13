import React from 'react'
import erp1 from "../Assets/erp1.jpg";

export default function backgroundImage() {
  return (
     <div className="flex gap-x-44 items-center p-12 pt-0">
     <div className="p-5 mr-5 transform waving-sea">
                <img className="max-w-xl h-auto" height="15" src={erp1} />
            </div>
            <div className="flex-col ml-5">
                <div className="text-5xl p-3 mb-5 text-center text-blue-primary font-bold">
                How We Evolved?
                </div>
                <div className="text-2xl p-3 mb-5 text-center">
                Ever Since 2001, the market has been penetrated with hundreds of ERP players, everyone stating themselves as the best. As we digged down more and more we realized that most of the small & mid size companies still resisting to move towards IT due to multiple reason such as budget constraints, hassle of using 2 different softwares, Security issues, to name a few. <br/>
That is how Eazy came into picture...
                </div>
                <div className="px-6 flex justify-center items-center">
                    <button className="bg-blue-primary hover:bg-pink-300 text-white font-bold rounded-full text-xl px-10 py-4 mt-5">Know more</button>
                </div>
            </div>
        </div>
  )
}
