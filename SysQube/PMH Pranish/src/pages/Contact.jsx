// import React from 'react';
// import { MdOutlineArrowRight, MdOutlineLocalPhone } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { GoArrowRight } from "react-icons/go";
// import Visit from "../components/Visit";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { postInquery } from "../Redux/features/inquerySlice";

const Contact = () => {
  //     const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    subject: Yup.string().required("Subject is required"),
    description: Yup.string().required("Description is required"),
  });

  const handleSubmit = async (values) => {
    try {
      dispatch(postInquery(values)); // Corrected action name
      toast.success("Registration successful!"); // Display success message
    } catch (error) {
      console.log(error); // Output error to console
      if (error.message) {
        toast.error(error.message); // Display error message using toast.error
      } else {
        toast.error("An error occurred during registration."); // Display generic error message
      }
    }
  };

  return (
    <div>
      <div className="mb-[0rem]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27776850155!2d85.28493301147012!3d27.70903024180952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1706503916499!5m2!1sen!2snp"
          width="100%"
          height="600"
          style={{ border: 0 }}
        />
        <div className="container">
          <div className="sm:flex md:gap-12 lg:gap-32 mt-14 sm:-mt-[28rem]">
            <div className="w-[90%] mx-auto sm:mx-0 md:w-[120%] lg:w-[80%] bg-white p-8 rounded-lg border border-gray-300">
              <h2 className="text-[1.3rem] font-medium pb-6">
                Have questions? Get in touch!
              </h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <Form className="space-y-5">
                    <div>
                      <h3 className="font-medium pb-2">Name</h3>
                      <Field
                        type="text"
                        name="name"
                        className="py-3 w-[100%] focus:outline-none px-3 border rounded-lg border-gray-300"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="mb-5 text-red-500"
                      />
                    </div>

                    <div>
                      <h3 className="font-medium pb-2">Email</h3>
                      <Field
                        type="text"
                        name="email"
                        className="py-3 w-[100%] focus:outline-none px-3 border rounded-lg border-gray-300"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="mb-5 text-red-500"
                      />
                    </div>

                    <div>
                      <h3 className="font-medium pb-2">Phone</h3>
                      <Field
                        type="text"
                        name="phone"
                        className="py-3 w-[100%] focus:outline-none px-3 border rounded-lg border-gray-300"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="mb-5 text-red-500"
                      />
                    </div>

                    <div>
                      <h3 className="font-medium pb-2">Subject</h3>
                      <Field
                        type="text"
                        name="subject"
                        className="py-3 w-[100%] focus:outline-none px-3 border rounded-lg border-gray-300"
                      />
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="mb-5 text-red-500"
                      />
                    </div>

                    <div>
                      <h3 className="font-medium pb-2">Description</h3>
                      <Field
                        as="textarea"
                        name="description"
                        className="p-3 w-[100%] focus:outline-none border rounded-lg border-gray-300"
                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="mb-5 text-red-500"
                      />
                    </div>

                    <div className="group">
                    <button
                      type="submit"
                      className="flex items-center gap-2 py-3 bg-[#0D4C90] rounded-lg px-8 text-white "
                    >
                      Submit <GoArrowRight className="group-hover:-rotate-45 duration-300" />
                    </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="sm:px-0 px-5">
              <h2 className="font-medium text-3xl mt-8 pb-2 sm:text-[2rem] sm:w-[60%] sm:mt-[34rem]">
                We would Love To Hear From You.
              </h2>
              <p className="text-justify sm:text-left pt-3 sm:pt-0 w-[100%] text-sm">
                We are here to answer any question you may have. As a partner of
                corporates, realton has more than 9,000 offices of all sizes and
                all potential of session.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Visit /> */}

      {/* <div className="w-[100%] bg-[#F6F7F6] py-5">
                <div className="px-4 sm:px-0 container w-full mx-auto sm:flex justify-between mb-[3rem]">
                    <div>
                        <h2 className="font-semibold text-[1.3rem] sm:text-[2rem]">Need help? Talk to our expert.</h2>
                        <p className="text-sm pt-2 sm:pt-5">Talk to our experts or Browse through more properties.</p>
                    </div>
                    <div className="sm:flex mb-9">
                        <button className="mt-4 flex py-3 px-[7.5rem] sm:px-6 rounded-lg border-2 border-black hover:bg-black hover:text-white transition duration-300">Contact Us<MdOutlineArrowOutward className="mt-1 ml-2 hover:rotate-45 transition duration-300" /></button>
                        <button className="mt-4 flex py-3 px-[6.9rem] sm:px-6 rounded-lg border-2 border-black bg-black text-white sm:ml-5 hover:bg-white hover:text-black transition duration-300"><MdOutlineLocalPhone className="mt-1 mr-2" />+61 4100 111 66</button>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default Contact;
