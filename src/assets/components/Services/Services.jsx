import React from 'react'
import Img2 from '../../biryani2.png'

const ServicesData = [
    {
        id: 1,
        img: Img2,
        name: 'Biryani',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, officia."
    },
    {
        id: 2,
        img: Img2,
        name: 'Chicken Curry',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, officia."
    },
    {
        id: 3,
        img: Img2,
        name: 'Cold Coffee',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, officia."
    }
];

const Services = () => {
    return (
        <>
            <div className='py-10'>
                <div className='container'>
                    <div className='text-center mb-20 max-w-[400px] mx-auto'>
                        <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Our Services</p>
                        <h1 className='text-3xl font-bold'>Services</h1>
                        <p className='text-xs text-gray-400'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vitae deserunt dignissimos obcaecati rerum quo laudantium officia reiciendis qui aliquam.
                        </p>
                    </div>
                    {/* Cards */}
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
