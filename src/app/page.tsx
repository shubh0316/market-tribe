import HeroSection from "./sections/HeroSection";
import Navbar from "./sections/Navbar";
import EndToEndSection from "./sections/EndToEndSection";
import OurService from "./sections/OurService";
import OurProcess from "./sections/OurProcess";
import OurBrands from "./sections/OurBrands";
import ContactForm from "./sections/ContactForm";
import Footer from "./sections/Footer";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
   <>
   <Navbar />
     <HeroSection />
     <EndToEndSection />
     <OurService />
     <OurProcess />
     <OurBrands />
     <ContactForm />
     <Footer />
   </>
  );
}
