import React from 'react';
import Container from './Container';
import Image from 'next/image';
import footer_logo from '@/assets/footer_logo.png';
import email from '@/assets/email.png';
import linkedin from "@/assets/linkedin.png";
import Link from 'next/link';
function Footer() {
  return (
    <div className="py-10 bg-[#F5EDDC] flex justify-center">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-left">
          {/* Big Footer Logo */}
          <div className="flex justify-center md:justify-start">
            <Image 
              src={footer_logo} 
              className="w-[350px] md:w-[600px] lg:w-[1000px]" 
              alt="Footer Logo" 
            />
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col space-y-4 items-start mt-6 md:mt-0">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="flex space-x-4">
              <Link href={"https://www.linkedin.com/in/chawlacharu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"} target='__blank'> 
              <Image src={linkedin} width={24} height={24} alt="Linkedin Icon" />
              </Link>
              <a href="mailto:hello@themarketingtribe.co">
  <Image src={email} width={24} height={24} alt="Email Icon" />
</a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-gray-400 my-6 md:my-10"></div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-700">
          <p className="mb-3 md:mb-0">© 2016-2024 The Marketing Tribe. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            <p className="hover:underline">Security</p>
            <p className="hover:underline">Privacy & Cookie Policy</p>
            <p className="hover:underline">Terms of Service</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
