import { FaArrowUp } from "react-icons/fa";
import "../scroll/scroll.css";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="scroll-to-top" onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
