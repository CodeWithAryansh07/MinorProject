// import React from 'react'

import { ArrowLeft, ArrowRight } from "lucide-react"

const Testimonial = () => {
    return (
        <div className='text-white w-full flex flex-col bg-[#F6F8ED]'>
            <div className="mt-5 py-15 px-20 flex items-center justify-between w-full">
                <span className="text-4xl font-semibold text-black">
                    What Our Customers Say
                </span>
                <div className="flex gap-x-7">
                    <div className="bg-black p-4 rounded-full text-white cursor-pointer">
                        <ArrowLeft />
                    </div>
                    <div className="bg-black p-4 rounded-full text-white cursor-pointer">
                        <ArrowRight />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center p-10 text-black">
                <span className="text-2xl font-semibold px-10 pr-32">“I was really impressed with the level of service I received from this car rental company. The process was smooth and easy, and the car I rented was in excellent condition. The staff was friendly and helpful, and I felt well taken care of throughout my rental period. I would definitely recommend this company to anyone looking for a premium car rental experience.”</span>
            </div>
            <div className="flex px-20 pb-10 gap-x-5">
                <div className="size-16 rounded-full bg-black p-2">

                </div>
                <div className="flex flex-col text-black">
                    <div className="text-2xl font-semibold">
                        John Doe
                    </div>
                    <div className="text-lg">
                        From Texas
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
