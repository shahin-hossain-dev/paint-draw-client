import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import image1 from "../../assets/slider1.jpg";
import image2 from "../../assets/slider2.jpg";
import image3 from "../../assets/slider3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Slide } from "react-awesome-reveal";

const Banner = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={{ clickable: true }}
      //   onSwiper={(swiper) => console.log(swiper)}
      //   onSlideChange={() => console.log("slide change")}
    >
      {/* slider 1 */}
      <SwiperSlide>
        <div className="text-white relative h-full ">
          <img
            src={image1}
            className=" object-cover object-top w-full h-[400px] md:h-[550px] "
          />
          <div className="absolute top-0 left-0  lg:mt-0  h-[100%] w-[100%]  bg-gradient-to-r   from-[#00000099] to-[#00000099] ">
            <div className=" flex justify-center  text-center items-center mt-16 flex-col  h-full lg:min-h-screen px-10 md:px-16">
              <Slide>
                <button className="btn text-lg mb-4 px-5 ">Explore Now</button>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-exo mb-5">
                  Explore Artistry: Shop Paintings Now!
                </h2>
                <p>
                  Elevate your space with our curated collection of captivating
                  paintings. Find your perfect piece today
                </p>
              </Slide>
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* slider 2 */}
      <SwiperSlide>
        <div className="text-white relative h-full ">
          <img
            src={image2}
            className=" object-cover object-top w-full h-[400px] md:h-[550px] "
          />
          <div className="absolute top-0 left-0  lg:mt-0  h-[100%] w-[100%]  bg-gradient-to-r   from-[#00000099] to-[#00000099] ">
            <div className=" flex justify-center  text-center items-center mt-16 flex-col  h-full lg:min-h-screen px-10 md:px-16">
              <Slide>
                <button className="btn text-lg mb-4 px-5 ">Explore Now</button>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-exo mb-5">
                  Explore Artistry: Shop Paintings Now!
                </h2>
                <p>
                  Elevate your space with our curated collection of captivating
                  paintings. Find your perfect piece today
                </p>
              </Slide>
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* slider 3 */}
      <SwiperSlide>
        <div className="text-white relative h-full ">
          <img
            src={image3}
            className=" object-cover object-top w-full h-[400px] md:h-[550px] "
          />
          <div className="absolute top-0 left-0  lg:mt-0  h-[100%] w-[100%]  bg-gradient-to-r   from-[#00000099] to-[#00000099] ">
            <div className=" flex justify-center  text-center items-center mt-16 flex-col  h-full lg:min-h-screen px-10 md:px-16">
              <Slide>
                <button className="btn text-lg mb-4 px-5 ">Explore Now</button>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-exo mb-5">
                  Explore Artistry: Shop Paintings Now!
                </h2>
                <p>
                  Elevate your space with our curated collection of captivating
                  paintings. Find your perfect piece today
                </p>
              </Slide>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
