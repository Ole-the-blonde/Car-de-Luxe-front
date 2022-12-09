import { useEffect, useState } from "react";
import popupStyles from "./ContactUs";
import PropTypes from "prop-types";
import "../../Nav/ContactUs/ContactUs.css";

const CustomPopup = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <section
      className="popup-container"
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="popup">
        <div className={popupStyles.popup}>
          <h2>{props.title}</h2>
          <span className="close" onClick={closeHandler}>
            &times;
          </span>
          <div className={popupStyles.content}>{props.children}</div>
        </div>
      </div>
    </section>
  );
};

CustomPopup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default CustomPopup;
