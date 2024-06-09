// import { SwiperComp } from "../../components";

const FuneralEvent = () => {
  return (
    <div className="py-[37px] text-grayColor font-bold">
      <div className="flex gap-[145px]">
        <div>
          <h4 className="heading">Funeral Event</h4>
          <figure className="flex gap-[15px] items-center mt-[17px] mb-[15px]">
            <img src="/location.svg" alt="location_icon" />
            <figcaption>
              Conducted at Holy Cemetery, Street 44900, Cable Town, Austin,
              Texas, USA
            </figcaption>
          </figure>
          <figure className="flex gap-[15px] items-center ">
            <img src="/calendar.svg" alt="location_icon" />
            <figcaption>31/05/2024 04:52 am</figcaption>
          </figure>
        </div>
        <div className="flex gap-[1rem]">
          <div>
            <h4>Grave Details</h4>
            <figure className="flex gap-[15px] items-center mt-[17px] mb-[15px]">
              <img src="/alarm.svg" alt="location_icon" />
              <figcaption>
                Blessed Holy Cemetery, Austin,665080 Texas, Norhingtam, USA
              </figcaption>
            </figure>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.4791131336483!2d-97.68977592390898!3d30.280419307350876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b612a1a44a59%3A0x95245f3a7efc66e2!2sBethany%20Cemetery!5e0!3m2!1sen!2snp!4v1717666831848!5m2!1sen!2snp&output=embed"
            width="280"
            height="160"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-[20px]  border-none focus:outline-none"
          ></iframe>
        </div>
      </div>
      {/* <div className="mt-[14px] ">
        <div>
          <h4 className="heading">Images</h4>

          <SwiperComp />
        </div>
      </div> */}
    </div>
  );
};

export default FuneralEvent;
