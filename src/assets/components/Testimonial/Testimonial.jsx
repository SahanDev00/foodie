import React from 'react'
import Slider from 'react-slick';

const testimonialData = [
    {
        id: 1,
        name: 'Luffy',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, perspiciatis.',
        img: 'https://s3-alpha.figma.com/hub/file/1257690979/186839d6-6afd-4e1d-9c56-fa077b235f67-cover.png'
    },
    {
        id: 2,
        name: 'Zoro',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, perspiciatis.',
        img: 'https://i.scdn.co/image/ab67616d0000b273b050ea18f1ea8e8d0b1b8d1f'
    },
    {
        id: 3,
        name: 'Sanji',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, perspiciatis.',
        img: 'https://i.pinimg.com/736x/f0/aa/9d/f0aa9db141b89ca7e36008c7a20302fd.jpg'
    },
    {
        id: 4,
        name: 'Boa',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, perspiciatis.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanAJrE91TjW8UN4YKaL5ntSrcY10HhXx5bjCcHGqBDg&s'
    },
];

const Testimonial = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'Linear',
        pauseOnHover: true,
        pauseOnFocus: true,
    };

    return (
        <div className='py-10'>
            <div className="container">
                <div className='text-center mb-20 max-w-[400px] mx-auto'>
                    <p className='text-md bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Testimonial</p>
                    <h1 className='text-3xl font-bold dark:text-white pb-2'>Testimonial</h1>
                    <p className='text-xs text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vitae deserunt dignissimos obcaecati rerum quo laudantium officia reiciendis qui aliquam.
                    </p>
                </div>
                <div className='grid grid-cols-1 max-w-[600px] mx-auto gap-6'>
                    <Slider {...settings}>
                        {
                            testimonialData.map(({id, name, text, img}) => {
                                return <div key={id} className='my-6'>
                                    <div className='flex flex-col justify-center items-center gap-4 text-center p-4 shadow-lg mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
                                        <img src={img} alt="" className='rounded-full block mx-auto size-12 object-cover'/>
                                        <p className='text-gray-500 text-sm'>{text}</p>
                                        <h1 className='text-xl font-bold'>{name}</h1>
                                        <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                                    </div>
                                </div>;
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
