import React from "react";
import { navbarLinks } from "../../constants";

function Navbar() {
  return (
    <nav className="w-full py-5 shadow-xl backdrop-blur-lg fixed top-0 z-10">
      <div className="container flex flex-col lg:flex-row gap-5 justify-between w-full items-center max-w-5xl mx-auto">
        <h3 className="text-3xl text-secondary font-bold">OYEWALE TAIWO</h3>
        <ul className="flex gap-3 align-center p-1 flex-wrap text-secondary">
          <li>
            {navbarLinks.map((link) => (
              <a
                key={link.id}
                className="text-lg font-medium sm:text-base px-2 lg:px-5 py-2 transition rounded
                hover:text-primary hover:bg-secondary"
                href={link.href}
              >
                {link.title}
              </a>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
