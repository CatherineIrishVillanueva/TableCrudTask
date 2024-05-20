import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CreateUserModal = ({ onClose, onSave }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    birthdate: Yup.date().required('Birthdate is required'),
    gender: Yup.string().required('Gender is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    mobile: Yup.string().required('Mobile is required'),
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-end">
          <span className="text-xl cursor-pointer" onClick={onClose}>&times;</span>
        </div>
        <h2 className="text-2xl mb-4">Create User</h2>
        <hr className="bg-gray-800"/>
        <Formik
          initialValues={{
            name: '',
            birthdate: '',
            gender: '',
            address: '',
            city: '',
            mobile: '',
            dateTimeCreated: new Date().toISOString(),
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onSave(values);
            onClose();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4 flex items-center">
                <label htmlFor="name" className="block text-gray-700 w-1/3 text-right pr-4">Name</label>
                <Field name="name" type="text" className="mt-1 block w-2/3 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300" />
                <ErrorMessage name="name" component="div" className="text-red-600 text-sm" />
              </div>
              <div className="mb-4 flex items-center">
                <label htmlFor="birthdate" className="block text-gray-700 w-1/3 text-right pr-4">Birthdate</label>
                <Field name="birthdate" type="date" className="mt-1 block w-2/3 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300" />
                <ErrorMessage name="birthdate" component="div" className="text-red-600 text-sm" />
              </div>
              <div className="mb-4 flex items-center">
                <label htmlFor="gender" className="block text-gray-700 w-1/3 text-right pr-4">Gender</label>
                <Field name="gender" as="select" className="mt-1 block w-2/3 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Field>
                <ErrorMessage name="gender" component="div" className="text-red-600 text-sm" />
              </div>
              <div className="mb-4 flex items-center">
                <label htmlFor="address" className="block text-gray-700 w-1/3 text-right pr-4">Address</label>
                <Field name="address" type="text" className="mt-1 block w-2/3 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300" />
                <ErrorMessage name="address" component="div" className="text-red-600 text-sm" />
              </div>
              <div className="mb-4 flex items-center">
                <label htmlFor="city" className="block text-gray-700 w-1/3 text-right pr-4">City</label>
                <Field name="city" type="text" className="mt-1 block w-2/3 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300" />
                <ErrorMessage name="city" component="div" className="text-red-600 text-sm" />
              </div>
              <div className="mb-4 flex items-center">
                <label htmlFor="mobile" className="block text-gray-700 w-1/3 text-right pr-4">Mobile</label>
                <Field name="mobile" type="text" className="mt-1 block w-2/3 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300" />
                <ErrorMessage name="mobile" component="div" className="text-red-600 text-sm" />
              </div>
              <Field type="hidden" name="dateTimeCreated" />
              <hr className="bg-gray-800"/>
              <div className="text-right">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateUserModal;
