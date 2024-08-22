import React from "react";
import Faq from "react-faq-component";

const data = {
//     title: "Questions?",
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
        },
    ],
};

const styles = {
    bgColor: '#EDF5FF',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: 'black',
    arrowColor: "black",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

const FAQ = () => {
  return (
    <>
      <div className="container py-16">
        <div className="border border-gray-300 shadow rounded-xl p-8 flex items-center mb-10">
          <div className="flex-1">
            <h3 className="font-light">FAQ</h3>
            <h1 className="font-semibold text-5xl py-3">Let's talk about online shopping</h1>
            <p className="w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reiciendis deleniti rem beatae, in omnis perspiciatis velit temporibus officia dolore!</p>
          </div>

          <div className="flex-1">
               <img src="/images/FAQ/faq.jpg" alt="faq image" className="" />
          </div>
        </div>

        <div className="border shadow rounded-xl p-12 bg-[#EDF5FF] text-black">
          <h2 className="text-4xl font-medium mb-8 text-center">Questions?</h2>
        <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
      </div>
    </>
  );
};

export default FAQ;
