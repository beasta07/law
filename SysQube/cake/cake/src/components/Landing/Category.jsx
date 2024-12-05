import Slider from "react-slick";


const Category = () => {
  const cakes = [
    { image: "/images/Category/Category/WeddingCake.png", title: "Wedding Cake" },
    { image: "/images/Category/Category/BirthdayCake.png", title: "Birthday Cake" },
    { image: "/images/Category/Category/MotherDay.png", title: "Mother's Day Cake" },
    { image: "/images/Category/Category/Designer.png", title: "Designer Cake" },
    { image: "/images/Category/Category/Aniversarry.png", title: "Aniversary Cake" },
    { image: "/images/Category/Category/FatherDay.png", title: "Father's Day Cake" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3000, 
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
    <div className="container mt-32">
      <div>
        <img src="/cake/public/images/Category/Category/MotherDay.png" alt="" />
        <h1 className="text-8xl font-medium font-danymeka text-[#9A3324] text-center">Categories</h1>
        <p className="text-center mt-2 font-poppins">Some of our Most Popular flavors are</p>
      </div>
      <Slider {...settings} className="mt-8">
        {cakes.map((cake, index) => (
          <div key={index} className="px-2 cursor-pointer">
            <img
              src={cake.image}
              alt={cake.title}
              className="rounded-lg w-full"
            />
            <h1 className="mt-2 text-center font-semibold">{cake.title}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Category;
