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
    <section className="bg-left-bottom lg:bg-center bg-[url(/background.svg)] md:bg-[url(/bg-mobile-landing.svg)] lg:bg-[url(/bg_landing.svg)] md:bg-right xl:bg-center h-auto bg-no-repeat w-full bg-cover">
      <Header />
      <div id="main_container" className="relative">
        <div className="lg:pt-[92px] lg:pb-[86px] pt-[36px] flex flex-col lg:flex-row items-center lg:items-start lg:justify-between ">
          <div className="text-center lg:text-start">
            <h1 className="font-great-vibes text-[32px] md:text-[50px] lg:text-[42px] lg:mb-[28px] mb-[11px] ">
              In the Loving Memory of
            </h1>
            <h2 className="text-[24px] md:text-[41px] lg:text-[38px] xl:text-[41px] font-bold">
              Joseph Earl Washington
            </h2>
            <div className="text-darkYellow text-[16px] md:text-[22px] lg:text-[20px] xl:text-[20px] font-bold">
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
          <div>
            <figure className="border-[2px] mt-[55px] lg:mt-0 border-solid border-white w-[254.14px] h-[328.54px] md:h-[478.4px] md:w-[370.06px] rounded-[40px] relative z-20 ">
              <img
                src="/landing_image.svg"
                alt="profile-image"
                className="rounded-[40px] h-full w-[254.14px] md:w-[370.06px] object-cover object-center"
              />
              <img
                src="/landing_decor.svg"
                alt="decor"
                className="absolute top-[232px] right-[152px] md:top-[338px] md:right-[221px] h-[163px] w-[163px] md:h-auto md:w-auto"
              />
            </figure>
            <img
              src="/bg-usa.svg"
              alt="usa-background"
              className="absolute w-[100vh] inset-0 !top-[150px] z-[10] md:hidden min-[500px]:!top-[70px]"
            />
          </div>
          <div className="lg:hidden relative z-30 mb-[53px] w-full px:[6px] md:px-[21px]">
            <table className="mt-[67px] md:mt-[105px] w-full">
              {details.map((item, index) => (
                <tr key={index}>
                  <td className="text-[15px] md:text-[22px] font-bold md:pr-[33px] pb-[14px] md:pb-[21px] text-lightBlue align-top">
                    {item.title}
                  </td>
                  <td className="text-[15px] md:text-[22px] font-bold pb-[14px] md:pb-[21px] max-w-[189px] md:max-w-[280px] align-top">
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
