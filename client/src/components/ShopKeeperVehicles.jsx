import { useState } from 'react';
import { useStore } from '../store/Store';
import { Car, AlertCircle, CheckCircle2, Clock, Plus, Pencil, Trash2 } from 'lucide-react';

// Mock data for demonstration
const initialVehicles = [
    {
        id: 'VH001',
        name: 'Toyota Camry',
        number: 'ABC 123',
        type: 'Sedan',
        status: 'Available'
    },
    {
        id: 'VH002',
        name: 'Honda CR-V',
        number: 'XYZ 789',
        type: 'SUV',
        status: 'In Service'
    },
    {
        id: 'VH003',
        name: 'Ford Transit',
        number: 'DEF 456',
        type: 'Van',
        status: 'Busy'
    }
];

const ShopKeeperVehicles = () => {
    const { isShopKeeperNavOpen, isDarkMode } = useStore();
    const [vehicles, setVehicles] = useState(initialVehicles);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('add'); // 'add' | 'edit'

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'available':
                return 'bg-green-500';
            case 'in service':
                return 'bg-yellow-500';
            case 'busy':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    const getStatusIcon = (status) => {
        switch (status.toLowerCase()) {
            case 'available':
                return <CheckCircle2 className="w-4 h-4" />;
            case 'in service':
                return <Clock className="w-4 h-4" />;
            case 'busy':
                return <AlertCircle className="w-4 h-4" />;
            default:
                return null;
        }
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this vehicle?')) {
            setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
        }
    };

    const handleEdit = (vehicle) => {
        setSelectedVehicle(vehicle);
        setModalMode('edit');
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setSelectedVehicle(null);
        setModalMode('add');
        setIsModalOpen(true);
    };

    return (
        <div
            className={`transition-all w-full ${isShopKeeperNavOpen ? 'ml-[80px]' : 'ml-[260px]'
                } ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
        >
            <div className='flex flex-col justify-start space-y-3 items-center py-10 w-full px-6 md:px-10 min-h-screen'>
                <div className="w-full max-w-6xl">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <Car className="w-8 h-8 text-blue-500" />
                            <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                Your Vehicles List
                            </h1>
                        </div>
                        <button
                            onClick={handleAdd}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                            Add Vehicle
                        </button>
                    </div>

                    <div className={`rounded-lg shadow-xl overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'
                        }`}>
                        <div className="overflow-x-auto">
                            <table className='w-full border-collapse'>
                                <thead>
                                    <tr className={isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}>
                                        <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>Vehicle ID</th>
                                        <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>Vehicle Name</th>
                                        <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>Vehicle Number</th>
                                        <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>Vehicle Type</th>
                                        <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>Status</th>
                                        <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className={`divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                                    {vehicles.map((vehicle) => (
                                        <tr
                                            key={vehicle.id}
                                            className={`hover:bg-gray-700/50 transition-colors ${isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
                                                }`}
                                        >
                                            <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                }`}>{vehicle.id}</td>
                                            <td className={`px-6 py-4 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'
                                                }`}>{vehicle.name}</td>
                                            <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                }`}>{vehicle.number}</td>
                                            <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                }`}>{vehicle.type}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(vehicle.status)} bg-opacity-20 text-white`}>
                                                        {getStatusIcon(vehicle.status)}
                                                        {vehicle.status}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => handleEdit(vehicle)}
                                                        className="p-1.5 text-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors"
                                                        title="Edit"
                                                    >
                                                        <Pencil className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(vehicle.id)}
                                                        className="p-1.5 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                                                        title="Delete"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
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

            {/* Modal for Add/Edit */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <div className={`p-6 rounded-lg w-full max-w-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'
                        }`}>
                        <h2 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                            {modalMode === 'add' ? 'Add New Vehicle' : 'Edit Vehicle'}
                        </h2>
                        <form className="space-y-4">
                            <div>
                                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                    Vehicle Name
                                </label>
                                <input
                                    type="text"
                                    className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:border-blue-500 ${isDarkMode
                                            ? 'bg-gray-700 border-gray-600 text-white'
                                            : 'bg-white border-gray-300 text-gray-900'
                                        }`}
                                    defaultValue={selectedVehicle?.name || ''}
                                />
                            </div>
                            <div>
                                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                    Vehicle Number
                                </label>
                                <input
                                    type="text"
                                    className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:border-blue-500 ${isDarkMode
                                            ? 'bg-gray-700 border-gray-600 text-white'
                                            : 'bg-white border-gray-300 text-gray-900'
                                        }`}
                                    defaultValue={selectedVehicle?.number || ''}
                                />
                            </div>
                            <div>
                                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                    Vehicle Type
                                </label>
                                <select
                                    className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:border-blue-500 ${isDarkMode
                                            ? 'bg-gray-700 border-gray-600 text-white'
                                            : 'bg-white border-gray-300 text-gray-900'
                                        }`}
                                    defaultValue={selectedVehicle?.type || ''}
                                >
                                    <option value="Sedan">Sedan</option>
                                    <option value="SUV">SUV</option>
                                    <option value="Van">Van</option>
                                    <option value="Truck">Truck</option>
                                </select>
                            </div>
                            <div>
                                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                    Status
                                </label>
                                <select
                                    className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:border-blue-500 ${isDarkMode
                                            ? 'bg-gray-700 border-gray-600 text-white'
                                            : 'bg-white border-gray-300 text-gray-900'
                                        }`}
                                    defaultValue={selectedVehicle?.status || ''}
                                >
                                    <option value="Available">Available</option>
                                    <option value="In Service">In Service</option>
                                    <option value="Busy">Busy</option>
                                </select>
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className={`px-4 py-2 rounded-lg transition-colors ${isDarkMode
                                            ? 'text-gray-300 hover:bg-gray-700'
                                            : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                >
                                    {modalMode === 'add' ? 'Add Vehicle' : 'Save Changes'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShopKeeperVehicles;