/* eslint-disable */
//@ts-nocheck
"use client"
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";
import logo3 from "@/assets/logo3.png";
import logo4 from "@/assets/logo4.png";
import logo5 from "@/assets/logo5.png";
import logo6 from "@/assets/logo6.png";
import logo7 from "@/assets/logo7.png";
import logo8 from "@/assets/logo8.png";
import Image from 'next/image';
import Container from './Container';

gsap.registerPlugin(ScrollTrigger);

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

function OurBrands() {
  const logoRefs = useRef([]);

  useEffect(() => {
    logoRefs.current.forEach((logo, index) => {
      gsap.fromTo(
        logo,
        { opacity: 0, scale: 0.9, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: logo,
            start: "top 90%",
            end: "top 50%",
            scrub: 1,
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div className='mt-10'>
      <div className='bg-[#F5EDDC] p-6 text-center'>
        <Container> 
        <div className='text-[#F7A400] text-start font-semibold capitalize text-lg mb-4'>
          BRANDS WE&apos;VE WORKED WITH
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 justify-items-center'>
        {logos.map((logo, index) => (
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
  <Image 
    key={index} 
    ref={(el) => {
      if (el) logoRefs.current[index] = el;
    }}
    src={logo} 
    alt={`Brand ${index + 1}`} 
    className='w-48 h-auto' 
  />
))}

        </div>
        </Container>
      </div>
    </div>
  );
}

export default OurBrands;
