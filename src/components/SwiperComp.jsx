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
        className="mySwiper2 !w-[558px] !h-fit !m-0"
      >
        {imageUrl.map((image) => (
          <SwiperSlide
            className=" !w-[558px] !h-[319px] rounded-[17px] "
            key={image.id}
          >
            <img
              src={image.url}
              alt=""
              className="rounded-[17px] object-center"
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
        className="mySwiper !h-fit  !pt-[17px] "
      >
        {imageUrl.map((image) => (
          <SwiperSlide
            className="!w-[104px] !h-[103px] !rounded-[19px] "
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
