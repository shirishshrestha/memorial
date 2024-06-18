import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";

const Video = () => {
  const navigate = useNavigate();
  const video = [
    {
      title: "https://www.youtube.com/embed/a3ICNMQW7Ok?si=rTfmAQXyKDPWyl7Q",
    },
    {
      title: "https://www.youtube.com/embed/a3ICNMQW7Ok?si=rTfmAQXyKDPWyl7Q",
    },
    {
      title: "https://www.youtube.com/embed/a3ICNMQW7Ok?si=rTfmAQXyKDPWyl7Q",
    },
    {
      title: "https://www.youtube.com/embed/a3ICNMQW7Ok?si=rTfmAQXyKDPWyl7Q",
    },
    {
      title: "https://www.youtube.com/embed/a3ICNMQW7Ok?si=rTfmAQXyKDPWyl7Q",
    },
    {
      title: "https://www.youtube.com/embed/a3ICNMQW7Ok?si=rTfmAQXyKDPWyl7Q",
    },
    {
      title: "https://www.youtube.com/embed/a3ICNMQW7Ok?si=rTfmAQXyKDPWyl7Q",
    },
    {
      title: "https://www.youtube.com/embed/a3ICNMQW7Ok?si=rTfmAQXyKDPWyl7Q",
    },
  ];
  return (
    <section className="">
      <Header className="bg-navbar" />
      <div id="main_container">
        <div className="text-center mt-[45px] relative">
          <button
            onClick={() => navigate(-1)}
            className="text-darkYellow flex flex-shrink-0 gap-[8px] items-center text-[22px] font-bold absolute inset-0"
          >
            <img src="/prev-page.svg" alt="" />
            Back
          </button>
          <h4 className="heading ml-[-30px] ">All Videos</h4>
        </div>
        <div className=" grid justify-center xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3  mt-[43px] gap-[17px] mb-[20px]">
          {video.map((item, index) => (
            <div
              className="flex  lg:w-[273px] lg:h-[273px] w-[310px] h-[310px]"
              key={index}
            >
              <iframe
                src={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className=" rounded-[12px] lg:w-[273px] lg:h-[273px] w-[310px] h-[310px]"
                allowfullscreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Video;
