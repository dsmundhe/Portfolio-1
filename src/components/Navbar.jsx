import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
function Navbar() {
  const [inval, setinval] = useState("list");
  const [btn, setbtn] = useState(<GiHamburgerMenu />);
  const showhide = () => {
    if (inval === "list") {
      setinval("list1");
      setbtn(<RxCross1 />);
    } else {
      setinval("list");
      setbtn(<GiHamburgerMenu />);
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
            <button onClick={showhide}>{btn}</button>
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
