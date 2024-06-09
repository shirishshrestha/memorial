import PropTypes from "prop-types";

const Navbar = ({ navMenu }) => {
  return (
    <nav>
      <ul className="font-bold flex gap-[50px] capitalize">
        {navMenu.map((item, index) => {
          const hrefId = item.toLowerCase().replace(/\s+/g, "-");
          return (
            <li
              className={`text-navbar_inactive ${
                item === "profile" ? "!text-navbar_active" : ""
              }`}
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

Navbar.propTypes = {
  navMenu: PropTypes.array.isRequired,
};

export { Navbar };
