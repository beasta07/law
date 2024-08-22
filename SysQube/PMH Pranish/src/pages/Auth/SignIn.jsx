import React, { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [showForm, setShowForm] = useState("signin");

  const handleButtonClick = (formType) => {
    setShowForm(formType);
  };

  const fadeVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const signInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const registerSchema = Yup.object().shape({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords didn't match")
      .required("Required"),
  });

  return (
    <div className="px-4 lg:px-0 flex items-center container border rounded-xl border-gray-300 shadow gap-12 mt-20">
      <div className="flex-1 hidden md:block">
        <img src="/images/login.jpg" alt="" className="rounded-xl" />
      </div>

      <div className="flex-1 rounded-xl  shadow-sm mx-auto md:px-12 py-14">
        <div className="flex justify-around gap-14 mb-8">
          <button
            className={`text-xl font-semibold pb-2 ${
              showForm === "signin" ? "border-b-2 border-[#0D4C90]" : ""
            }`}
            onClick={() => handleButtonClick("signin")}
          >
            Sign In
          </button>
          <button
            className={`text-xl font-semibold pb-2 ${
              showForm === "register" ? "border-b-2 border-[#0D4C90]" : ""
            }`}
            onClick={() => handleButtonClick("register")}
          >
            Register
          </button>
        </div>

        <div>
          {showForm === "signin" && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeVariant}
              transition={{ duration: 0.5 }}
            >
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={signInSchema}
                onSubmit={(values) => {
                  console.log("Sign In Form Submitted", values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="flex flex-col mb-4">
                      <label htmlFor="email" className="mb-1">Email</label>
                      <Field
                        name="email"
                        type="text"
                        placeholder="Enter Email"
                        className={`border rounded-xl bg-transparent border-gray-300 focus:outline-none p-3 ${
                          errors.email && touched.email ? "border-red-500" : ""
                        }`}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="flex flex-col mb-8">
                      <label htmlFor="password" className="mb-1">Password</label>
                      <Field
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        className={`border rounded-xl bg-transparent border-gray-300 focus:outline-none p-3 ${
                          errors.password && touched.password ? "border-red-500" : ""
                        }`}
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="flex items-center gap-5">
                      <button
                        type="submit"
                        className="p-2 rounded-md px-6 bg-[#0D4C90] text-white"
                      >
                        Login
                      </button>
                      <Link to='/forgetPassword'>
                      <button type="button">Forget password?</button>
                      
                      </Link>
                    </div>
                  </Form>
                )}
              </Formik>
            </motion.div>
          )}

          {showForm === "register" && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeVariant}
              transition={{ duration: 0.5 }}
            >
              <Formik
                initialValues={{
                  fullName: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={registerSchema}
                onSubmit={(values) => {
                  console.log("Register Form Submitted", values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="flex flex-col mb-4">
                      <label htmlFor="fullName" className="mb-1">Full Name</label>
                      <Field
                        name="fullName"
                        type="text"
                        placeholder="Enter Full Name"
                        className={`border rounded-xl bg-transparent border-gray-300 focus:outline-none p-3 ${
                          errors.fullName && touched.fullName ? "border-red-500" : ""
                        }`}
                      />
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="flex flex-col mb-4">
                      <label htmlFor="email" className="mb-1">Email</label>
                      <Field
                        name="email"
                        type="text"
                        placeholder="Enter Email"
                        className={`border rounded-xl bg-transparent border-gray-300 focus:outline-none p-3 ${
                          errors.email && touched.email ? "border-red-500" : ""
                        }`}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="flex flex-col mb-8">
                      <label htmlFor="password" className="mb-1">Password</label>
                      <Field
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        className={`border rounded-xl bg-transparent border-gray-300 focus:outline-none p-3 ${
                          errors.password && touched.password ? "border-red-500" : ""
                        }`}
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="flex flex-col mb-8">
                      <label htmlFor="confirmPassword" className="mb-1">
                        Confirm Password
                      </label>
                      <Field
                        name="confirmPassword"
                        type="password"
                        placeholder="Enter Confirm Password"
                        className={`border rounded-xl bg-transparent border-gray-300 focus:outline-none p-3 ${
                          errors.confirmPassword && touched.confirmPassword ? "border-red-500" : ""
                        }`}
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="flex items-center gap-5">
                      <button
                        type="submit"
                        className="p-2 rounded-md px-6 bg-[#0D4C90] text-white"
                      >
                        Register
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
