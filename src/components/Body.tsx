"use client";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
// import interactiveImg from "../../public/images/desktop/image-interactive.jpg";
import interactiveMobileImg from "../../public/images/mobile/image-interactive.jpg";
import interactiveDesktopImg from "../../public/images/desktop/image-interactive.jpg";

// Desktop images
import deepEarthDesktop from "../../public/images/desktop/image-deep-earth.jpg";
import nightArcadeDesktop from "../../public/images/desktop/image-night-arcade.jpg";
import soccerTeamVRDesktop from "../../public/images/desktop/image-soccer-team.jpg";
import theGridDesktop from "../../public/images/desktop/image-grid.jpg";
import fromAboveDesktop from "../../public/images/desktop/image-from-above.jpg";
import pocketBorealisDesktop from "../../public/images/desktop/image-pocket-borealis.jpg";
import curiosityDesktop from "../../public/images/desktop/image-curiosity.jpg";
import fisheyeDesktop from "../../public/images/desktop/image-fisheye.jpg";

// Mobile images
import deepEarthMobile from "../../public/images/mobile/image-deep-earth.jpg";
import nightArcadeMobile from "../../public/images/mobile/image-night-arcade.jpg";
import soccerTeamVRMobile from "../../public/images/mobile/image-soccer-team.jpg";
import theGridMobile from "../../public/images/mobile/image-grid.jpg";
import fromAboveMobile from "../../public/images/mobile/image-from-above.jpg";
import pocketBorealisMobile from "../../public/images/mobile/image-pocket-borealis.jpg";
import curiosityMobile from "../../public/images/mobile/image-curiosity.jpg";
import fisheyeMobile from "../../public/images/mobile/image-fisheye.jpg";

type Props = {};

const Body = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageList = [
    {
      desktop: deepEarthDesktop,
      mobile: deepEarthMobile,
      title: "Deep Earth",
    },
    {
      desktop: nightArcadeDesktop,
      mobile: nightArcadeMobile,
      title: "Night Arcade",
    },
    {
      desktop: soccerTeamVRDesktop,
      mobile: soccerTeamVRMobile,
      title: "Soccer Team VR",
    },
    {
      desktop: theGridDesktop,
      mobile: theGridMobile,
      title: "The Grid",
    },
    {
      desktop: fromAboveDesktop,
      mobile: fromAboveMobile,
      title: "From Up Above VR",
    },
    {
      desktop: pocketBorealisDesktop,
      mobile: pocketBorealisMobile,
      title: "Pocket Borealis",
    },
    {
      desktop: curiosityDesktop,
      mobile: curiosityMobile,
      title: "The Curiosity",
    },
    {
      desktop: fisheyeDesktop,
      mobile: fisheyeMobile,
      title: "Make it Fisheye",
    },
  ];

  return (
    <div className="custom-container pt-lg-5">
       <section className="row section">
        <Image
          className="col-xxl-auto  int-image"
          src={isMobile ? interactiveMobileImg : interactiveDesktopImg}
          alt={isMobile ? "interactiveMobileImg" : "interactiveDesktopImg"}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
        />
        <div className="position-relative col-lg-auto">
          <div className="card interative-card custom-position">
            <h1>The leader in interactive VR</h1>
            <p>
              Founded in 2011, Loopstudios has been producing world-className
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>
      <section className="section ">
        <div className="d-lg-flex justify-content-between section-header">
          <h1 className=""> Our creations</h1>
          <div className="mt-lg-2 px-lg-4 mx-lg-2 d-none d-md-block">
            <button
              type="button"
              className="see-all btn btn-outline-secondary  border-2 fw-semibold "
            >
              See all
            </button>
          </div>
        </div>

        <div className="row row-cols-md-3 row-cols-xxl-4 pt-lg-2 mt-xxl-5 mobile-creation">
          {imageList.map((item, index) => {
            return (
              <div className="col p-lg-3" key={index}>
                <div className="card text-white border-0">
                  <Image
                    src={isMobile ? item.mobile : item.desktop}
                    alt={item.title}
                    className="card-img"
                    // width="320"
                    // sizes="(max-width: 425px) 1vw, (max-width: 1200px) 1vw, 1vw"
                  />
                  <div className="card-img-overlay d-flex flex-column col-lg-10 col-8  justify-content-end px-lg-3 px-5">
                    <h2 className="card-title bottom-50 ">{item.title}</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-block d-md-none mt-4 text-center ">
          <button
            type="button"
            className="see-all btn btn-outline-secondary border-2 fw-semibold"
          >
            See all
          </button>
        </div>
      </section>
    </div>
  );
};

export default Body;
