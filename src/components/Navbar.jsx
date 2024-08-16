import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
function Navbar() {
  const [inval, setinval] = useState("list");
  const [btn, setbtn] = useState(<GiHamburgerMenu />);
  const showhide = () => {
    if (inval === "list") {
      setbtn(<RxCross1 />);
      setinval("list1");
      console.log(inval);
    } else {
      setbtn(<GiHamburgerMenu />);
      setinval("list");
    }
  };
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <div>
            {" "}
            <h1>DM</h1>
          </div>
          <div className="btn">

            <label class="hamburger">
              <input type="checkbox" />
              <svg viewBox="0 0 32 32">
                <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                <path class="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
        </div>
        <div className={inval}>
          <ul>
            <li>Home</li>
            <li>Skills</li>
            <li>Qualifications</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
