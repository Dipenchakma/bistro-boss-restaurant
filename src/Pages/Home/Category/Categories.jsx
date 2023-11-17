import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../../../bistro-boss-restaurant-resources-main/assets/home/slide1.jpg";
import slider2 from "../../../../bistro-boss-restaurant-resources-main/assets/home/slide2.jpg";
import slider3 from "../../../../bistro-boss-restaurant-resources-main/assets/home/slide3.jpg";
import slider4 from "../../../../bistro-boss-restaurant-resources-main/assets/home/slide4.jpg";
import slider6 from "../../../../bistro-boss-restaurant-resources-main/assets/home/slide5.jpg";
import slider5 from "../../../../bistro-boss-restaurant-resources-main/assets/home/slide1.jpg";
import SectionTitle from "../../../Components/SectionTitle";
const Categories = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <SectionTitle  subHeading = {"From 11:00am to 10:00pm"}
      heading = {"ORDER ONLINE"}>
        
     
      </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-24"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h1 className="text-2xl pb-6 uppercase text-white text-center -mt-16">
            Salad
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h1 className="text-2xl uppercase text-white text-center -mt-16">
            soup
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h1 className="text-2xl uppercase text-white text-center -mt-16">
            Pizza
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h1 className="text-2xl  uppercase text-white text-center -mt-16">
            disserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h1 className="text-2xl  uppercase text-white text-center -mt-16">
            Salad
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} alt="" />
          <h1 className="text-2xl  uppercase text-white text-center -mt-16">
            soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h1 className="text-2xl  uppercase text-white text-center -mt-16">
            pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h1 className="text-2xl  uppercase text-white text-center -mt-16">
            disserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h1 className="text-2xl  uppercase text-white text-center -mt-16">
            Salad
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Categories;
