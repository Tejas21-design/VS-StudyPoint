import React from "react";
import Banner from "../../assets/blog2.jpg";

const BannerDetails = ({ reverse, img = Banner }) => {
  return (
    <section id="services">
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px]">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            
            {/* Text Content */}
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              }`}
            >
              <h1 className="text-2xl md:text-4xl font-bold">
                Your Calm Space to Study & Succeed
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Vedant Study Point offers a premium reading room and library in Nagpur. 
                With separate reading desks, fully cooled rooms, and all modern amenities, 
                we ensure you can focus on your goals without distractions.
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2 md:gap-3">
                  <li className="font-medium">
                    Individual reading desks for privacy and comfort
                  </li>
                  <li className="font-medium">
                    Fully cooled rooms with RO water & free Wi-Fi
                  </li>
                  <li className="font-medium">
                    Daily newspaper, parking facility & 24×7 CCTV security
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <a
                  href="tel:+918793822870"
                  className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Book Your Seat
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={reverse ? "order-1" : ""}
            >
              <img
                src={img}
                alt="Vedant Study Point Reading Room"
                className="mx-auto w-full rounded-lg shadow-lg hover:shadow-xl transition"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails;
