import Image from "next/image";
import React from "react";
import logo from "../../public/images/logo.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <footer className="footer bg-dark">
        <div className="custom-container">
          <div className=" d-flex justify-content-between pt-5 px-1 ">
            <a href="#">
              <Image className="col-xl-9" src={logo} alt="logo" />
            </a>
            <ul className="list-inline social-links footer-links">
              <li className="list-inline-item ">
                <a href="#">
                  <i className="fa fa-facebook-square " aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item ">
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item ">
                <a href="#">
                  <i className="fa fa-pinterest"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-between pt-1 px-1">
            <div>
              <ul className="list-inline footer-links footer-nav-links ms-auto ">
                <li className="list-inline-item">
                  <a href="#">About</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Careers</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Events</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Products</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
            <div>
              <p>© 2024 loopstudios. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
