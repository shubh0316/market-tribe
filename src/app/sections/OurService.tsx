/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client";
import React, { useState } from "react";
import Container from "./Container";
import image1 from "@/assets/image1.png";
import Image from "next/image";
import image2 from "@/assets/image2.png";
function OurService() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div id="ourServices">
      <Container>
        <div className="mt-10 md:mt-20">
          <div className="flex flex-col space-y-4 md:space-y-6 items-start">
            <div className="text-[#F7A400] font-semibold capitalize">
              OUR SERVICES
            </div>
            <div className="text-[#180D51] font-bold text-2xl md:text-4xl">
              How We Help Brands Succeed
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
              {/* First Card */}
              <div
                className="p-4 md:p-6 rounded-2xl flex flex-col space-y-3 md:space-y-4 transition-all duration-500 relative bg-[#D2E7FA] hover:shadow-lg overflow-hidden md:hover:z-10"
                onMouseEnter={() => window.innerWidth >= 768 && setHoveredCard(0)}
                onMouseLeave={() => window.innerWidth >= 768 && setHoveredCard(null)}
                style={{ 
                  height: window.innerWidth < 768 ? "545px" : hoveredCard === 0 ? "auto" : "510px",
                  zIndex: hoveredCard === 0 ? "10" : "1"
                }}
              >
                <div className="text-[#180D51] font-semibold text-xl md:text-2xl text-start">
                  Create Awareness
                </div>
                <p className="text-sm md:text-lg text-[#180D51] text-start font-normal">
                  Create compelling campaigns that grab attention, amplify your brand presence, and drive awareness in a crowded market.
                </p>
                <div className="relative flex flex-col items-start gap-2 transition-all duration-500">
                  <div className="block md:hidden mt-2">
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                      {["Communication", "Brand Identity & Positioning", "SEO", "Brand Development", "New Product launch", "Go-to-Market Strategy", "Brand Architecture & Guidelines", "Campaign Planning & Execution", "Communication & Content Strategy", "Digital & Social Media strategy"].map((point, i) => (
                        <div key={i} className="text-sm text-[#180D51] font-medium relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-xl">
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`hidden md:block overflow-hidden transition-all duration-500 ${hoveredCard === 0 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="grid grid-cols-3 gap-x-2 gap-y-1">
                      {["Communication", "Brand Identity & Positioning", "SEO", "Brand Development", "New Product launch", "Go-to-Market Strategy", "Brand Architecture & Guidelines", "Campaign Planning & Execution", "Communication & Content Strategy", "Digital & Social Media strategy"].map((point, i) => (
                        <div key={i} className="text-md text-[#180D51] font-medium relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-2xl before:font-bold">
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Image src={image1} alt="marketing tribe" className="w-full  mt-6 h-auto" />
                  </div>
                </div>
              </div>
              {/* Second Card */}
              <div
                className="p-4 md:p-6 rounded-2xl flex flex-col space-y-3 md:space-y-4 transition-all duration-500 relative bg-[#D2E7FA] hover:shadow-lg overflow-hidden md:hover:z-10"
                onMouseEnter={() => window.innerWidth >= 768 && setHoveredCard(1)}
                onMouseLeave={() => window.innerWidth >= 768 && setHoveredCard(null)}
                style={{ 
                  height: hoveredCard === 1 ? "auto" : "510px",
                  zIndex: hoveredCard === 1 ? "10" : "1"
                }}
              >
                <div className="text-[#180D51] font-semibold text-xl md:text-2xl text-start">
                  Build Trust to drive revenue
                </div>
                <p className="text-sm md:text-lg text-[#180D51] text-start font-normal">
                  Turn curiosity into commitment through personalized engagement strategies like lead nurturing, webinars, and tailored campaigns.
                </p>
                <div className="relative flex flex-col items-start gap-2 transition-all duration-500">
                  <div className="block md:hidden mt-4">
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                      {["Lead Generation", "Targeted Engagement Campaigns", "Direct Marketing", "Webinars & Workshops", "Sales Enablement"].map((point, i) => (
                        <div key={i} className="text-sm text-[#180D51] font-medium relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-2xl before:font-bold">
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`hidden md:block overflow-hidden transition-all duration-500 ${hoveredCard === 1 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                      {["Lead Generation", "Targeted Engagement Campaigns", "Direct Marketing", "Webinars & Workshops", "Sales Enablement"].map((point, i) => (
                        <div key={i} className="text-md text-[#180D51] font-medium relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-2xl before:font-bold">
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Image src={image2} alt="marketing tribe" className="w-full mt-6 h-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default OurService;
