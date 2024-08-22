import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbArrowBackUp, TbTruckDelivery } from "react-icons/tb";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("online"); // State for the selected payment method
  const cartItem = JSON.parse(localStorage.getItem("cart")) || [];
  const { price, quantity } = cartItem[0] || {};
  const subtotal = price * quantity;
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      CardHolderName: "",
      CardNumber: "",
      ExpirationDate: "",
      CVV: "",
    },
    validationSchema: Yup.object({
      CardHolderName: Yup.string().required("Cardholder Name is required"),
      CardNumber: Yup.string().required("Card number is required"),
      ExpirationDate: Yup.string().required("Expiration date is required"),
      CVV: Yup.string().required("CVV is required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("PaymentInfo", JSON.stringify(values));
      navigate("/order-review");
    },
  });

  const handleReview = () => {
    const paymentInfo = localStorage.getItem("PaymentInfo");

    if (paymentInfo) {
      try {
        const parsedPaymentInfo = JSON.parse(paymentInfo);
        console.log("Payment Info: ", parsedPaymentInfo);
      } catch (error) {
        // Handle case where JSON parsing fails (e.g., if stored as a string)
        console.log("Payment Info (string): ", paymentInfo);
      }
    }
    
    navigate("/order-review");
  };

  const handleBackToProducts = () => {
    window.history.back();
  };

  const handlePaymentMethodClick = (method) => {
    setSelectedMethod(method);
    if (method === "cod") {
      localStorage.setItem("PaymentInfo", JSON.stringify({ method: "cash on delivery" }));
    } else {
      localStorage.removeItem("PaymentInfo"); // Clear if switching back to online
    }
  };

  return (
    <div className="container py-12 px-4 lg:px-0">
      <button
        onClick={handleBackToProducts}
        className="mb-4 flex items-center gap-2 rounded"
      >
        <TbArrowBackUp />
        Back
      </button>
      <h1 className="font-medium text-2xl mb-8">Payment Information</h1>

      <div className="md:flex gap-12">
        <div className="md:w-[60%]">
          <div className="text-lg flex justify-around mb-8">
            <button
              onClick={() => handlePaymentMethodClick("online")}
              className={`p-2 ${selectedMethod === "online" ? "border-b-2 border-gray-500" : ""}`}
            >
              Online Method
            </button>
            <button
              onClick={() => handlePaymentMethodClick("cod")}
              className={`p-2 ${selectedMethod === "cod" ? "border-b-2 border-gray-500" : ""}`}
            >
              Cash On Delivery
            </button>
          </div>

          {selectedMethod === "online" && (
            <motion.form
              onSubmit={formik.handleSubmit}
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Online Payment Form */}
              <div className="col-span-2">
                <label>Cardholder Name</label>
                <input
                  type="text"
                  name="CardHolderName"
                  value={formik.values.CardHolderName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="p-3 w-full border border-gray-300 rounded focus:outline-none"
                />
                {formik.touched.CardHolderName &&
                formik.errors.CardHolderName ? (
                  <div className="text-red-600">
                    {formik.errors.CardHolderName}
                  </div>
                ) : null}
              </div>
              <div className="col-span-2">
                <label>Card Number</label>
                <input
                  type="text"
                  name="CardNumber"
                  value={formik.values.CardNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="p-3 w-full border border-gray-300 rounded focus:outline-none"
                />
                {formik.touched.CardNumber && formik.errors.CardNumber ? (
                  <div className="text-red-600">{formik.errors.CardNumber}</div>
                ) : null}
              </div>
              <div className="col-span-2 md:col-auto">
                <label>Expiration Date (MM/YY)</label>
                <input
                  type="month"
                  name="ExpirationDate"
                  value={formik.values.ExpirationDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="MM/YY"
                  className="p-3 w-full border border-gray-300 rounded focus:outline-none"
                />
                {formik.touched.ExpirationDate &&
                formik.errors.ExpirationDate ? (
                  <div className="text-red-600">
                    {formik.errors.ExpirationDate}
                  </div>
                ) : null}
              </div>
              <div className="col-span-2 md:col-auto">
                <label>CVV</label>
                <input
                  type="number"
                  name="CVV"
                  value={formik.values.CVV}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="p-3 w-full border border-gray-300 rounded focus:outline-none"
                />
                {formik.touched.CVV && formik.errors.CVV ? (
                  <div className="text-red-600">{formik.errors.CVV}</div>
                ) : null}
              </div>
              <div className="col-span-2 mt-5">
                <button
                  type="submit"
                  className="p-3 bg-[#0D4C90] text-white rounded w-full border hover:border-[#0D4C90] hover:bg-transparent hover:text-[#0D4C90] duration-300"
                >
                  Review Order
                </button>
              </div>
            </motion.form>
          )}

          {selectedMethod === "cod" && (
            <motion.div
              className=""
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Cash On Delivery Content */}
              <div className="p-6 border border-gray-300 rounded mb-6 text-center">
                <TbTruckDelivery className="text-7xl mx-auto mb-5" />
                <p className="">
                  Cash on Delivery selected. Please proceed to order review.
                </p>
              </div>
              <button
                onClick={handleReview}
                className="p-3 bg-[#0D4C90] text-white rounded w-full border hover:border-[#0D4C90] hover:bg-transparent hover:text-[#0D4C90] duration-300"
              >
                Review Order
              </button>
            </motion.div>
          )}
        </div>

        <div className="md:w-[40%] mt-8 md:mt-0">
          <div className="border border-gray-300 shadow rounded p-5 px-7 sticky top-8">
            <h2 className="font-medium text-xl mb-5">Order Summary</h2>
            <div>
              {cartItem.map((item, index) => (
                <div key={index}>
                  <div className="flex gap-5 items-center border rounded-xl">
                    <div>
                      <img
                        src={item?.image}
                        alt=""
                        className="size-32 border-r p-3 rounded-xl"
                      />
                    </div>
                    <div>
                      <h2 className="font-semibold line-clamp-2">
                        {item?.name}
                      </h2>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
