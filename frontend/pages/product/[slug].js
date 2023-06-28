import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';
import Wrapper from '@/components/Wrapper';
import { fetchDataFromApi } from '@/utils/api';
import React, { useState } from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import CurrencyFormat from 'react-currency-format';
import { getDiscountedPricePercentage } from '@/utils/helper';
import ReactMarkdown from 'react-markdown';

const ProductDetails = ({ product, products }) => {
    const [selectedSize, setSelectedSize] = useState();
    const [showError, setShowError] = useState(true)
    
    const p = product?.data?.[0]?.attributes;

    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                    {/* left column */}
                    <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
                        <ProductDetailsCarousel images={p.images.data} />
                    </div>
                    {/* left column end*/}


                    {/* right column start*/}
                    <div className='flex-[1] py-3'>
                        <div className='text-[34px] font-semibold mb-2 text-[#fc343a]'>
                            {p.name}
                        </div>
                        <div className='text-lg font-semibold mb-5'>
                            {p.subtitle}
                        </div>
                        <div className="flex items-center text-black/[0.5]">
                            <p className="mr-2 text-lg font-semibold">
                                <CurrencyFormat value={p.price} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                                {/* {p.price} */}
                            </p>
                            {p.original_price && (
                                <>
                                    <p className='text-base font-medium line-through'>
                                        ₦ {p.original_price}
                                    </p>

                                    <p className='ml-auto text-base font-medium text-green-500'>
                                        {getDiscountedPricePercentage(p.original_price, p.price)}
                                        % off
                                    </p>
                                </>
                            )}
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

                            <div id="sizesGrid" className='grid grid-cols-3 gap-2'>
                                {
                                    p.size.data.map((item, i) => (
                                        <div key={i}
                                            className={`border rounded-md text-center py-3 font-medium 
                                        ${item.enabled ?
                                                    'hover:border-black cursor-pointer' :
                                                    'cursor-not-allowed bg-black/[0.1] opacity-50'}
                                        ${selectedSize === item.size ? "border-black" : ""}`}
                                            onClick={() => {
                                                setSelectedSize(item.size)
                                                setShowError(false)
                                            }}
                                        >
                                            {item.size}
                                        </div>
                                    ))
                                }
                            </div>
                            {/*  sizes box end*/}

                            {/* showError message start*/}
                            {showError && (<div className='text-red-600 mt-1'>
                                Size selection is required
                            </div>)}
                            {/* showError message end*/}

                        </div>
                        {/* Product sizes end*/}

                        {/*  cart button start*/}
                        <button
                            className='w-full py-4 rounded-full bg-[#fc343a] text-white text-lg font-medium transition-transform active:scale-95 mb-3'
                            onClick={() => {
                                if (!selectedSize) {
                                    setShowError(true)
                                    document.getElementById("sizesGrid").scrollIntoView({
                                        block: "center",
                                        behaviour: "smooth"
                                    })
                                }
                            }}
                        >
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
                            <div className='markdown text-md mb-5'>
                                <ReactMarkdown>
                                    {p.description}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                    {/* right column end*/}
                </div>

                <RelatedProducts products={products} />
            </Wrapper>
        </div>
    )
}

export default ProductDetails;

export async function getStaticPaths() {
    //define the path for the category
    const products = await fetchDataFromApi('/api/products?populate=*');

    const paths = products.data.map((p) => ({
        params: {
            slug: p.attributes.slug
        }
    }));

    return {
        paths,
        fallback: false
    }
};

export async function getStaticProps({ params: { slug } }) {
    //fetch filtered category details
    const product = await fetchDataFromApi(`/api/products?populate=*&filters[slug][$eq]=${slug}`);

    // get products by their categories
    const products = await fetchDataFromApi(`/api/products?populate=*&[filters][slug][$ne]=${slug}`);

    console.log({ filtered: products })

    return {
        props: {
            product,
            products,
        }
    }

}