// Import Swiper React components
import Slider from "react-slick";




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
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // For medium devices
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, // For small devices
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480, // For extra small devices
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <>
      <div className=' container mt-32  '>
        <div className=" text-center ">
          <div>
            <h1 className="text-center text-8xl font-danymeka text-[#A55668]">Reviews</h1>
          </div>
        </div>
        <Slider {...settings} className="mt-4">

          {reviews.map((user, index) =>
            <div key={index}><div className='  ml-5  border rounded-lg p-5 px-7'>
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
            </div> </div>)}

        </Slider>
      </div>
    </>
  );
}