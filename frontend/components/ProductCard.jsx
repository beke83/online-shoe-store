import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import CurrencyFormat from 'react-currency-format';
import { getDiscountedPricePercentage } from '@/utils/helper';

const ProductCard = ({ data: { attributes: p, id } }) => {

    // useEffect(() => {
    //     calculatePercentageOff();
    // }, [])

    // const calculatePercentageOff = () => {
    //     const percentDeducted = (20 / 100) * 100;
    //     const finalPrice = 100 - percentDeducted;
    //     setDeducted(finalPrice.toFixed(2));
    // }

    return (
        <Link href={`/product/${p.slug}`}
            className='transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer'
        >
            <Image
                width={500}
                height={500}
                src={p.thumbnail.data.attributes.url}
                alt={p.name}
            />
            <div className="p-4 text-black/[0.9]">
                <h2 className='text-lg font-medium'>{p.name}</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        <CurrencyFormat value={p.price} displayType={'text'} thousandSeparator={true} prefix={'₦'}/>
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
            </div>
        </Link>
    )
}

export default ProductCard