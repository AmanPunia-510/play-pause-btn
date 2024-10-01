import { COL_FIVE_DATA, ZIP_DATA } from '@/utils/Helper'
import Image from 'next/image'
import React from 'react'
import gradientLine from '../../public/assets/images/png/gradient-line.png'
import Icons from './icons/Icons'

const Sreategic = () => {
    return (
        <div className='my-[120px] relative z-10'>
            <span className='sticky w-min z-10 top-40 block left-1/2 h-min -translate-x-1/2'>
                <Icons icons='zipFile' />
            </span>
            <div className="container xl:max-w-[1140px] mx-auto">
                <div className='flex max-lg:flex-wrap gap-6 h-[1882px]'>
                    <div className='w-7/12 flex justify-between mr-9 relative'>

                        <div className='max-w-[481px] text-white sticky top-6 h-fit'>
                            {COL_FIVE_DATA.map((obj, index) => (
                                <div key={index}>
                                    <div className='ff-aeo font-bold leading-133 text-5xl'>
                                        {obj.mainHeading}
                                    </div>
                                    <p className='ff-aeo leading-170 font-normal mt-6'>{obj.paragraph}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='w-5/12'>
                        <div className='max-w-[418px]'>
                            {ZIP_DATA.map((obj, index) => (
                                <div key={index} className={` ${index === 0 ? "pt-[352px]" : "pt-[120px]"}`}>
                                    <div className='flex items-center gap-[10px]'>
                                        <div >{obj.firstImage}</div>
                                        <div className='ff-aeo font-bold text-custom-xl text-white leading-130'>{obj.Heading}</div>
                                        <div>{obj.blogArrow}</div>
                                    </div>
                                    <p className='font-normal text-lg leading-170 text-white pt-[18px]'>{obj.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Image className='absolute h-full  top-0 left-1/2 -translate-x-1/2' src={gradientLine} width={100} height={1985} />
           
        </div>
    )
}

export default Sreategic