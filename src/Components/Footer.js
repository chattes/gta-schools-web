import React from "react";

import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const URL_MKTNG = "https://gtaschools.info";
const Footer = () => {
  return (
    <div className="footer d-flex align-items-center justify-content-center p-2">
      <div>
        <p className="text-muted" style={{ marginTop: 10 }}>
          <strong>Made by </strong>
          <a href="https://twitter.com/chatajee" className="twaddr">
            @chatajee
          </a>
        </p>
      </div>

      <div style={{ marginLeft: "auto" }}>
        <span style={{ paddingRight: 5 }} className="text-muted">
          SHARE
        </span>
        <FacebookShareButton
          url={URL_MKTNG}
          quote={"Find information about schools in Toronto"}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton
          url={URL_MKTNG}
          quote={"Information about schools in Toronto"}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <WhatsappShareButton
          url={URL_MKTNG}
          quote={"Find information about schools in Toronto"}
        >
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default Footer;
