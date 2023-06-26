import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';
import Wrapper from '@/components/Wrapper';
import React from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';


const ProductDetails = () => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                    {/* left column */}
                    <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
                        <ProductDetailsCarousel />
                    </div>
                    {/* left column end*/}


                    {/* right column start*/}
                    <div className='flex-[1] py-3'>
                        <div className='text-[34px] font-semibold mb-2 text-[#fc343a]'>
                            Jordan Retro 6 G
                        </div>
                        <div className='text-lg font-semibold mb-5'>
                            Men&apos;s Golf Shoes
                        </div>
                        <div className='text-lg font-semibold'>
                            NGN: # 40 000 .00
                        </div>
                        <div className='text-md font-semibold text-black/[0.5]'>
                            incl. of taxes
                        </div>
                        <div className='text-md font-medium text-black/[0.5] mb-20'>
                            {`(Also includes all applicables duties)`}
                        </div>

                        {/* Product sizes start*/}
                        <div className='mb-10'>
                            <div className='flex justify-between mb-2'>
                                Select Size
                                <div className='text-md font-medium text-black/[0.5]cursor pointer'>
                                    Select Guide
                                </div>
                            </div>
                            {/*  sizes box start*/}
                            <div className='grid grid-cols-3 gap-2'>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 7
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 7.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 8
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 8.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 9
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 9.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 10
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium  cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 11
                                </div>
                            </div>
                            {/*  sizes box end*/}

                            {/* error message start*/}
                            <div className='text-red-600 mt-1'>
                                Size selection is required
                            </div>
                            {/* error message end*/}

                        </div>
                        {/* Product sizes end*/}

                        {/*  cart button start*/}
                        <button className='w-full py-4 rounded-full bg-[#fc343a] text-white text-lg font-medium transition-transform active:scale-95 mb-3'>
                            Add to Cart
                        </button>
                        {/*  cart button end*/}

                        {/*  wishlist button start*/}
                        <button className='w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10'>
                            Add to Wishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        {/*  wishlist button end*/}

                        <div>
                            <div className='text-md mb-5'>
                            Feel unbeatable from the tee box to the final put in design that's pure early MJ: speed class and laden with true early '90s touches like visable Air and a transclucent rubber sole that continue ti stand the test of time.
                            </div>
                            <div className='text-md mb-5'>
                            Feel unbeatable from the tee box to the final put in design that's pure early MJ: speed class and laden with true early '90s touches like visable Air and a transclucent rubber sole that continue ti stand the test of time.
                            </div>
                        </div>
                    </div>
                    {/* right column end*/}
                </div>

                <RelatedProducts />
            </Wrapper>
        </div>
    )
}

export default ProductDetails