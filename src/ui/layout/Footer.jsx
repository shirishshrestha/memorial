const Footer = () => {
  return (
    <footer className="bg-darkBlue py-[43px]">
      <div
        id="main_container"
        className="flex justify-between lg:flex-row flex-col-reverse items-center text-center lg:items-start lg:text-start gap-[43px] lg:gap-0"
      >
        <div>
          <div className="flex lg:flex-row flex-col items-center gap-[1rem]">
            <h6 className="text-[30px] lg:text-[25px] font-bold">
              Share this Page
            </h6>
            <div className="flex gap-[14px] ">
              <a href="#" target="_blank">
                <img src="/facebook.svg" alt="facebook" />
              </a>
              <a href="#" target="_blank">
                <img src="/twitter.svg" alt="twitter" />
              </a>
              <a href="#" target="_blank">
                <img src="/whatsapp.svg" alt="instagram" />
              </a>
              <a href="#" target="_blank">
                <img src="/linkedin.svg" alt="linkedin" />
              </a>
            </div>
          </div>
          <div className="text-darkYellow  text-[22px] lg:text-[1rem] font-medium max-w-[504px] mt-[8px]">
            <p>
              Invite friends and family to access your loved one&apos;s eTribute
              page to share their heartfelt messages
            </p>
          </div>
        </div>

        <div>
          <h6 className="font-bold text-[30px] lg:text-[25px] mb-[15px]">
            Page Administrator
          </h6>
          <div className="flex gap-[11px]">
            <div className="bg-darkYellow p-[10px] rounded-[10px] w-fit flex items-center">
              <p className="font-bold text-[20px] ">DA</p>
            </div>
            <div className="font-bold lg:text-[18px] text-[22px] text-start">
              <p>Daphne Adilistyle Callumkon</p>
              <p className="text-darkYellow text-[18px] lg:text-[1rem]">
                Adilistyle_Danphe89880@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
