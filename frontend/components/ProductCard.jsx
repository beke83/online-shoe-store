import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ProductCard = () => {
    const [deducted, setDeducted] = useState();

    useEffect(() => {
        calculatePercentageOff();
    }, [])

    const calculatePercentageOff = () => {
        const percentDeducted = (20 / 100) * 100;
        const finalPrice = 100 - percentDeducted;
        setDeducted(finalPrice.toFixed(2));
    }

    return (
        <Link href="/product/1"
        className='transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer'
        >
            <img className='w-full' src="/product-1.webp" alt="Product image" />
            <div className="p-4 text-black/[0.9]">
                <h2 className='text-lg font-medium'>Product Name</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">${deducted}</p>
                    <p className='text-base font-medium line-through'>
                        $100.00
                    </p>
                    <p className='ml-auto text-base font-medium text-green-500'>
                        20% off
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard