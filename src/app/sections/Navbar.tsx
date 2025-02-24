"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logo from '@/assets/logo.png';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Container from './Container';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white  relative z-50">
      <Container>
        <div className="flex justify-between items-center p-4">
          {/* Logo */}
          <div>
            <Image src={logo} alt="logo" className='w-36' />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 ">
            <Link href="#aboutUs" className="text-md text-[#002147] hover:text-[#2E46C4]">About Us</Link>
            <Link href="#ourServices" className="text-md text-[#002147] hover:text-[#2E46C4]">What We Do</Link>
            <Link href="#ourProcess" className="text-md text-[#002147] hover:text-[#2E46C4]">Our Process</Link>
          </div>
          
          {/* Button */}
          <div className="hidden md:block">
            <Link href={"#contactUs"}> 
            <Button  className='border hover:bg-[#2E46C4] rounded-xl hover:text-white  px-6 py-4 text-white text-md font-semibold bg-[#2E46C4]'>Let&apos;s Talk</Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </Container>
      
      {/* Mobile Menu with Animation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute w-full bg-white  overflow-hidden md:hidden flex flex-col  space-y-4 py-4 px-8"
      >
          <Link href="#aboutUs" className="text-md text-[#002147] items-start hover:text-[#2E46C4]">About Us</Link>
          <Link href="#ourServices" className="text-md text-[#002147] items-start  hover:text-[#2E46C4]">What We Do</Link>
          <Link href="#ourProcess" className="text-md text-[#002147] items-start hover:text-[#2E46C4]">Our Process</Link>
          <Link href="#contactUs" className="flex justify-center"> 
    <Button className='text-white w-full px-6 py-3 rounded-xl text-md bg-[#2E46C4] max-w-md mx-auto'>Let&apos;s Talk</Button>
</Link>

      </motion.div>
    </nav>
  );
}

export default Navbar;