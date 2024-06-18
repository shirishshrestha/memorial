// import { SwiperComp } from "../../components";

import { Link } from "react-router-dom";
import { SwiperComp } from "../../components/SwiperComp";

const FuneralEvent = () => {
  return (
    <div id="funeral-event" className="py-[37px] text-grayColor font-bold">
      <div className="flex xl:gap-[145px] l gap-[32px] lg:flex-row flex-col ">
        <div>
          <h4 className="heading">Funeral Event</h4>
          <figure className="flex gap-[15px] items-center mt-[17px] mb-[15px] lg:text-[1rem] md:text-[22px] text-[15px]">
            <img src="/location.svg" alt="location_icon" />
            <figcaption>
              Conducted at Holy Cemetery, Street
              <span className="block lg:inline">
                {" "}
                44900, Cable Town, Austin, Texas, USA{" "}
              </span>
            </figcaption>
          </figure>
          <figure className="flex gap-[15px] items-center lg:text-[1rem] md:text-[22px] text-[15px] ">
            <img src="/calendar.svg" alt="location_icon" />
            <figcaption>31/05/2024 04:52 am</figcaption>
          </figure>
        </div>
        <div className="flex gap-[1rem] lg:flex-row flex-col" id="images">
          <div>
            <h4 className="heading">Grave Details</h4>
            <figure className="flex gap-[15px] lg:text-[1rem] md:text-[22px] text-[15px] items-center mt-[17px] mb-[15px]">
              <img src="/alarm.svg" alt="location_icon" />
              <figcaption>
                Blessed Holy Cemetery, Austin,665080 Texas, Norhingtam, USA
              </figcaption>
            </figure>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.4791131336483!2d-97.68977592390898!3d30.280419307350876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b612a1a44a59%3A0x95245f3a7efc66e2!2sBethany%20Cemetery!5e0!3m2!1sen!2snp!4v1717666831848!5m2!1sen!2snp&output=embed"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-[20px] h-[188px] md:h-[306px] lg:w-[240px] xl:w-[280px] lg:h-[160px] border-none focus:outline-none"
          ></iframe>
        </div>
      </div>
      <div className="mt-[14px] flex flex-col lg:grid lg: grid-cols-[1.5fr_1.25fr] xl:grid-cols-2  ">
        <div>
          <div className="flex items-center justify-between mb-[21px]">
            <h4 className="text-[20px] md:text-[30px] lg:text-[25px] font-bold ">
              Images
            </h4>
            <Link to="/images">
              <button className="flex lg:pr-[35px] xl:pr-[50px] gap-[6px] items-center text-[18px] font-semibold text-darkYellow ">
                See all
                <img src="/eye.svg" alt="eye-icon" />
              </button>
            </Link>
          </div>

          <SwiperComp />
        </div>
        <div id="eulogy">
          <h4 className="heading mb-[21px]">Eulogy</h4>
          <div className="h-[315.06px] md:h-[648px] lg:h-[87%] p-[4px] rounded-[20px] bg-darkYellow scrollbar !pb-[42px] ">
            <iframe
              src="/samplepdf.pdf#toolbar=0"
              width="100%"
              className="h-full rounded-[17px] bg-darkYellow "
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuneralEvent;
