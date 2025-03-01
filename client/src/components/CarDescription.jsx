/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Car, DollarSign, Tag, Info } from 'lucide-react';

const CarDescription = () => {
    // Retrieve the car data passed via the route state
    const { state } = useLocation();
    const { carData } = state || {};
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === carData.imageUrls.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? carData.imageUrls.length - 1 : prevIndex - 1
        );
    };

    // In case no car data is available
    if (!carData) {
        return <div>No car data available.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-6xl h-screen flex flex-col md:flex-row">
                {/* Image Slider Section */}
                <div className="relative w-full md:w-3/5 h-1/2 md:h-full bg-gray-900">
                    <img
                        src={carData.imageUrls[currentImageIndex]}
                        alt={`${carData.brand} ${carData.name} - View ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                    />

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-800" />
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {carData.imageUrls.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? 'bg-white scale-110' : 'bg-white/50'}`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Car Details Section */}
                <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col h-1/2 md:h-full overflow-y-auto">
                    <div className="mb-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{carData.name}</h1>
                        <div className="flex items-center mt-2 text-gray-600">
                            <span className="text-xl">{carData.brand} {carData.model}</span>
                        </div>
                    </div>

                    <div className="flex items-center mb-6 bg-gray-100 p-4 rounded-lg">
                        <DollarSign className="w-6 h-6 text-green-600 mr-2" />
                        <div>
                            <p className="text-sm text-gray-500">Price</p>
                            <p className="text-2xl font-bold text-gray-900">${carData.price.toLocaleString()}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                            <Car className="w-5 h-5 text-blue-600 mr-2" />
                            <div>
                                <p className="text-sm text-gray-500">Brand</p>
                                <p className="font-medium">{carData.brand}</p>
                            </div>
                        </div>

                        <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                            <Tag className="w-5 h-5 text-purple-600 mr-2" />
                            <div>
                                <p className="text-sm text-gray-500">Category</p>
                                <p className="font-medium">{carData.category}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex items-center mb-2">
                            <Info className="w-5 h-5 text-gray-700 mr-2" />
                            <h2 className="text-xl font-semibold">Description</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{carData.description}</p>
                    </div>

                    <div className="mt-auto">
                        <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors shadow-md">
                            Rent Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarDescription;
