import React, { useState } from "react";
import { useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [hide, setHide] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHide(window.pageYOffset > 300);
    });
  }, []);

  return (
    <div
      className={`scroll ${hide ? "" : "hide"}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FaArrowCircleUp className="i" />
    </div>
  );
};

export default ScrollToTop;
