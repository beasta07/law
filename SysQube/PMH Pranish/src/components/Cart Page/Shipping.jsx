import React from "react";
import { useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import { useFormik } from "formik";
import * as Yup from "yup";

const Shipping = () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const { price, quantity } = cartItems[0];
  const subtotal = price * quantity;
  const navigate = useNavigate();

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

  const handleBackToProducts = () => {
    window.history.back();
  };

  return (
    <>
      <div className="container py-12 px-4 lg:px-0">
        <button
          onClick={handleBackToProducts}
          className="mb-4 flex items-center gap-2 rounded"
        >
          <TbArrowBackUp />
          Back
        </button>
        <h1 className="font-medium text-2xl mb-8">Shipping Information</h1>
        <div className="md:flex gap-12">
          <div className="md:w-[60%]">
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
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>

          <div className="md:w-[40%] mt-8 md:mt-0">
            <div className="border border-gray-300 shadow rounded overflow-y-scroll h-[36rem] p-5 px-7 sticky top-8">
              <h2 className="font-medium text-xl mb-5">Order Summary</h2>
              <div>
                {cartItems.map((item, index) => (
                  <div key={index}>
                    <div className="flex gap-5 items-center border rounded-xl">
                      <div>
                        <img src={item?.image} alt="" className="size-32 border-r p-3 rounded-xl" />
                      </div>
                      <div>
                         <h2 className="font-semibold line-clamp-2">{item?.name}</h2>
                         <h2 className="">Size: {item?.size}</h2>
                         <h2 className="">Qty: {item?.quantity}</h2>
                      </div>
                    </div>

                    <div>
                         <div className="flex justify-between py-5 border-b">
                              <p className="font-medium">Subtotal</p>
                              <p>{subtotal}</p>
                         </div>
                         <div className="flex justify-between py-5 ">
                              <p className="font-medium">Total</p>
                              <p>{subtotal}</p>
                         </div>
                    </div>
                  </div>
                ))}
                {/* <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                  <div>
                    <p>SubTotal:</p>
                  </div>
                  <div>
                    <p>Rs. {subtotal}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b border-gray-300 pb-2 mt-7">
                  <div>
                    <p>Total:</p>
                  </div>
                  <div>
                    <p>Rs. {subtotal}</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
