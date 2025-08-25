import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="rounded-t-3xl bg-gradient-to-r from-violet-950 to-violet-900">
      <section className="mx-auto max-w-[1200px] text-white">
        <div className=" grid py-5 md:grid-cols-3">
          <div className=" px-4 py-8 ">
            <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
              <a href="/#home">
                Vedant Study <span></span>
                <span className="inline-block font-bold text-primary">Point</span>
              </a>
            </h1>
            <p>
              Your calm place to succeed in your career and life.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>
                <a
                    href="https://maps.app.goo.gl/tkMhLqTeDXg3UCov5?g_st=aw"
                    className="transition-all duration-300 hover:translate-x-[2px]"
                  >
                  27, Rameshwari Rd, Kashi Nagar, Bhagwan Nagar, Nagpur, Maharashtra 440027
                </a>
              </p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <FaMobileAlt />
              <p>+91 8767607248</p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <FaMobileAlt />
              <p>+91 8793822870</p>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 ">
            {/* Important Links */}
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold">Important Links</h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="/"
                    className="transition-all duration-300 hover:translate-x-[2px]"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="transition-all duration-300 hover:translate-x-[2px]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="transition-all duration-300 hover:translate-x-[2px]"
                  >
                    Services
                  </a>
                </li>
                
              </ul>
            </div>

            {/* Links */}
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold">Links</h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    // href="/privacy-policy"
                    className="transition-all duration-300 hover:translate-x-[2px]"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold">Social Links</h1>
              <div className="flex flex-col gap-3">
                
                <div className="mt-6 flex items-center gap-3">
                  {/* <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="duration-200 hover:scale-105"
                  >
                    <FaInstagram className="text-3xl" />
                  </a> */}
                  <a
                    href="https://www.facebook.com/share/15tVkKLEkv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="duration-200 hover:scale-105"
                  >
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a
                    href="https://wa.me/918767607248"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="duration-200 hover:scale-105"
                  >
                    <FaWhatsapp className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t-2 border-gray-300/50 py-6 text-center">
          © {new Date().getFullYear()} Vedant Study Point. All rights reserved.
        </div>
      </section>
    </div>
  );
};

export default Footer;
