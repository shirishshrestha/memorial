import PropTypes from "prop-types";

const NavbarResp = ({ navMenu, setNavOpen }) => {
  return (
    <nav>
      <ul className="font-bold text-[20px] flex flex-col gap-[50px] capitalize">
        {navMenu.map((item, index) => {
          const hrefId = item.toLowerCase().replace(/\s+/g, "-");
          return (
            <li
              onClick={() => setNavOpen(false)}
              className={`text-navbar`}
              key={index}
            >
              <a href={`#${hrefId}`}>{item}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

NavbarResp.propTypes = {
  navMenu: PropTypes.array.isRequired,
  setNavOpen: PropTypes.bool.isRequired,
};

export { NavbarResp };
