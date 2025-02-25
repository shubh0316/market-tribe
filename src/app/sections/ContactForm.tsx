/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client";
import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import contact from "@/assets/contact.png";
import { toast } from "sonner";
import { Resend } from "resend";


function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    mobile: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, mobile } = formData;
    
    if (!name || !email || !mobile) {
      toast.error("Please fill in all required fields.");
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        toast.success("Thank you! The company will reach out to you shortly.");
        setFormData({ name: "", email: "", website: "", mobile: "", message: "" });
      } else {
        throw new Error(result.error || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong! Please try again later.");
    }
  
    setLoading(false);
  };
  

  return (
    <div id="contactUs" className="py-10 md:py-20">
      <Container>
        <div className="text-[#F7A400] font-semibold capitalize mb-2">LET&apos;S COLLABORATE!</div>
        <div className="text-[#180D51] font-bold text-2xl md:text-4xl mb-6">
          Whether you have a challenge to solve, a bold idea to explore, or a project to launch, we&apos;re here to make it happen.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Image src={contact} alt="Contact Us" className="w-full h-auto" />
          </div>
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg border">
            <div className="text-[#180D51] font-medium text-lg mb-4">Reach out and let&apos;s shape the future of your business together.</div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full p-2 bg-[#F9F8FF] rounded-xl" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full p-2 bg-[#F9F8FF] rounded-xl" placeholder="Enter your email" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company Website</label>
                  <input type="text" name="website" value={formData.website} onChange={handleChange} className="mt-1 block w-full p-2 bg-[#F9F8FF] rounded-xl" placeholder="Enter company website" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mobile Number <span className="text-red-500">*</span></label>
                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required className="mt-1 block w-full p-2 bg-[#F9F8FF] rounded-xl" placeholder="Enter mobile number" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">How can we help your Brand?</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className="mt-1 block w-full p-2 bg-[#F9F8FF] rounded-xl" rows={4} placeholder="Tell us about your needs"></textarea>
              </div>
              <button type="submit" className="bg-[#180D51] text-white px-6 py-2 rounded-xl font-semibold hover:bg-[#180D52] disabled:opacity-50" disabled={loading}>
                {loading ? "Submitting..." : "Book a FREE Consultation"}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactForm;
