"use client";
import { useState } from "react";
import Link from "next/link";
import logo from "../../public/images/logo.svg";
import hamburger from "../../public/images/icon-hamburger.svg";
import closeIcon from "../../public/images/icon-close.svg"; // Ensure you have a close icon image

import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="image-wrap">
      <div className={`custom-container`}>
        <nav
          className={`navbar  navbar-expand-sm navbar-light ${
            isMenuOpen && "mobile-menu"
          } `}
        >
          <div className="container-fluid ">
            <a className="navbar-brand" href="#">
              <Image src={logo} alt="logo" />
            </a>
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
              onClick={toggleMenu}
              className="navbar-toggler border-0"
            >
              <Image alt="hamburger" src={isMenuOpen ? closeIcon : hamburger} />
            </button>
            <div
              className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto gap-2">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" href="#">
                    Careers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" href="#">
                    Events
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" href="#">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" href="#">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="hero-title">Immersive experiences that deliver</div>
      </div>
    </div>
  );
};

export default Hero;
