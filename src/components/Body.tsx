import Image from "next/image";
import React from "react";
import interactiveImg from "../../public/images/desktop/image-interactive.jpg";
import deepEarth from "../../public/images/desktop/image-deep-earth.jpg";
import nightArcade from "../../public/images/desktop/image-night-arcade.jpg";
import soccerTeamVR from "../../public/images/desktop/image-soccer-team.jpg";
import theGrid from "../../public/images/desktop/image-grid.jpg";
import fromAbove from "../../public/images/desktop/image-from-above.jpg";
import pocketBorealis from "../../public/images/desktop/image-pocket-borealis.jpg";
import curiosity from "../../public/images/desktop/image-curiosity.jpg";
import fisheye from "../../public/images/desktop/image-fisheye.jpg";

type Props = {};

const Body = (props: Props) => {
  const imageList = [
    {
      image: deepEarth,
      title: "deep earth",
    },
    {
      image: nightArcade,
      title: "Night Arcade",
    },
    {
      image: soccerTeamVR,
      title: "Soccer Team VR",
    },
    {
      image: theGrid,
      title: "The Grid",
    },
    {
      image: fromAbove,
      title: "From UP Above VR",
    },
    {
      image: pocketBorealis,
      title: "Pocket Borealis",
    },
    {
      image: curiosity,
      title: "The Curiosity",
    },
    {
      image: fisheye,
      title: "Make it fisheye",
    },
  ];
  return (
    <div className="custom-container pt-5">
      <section className="row section">
        <Image
          className="col-auto"
          src={interactiveImg}
          alt="image-interactive.jpg"
        />
        <div className="position-relative col-auto">
          <div className="card interative-card position-absolute custom-position">
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
      <section className="section">
        <div className=" d-grid d-flex justify-content-between section-header">
          <h1 className=""> Our creations</h1>
          <div className="mt-2 mx-2 ">
            <button
              type="button"
              className="btn btn-outline-secondary  border-2 fw-semibold "
            >
              See all
            </button>
          </div>
        </div>
        <div className="row row-cols-md-4 mt-xxl-5 pt-2 ">
          {imageList.map((item, index) => {
            return (
              <div className="col p-3" key={index}>
                <div className="card bg-gradient text-white border-0">
                  <Image src={item.image} alt={item.title} />
                  <div className="card-img-overlay d-flex flex-column col-10 justify-content-end px-4">
                    <h2 className="card-title bottom-50 ">{item.title}</h2>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div className="col">
            <div className="card">
              <Image
                src={nightArcade}
                className="card-Image-top"
                alt="nightArcade"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image
                src={soccerTeamVR}
                className="card-Image-top"
                alt="soccerTeamVR"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image src={theGrid} className="card-Image-top" alt="theGrid" />
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Body;
