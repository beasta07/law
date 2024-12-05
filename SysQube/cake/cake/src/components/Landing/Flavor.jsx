import Slider from "react-slick";


const Flavor = () => {
  const cakes = [
    { image: "/images/Category/Flavors/Backforest.png", title: "Black Forest" },
    { image: "/images/Category/Flavors/Red Velvet.png", title: "Red Velvet Cake" },
    { image: "/images/Category/Flavors/Vanilla.png", title: "Vanilla Cake" },
    { image: "/images/Category/Flavors/Strawberry.png", title: "Strawberry Cake" },
    { image: "/images/Category/Flavors/Vanilla.png", title: "Truffle Cake" },
    { image: "/images/Category/Flavors/Oreo.png", title: "Oreo Cake" },
    { image: "/images/Category/Flavors/Truffle.png", title: "Truffle Cake" },
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
        <h1 className="text-center text-8xl font-danymeka text-[#A55668]">Flavor</h1>
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

export default Flavor;
