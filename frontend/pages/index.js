import { useEffect, useState } from "react";
import CategoryCard from "@/components/CategoryCard";
import Features from "@/components/Features";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import { fetchDataFromApi } from "@/utils/api";

export default function Home({products}) {
    // const [modal, setModal] = useState(false)
    // console.log(products)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setModal(true)
    //     }, 7000)
    // }, );

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <main>
            <HeroBanner />
            {/* {modal && (
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-60 transition-opacity"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <img
                                    src="/modal2.png"
                                    className="w-full h-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )} */}

            <Wrapper>
                <Features />

                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] font-semibold leading-tight">Shop by Categories</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                </div>
                {/* heading and paragraph start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">Best Selling Products</div>
                    <div className="text-md md:text-xl">
                        A lightweight Nike ZoomX midsole is combined with increased stavk heights to help provide cushioning during extended stretces of running
                    </div>
                </div>
                {/* heading and paragraph end */}

                {/* product grid start */}
                {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0" */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 md:px-0 my-14"
                >
                    {products?.data?.map((product) => (
                        <ProductCard key={product.id} data={product}/>
                    ))}
                        
                        {/* <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard /> */}
                </div>
                {/* <div className="my-14"
                >
                    <Carousel
                        autoPlay={true}
                        responsive={responsive}
                        containerClass='-mx-[10px]'
                        itemClass='px-[10px]'
                    >
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </Carousel>
                </div> */}

                {/* product grid end */}
            </Wrapper>
        </main >
    );
}

export async function getStaticProps() {
    const products = await fetchDataFromApi('/api/products?populate=*');

    return {
        props: { products },
    }
}
