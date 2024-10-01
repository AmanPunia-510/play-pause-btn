"use client";
import Marquee from 'react-marquee-slider';
import ITEMS from '@/utils/Helper';
import Image from 'next/image';

const SliderTwo = () => {
    return (
        <div className='max-w-[1920px] mx-auto min-h-screen flex items-center'>
            <div className=''>
                <Marquee velocity={50}>
                    {ITEMS.map((obj, index) => (
                        <div key={index} className="mx-3">
                            <Image src={obj.Image} width={200} height={60} alt="image" />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>    );
};

export default SliderTwo;