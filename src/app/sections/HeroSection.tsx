import React from 'react';
import Image from 'next/image';
import right from '@/assets/right.png';
import left from '@/assets/left.png';
import mobile_right from "@/assets/mobile_right.png";
import Link from 'next/link';
function HeroSection() {
  return (
    <div className="w-full  md:p-10 bg-[#4460EF] relative">
      {/* Desktop View */}
      <div className='hidden md:flex relative'>
        <Image src={left} alt="left" width={800} priority />
        <div className='absolute right-1 -top-10 flex flex-col items-center justify-center text-white text-center'>
          <Image src={right} alt="right" width={670} className='opacity-80' />
          <div className='absolute flex left-[280px] top-[340px] flex-col items-start transform -translate-x-1/3 -translate-y-1/2'>
            <p className='text-6xl font-bold leading-[68px] text-start w-[600px]'>
              Your Marketing & <br /> Growth Partners
            </p>
            <p className='text-md text-start w-[400px]'>Transforming Strategies into Results. AI-driven insights, seamless execution, and measurable growth tailored for your business.</p>
            <Link href="#contactUs">  
            <button className='mt-4 px-6 py-2 bg-white text-[#4460EF] rounded-xl font-bold hover:bg-gray-200'>
              Start Growing Today
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className='md:hidden flex flex-col'>
        {/* Top Section - Left Image */}
        <div className='w-full'>
          <Image 
            src={left} 
            alt="left" 
            width={820}
            className='w-full h-auto'
            priority
          />
        </div>

        {/* Bottom Section - Right Image with Content */}
        <div className='relative h-[260px] w-full overflow-hidden'>
          {/* Content Overlay */}
          <div className='absolute inset-0 p-10 top-10  z-10 flex flex-col items-start justify-center  text-white'>
            <p className='text-4xl font-bold  '>
              Your Marketing & Growth Partners
            </p>
            <p className="text-sm mb-4">
  Transforming Strategies into Results.<br className="block sm:hidden" />
  AI-driven insights, seamless execution, and measurable growth tailored for your business.
</p>


            <Link href={"#contactUs"}> 
            <button className='px-5 py-2 bg-white text-[#4460EF] rounded-xl font-bold text-sm'>
              Start Growing Today
            </button>
            </Link>
          </div>

          {/* Right Image (Clipped to content height) */}
          <div className='relative mx-auto max-w-[1000px]  h-[400px] overflow-hidden'>
            <Image 
              src={mobile_right} 
              alt="right" 
           
           
              className=''
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;