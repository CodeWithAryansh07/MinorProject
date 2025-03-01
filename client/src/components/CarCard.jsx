/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { CircleGauge } from 'lucide-react';
import Gear from "../assets/manual-gearbox.png";
import User from "../assets/users.png";
import Gas from "../assets/gas-station.png";

const CarCard = ({ car }) => {
    const navigate = useNavigate();

    const handleRentNow = () => {
        // Navigate to the car description page and pass the car data via state
        navigate('/car-description', { state: { carData: car } });
    };

    return (
        <div className="flex flex-col gap-y-5 w-full h-auto items-center px-12 py-5 bg-[#f3f2ef] shadow-lg rounded-lg">
            <div className="w-full h-60 rounded-xl overflow-hidden">
                <img 
                    src={car.imageUrls && car.imageUrls.length > 0 ? car.imageUrls[0] : ''} 
                    alt={car.name} 
                    className="w-full h-full object-cover" 
                />
            </div>
            <div className="w-full text-2xl px-1 font-semibold">
                {car.name}
            </div>
            <div className="flex items-center justify-start w-full px-1">
                <div className="text-4xl font-bold">${car.price}</div>
                <div className="h-full text-lg flex pt-2">/day</div>
            </div>
            <div className="flex items-center justify-between w-full px-5 rounded-xl bg-[#e8eaee] py-2">
                <div className="flex flex-col items-center gap-y-2">
                    <CircleGauge size={24} />
                    <h1>4000</h1>
                </div>
                <div className="flex flex-col items-center gap-y-2">
                    <img src={Gear} alt="Gearbox" />
                    <h1>Auto</h1>
                </div>
                <div className="flex flex-col items-center gap-y-2">
                    <img src={User} alt="Capacity" />
                    <h1>4 Person</h1>
                </div>
                <div className="flex flex-col items-center gap-y-2">
                    <img src={Gas} alt="Fuel Type" />
                    <h1>Petrol</h1>
                </div>
            </div>
            <div className="w-full text-center text-md font-semibold">
                <button 
                    onClick={handleRentNow}
                    className="cursor-pointer bg-[#f3f2ef] text-black w-full py-2 mt-2 rounded-xl border-2 border-black hover:bg-black hover:text-white">
                    Rent Now
                </button>
            </div>
        </div>
    );
}

export default CarCard;
