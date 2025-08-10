import React, { useState } from "react";
import BannerImg from "../../assets/marketing-speaker.png";
import VsPointVideo from "../../assets/vsPoint_test.mp4";
import ContactForm from "../ContactForm";

const Banner = () => {

  const [showForm, setShowForm] = useState(false);

  return (
    <main className="bg-primary">
      <section data-aos="fade-up" className="container py-8 md:py-12" id="banner">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3 md:gap-8">
          {/* Text Section */}
          <div className="order-2 flex flex-col items-center gap-4 text-center text-white md:col-span-2 md:items-start md:text-left">
            <h1 className="text-3xl font-bold">
              Vedant Study Point – Learn. Practice. Achieve.
            </h1>
            <p>
              Join us at Vedant Study Point, where learning meets excellence.
              We provide quality study material, expert guidance, and regular
              practice sessions to help you excel in your academic journey.
            </p>
            <button onClick={() => setShowForm(true)} className="rounded-md bg-white px-4 py-2 text-sm text-black transition-colors duration-300 hover:bg-white/90">
              Book Your Seat
            </button>
          </div>

          {/* Image Section */}
          <div className="order-1">
            <video
              src={VsPointVideo}
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg shadow-lg object-cover max-h-[350px] max-w-[450px]"
            />
          </div>
        </div>
      </section>
      {/* Popup Form */}
      {showForm && (
        <ContactForm
          onClose={() => setShowForm(false)}
          whatsappNumber="918767607248" // Your number here
        />
      )}
    </main>
  );
};

export default Banner;
