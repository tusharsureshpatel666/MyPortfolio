import React from "react";
// import { socials } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControlls from "../components/WindowControlls";
import { socials } from "../constants";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControlls target="contact" />
        <h2>Contact</h2>
      </div>

      <div className="p-4">
        <h1 className="text-4xl font-semibold">👋 Hey there! My Socials 🌐</h1>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2  gap-4">
          {socials.map(({ id, text, icon, link }) => (
            <a
              href={link}
              key={id}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl p-4 border border-gray-200 flex flex-col items-center justify-center gap-3 cursor-pointer transition-transform hover:scale-105"
            >
              <img src={icon} alt={text} className="w-10 h-10" />
              <p className="text-lg font-semibold text-black">{text}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
