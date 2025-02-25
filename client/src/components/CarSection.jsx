// import React from 'react'

import { ArrowRight } from "lucide-react"
import CarCard from "./CarCard"

const CarSection = () => {
    return (
        <div className="bg-[#F6F8ED] text-black flex flex-col gap-y-5 w-full h-auto items-center px-10 py-20">
            <div className="text-5xl font-bold">
                Our Impressive Collection of Vehicles
            </div>
            <div className="w-1/2 text-center text-md font-semibold mb-2">
                Explore our wide range of cars that cater to all your needs. Whether you&lsquo;re looking for a compact car for city driving or a spacious SUV for family trips, we have it all. Our vehicles are equipped with the latest technology and safety features to ensure a comfortable and secure ride. Visit us today and find the perfect car for you!
            </div>
            <div className="grid grid-cols-3 gap-10 w-full h-auto">
                <div><CarCard /></div>
                <div><CarCard /></div>
                <div><CarCard /></div>
                <div><CarCard /></div>
                <div><CarCard /></div>
                <div><CarCard /></div>
            </div>
            <div className="text-center text-md font-semibold">
                <button className="flex items-center justify-center cursor-pointer bg-[#F6F8ED] text-black w-full py-2 mt-5 px-10 rounded-xl border-2 border-black hover:bg-black hover:text-white">
                    View All Cars
                    <ArrowRight size={24} className="inline-block ml-2" />
                </button>
            </div>
        </div>
    )
}

export default CarSection
