// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../App.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Review() {
    const reviews = [
        {
          id: 1,
          profileImage: "/images/Review/User/Profile1.jpeg",
          firstName: "Mark",
          lastName: "Kukerberg",
          category: "Cake + dessert",
          product: "Vanilla Cake",
          feedback:
            "Thank you very much for the cake and desserts, my mother is very pleased with everything. We will be ordering again and hope to see the lovely staff again.",
        },
        {
          id: 2,
          profileImage: "/images/Review/User/Profile2.jpeg",
          firstName: "Sarah",
          lastName: "Johnson",
          category: "Cake + dessert",
          product: "Chocolate Cake",
          feedback:
            "The chocolate cake was heavenly! Rich and moist with the perfect level of sweetness. It was a hit at our party.",
        },
        {
          id: 3,
          profileImage: "/images/Review/User/Profile3.jpeg",
          firstName: "Emily",
          lastName: "Stone",
          category: "Cake + dessert",
          product: "Red Velvet Cake",
          feedback:
            "The red velvet cake was fantastic! The cream cheese frosting was a perfect match. Can't wait to order more.",
        },
        {
          id: 4,
          profileImage: "/images/Review/User/Profile4.jpeg",
          firstName: "John",
          lastName: "Doe",
          category: "Cake + dessert",
          product: "Carrot Cake",
          feedback:
            "The carrot cake was delicious! Moist, flavorful, and not overly sweet. A great choice for any occasion.",
        },
        {
          id: 5,
          profileImage: "/images/Review/User/Profile5.jpeg",
          firstName: "Alice",
          lastName: "Brown",
          category: "Cake + dessert",
          product: "Cheesecake",
          feedback:
            "Best cheesecake I've ever had! Creamy, rich, and perfectly balanced. Thank you for such a wonderful treat.",
        },
        {
          id: 6,
          profileImage: "/images/Review/User/Profile6.jpeg",
          firstName: "Michael",
          lastName: "Smith",
          category: "Cake + dessert",
          product: "Black Forest Cake",
          feedback:
            "The black forest cake was a showstopper! The cherries and whipped cream were a perfect complement to the chocolate layers.",
        },
        {
          id: 7,
          profileImage: "/images/Review/User/Profile7.jpeg",
          firstName: "Sophia",
          lastName: "Lee",
          category: "Cake + dessert",
          product: "Lemon Cake",
          feedback:
            "The lemon cake was light and refreshing! The citrus flavor was spot on. Highly recommended for summer gatherings.",
        },
      ];
      
  return (
    <>
    <div className=' container mt-32  '>
    <div className="mb-20 text-center ">
        <h1 className="font-cyrene text-5xl ">Hear from Our </h1>
        <h2 className="text-lg text-[#9A3324]">Customers</h2>
      </div>      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        
        pagination={{
          clickable: true,
          
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper my-5 mb-20"
      >
        {reviews.map((user, index)=>
        <SwiperSlide key={index}><div className=' bg-gray-100 rounded-lg p-5 px-7'>
            <div className='flex gap-4 items-center'>
            <img src={user.profileImage} className=' h-20 w-20 object-cover rounded-full' alt="" />
            <div>
<h1 className='font-semibold '>{user.firstName} </h1>
<h1 className='font-semibold '>{user.lastName} </h1>

            </div>
            </div>
            <p className='text-xs mt-8 text-gray-400'>{user.category}</p>
            <h2 className='text-sm mt-1 font-medium '>{user.product}</h2>
            <p className='text-sm text-gray-400 my-4 line-clamp-3'>{user.feedback}</p>
            </div> </SwiperSlide>)}
  
      </Swiper>
    </div>
    </>
  );
}