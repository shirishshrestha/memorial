const Tribute = () => {
  const tribute = [
    {
      image: "/tribute-1.svg",
      name: "Tony Hiddleson Amarotoli",
      email: "CorporalMajorTonyHid1987@gmail.com",
      message:
        "We extend our heartfelt gratitude for your unwavering courage, dedication, and sacrifice. Your service in the defense of our nation’s freedoms and values is an inspiring testament to your bravery and selflessness. Each day, we are reminded of the profound impact your actions have had on preserving the liberties we hold dear. Your commitment to protecting our way of life, often in the face of unimaginable challenges.",
    },
    {
      image: "/tribute-2.png",
      name: "Asmaryhallington Sanaschel",
      email: "Sanaschel_mary12621@gmail.com",
      message:
        "As we reflect on your extraordinary contributions, we are humbled by the resilience and fortitude you have shown. Your legacy of service is a powerful reminder of the true cost of freedom and the enduring spirit of those who have served. We are deeply indebted to you for your sacrifices and the sacrifices of your families.",
    },
  ];
  return (
    <section
      id="main_container"
      className="!py-[35px] lg:grid lg:grid-cols-[1.3fr_1fr] flex flex-col "
    >
      <div className="" id="tribute">
        <h4 className="heading !text-[25px]">Tribute</h4>
        <div>
          {tribute.map((item, index) => (
            <div key={index} className="font-bold mt-[20px] mb-[28px]">
              <figure className="flex gap-[12px] items-center mb-[22px]">
                <img src={item.image} alt="location_icon" />
                <figcaption>
                  <p className="text-grayColor font-bold text-[18px]">
                    {item.name}
                  </p>
                  <p className="text-[#8D8D8D] font-medium text-[1rem]">
                    {item.email}
                  </p>
                </figcaption>
              </figure>
              <p className="text-[1rem] font-medium text-[#8D8D8D]">
                {item.message}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-end  relative z-10">
        <img
          src="/tribute_decor.svg"
          alt=""
          className="absolute top-[146px] left-[-80px] z-[-50]"
        />
        <div className="bg-[rgba(217,217,217,0.8)] py-[23px] px-[27px] rounded-[20px]  ">
          <h6 className="heading text-center pb-[28px]">Send your eTribute</h6>
          <form className="flex flex-col gap-[15px]">
            <input
              type="text"
              placeholder="Your Name"
              className="input"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input"
              required
            />
            <select
              name="relation"
              className={` input focus:outline-none text-darkBlue `}
            >
              <option className="!text-[#b4b4b4]" value="" selected disabled>
                Select Relationship
              </option>
              <option value="Sister">Sister</option>
              <option value="Mother">Mother</option>
              <option value="Father">Father</option>
            </select>

            <input
              type="text"
              placeholder="Subject"
              className="input"
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="6"
              placeholder="Your Message"
              className="input"
              required
            ></textarea>
            <button
              type="button"
              value="Send"
              className=" bg-darkYellow text-white rounded-[6px] py-[14px] text-[20px] font-bold"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Tribute;
