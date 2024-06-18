import { useState } from "react";
import { Navbar, NavbarResp } from "../../components";
import PropTypes from "prop-types";
import { CrossSvg, MenuSvg } from "../../components/Svg";

const Header = ({ className }) => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavbarToggle = () => {
    setNavOpen(!navOpen);
  };
  return (
    <header className={`${className} lg:bg-navbar`}>
      <div
        className="!py-[1rem] relative items-center flex justify-between"
        id="main_container"
      >
        <div className="lg:hidden"></div>
        <Navbar navMenu={["profile", "funeral event", "images"]} />
        <figure className="rounded-full lg:p-[4px] lg:bg-navbar lg:absolute lg:left-[45%] lg:top-0 top-[23px] w-fit">
          <img
            src="/nav_image.svg"
            alt="navbar_image"
            className="rounded-full w-[76px] lg:w-[74px] md:w-[104px] ml-[25px] lg:ml-0"
          />
        </figure>
        <Navbar navMenu={["family", "tribute"]} />

        <div
          className={`absolute bg-navbarResp px-[70px]  h-auto rounded-[14px] z-40 md:right-[48px] right-[20px] top-[89px] items-center py-[40px] md:py-[70px] text-center justify-center lg:hidden ${
            navOpen ? "flex" : "hidden"
          } `}
        >
          <div className="absolute top-1 bottom-1 left-0 right-0 backdrop-blur-[5px] rounded-[14px] -z-10"></div>
          <NavbarResp
            setNavOpen={setNavOpen}
            navMenu={[
              "profile",
              "funeral event",
              "images",
              "eulogy",
              "video",
              "family",
              "tribute",
            ]}
          />
        </div>
        <button
          className="lg:hidden"
          type="button"
          onClick={handleNavbarToggle}
        >
          {navOpen ? <CrossSvg /> : <MenuSvg />}
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
