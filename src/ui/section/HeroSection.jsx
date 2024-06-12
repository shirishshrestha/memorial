import Header from "../layout/Header";

const HeroSection = () => {
  const details = [
    {
      title: "Full Name",
      value: "Joseph Earl Washington",
    },
    {
      title: "Service Branch",
      value: "Army",
    },
    {
      title: "Rank",
      value: "82",
    },
    {
      title: "Served In",
      value: "United States of America",
    },
    {
      title: "Years Served",
      value: "1942-1960",
    },
    {
      title: "Hometown",
      value: "Starch Green, Hammersmith, Middlesex, England",
    },
  ];
  return (
    <section className="bg-[url(/bg-mobile-landing.svg)] lg:bg-[url(/bg_landing.svg)] md:bg-right xl:bg-center h-auto bg-no-repeat w-full bg-cover">
      <Header />
      <div id="main_container">
        <div className="lg:pt-[92px] lg:pb-[86px] pt-[36px] flex flex-col lg:flex-row items-center lg:items-start lg:justify-between ">
          <div className="text-center lg:text-start">
            <h1 className="font-great-vibes text-[50px] lg:text-[42px] lg:mb-[28px] mb-[11px] ">
              In the Loving Memory of
            </h1>
            <h2 className="text-[41px] font-bold">Joseph Earl Washington</h2>
            <div className="text-darkYellow text-[22px] lg:text-[20px] font-bold">
              <p>Born 1918 - Passed Away 1997</p>
            </div>
            <table className="lg:mt-[75px] hidden lg:block">
              {details.map((item, index) => (
                <tr key={index}>
                  <td className="text-[1rem] font-bold pr-[33px] pb-[21px] text-lightBlue align-top">
                    {item.title}
                  </td>
                  <td className="text-[1rem] font-bold pb-[21px] max-w-[280px] align-top">
                    {item.value}
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <figure className="border-[2px] mt-[55px] lg:mt-0 border-solid border-white h-fit w-fit rounded-[40px] relative ">
            <img
              src="/landing_image.svg"
              alt=""
              className="rounded-[40px] object-cover"
            />
            <img
              src="/landing_decor.svg"
              alt=""
              className="absolute top-[338px] right-[221px] "
            />
          </figure>
          <div className="lg:hidden mb-[53px] w-full px-[21px]">
            <table className="mt-[105px] w-full">
              {details.map((item, index) => (
                <tr key={index}>
                  <td className="text-[22px] font-bold pr-[33px] pb-[21px] text-lightBlue align-top">
                    {item.title}
                  </td>
                  <td className="text-[22px] font-bold pb-[21px] max-w-[280px] align-top">
                    {item.value}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
