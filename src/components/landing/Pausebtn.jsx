"use client";
import { useState } from 'react';
import Icons from '../icons/Icons';

const Pausebtn = () => {
    return (
        <div className='w-full min-h-screen bg-white flex justify-center items-center'>
            <div className='size-20 bg-white rounded-full flex justify-center items-center shadow 
            shadow-black cursor-pointer' onClick={click}>
                <div className='size-5 flex items-center'>
                    <Icons icons={isPlay ? 'pauseSvg' : 'playSvg'} />
                </div>
            </div>
        </div>
    );
};

export default Pausebtn;
