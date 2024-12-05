
const Payment = () => {
    const Payment  = [
        {
         'img': "/images/Payments/esewa-logo.png"
        },
        {
         'img': "/images/Payments/imepaylogo.png"
        },
        {
         'img': "/images/Payments/Khalti.png"
        }
   
        ,
        {
         'img': "/images/Payments/mastercard.png"
        } 
        ,
        {
         'img': "/images/Payments/NIC-1.png"
        } 
        ,
        {
         'img': "/images/Payments/visa.png"
        } 
    ]
  return (
    <div className="container my-32">
        <h1 className="text-center  text-8xl font-danymeka text-[#A55668]">We Accept</h1>
        <div className="flex justify-between mt-4 items-center">
        {Payment.map ((item,index)=> 
        <div key={index} className=" ">
            <div className="">

            <img src={item.img} className="w-24" alt="" />
            </div>

        </div>
        
        )}
        </div>
        </div>
  )
}

export default Payment
