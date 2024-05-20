import React from 'react';

const ViewUserModal = ({ user, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-end">
                    <span className="text-xl cursor-pointer" onClick={onClose}>&times;</span>
                </div>
                <h2 className="text-2xl mb-4">View User</h2>
                <hr classname="bg-gray-800"></hr>
                <div className="mb-4 mt-4">
                    <strong>Name:</strong> {user.name}
                </div>
                <div className="mb-4">
                    <strong>Birthdate:</strong> {user.birthdate}
                </div>
                <div className="mb-4">
                    <strong>Gender:</strong> {user.gender}
                </div>
                <div className="mb-4">
                    <strong>Address:</strong> {user.address}
                </div>
                <div className="mb-4">
                    <strong>City:</strong> {user.city}
                </div>
                <div className="mb-4">
                    <strong>Mobile:</strong> {user.mobile}
                </div>
                <hr classname="bg-gray-800"></hr>
                <div className="text-right">
                    <button onClick={onClose} className="bg-gray-500 mt-4 text-white px-4 py-2 rounded hover:bg-gray-700">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewUserModal;
