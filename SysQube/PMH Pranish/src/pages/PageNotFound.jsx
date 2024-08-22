import React from "react";
import For404Page from "../Layouts/For404Page";
const PageNotFound = () => {
  return (
    <>
      <For404Page>
        <div className="container text-center text-xl mx-auto">
          <img
            src="/images/404error.png"
            className="w-[50%] mx-auto"
            alt="404 Error"
          />
          <h2 className="py-9 w-[40%] font-medium mx-auto">
            We're sorry! This page is currently unavailable. Please try again
            later.
          </h2>
          <button className="p-2 px-5 bg-black text-white rounded-xl">
            Back to home
          </button>
        </div>
      </For404Page>
    </>
  );
};

export default PageNotFound;
