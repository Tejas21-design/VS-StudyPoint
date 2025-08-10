import React from "react";
import Img1 from "../../assets/blog1.jpg";
import Img2 from "../../assets/blog2.jpg";
import Img3 from "../../assets/blog3.jpg";
import Gallery1 from "../../assets/img-1.jpg";
import Gallery2 from "../../assets/img-2.jpg";
import Gallery3 from "../../assets/img-5.jpg";
import Gallery4 from "../../assets/img-13.jpg";
import Gallery5 from "../../assets/img-14.jpg";
import Gallery6 from "../../assets/img-15.jpg";
import Gallery7 from "../../assets/img-9.jpg";
import Gallery8 from "../../assets/img-12.jpg";
import "aos/dist/aos.css";

const Blogs = () => {
  return (
    <main data-aos="fade-up" data-aos-offset="200">
      <section className="container mb-10 py-8">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          
          {/* Blog Card 1 */}
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img1}
                alt="Study Tips"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              <p>Aug 1, 2025</p>
              <p className="line-clamp-1">By Vedant Team</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
                Top 5 Study Hacks for Better Memory
              </h1>
              <p className="line-clamp-2">
                Discover simple yet powerful techniques to boost your memory 
                retention and recall during exams.
              </p>
              <a
                href="https://yourbloglink.com/study-hacks"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-blue-700"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img2}
                alt="Math Mastery"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              <p>Jul 20, 2025</p>
              <p className="line-clamp-1">By Vedant Faculty</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
                Mastering Mathematics: Step-by-Step Guide
              </h1>
              <p className="line-clamp-2">
                Learn effective problem-solving strategies to improve your 
                accuracy and speed in mathematics.
              </p>
              <a
                href="https://yourbloglink.com/math-mastery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-blue-700"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img3}
                alt="Time Management"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              <p>Jul 10, 2025</p>
              <p className="line-clamp-1">By Student Mentor</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
                Time Management Tips for Students
              </h1>
              <p className="line-clamp-2">
                Practical tips to balance study, assignments, and leisure 
                without feeling stressed.
              </p>
              <a
                href="https://yourbloglink.com/time-management"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-blue-700"
              >
                Read More →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mb-10 py-8" id="gallery">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
          Photo Gallery
        </h1>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {[Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7, Gallery8].map(
            (image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="h-[200px] w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            )
          )}
        </div>
      </section>

    </main>
  );
};

export default Blogs;
