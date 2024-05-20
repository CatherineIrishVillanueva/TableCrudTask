import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateUserModal from './components/CreateUserModal';
import ViewUserModal from './components/ViewUserModal';
import EditUserModal from './components/EditUserModal';
import DeleteUserModal from './components/DeleteUserModal';
import UserTable from './components/UserTable';
import { FaPlus } from 'react-icons/fa';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('oldest');

  const cityOptions = [
    'Agoncillo, Batangas',
    'Alaminos, Laguna',
    'Alfonso, Cavite',
    'Alitagtag, Batangas',
    'Amadeo, Cavite',
    'Angono, Rizal',
    'Antipolo, Rizal',
    'Bacolod',
    'Bacoor',
    'Balayan, Batangas',
    'Balete, Batangas',
    'Batangas City, Batangas',
    'Bay, Laguna',
    'Biñan, Laguna',
    'Cabuyao, Laguna',
    'Cagayan de Oro',
    'Cainta, Rizal',
    'Calaca, Batangas',
    'Calamba, Laguna',
    'Calatagan, Batangas',
    'Candelaria, Quezon',
    'Carmona, Cavite',
    'Cavite City, Cavite',
    'Cebu, City',
    'Concepcion, Tarlac',
    'Cuenca, Batangas',
    'Dasmariñas, Cavite',
    'Davao City',
    'Dolores, Quezon',
    'General Trias, Cavite',
    'Indang, Cavite',
    'Jala-jala, Rizal',
    'Kawit, Cavite',
    'Lemery, Batangas',
    'Lipa City, Batangas',
    'Los Baños, Laguna',
    'Lucena, Quezon',
    'Luisiana, Laguna',
    'Lumban, Laguna',
    'Mabini, Batangas',
    'Makati',
    'Magallanes, Cavite',
    'Mahabang Parang, Angono',
    'Mahabang Parang, San Narciso',
    'Majayjay, Laguna',
    'Malvar, Batangas',
    'Mandaluyong',
    'Manila',
    'Marikina',
    'Mataasnakahoy, Batangas',
    'Morong, Rizal',
    'Nasugbu, Batangas',
    'Navotas',
    'Padre Garcia, Batangas',
    'Pagsanjan, Laguna',
    'Pateros',
    'Parañaque',
    'Pasay',
    'Pasig',
    'Pila, Laguna',
    'Quezon City',
    'Rosario, Batangas',
    'San Jose, Batangas',
    'San Juan, Batangas',
    'San Mateo, Rizal',
    'San Pablo City, Laguna',
    'San Pedro, Laguna',
    'Santa Cruz, Laguna',
    'Silang, Cavite',
    'Siniloan, Laguna',
    'Santo Tomas, Batangas',
    'Tagaytay City',
    'Taguig City',
    'Tanauan, Batangas',
    'Tanza, Cavite',
    'Tayabas, Quezon',
    'Taytay, Rizal',
    'Ternate, Cavite',
    'Tiaong, Quezon',
    'Trece Martires, Cavite',
    'Tupi, South Cotabato',
    'Valenzuela',
    'Victoria, Laguna',
    'Zamboanga City'
  ];

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  const openViewModal = (user) => {
    setSelectedUser(user);
    setIsViewModalOpen(true);
  };
  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedUser(null);
  };

  const openEditModal = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedUser(null);
  };

  const openDeleteModal = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedUser(null);
  };

  const handleCreateUser = (newUser) => {
    newUser.id = uuidv4();
    newUser.dateCreated = new Date().toISOString(); // Add dateCreated when creating user
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    toast.success('User Data Has Been Successfully Created!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const handleEditUser = (updatedUser) => {
    const updatedUsers = users.map(user => user.id === updatedUser.id ? updatedUser : user);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    toast.success('User Data Has Been Successfully Edited!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    toast.success('User Data Has Been Successfully Deleted!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCityFilter = (event) => {
    setCityFilter(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (cityFilter ? user.city.toLowerCase() === cityFilter.toLowerCase() : true)
  );

  return (
    <div className="App" style={{ fontFamily: 'Poppins' }}>
      <Header />
      <h1 className='mt-11 text-3xl mb-5'>User Personal Information List</h1>
      <div className="flex justify-between">
        <div style={{ marginLeft: '125px' }}>
          <button onClick={openCreateModal} className="create-user-button text-blue-500 hover:underline bg-blue-100 flex items-center justify-center px-4 py-2 rounded-md mb-5">
            <FaPlus className="mr-1" />
            <span className='mt-1'>Create User</span>
          </button>
        </div>
        <div style={{ marginRight: '125px' }}>
          <input
            type="text"
            placeholder="Search by Name"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <select
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 ml-2"
            value={cityFilter}
            onChange={handleCityFilter}
          >
            <option value="">Filter by City</option>
            {cityOptions.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          <select
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 ml-2"
            value={sortOrder}
            onChange={handleSortOrderChange}
          >
            <option value="oldest">Oldest to Recent Date</option>
            <option value="recent">Recent to Oldest Date</option>
          </select>
        </div>
      </div>
      <UserTable
        users={filteredUsers}
        sortOrder={sortOrder}
        onView={openViewModal}
        onEdit={openEditModal}
        onDelete={openDeleteModal}
      />
      <div className='mt-[295px]'>
        <Footer />
      </div>
      {isCreateModalOpen && <CreateUserModal onClose={closeCreateModal} onSave={handleCreateUser} />}
      {isViewModalOpen && selectedUser && <ViewUserModal user={selectedUser} onClose={closeViewModal} />}
      {isEditModalOpen && selectedUser && <EditUserModal user={selectedUser} onClose={closeEditModal} onSave={handleEditUser} />}
      {isDeleteModalOpen && selectedUser && <DeleteUserModal user={selectedUser} onClose={closeDeleteModal} onDelete={handleDeleteUser} />}
      <ToastContainer />
    </div>
  );
};

export default App;
