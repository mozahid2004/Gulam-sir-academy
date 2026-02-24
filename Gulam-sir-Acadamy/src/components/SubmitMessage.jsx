import "./SubmitMessage.css";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaTimes } from "react-icons/fa";

const SubmitMessage = ({
  show,
  type = "success", // "success" | "error"
  message,
  onClose,
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (show) {
      setTimeout(() => setAnimate(true), 50);
    } else {
      setAnimate(false);
    }
  }, [show]);

  if (!show) return null;

  const isSuccess = type === "success";

  return (
    <div className="submit-popup-overlay" onClick={onClose}>
      <div
        className={`submit-popup-box ${animate ? "popup-show" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* X Close Button */}
        <button className="popup-close" onClick={onClose}>
          <FaTimes />
        </button>

        {/* Icon */}
        <div className={`popup-icon ${isSuccess ? "success" : "error"}`}>
          {isSuccess ? <FaCheckCircle /> : <FaTimesCircle />}
        </div>

        {/* Heading */}
        <h3 className={isSuccess ? "success-text" : "error-text"}>
          {isSuccess ? "Submitted Successfully!" : "Submission Failed!"}
        </h3>

        {/* Message */}
        <p>{message || (isSuccess ? "We will contact you soon." : "Try again later.")}</p>

        <button className={`popup-btn ${isSuccess ? "btn-success" : "btn-error"}`} onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default SubmitMessage;
