import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);

  const slides = [
    {
      img1: '/images/Banner/First.png',
      label: 'FRESH - SALE',
      title: 'Chefs Bakery',
      subtitle: 'Where Every Slice Tells a Story',
      description: 'From wedding masterpieces to birthday delights, our cakes are crafted with love to make your moments sweeter.',
      text: 'Made with Love',
      text2: 'Slice of Happiness',
    },
    {
      img1: '/images/Banner/First.png',
      label: 'HOT - SALE',
      title: 'Chefs Bakery',
      subtitle: 'A Family of Women Crafting Sweet Moments',
      description: 'From wedding masterpieces to birthday delights, our cakes are lovingly handcrafted by a talented family of women, dedicated to making every celebration extra special.',
      text: 'Baked with Love',
      text2: 'A Taste of Joy'
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto my-24 px-4 md:px-0 overflow-hidden" ref={ref}>
      <div className="relative w-full md:h-[30rem]">
        <div className="absolute inset-0 flex items-center justify-center md:justify-between  z-10 px-4 md:px-0">
          <button
            onClick={handlePrev}
            className="absolute md:static bottom-4 left-28 md:ml-4 ml-0 md:bottom-auto md:bg-pink-300 md:text-white bg-white md:hover:bg-blue-600 p-2 rounded-full"
          >
            <BsArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute md:static bottom-4 right-28  md:mr-4 mr-0 md:bottom-auto md:bg-pink-300 bg-white  md:text-white md:hover:bg-blue-600 p-2 rounded-full"
          >
            <BsArrowRight size={24} />
          </button>
        </div>

        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className={`relative rounded-lg  bg-[#F2D8E0] overflow-hidden md:h-[32rem] flex items-center justify-center ${activeIndex === index ? 'block' : 'hidden'
              }`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: activeIndex === index ? 1 : 0,
              zIndex: activeIndex === index ? 1 : 0,
              position: activeIndex === index ? 'relative' : 'absolute',
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute right-0 top-0 -mt-[10rem] -mr-[10rem] md:-mt-[22rem] md:-mr-[18rem]"
              initial={{ opacity: 0, x: 300, y: -300 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                x: activeIndex === index ? 0 : 300,
                y: activeIndex === index ? 0 : -300,
              }}
              transition={{ duration: 0.7 }}
            >
              <img src={slide.img1} className="w hidden md:block  object-cover" alt="Banner 1" />
            </motion.div>
            <motion.div
              className="absolute left-0 bottom-0 -mb-[18rem] -ml-[13rem] md:-mb-[20rem] md:-ml-[12rem] z-50"
              initial={{ opacity: 0, x: -300, y: 300 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                x: activeIndex === index ? 0 : -300,
                y: activeIndex === index ? 0 : 300,
              }}
              transition={{ duration: 0.7 }}
            >
              <img src={slide.img2} className="w-full h-full hidden md:block object-cover z-20" alt="Banner 2" />
            </motion.div>
            <motion.p
              className="absolute font-poppins  top-10 -left-[25rem]  text-[white] md:text-[2.5rem] font-bold z-10"
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                x: scrollPosition * 0.29, // Sideways movement
              }}
              transition={{ duration: 0.5 }}
            >
              {slide.text}
            </motion.p>
            <motion.p
              className="absolute  bottom-10 font-poppins -right-[30rem]  text-[white] md:text-[2.5rem] font-bold z-10"
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                x: -scrollPosition * 0.4, // Sideways movement
              }}
              transition={{ duration: 0.7 }}
            >
              {slide.text2}
            </motion.p>
            <motion.div
              className="text-center pb-16 md:pb-0 mt-16 md:mt-0 px-4  flex flex-col items-center justify-center z-20 w-full"
              initial={{ opacity: 0, y: -50 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                y: activeIndex === index ? 0 : -50,
              }}
              transition={{ duration: 0.7 }}
            >
              {/* <span className="border-2 border-blue-600 font-semibold rounded-full mx-auto text-blue-600 text-[0.65rem] py-1 px-3 uppercase">
                {slide.label}
              </span> */}
              <h1 className="text-6xl my-2 md:mb-1 font-cyrene font-semibold text-[#9A3324] ">{slide.title}</h1>
              <h2 className="text-lgfont-semibold mb-2">{slide.subtitle}</h2>
              <p className="text-gray-500 mt-1 mb-4 md:mb-0 text-sm md:text-xs w-96 px-10 md:px-0">{slide.description}</p>

              <button className="bg-white px-4  py-2 mt-6 cursor-pointer md:px-6 md:py-3 rounded-full text-base font-semibold text-black">
                View Collections
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
