import { IoHomeOutline } from "react-icons/io5";
import { Link, Element, scroller } from "react-scroll";
import { useState } from "react";

const PrivacyPolicy = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  // Function to handle the setting of the active tab
  const handleSetActive = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="bg-[#F0F4F9]">
        <div className="items-center py-28">
          <h1 className="font-bold text-3xl text-center">Privacy & Policy</h1>
          <div className="flex items-center mt-4 gap-2 justify-center">
            <IoHomeOutline />
            <span className="text-gray-700">Home - Privacy</span>
          </div>
        </div>
      </div>
      <div className="mt-16 md:container mx-auto">
        <div className="flex justify-between">
          <div className="hidden md:block w-[30%] font-semibold text-gray-600">
            <div className="p-5 sticky top-10">
              <ul className="cursor-pointer">
                {['tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6', 'tab7'].map((tab) => (
                  <li
                    key={tab}
                    className={`mb-6 cursor-pointer ${activeTab === tab ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
                  >
                    <Link
                      to={tab}
                      smooth={true}
                      duration={500}
                      onSetActive={() => handleSetActive(tab)}
                      onClick={() => handleSetActive(tab)}
                    >
                      {`Tab Sample ${tab.slice(-1)}`}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:w-[70%]">
            <Element name="tab1" className="pt-6  lg:px-0 px-4">
              <h1 className="font-semibold">Tab Sample 1</h1>
              <p className="text-gray-700 my-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper tempus lacus, in euismod nisl eleifend sit amet. Vivamus molestie aliquam arcu, id pharetra nisi aliquet eget. Aliquam blandit augue ante. Fusce dictum vitae justo vitae fermentum. Fusce purus orci, pulvinar vitae eleifend vel, congue non eros. If you are a California resident, the information below also applies to you. Certain terms used in this section have the meanings given to them in the California Consumer Privacy Act of 2018 (“CCPA”).
              </p>
            </Element>
            <Element name="tab2" className="pt-16 lg:px-0 px-4">
              <h1 className="font-semibold">Tab Sample 2</h1>
              <p className="text-gray-700 my-6">
                Customers are advised to read and understand our Privacy Policy carefully, as by accessing the website/app you agree to be bound by the terms and conditions of the Privacy Policy and consent to the collection, storage, and use of information relating to you as provided herein. If you do not agree with the terms and conditions of our Privacy Policy, including in relation to the manner of collection or use of your information, please do not use or access the website/app. Our Privacy Policy is incorporated into the Terms and Conditions of Use of the website/app, and is subject to change from time to time without notice. It is strongly recommended that you periodically review our Privacy Policy as posted on the App/Web.
              </p>
            </Element>
            <Element name="tab3" className="pt-16 lg:px-0 px-4">
              <h1 className="font-semibold">Tab Sample 3</h1>
              <p className="text-gray-700 my-6">
                We may automatically track certain information about you based upon your behavior on the website. We use this information to do internal research on our users’ demographics, interests, and behavior to better understand, protect, and serve our users. This information is compiled and analyzed on an aggregated basis. This information may include the URL that you just came from (whether this URL is on the website or not), which URL you next go to (whether this URL is on the website or not), your computer browser information, your IP address, and other information associated with your interaction with the website. We may also share your Mobile IP/Device IP with third party(ies) and to the best of our knowledge, be-life and representations given to us by these third party(ies) this information is not stored.
              </p>
            </Element>
            <Element name="tab4" className="pt-16 lg:px-0 px-4">
              <h1 className="font-semibold">Tab Sample 4</h1>
              <p className="text-gray-700 my-6">
                We use this information to do internal research on our users’ demographics, interests, and behavior to better understand, protect, and serve our users. This information is compiled and analyzed on an aggregated basis. This information may include the URL that you just came from (whether this URL is on the website or not), which URL you next go to (whether this URL is on the website or not), your computer browser information, your IP address. Identifiers (e.g., name, mailing address, email address, phone number, credit/debit card number) Characteristics of protected classifications (e.g., gender, age) Commercial information (e.g., products or services purchased, purchase history) Internet or other electronic network activity (e.g., browse or search history) Geo location data (e.g., latitude or longitude) Audio, electronic, visual, or similar information (e.g., recording of Guest service calls) Inferences drawn from any of the above (e.g., preferences or characteristics).
              </p>
            </Element>
            <Element name="tab5" className="pt-16 lg:px-0 px-4">
              <h1 className="font-semibold">Tab Sample 5</h1>
              <p className="text-gray-700 my-6">
                To protect against the loss, misuse, and alteration of the information under its control, the Company has in place appropriate physical, electronic, and managerial procedures. For example, the Company servers are accessible only to authorized personnel and your information is shared with employees and authorized personnel on a need-to-know basis to complete the transaction and to provide the services requested by you. Although the Company endeavors to safeguard the confidentiality of your personally identifiable information, transmissions made by means of the Internet cannot be made absolutely secure. By using the website, you agree that the Company will have no liability for disclosure of your information due to errors in transmission and/or unauthorized acts of third parties.
              </p>
            </Element>
            <Element name="tab6" className="pt-16 lg:px-0 px-4">
              <h1 className="font-semibold">Tab Sample 6</h1>
              <p className="text-gray-700 my-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </Element>
            <Element name="tab7" className="pt-16 lg:px-0 px-4">
              <h1 className="font-semibold">Tab Sample 7</h1>
              <p className="text-gray-700 my-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper tempus lacus, in euismod nisl eleifend sit amet. Vivamus molestie aliquam arcu, id pharetra nisi aliquet eget. Aliquam blandit augue ante. Fusce dictum vitae justo vitae fermentum. Fusce purus orci, pulvinar vitae eleifend vel, congue non eros. Performing services, including maintaining or servicing accounts, providing customer service, processing or fulfilling orders and transactions, verifying customer information, processing payments, providing advertising or marketing services, providing analytics services, or providing similar services; Auditing related to a current interaction with you and concurrent transactions, including, but not limited to, counting ad impressions to unique visitors, verifying positioning and quality of ad impressions, and auditing compliance; Short-term, transient use, including, but not limited to, the contextual customization of ads shown as part of the same interaction; Detecting security incidents, protecting against malicious, deceptive, fraudulent, or illegal activity, and prosecuting those responsible for that activity; Debugging to identify and repair errors that impair existing intended functionality; Undertaking internal research for technological development and demonstration; and Undertaking activities to verify or maintain the quality or safety of a service or device that is owned, manufactured, manufactured for, or controlled by us, and to improve, upgrade, or enhance the service or device that is owned, manufactured, manufactured for, or controlled by us.
              </p>
            </Element>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;