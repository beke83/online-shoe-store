import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const CategoryCard = () => {
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
        className='transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer rounded-md'
        >
            <img className='w-full' src="/men-category.jpeg" alt="Product image" />
            <div className="p-4 text-black/[0.9]">
                <h2 className='text-lg text-center font-bold uppercase'>Category Name</h2>
            </div>
        </Link>
    )
}

export default CategoryCard