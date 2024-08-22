import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const initialValues = {
    email: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Simulate an API call
    alert(`Reset link sent to ${values.email}`);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col justify-between'>
          <div className='mt-24'>
            <img src='/images/Auth/forgot.png' className='w-60 mx-auto' alt='Forgot Password' />
          </div>
          <div className='bg-white text-center w-full -mb-8 sm:w-[30rem] py-8 mx-auto px-4 sm:px-10'>
            <p className='text-center text-2xl font-medium text-gray-800'>Reset your password</p>
            <p className='text-center text-gray-500 my-2'>
              Enter your username or email address and we will send you a link to reset your password.
            </p>
            <div className='flex flex-col sm:flex-row gap-2 my-10'>
              <div className='w-full sm:w-2/3'>
                <Field
                  name='email'
                  type='email'
                  className='p-2 w-full border border-gray-300 rounded-md'
                  placeholder='Enter your email address'
                  required
                />
                <ErrorMessage name='email' component='div' className='text-red-500 text-xs mt-1' />
              </div>
              <Link to='/verifyEmail'>
                <div className='text-center mt-2 sm:mt-0'>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='p-2 px-3 border border-gray-300 rounded-md w-full sm:w-32 bg-[#506FD9] hover:bg-blue-600 text-white'
                  >
                    Submit
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ForgetPassword;
