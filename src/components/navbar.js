import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center p-2 justify-between h-[15vh]">
        <div>
          {/* <img src="./svg/sunn.png" alt="logo" className="w-[90px] h-[auto]" /> */}
          <h1 className="text-3xl text-[#99005e] font-bold lg:pl-28 xxl:text-[red] xxl:text-5xl">
            <img src="../assets/sunn.png" className="w-20" />
          </h1>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center cursor-pointer justify-around gap-[5vw] pr-28">
            <a
              href="/#"
              className="text-2xl text-[#99005e]  font-bold hover:scale-125 duration-1000 "
            >
              Home
            </a>
            <a
              href="#about"
              className="text-2xl text-[#99005e] font-bold hover:scale-125 duration-1000"
            >
              About us
            </a>
            <a
              href="/#"
              className="text-2xl text-[#99005e]  font-bold hover:scale-125 duration-1000"
            >
              Offers
            </a>
            <a
              href="/#"
              className="text-2xl text-[#99005e]  font-bold hover:scale-125 duration-1000"
            >
              Products
            </a>
            <a
              href="#contact"
              className="text-2xl text-[#99005e]  font-bold hover:scale-125 duration-1000"
            >
              Contact
            </a>
          </div>
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            className="w-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
