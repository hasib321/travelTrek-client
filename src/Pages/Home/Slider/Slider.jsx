import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./Slider.css";
const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url('/public/img1.jpg')] bg-cover bg-center min-h-[95vh] ">
            <div className="min-w-full bg-opacity-30 bg-black min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h4 className="font-barlow text-white tracking-widest">
                  Discovery Trails: Your Pathway to Adventure
                </h4>
                <h1 className="font-poppins text-8xl font-bold text-white">
                  Embark on Journeys <br />
                  <span className="text-7xl">
                    Beyond <span className="text-stroke">Boundaries</span>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/public/img2.jpg')] bg-cover bg-center min-h-[95vh] ">
            <div className="min-w-full bg-opacity-30 bg-black min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h4 className="font-barlow text-white tracking-widest">
                  Wayfarer's Guidebook: Navigate New Realms
                </h4>
                <h1 className="font-poppins text-8xl font-bold text-white">
                  Discover Untold Stories <br />
                  <span className="text-7xl">
                    Wherever You <span className="text-stroke">Roam</span>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/public/img3.jpg')] bg-cover bg-center min-h-[95vh] ">
            <div className="min-w-full bg-opacity-30 bg-black min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h4 className="font-barlow text-white tracking-widest">
                  VentureVista: Your Expedition Awaits
                </h4>
                <h1 className="font-poppins text-8xl font-bold text-white">
                  Explore the World's Rich
                  <br />
                  <span className="text-7xl">
                    Tapestry of <span className="text-stroke">Wonders</span>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/public/img4.jpg')] bg-cover bg-center min-h-[95vh] ">
            <div className="min-w-full bg-opacity-30 bg-black min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h4 className="font-barlow text-white tracking-widest">
                  JourneyJunction: Map Infinite Exploration
                </h4>
                <h1 className="font-poppins text-8xl font-bold text-white">
                  Chart Your Own Course <br />
                  <span className="text-7xl">
                    Across Scenic{" "}
                    <span className="text-stroke">Landscapes</span>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
