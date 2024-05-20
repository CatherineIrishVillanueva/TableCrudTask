import React from 'react';

const DeleteUserModal = ({ user, onClose, onDelete }) => {
    const handleDelete = () => {
        onDelete(user.id);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-end">
                    <span className="text-xl cursor-pointer" onClick={onClose}>&times;</span>
                </div>
                <h2 className="text-2xl mb-4">Delete User</h2>
                <hr className="bg-gray-800"/>
                <p className='mt-4 mb-4'>Are you sure you want to delete the data of user named <strong>{user.name}</strong>?</p>
                <hr className="bg-gray-800"/>
                <div className="text-right mt-4">
                    <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 mr-2">Cancel</button>
                    <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteUserModal;
