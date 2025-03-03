import React from 'react';
import { ArrowRight } from "lucide-react";
import CarCard from "./CarCard";
import { carData } from "../constants/index.js";
import { Link } from "react-router-dom";
import { useStore } from '../store/Store';

const CarSection = () => {
    const { isDarkMode } = useStore();
    const carSectionData = carData.slice(0, 6);

    return (
        <div
            className={`${!isDarkMode ? "bg-gray-900 text-white" : "bg-[#F6F8ED] text-black"} flex flex-col gap-y-5 w-full h-auto items-center px-10 py-20 transition-all duration-300`}
        >
            <div className="text-5xl font-bold">
                Our Impressive Collection of Vehicles
            </div>
            <div className="w-1/2 text-center text-md font-semibold mb-2">
                Explore our wide range of cars that cater to all your needs. Whether you&lsquo;re looking for a compact car for city driving or a spacious SUV for family trips, we have it all. Our vehicles are equipped with the latest technology and safety features to ensure a comfortable and secure ride. Visit us today and find the perfect car for you!
            </div>
            <div className="grid grid-cols-3 gap-10 w-full h-auto">
                {carSectionData.map((car, index) => (
                    <CarCard key={index} car={car} />
                ))}
            </div>
            <div className="text-center text-md font-semibold">
                <Link
                    to={'/all-vehicles'}
                    className={`flex items-center justify-center cursor-pointer ${!isDarkMode
                            ? "bg-gray-800 text-white border-2 border-white hover:bg-white hover:text-gray-800"
                            : "bg-[#F6F8ED] text-black border-2 border-black hover:bg-black hover:text-white"
                        } w-full py-2 mt-5 px-10 rounded-xl transition-all duration-300`}
                >
                    View All Cars
                    <ArrowRight size={24} className="inline-block ml-2" />
                </Link>
            </div>
        </div>
    );
};

export default CarSection;
