import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";

const Image = () => {
  const navigate = useNavigate();
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
    <section className="">
      <Header className="bg-navbar" />
      <div id="main_container">
        <div className="lg:text-center mt-[45px] relative">
          <button
            onClick={() => navigate(-1)}
            className="text-darkYellow flex flex-shrink-0 gap-[8px]  lg:items-center text-[22px] font-bold absolute lg:inset-0 md:top-[-130px] top-[-115px]"
          >
            <img src="/prev-page.svg" alt="" />
            Back
          </button>
          <h4 className="heading lg:ml-[-30px] ">All Images</h4>
        </div>
        <div className=" grid justify-center xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 mt-[43px] gap-[17px] mb-[20px]">
          {imageUrl.map((item, index) => (
            <figure
              key={index}
              className=" lg:w-[273px] lg:h-[273px] w-[310px] h-[310px]"
            >
              <img
                src={item.url}
                className=" rounded-[12px] lg:w-[273px] lg:h-[273px]  w-[310px] h-[310px] object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Image;
