import { Navbar } from "../../components";

const Header = () => {
  return (
    <header className=" bg-navbar">
      <div
        className="!py-[1rem] relative flex justify-between"
        id="main_container"
      >
        <Navbar navMenu={["profile", "funeral event", "images"]} />
        <figure className="rounded-full p-[4px] bg-navbar absolute left-[50%] top-0 ">
          <img
            src="/nav_image.svg"
            alt="navbar_image"
            className="rounded-full"
          />
        </figure>
        <Navbar navMenu={["family", "tribute"]} />
      </div>
    </header>
  );
};

export default Header;
