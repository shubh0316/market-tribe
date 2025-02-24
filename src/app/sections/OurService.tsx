/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client";
import React, { useState } from "react";
import Container from "./Container";
import image1 from "@/assets/image1.png";
import Image from "next/image";
import image2 from "@/assets/image2.png";
import { ChevronDown, ChevronUp } from 'lucide-react';

const services = [
  {
    title: "Create Awareness",
    description:
      "Create compelling campaigns that grab attention, amplify your brand presence, and drive awareness in a crowded market.",
    points: [
      "Communication",
      "Brand Identity & Positioning",
      "SEO",
      "Brand Development",
      "New Product launch",
      "Go-to-Market Strategy",
      "Brand Architecture & Guidelines",
      "Campaign Planning & Execution",
      "Communication & Content Strategy",
      "Digital & Social Media strategy",
    ],
    image: image1,
  },
  {
    title: "Build Trust to drive revenue",
    description:
      "Turn curiosity into commitment through personalized engagement strategies like lead nurturing, webinars, and tailored campaigns.",
    points: [
      "Lead Generation",
      "Targeted Engagement Campaigns",
      "Direct Marketing",
      "Webinars & Workshops",
      "Sales Enablement",
    ],
    image: image2,
  },
];

function OurService() {
  return (
    <div id="ourServices">
      <Container>
        <div className="mt-10 md:mt-20 hidden md:block">
          <DesktopView />
        </div>
        <div className="mt-10 md:mt-20 block md:hidden">
          <MobileView />
        </div>
      </Container>
    </div>
  );
}

const DesktopView = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <div className="flex flex-col space-y-4 md:space-y-6 items-start">
      <div className="text-[#F7A400] font-semibold capitalize">OUR SERVICES</div>
      <div className="text-[#180D51] font-bold text-2xl md:text-4xl">
        How We Help Brands Succeed
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-4 md:p-6 rounded-2xl flex flex-col space-y-3 md:space-y-4 transition-all duration-500 relative bg-[#D2E7FA] hover:shadow-lg overflow-hidden md:hover:z-10"
            onMouseEnter={() => window.innerWidth >= 768 && setHoveredCard(index)}
            onMouseLeave={() => window.innerWidth >= 768 && setHoveredCard(null)}
            style={{
              height: hoveredCard === index ? "auto" : "510px",
              zIndex: hoveredCard === index ? "10" : "1",
            }}
          >
            <div className="text-[#180D51] font-semibold text-xl md:text-2xl text-start">
              {service.title}
            </div>
            <p className="text-sm md:text-lg text-[#180D51] text-start font-normal">
              {service.description}
            </p>
            <div>
              <Image src={service.image} alt="marketing tribe" className="w-full mt-6 h-auto" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const MobileView = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  
  return (
    <div className="flex flex-col space-y-4 items-start">
      <div className="text-[#F7A400] font-semibold capitalize">OUR SERVICES</div>
      <div className="text-[#180D51] font-bold text-2xl">How We Help Brands Succeed</div>
      <div className="grid grid-cols-1 gap-4 w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-4 rounded-2xl flex flex-col space-y-3 bg-[#D2E7FA]"
          >
            <div className="text-[#180D51] font-semibold text-xl text-start">
              {service.title}
            </div>
            <p className="text-sm text-[#180D51] text-start font-normal">
              {service.description}
            </p>
            <button
              className="mt-2 text-[#002147] text-start text-sm font-medium flex items-center gap-1"
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              {expandedCard === index ? (
                <>
                  View Less
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  View More
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
            <div
              className={`mt-2 grid grid-cols-2 gap-x-2 gap-y-1 overflow-hidden transition-all duration-[700ms] ease-in-out ${
                expandedCard === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {service.points.map((point, i) => (
                <div
                  key={i}
                  className="text-sm text-[#180D51] font-medium relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-xl"
                >
                  {point}
                </div>
              ))}
            </div>
            <div>
              <Image src={service.image} alt="marketing tribe" className="w-full mt-4 h-auto" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;