/* eslint-disable */
//@ts-nocheck
"use client"
import React, { useEffect, useRef } from "react";
import Container from "./Container";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.png";
import img3 from "@/assets/img3.png";
import img4 from "@/assets/img4.png";
import img5 from "@/assets/img5.png";
import img6 from "@/assets/img6.png";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  { image: img1, title: "Discovery & Insight", description: "Competitor and audience analysis to uncover growth opportunities.", bgColor: "bg-[#F5EDDC]" },
  { image: img2, title: "Strategic Storytelling", description: "Crafting narratives that resonate and engage.", bgColor: "bg-[#F5EDDC]" },
  { image: img3, title: "Tailored Strategy Development", description: "Custom strategies aligned with your unique goals.", bgColor: "bg-[#F5EDDC]" },
  { image: img4, title: "Impactful Execution", description: "Executing strategies with precision and measurable results.", bgColor: "bg-[#F5EDDC]" },
  { image: img5, title: "Continuous Optimization", description: "Refining approaches to ensure ongoing success.", bgColor: "bg-[#F5EDDC]" },
  { image: img6, title: "Partnership & Growth", description: "Building collaborations to scale your business.", bgColor: "bg-[#F5EDDC]" },
];

function OurProcess() {
  const cardRefs = useRef([]);
  
  useEffect(() => {
    if (!cardRefs.current) return; // Ensure refs exist
  
    cardRefs.current
      .filter((card) => card) // Remove null/undefined refs
      .forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.9, y: 50 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
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
    <div id="ourProcess" className="py-10 md:py-20">
      <Container>
        <div className="mt-10 md:mt-20">
          <div className="flex flex-col space-y-4 md:space-y-6 items-start">
            <div className="text-[#F7A400] font-semibold capitalize">OUR PROCESS</div>
            <div className="text-[#180D51] font-bold text-2xl md:text-4xl">
              From Insight to Impact: The Process We Follow for Achieving Results
            </div>
          </div>
          <div className="grid grid-cols-1 rounded-xl sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 md:mt-10">
          {processSteps.map((step, index) => (
  <div
    key={index}
    ref={(el) => {
      if (el) cardRefs.current[index] = el;
    }}
    className={`p-6 shadow-lg rounded-lg flex flex-col items-start ${step.bgColor}`}
  >
    <Image src={step.image} alt={step.title} width={480} height={80} />
    <h3 className="mt-4 text-2xl font-semibold text-[#180D51] text-start">
      {step.title}
    </h3>
    <p className="mt-2 text-md text-gray-600">{step.description}</p>
  </div>
))}

          </div>
        </div>
      </Container>
    </div>
  );
}

export default OurProcess;
