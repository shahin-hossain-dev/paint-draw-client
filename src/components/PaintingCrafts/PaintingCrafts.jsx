import React from "react";
import { Fade, Flip, Hinge, Roll, Slide } from "react-awesome-reveal";
const PaintingCrafts = () => {
  return (
    <div>
      <div className="mt-12 md:mt-24 text-center space-y-4 md:w-1/2 mx-auto">
        <Slide delay={300} duration={1500}>
          <h2
            className="text-2xl md:text-4xl font-bold font-exo"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Popular Painting Craft
          </h2>
        </Slide>
        <Slide delay={300} duration={2000}>
          <p className="px-10">
            Each stroke a tale of passion; our masterpieces inspire awe and
            creativity.
          </p>
        </Slide>
      </div>
    </div>
  );
};

export default PaintingCrafts;
