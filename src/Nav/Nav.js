import { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  // eslint-disable-next-line
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    // console.log(show);

    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src="./netflix-logo.jpg" alt="Netflix Logo" />

      <img
        className="nav_avatar"
        src="./Netflix-avatar.png"
        alt=" Avatar Logo"
      />
    </div>
  );
}

export default Nav;
