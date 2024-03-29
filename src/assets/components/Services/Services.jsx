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
            <div className='py-10 dark:bg-gray-900'>
                <div className='container '>
                    <div className='text-center mb-20 max-w-[400px] mx-auto'>
                        <p className='text-md bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Our Services</p>
                        <h1 className='text-3xl font-bold dark:text-white pb-2'>Services</h1>
                        <p className='text-xs text-gray-400'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vitae deserunt dignissimos obcaecati rerum quo laudantium officia reiciendis qui aliquam.
                        </p>
                    </div>
                    {/* Cards */}
                    <div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                            {ServicesData.map(({id, img, name, description}) => {
                                return (
                                    <div key={id} className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary  duration-300 shadow-xl py-5'>
                                        <div className='h-[100px]'>
                                            <img src={img} alt="" className='max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300' />
                                        </div>
                                        <div className='p-4 text-center'>
                                            <h1 className='text-xl font-bold dark:text-white'>{name}</h1>
                                            <p className='text-gray-500  duration-300 text-sm line-clamp-2'>{description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
