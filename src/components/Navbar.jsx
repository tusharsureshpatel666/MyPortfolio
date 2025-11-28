import React from "react";
import { navIcons, navLinks } from "../constants";
import dayjs from "dayjs";
const Navbar = () => {
  return (
    <nav className="items-center flex ">
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-semibold">Tushar</p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icons${id}`} className="icon-hover" />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("MMMM D, YYYY")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
