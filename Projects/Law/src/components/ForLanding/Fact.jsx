import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Fact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger once when the element comes into view
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  // State to hold animated numbers
  const [clientCount, setClientCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);

  // Function to animate the number from 0 to the target value
  const animateNumber = (target, setState) => {
    let count = 0;
    const increment = Math.ceil(target / 100); // Change increment value as needed
    const interval = setInterval(() => {
      if (count < target) {
        count += increment;
        setState(count);
      } else {
        clearInterval(interval);
        setState(target);
      }
    }, 30); // Adjust speed here
  };

  // Trigger number animation when the component comes into view
  useEffect(() => {
    if (inView) {
      animateNumber(92, setClientCount); // Clients count
      animateNumber(10, setExperienceCount); // Experience count
      animateNumber(75, setProjectCount); // Projects count
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="container md:flex justify-between items-center py-32 gap-14 px-4 md:px-0"
    >
      <div>
        <motion.h2 className="text-7xl font-bold text-[#1F3745]">
          {clientCount}
        </motion.h2>
        <h3 className="text-2xl font-bold py-2 text-[#1F3745]">No of Clients</h3>
        <p>I have been a loyal customer of this auto parts company for years and I cannot recommend them enough.</p>
      </div>
      <div>
        <motion.h2 className="text-7xl font-bold text-[#1F3745]">
          {experienceCount}+
        </motion.h2>
        <h3 className="text-2xl font-bold py-2 text-[#1F3745]">Years of Experience</h3>
        <p>I have been a loyal customer of this auto parts company for years and I cannot recommend them enough.</p>
      </div>
      <div>
        <motion.h2 className="text-7xl font-bold text-[#1F3745]">
          {projectCount}+
        </motion.h2>
        <h3 className="text-2xl font-bold py-2 text-[#1F3745]">Completed Projects</h3>
        <p>I have been a loyal customer of this auto parts company for years and I cannot recommend them enough.</p>
      </div>
    </div>
  );
};

export default Fact;
