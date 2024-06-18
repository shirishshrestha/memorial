import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

function SwiperComp() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const imageUrl = [
    {
      id: 0,
      url: "/family.jpeg",
    },
    {
      id: 1,
      url: "/military.svg",
    },
    {
      id: 2,
      url: "/military.jpg",
    },
    {
      id: 3,
      url: "/canon.jpeg",
    },
    {
      id: 4,
      url: "/usa.webp",
    },
  ];

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 !w-full lg:!w-[500px] xl:!w-[558px] md:!h-[373px] h-[229px] lg:!h-fit !m-0"
      >
        {imageUrl.map((image) => (
          <SwiperSlide
            className=" !w-full lg:!w-[500px] xl:!w-[558px] lg:!h-[319px] h-[229px] md:!h-[373px] rounded-[17px] "
            key={image.id}
          >
            <img
              src={image.url}
              alt=""
              className=" rounded-[17px] object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper !w-full !h-fit  !pt-[17px] "
      >
        {imageUrl.map((image) => (
          <SwiperSlide
            className="lg:!w-[92px] lg:!h-[91px] xl:!w-[104px] xl:!h-[103px] md:!h-[121px] !h-[74.26px] md:!w-[121px] !w-[74.87px] !rounded-[19px] "
            key={image.id}
          >
            <img
              src={image.url}
              alt=""
              className="!rounded-[17px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export { SwiperComp };
