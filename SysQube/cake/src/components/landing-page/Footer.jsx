import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci"

const Footer = () => {
    return (
        <div className='bg-[#69beb8] font-poppins px-4 md:px-0 py-10 text-gray-50 '>
            <div className='container'
            >
                <div className='flex items-center   pt-4'>

                    <div className="w-full">


                        <hr className='border-t-1 border-white my-4 ' />
                    </div>


                    <img src="/images/Footer/Footer.png" className='text-white w-48' alt="" />


                    <div className="w-full">

                        <hr className='border-t-1 border-white ' />

                    </div>
                </div>
                <div className="md:flex grid gap-4 justify-between  text-sm">
                    <div className="md:flex gap-32 text-sm">
                        <ul className="text-white font-light">
                            <li className="mb-2">About Us</li>
                            <li className="mb-2">Catalog</li>
                            <li className="mb-2">Custom Cakes</li>
                            <li className="mb-2">Reviews</li>
                        </ul>
                        <ul className="text-white font-light">
                            <li className="mb-2">Pay and delivery</li>
                            <li className="mb-2">Support</li>
                            <li className="mb-2">FAQ </li>
                        </ul>
                    </div>
                    <div className="md:flex gap-32 text-sm">
                        <ul className="text-white font-light">
                            <li className="mb-2">Contacts</li>
                            <li className="mb-2">Lokanthali, Bhaktapur</li>
                            <li className="mb-2">+977-9841173165</li>
                            <li className="mb-2"> chefsbakery@gmail.com
                            </li>
                        </ul>
                        <ul className="text-white font-light">
                            <li className="mb-2">Follow Us</li>
                            <li className="mb-2 flex text-xl gap-3"><CiFacebook className="cursor-pointer" /> <CiInstagram className="cursor-pointer" /> <CiTwitter className="cursor-pointer" />


                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
