import React from "react";
import { navIcons, navLinks } from "../constants";
import dayjs from "dayjs";
import useWindowStore from "../store/window";
const Navbar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav className="items-center flex ">
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-semibold">Tushar</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li
              key={id}
              className="font-medium"
              onClick={() => openWindow(type)}
            >
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
