import React from 'react';
import { TiUserAddOutline } from "react-icons/ti";

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  address: Yup.string().required('Address is required'),
  phoneNumber: Yup.number().typeError('Phone Number must be a number').required('Phone Number is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const UserSettings = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='w-full'>
        <div className='container mt-8 px-8'>

          <Formik
            initialValues={{
              fullName: '',
              email: '',
              address: '',
              phoneNumber: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <div className='mb-4  '>
                  <div className='flex gap-3 items-center'>
                    <TiUserAddOutline className=' text-2xl' />
                    <h1 className='text-2xl font-semibold'>User Settings</h1>
                  </div>
                  <p className='text-gray-700 py-3'>You can edit your profile here</p>
                </div>
                <div className='mb-4 flex items-center'>
                  <div className='flex gap-5'>
                    <img
                      src='/images/Auth/upload.png' // Ensure this path is correct
                      alt='Upload Photo'
                      className='w-12 h-12 object-cover rounded-md'
                    />
                    <div>
                      <label htmlFor='upload-photo' className='text-lg text-blue-800 py-1 rounded-md cursor-pointer'>
                        Upload Photo
                      </label>
                      <input
                        id='upload-photo'
                        type='file'
                        accept='image/*'
                        className='hidden'
                        name='image'
                        onChange={(event) => {
                          setFieldValue("image", event.currentTarget.files[0]);
                        }}
                      />
                      <p className='text-sm text-gray-700'>Upload your image, it is best if it has the same length and height</p>
                    </div>
                  </div>
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm mb-2' htmlFor='fullName'>Full Name</label>
                  <Field
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type='text'
                    name='fullName'
                    placeholder='Enter the name of this person'
                  />
                  <ErrorMessage name='fullName' component='div' className='text-red-500 text-xs italic' />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm mb-2' htmlFor='email'>Email</label>
                  <Field
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type='email'
                    name='email'
                    placeholder='Enter their email'
                  />
                  <ErrorMessage name='email' component='div' className='text-red-500 text-xs italic' />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm mb-2' htmlFor='address'>Address</label>
                  <Field
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type='text'
                    name='address'
                    placeholder='Enter their address'
                  />
                  <ErrorMessage name='address' component='div' className='text-red-500 text-xs italic' />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm mb-2' htmlFor='phoneNumber'>Phone Number</label>
                  <Field
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type='text'
                    name='phoneNumber'
                    placeholder='Phone Number'
                  />
                  <ErrorMessage name='phoneNumber' component='div' className='text-red-500 text-xs italic' />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm mb-2' htmlFor='password'>Password</label>
                  <Field
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type='password'
                    name='password'
                    placeholder='Password'
                  />
                  <ErrorMessage name='password' component='div' className='text-red-500 text-xs italic' />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm mb-2' htmlFor='confirmPassword'>Confirm Password</label>
                  <Field
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                  />
                  <ErrorMessage name='confirmPassword' component='div' className='text-red-500 text-xs italic' />
                </div>
                <div className='flex items-center justify-between'>
                  <button
                    className='bg-white border border-gray-200 hover:bg-gray-100  py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='button'
                  >
                    Cancel
                  </button>
                  <button
                    className='bg-[#042893] hover:bg-blue-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='submit'
                    disabled={isSubmitting}
                  >
                    Save
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
