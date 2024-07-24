import Image from "next/image";
import React from "react";
import logo from "../../public/images/logo.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <footer className="footer bg-dark">
        <div className="custom-container d-flex justify-content-between flex-lg-row flex-column ">
          <div className="pt-5 ">
            <a href="#">
              <Image className="col-lg-4 col-sm-5" src={logo} alt="logo" />
            </a>
            <div className="footer-links">
              <ul className="list-inline footer-nav-links ms-auto mt-lg-3">
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
          </div>
          <div className="pt-5">
            <ul className="list-inline social-links footer-links text-lg-end">
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
