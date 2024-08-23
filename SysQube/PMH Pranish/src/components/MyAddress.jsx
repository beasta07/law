import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
const MyAddress = () => {
    const formik = useFormik({
        initialValues: {
          fullName: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",
          country: "",
          phone: "",
        },
        validationSchema: Yup.object({
          fullName: Yup.string().required("Full Name is required"),
          address: Yup.string().required("Address is required"),
          city: Yup.string().required("City is required"),
          state: Yup.string().required("State/Province is required"),
          zipCode: Yup.string().required("Zip Code is required"),
          country: Yup.string().required("Country is required"),
          phone: Yup.string().min(10, "Phone number should be 10 character."),
        }),
        onSubmit: (values) => {
          localStorage.setItem("shippingInfo", JSON.stringify(values));
          navigate("/payment-info");
        },
      });
    
    
    
    return (
    <div className='container'>
      
                <div className='mx-48'>

                    <h1 className="font-medium text-2xl my-8">Shipping Information</h1>
                    
                    <div className="">
                      <form
                        onSubmit={formik.handleSubmit}
                        className="grid grid-cols-2 gap-6"
                      >
                        <div className="col-span-2">
                          <label>Enter Full Name</label>
                          <input
                            type="text"
                            name="fullName"
                            value={formik.values.fullName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="p-3 w-full border border-gray-300 rounded focus:outline-none"
                          />
                          {formik.touched.fullName && formik.errors.fullName ? (
                            <div className="text-red-600">{formik.errors.fullName}</div>
                          ) : null}
                        </div>
                        <div className="col-span-2">
                          <label>Enter Address</label>
                          <input
                            type="text"
                            name="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="p-3 w-full border border-gray-300 rounded focus:outline-none"
                          />
                          {formik.touched.address && formik.errors.address ? (
                            <div className="text-red-600">{formik.errors.address}</div>
                          ) : null}
                        </div>
                        <div className="col-span-2 md:col-auto">
                          <label>Enter City</label>
                          <input
                            type="text"
                            name="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="p-3 w-full border border-gray-300 rounded focus:outline-none"
                          />
                          {formik.touched.city && formik.errors.city ? (
                            <div className="text-red-600">{formik.errors.city}</div>
                          ) : null}
                        </div>
                        <div className="col-span-2 md:col-auto">
                          <label>Enter State/Province</label>
                          <input
                            type="text"
                            name="state"
                            value={formik.values.state}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="p-3 w-full border border-gray-300 rounded focus:outline-none"
                          />
                          {formik.touched.state && formik.errors.state ? (
                            <div className="text-red-600">{formik.errors.state}</div>
                          ) : null}
                        </div>
                        <div className="col-span-2 md:col-auto">
                          <label>Enter Zip Code</label>
                          <input
                            type="number"
                            name="zipCode"
                            value={formik.values.zipCode}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="p-3 w-full border border-gray-300 rounded focus:outline-none"
                          />
                          {formik.touched.zipCode && formik.errors.zipCode ? (
                            <div className="text-red-600">{formik.errors.zipCode}</div>
                          ) : null}
                        </div>
                        <div className="col-span-2 md:col-auto">
                          <label>Enter Country</label>
                          <input
                            type="text"
                            name="country"
                            value={formik.values.country}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="p-3 w-full border border-gray-300 rounded focus:outline-none"
                          />
                          {formik.touched.country && formik.errors.country ? (
                            <div className="text-red-600">{formik.errors.country}</div>
                          ) : null}
                        </div>
                        <div className="col-span-2">
                          <label>Enter Phone</label>
                          <input
                            type="text"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="p-3 w-full border border-gray-300 rounded focus:outline-none"
                          />
                          {formik.touched.phone && formik.errors.phone ? (
                            <div className="text-red-600">{formik.errors.phone}</div>
                          ) : null}
                        </div>
                        <div className="col-span-2 mt-5">
                          <button
                            type="submit"
                            className="p-3 bg-[#0D4C90] text-white rounded w-full border hover:border-[#0D4C90] hover:bg-transparent hover:text-[#0D4C90] duration-300"
                          >
                            Save Address
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  
    </div>
  )
}

export default MyAddress
