import React, { useState } from "react";
import Banner from "../../assets/undraw_real_time_sync_re_nky7.svg";
import ContactForm from "../ContactForm";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  // Scroll to services section
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle form field change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send to WhatsApp
  const handleSendWhatsApp = () => {
    const { name, phone, message } = formData;
    if (!name || !phone) {
      alert("Please fill all required fields!");
      return;
    }
    const whatsappNumber = "918767607248"; // Replace with your number (with country code)
    const text = `Hello, my name is ${name}.\nPhone: ${phone}\nMessage: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setShowForm(false);
  };

  return (
    <main className="bg-gradient-to-r from-violet-950 to-violet-900 pt-20 dark:bg-violet-950">
      <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] ">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
          >
            <h1 className=" text-4xl ">Your Calm Space to Study & Succeed</h1>
            <p>Fully equipped reading rooms and library in Nagpur with modern amenities for your comfort and focus.</p>
            <div className="space-x-4">
              <button
                onClick={handleScrollToServices}
                className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80"
              >
                Scroll to services
              </button>
              <button
                onClick={() => setShowForm(true)}
                className="rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300"
              >
                Opens call/WhatsApp link
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <img src={Banner} alt="No image" className="hover:drop-shadow-md" />
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

export default Hero;
