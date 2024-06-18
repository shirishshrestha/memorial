import { Link } from "react-router-dom";
import { Pagination } from "../../components/Pagination";

const FamilyMembers = () => {
  const familyMembers = [
    {
      name: "Alisson Ally Henderson b. 1976 USA, Texas, Catemburg,18990 Street Houston",
      relation: "Wife",
    },
    {
      name: "George G. Christopherson, Aka Private George, Christian Town",
      relation: "Brother",
    },
    {
      name: "Copper G. Christopherson, Aka Redmond Hammingster Peddingministon, Raycity 110",
      relation: "Brother",
    },
    {
      name: "Alisson Ally Henderson b. 1976 Canada, Toronto, Adoniston Street",
      relation: "Sister",
    },
  ];
  return (
    <section id="family" className="bg-darkBlue py-[35px]">
      <div
        className="lg:grid lg:grid-cols-2 gap-[31px] flex flex-col"
        id="main_container"
      >
        <div id="video">
          <iframe
            height="175"
            src="https://www.youtube.com/embed/a3ICNMQW7Ok?si=rTfmAQXyKDPWyl7Q"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="w-full rounded-[17px] !h-[125px] md:!h-[175px]"
          ></iframe>
          <div className="mt-[23px] w-full">
            <div className="flex items-center  justify-between mb-[21px]">
              <h4 className="text-[20px] md:text-[30px] lg:text-[25px] font-bold ">
                Videos
              </h4>
              <Link to="/videos">
                <button className="flex gap-[6px] items-center text-[18px] font-semibold text-darkYellow ">
                  See all
                  <img src="/eye.svg" alt="eye-icon" />
                </button>
              </Link>
            </div>
            <div className="flex justify-between ">
              <iframe
                src="https://www.youtube.com/embed/a3ICNMQW7Ok?si=rTfmAQXyKDPWyl7Q"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className=" rounded-[17px] md:w-[32%]  w-[30.8%] h-[125px] md:h-auto"
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/a3ICNMQW7Ok?si=rTfmAQXyKDPWyl7Q"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className=" rounded-[17px] md:w-[32%]  w-[30.8%]   h-[125px] md:h-auto"
                allowfullscreen
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/a3ICNMQW7Ok?si=rTfmAQXyKDPWyl7Q"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className=" rounded-[17px] md:w-[32%]  w-[30.8%]  h-[125px] md:h-auto"
                allowfullscreen
              ></iframe>
            </div>
            <Pagination className="mt-[33px]" />
          </div>
        </div>
        <div>
          <h4 className="text-[20px] md:text-[30px] lg:text-[25px] font-bold mb-[21px]">
            Family Members
          </h4>
          {familyMembers.map((member, index) => (
            <div
              className="flex items-start gap-[10px] font-bold lg:pb-[36px] md:pb-[32px] pb-[19px]"
              key={index}
            >
              <figure className="py-[7px]">
                <img src="/bullet.svg" alt="" />
              </figure>
              <div>
                <p className="lg:text-[1rem] md:text-[22px] text-[15px]">
                  {member.name}
                </p>
                <p className="text-darkYellow lg:text-[1rem] md:text-[22px] text-[15px]">
                  {member.relation}
                </p>
              </div>
            </div>
          ))}
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default FamilyMembers;
