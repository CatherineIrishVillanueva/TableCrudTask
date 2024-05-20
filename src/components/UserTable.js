import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const UserTable = ({ users, sortOrder, onView, onEdit, onDelete }) => {
  const sortedUsers = [...users].sort((a, b) => {
    if (sortOrder === 'recent') {
      return new Date(b.dateCreated) - new Date(a.dateCreated);
    } else {
      return new Date(a.dateCreated) - new Date(b.dateCreated);
    }
  });

  return (
    <div className="overflow-x-auto">
      <div className="text-black" style={{ width: '1255px', marginLeft: '125px' }}>
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">City</th>
              <th className="py-2 px-4 border-b">Date Created</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-4 px-4 text-center">
                  No data available.
                </td>
              </tr>
            ) : (
              sortedUsers.map((user, index) => (
                <tr key={user.id} className="border-t">
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.city}</td>
                  <td className="py-2 px-4 border-b">{new Date(user.dateCreated).toLocaleString()}</td>
                  <td className="py-2 px-4 border-b flex justify-center">
                    <button onClick={() => onView(user)} className="text-blue-500 hover:underline bg-blue-100 rounded-md px-2 py-1 mr-2 flex items-center">
                      <FaEye className="mr-1" />
                      <span className="mt-1">View</span>
                    </button>
                    <button onClick={() => onEdit(user)} className="text-green-500 hover:underline bg-green-100 rounded-md px-2 py-1 mr-2 flex items-center">
                      <FaEdit className="mr-1" />
                      <span className="mt-1">Edit</span>
                    </button>
                    <button onClick={() => onDelete(user)} className="text-red-500 hover:underline bg-red-100 rounded-md px-2 py-1 flex items-center">
                      <FaTrash className="mr-1" />
                      <span className="mt-1">Delete</span>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
