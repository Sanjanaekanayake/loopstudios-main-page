import Link from "next/link";
import logo from "../../public/images/logo.svg";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="image-wrap">
      <div className="custom-container">
        <nav className="navbar  navbar-expand-sm navbar-light">
          <div className="container-fluid ">
            <a className="navbar-brand" href="#">
              <Image src={logo} alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
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
