import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ConfirmPassword = () => {
  const validationSchema = Yup.object().shape({
    password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const initialValues = {
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    alert('Registered Successfully');
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className='min-h-screen  flex-col justify-center'>
            <div className='mt-16'>
              <img src='/images/Auth/padlock.jpg' className='w-60 mx-auto' alt='Forgot Password' />
            </div>
            <div className='bg-white text-center w-full sm:w-[30rem] my-2 mx-auto px-4 sm:px-10'>
              <p className='text-center text-2xl font-medium mb-8'>New Password</p>
              <p className='text-center text-gray-500 my-2'>
                Enter your new password and confirm it to reset your password.
              </p>
              <div className='my-2'>
                <Field
                  name='password'
                  type='password'
                  className='p-3 w-full border border-gray-300 rounded-md'
                  placeholder='Enter your new Password'
                />
                <ErrorMessage name='password' component='div' className='text-red-500 text-xs mt-1' />
              </div>
              <div className='my-2'>
                <Field
                  name='confirmPassword'
                  type='password'
                  className='p-3 w-full border border-gray-300 rounded-md'
                  placeholder='Confirm your Password'
                />
                <ErrorMessage name='confirmPassword' component='div' className='text-red-500 text-xs mt-1' />
              </div>
              <div className='text-center'>
                <button
                  type='submit'
                  className='px-14 py-3 rounded-md my-4 bg-[#042893] text-white'
                  disabled={isSubmitting}
                >
                  Reset my Password
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ConfirmPassword;
