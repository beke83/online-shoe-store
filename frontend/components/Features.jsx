import React from 'react'
import Wrapper from './Wrapper';
import { BsCart } from "react-icons/bs"
import { BsUmbrellaFill } from "react-icons/bs"
import { TbPigMoney } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { RiHeadphoneFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";

const Features = () => {
    return (
        <div className='w-full'>
            <div className='border-2 border-gray p-5 mt-10 md:mt-20'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
                    <div className='flex items-center border-b md:border-r md:border-b-0 py-2 hover:text-[#fc343a]'>
                        <FaShippingFast className='text-[30px] md:text-[40px] mx-5 font-bold' />
                        <div>
                            <div className='text-sm font-bold'>Fast Shipping</div>
                            <div className='text-md'>Across west africa</div>
                        </div>
                    </div>
                    <div className='flex items-center border-b md:border-r md:border-b-0  py-2 hover:text-[#fc343a]'>
                        <TbPigMoney className='text-[30px] md:text-[40px] mx-5 font-bold' />
                        <div>
                            <div className='text-sm font-bold'>Money Saving</div>
                            <div className='text-md w-full'>Enjoy Great deals</div>
                        </div>
                    </div>
                    <div className='flex items-center  border-b md:border-r md:border-b-0 py-2 hover:text-[#fc343a]'>
                        <RiSecurePaymentFill className='text-[30px] md:text-[40px] mx-5 font-bold' />
                        <div>
                            <div className='text-sm font-bold'>Payment Method</div>
                            <div className='text-md w-full'>Secure System</div>
                        </div>
                    </div>
                    <div className='flex items-center  border-b md:border-r  md:border-b-0 py-2 hover:text-[#fc343a]'>
                        <BsUmbrellaFill className='text-[30px] md:text-[40px] mx-5 font-bold' />
                        <div>
                            <div className='text-sm font-bold'>Online Support</div>
                            <div className='text-md w-full'>24 hours</div>
                        </div>
                    </div>
                    <div className='flex items-center  border-b md:border-r  md:border-b-0 py-2 hover:text-[#fc343a]'>
                        <RiHeadphoneFill className='text-[30px] md:text-[40px] mx-5 font-bold' />
                        <div>
                            <div className='text-sm font-bold'>100% Safe</div>
                            <div className='text-md w-full'>Secure Shopping</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features