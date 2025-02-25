// import React from 'react';
import { Check, X } from 'lucide-react';
import { useStore } from '../store/Store';

const ShopKeeperBooking = () => {
    const { isShopKeeperNavOpen, isDarkMode } = useStore();

    // Sample booking data
    const bookings = [
        {
            vehicleNumber: 'KA-01-HH-1234',
            customerName: 'John Doe',
            customerPhone: '9876543210',
            bookingDate: '01-01-2022',
            bookingTime: '10:00 AM',
        },
        {
            vehicleNumber: 'KA-01-HH-5678',
            customerName: 'Jane Doe',
            customerPhone: '9876543210',
            bookingDate: '01-01-2022',
            bookingTime: '10:00 AM',
        },
        {
            vehicleNumber: 'KA-01-HH-9101',
            customerName: 'John Doe',
            customerPhone: '9876543210',
            bookingDate: '01-01-2022',
            bookingTime: '10:00 AM',
        },
    ];

    return (
        <div
            className={`transition-all w-full ${isShopKeeperNavOpen ? 'ml-[80px]' : 'ml-[260px]'
                } ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
        >
            <div className="flex flex-col justify-start space-y-3 items-center py-10 w-full px-6 md:px-10 min-h-screen">
                <div className="w-full max-w-6xl">
                    <div className="flex items-center justify-between mb-8">
                        <h1
                            className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'
                                }`}
                        >
                            Booked Vehicles
                        </h1>
                    </div>

                    <div
                        className={`rounded-lg shadow-xl overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'
                            }`}
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className={isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}>
                                        <th
                                            className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                }`}
                                        >
                                            Vehicle Number
                                        </th>
                                        <th
                                            className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                }`}
                                        >
                                            Customer Name
                                        </th>
                                        <th
                                            className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                }`}
                                        >
                                            Customer Phone Number
                                        </th>
                                        <th
                                            className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                }`}
                                        >
                                            Booking Date
                                        </th>
                                        <th
                                            className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                }`}
                                        >
                                            Booking Time
                                        </th>
                                        <th
                                            className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                }`}
                                        >
                                            Accept/Reject
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    className={`divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-200'
                                        }`}
                                >
                                    {bookings.map((booking, index) => (
                                        <tr
                                            key={index}
                                            className={`hover:bg-gray-700/50 transition-colors ${isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
                                                }`}
                                        >
                                            <td
                                                className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                    }`}
                                            >
                                                {booking.vehicleNumber}
                                            </td>
                                            <td
                                                className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                    }`}
                                            >
                                                {booking.customerName}
                                            </td>
                                            <td
                                                className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                    }`}
                                            >
                                                {booking.customerPhone}
                                            </td>
                                            <td
                                                className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                    }`}
                                            >
                                                {booking.bookingDate}
                                            </td>
                                            <td
                                                className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                    }`}
                                            >
                                                {booking.bookingTime}
                                            </td>
                                            <td
                                                className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        className="p-1.5 text-green-400 hover:bg-green-400/10 rounded-lg transition-colors"
                                                        title="Accept"
                                                    >
                                                        <Check className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        className="p-1.5 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                                                        title="Reject"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopKeeperBooking;
