import React from "react";
import Gallery1 from "../../assets/img-1.jpg";
import Gallery2 from "../../assets/img-2.jpg";
import Gallery3 from "../../assets/img-5.jpg";
import Gallery4 from "../../assets/img-13.jpg";
import Gallery5 from "../../assets/img-14.jpg";
import Gallery6 from "../../assets/img-15.jpg";
import Gallery7 from "../../assets/img-9.jpg";
import Gallery8 from "../../assets/img-12.jpg";
import devImage from "../../assets/dev.jpg";
import vedImage from "../../assets/vedant.jpg";
import maithImage from "../../assets/maithili.jpg";
import nanImage from "../../assets/nanImage.jpg";  
import tejImage from "../../assets/tejas.jpg";
import "aos/dist/aos.css";

const Testimonials = () => {
  return (
    <main data-aos="fade-up" data-aos-offset="200">
      
      {/* Testimonials Section */}
<section className="container mb-10 py-8">
  <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
    What Our Students Say...
  </h1>

  <div className="flex gap-6 overflow-x-auto scrollbar-hide">
    {/* Testimonial 1 */}
    <div className="min-w-[300px] max-w-[350px] flex-shrink-0 rounded-xl bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950">
      <p className="text-slate-600 italic">
        "Best place with the best amenities. Really a great place to study."
      </p>
      <div className="mt-4 flex items-center gap-3">
        <img
          src={tejImage}
          alt="Student"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold">Tejas Joshi</h3>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="min-w-[300px] max-w-[350px] flex-shrink-0 rounded-xl bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950">
      <p className="text-slate-600 italic">
        "Affordable reading room in the locality.Best ambience.Silent atmosphere with full amenities.Best in class services"
      </p>
      <div className="mt-4 flex items-center gap-3">
        <img
          src={maithImage}
          alt="Student"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold">Maithili Agte</h3>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="min-w-[300px] max-w-[350px] flex-shrink-0 rounded-xl bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950">
      <p className="text-slate-600 italic">
        "The owner is too calm. Nice studying environment. No disturbance. Best place for study."
      </p>
      <div className="mt-4 flex items-center gap-3">
        <img
          src={devImage}
          alt="Student"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold">Devashree Chaturkar</h3>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </div>
    {/* Testimonial 4 */}
    <div className="min-w-[300px] max-w-[350px] flex-shrink-0 rounded-xl bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950">
      <p className="text-slate-600 italic">
        "Peaceful environment and owners behavior is also good... Best place for study"
      </p>
      <div className="mt-4 flex items-center gap-3">
        <img
          src={vedImage}
          alt="Student"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold">Vedant Samgir</h3>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </div>
    {/* Testimonial 5 */}
    <div className="min-w-[300px] max-w-[350px] flex-shrink-0 rounded-xl bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950">
      <p className="text-slate-600 italic">
        "Best reading room in the locality. It is well organized and has positive and peaceful environment for exam preparation."
      </p>
      <div className="mt-4 flex items-center gap-3">
        <img
          src={nanImage}
          alt="Student"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold">Nandita Dhamne</h3>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
        </div>
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

export default Testimonials;
