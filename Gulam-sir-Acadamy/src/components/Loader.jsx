import "./Loader.css";
import { FaBookOpen } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { MdSchool } from "react-icons/md";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-stage">
        {/* Top icons */}
        <div className="loader-icons">
          <span className="icon-bounce">
            <MdSchool />
          </span>
          <span className="icon-bounce delay">
            <HiSparkles />
          </span>
          <span className="icon-bounce">
            <FaBookOpen />
          </span>
        </div>

        {/* 3D Book */}
        <div className="book3d">
          <div className="book-cover"></div>

          <div className="book-pages">
            <span className="page p1"></span>
            <span className="page p2"></span>
            <span className="page p3"></span>
            <span className="page p4"></span>
          </div>

          <div className="book-back"></div>
        </div>

        {/* Text */}
        <div className="loader-text">
          <h3>Loading Your Learning Space...</h3>
          <p>Please wait a moment ✨</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
