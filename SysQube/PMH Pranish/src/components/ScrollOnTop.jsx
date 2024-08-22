import { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { LiaAngleUpSolid } from "react-icons/lia";

const ScrollOnTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 700) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <button
                onClick={scrollToTop}
                className={`${isVisible ? 'opacity-100' : 'opacity-0'
                    } fixed md:bottom-10 bottom-6 md:right-10 right-6 text-xl p-3 rounded-full bg-white z-40  border border-gray-300 shadow-md transition-opacity duration-300`}>
                <LiaAngleUpSolid className='stroke-2' />
            </button>
        </div>
    );
};

export default ScrollOnTop;