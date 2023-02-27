import React from "react";
import Container from "./Container";

function Navbar() {
  return (
    <div className=" bg-teal-700 text-gray-100 text-xl">
      <Container>
        <div className="flex justify-between items-center h-16">
          <p>LOGO</p>
          <div>
            <a className="mx-2" href="/">
              Home
            </a>
            <a className="mx-2" href="/">
              About
            </a>
            <a className="mx-2" href="/">
              Contact
            </a>
          </div>
        </div>
        {/* <p className="">logo</p>
        <div>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div> */}
      </Container>
    </div>
  );
}

export default Navbar;
