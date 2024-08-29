import React, { useEffect } from "react";
import { landingImg1 } from "../../assets/img";
import { Button } from "../parts";
// import gsap from "gsap-trial";
// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
// import { SplitText } from "gsap-trial/SplitText";
// gsap.registerPlugin(SplitText, ScrollTrigger);

const SectionLanding = () => {
  // const ourText = new SplitText(".left-title", { types: "chars" });
  // const chars = ourText.chars;
  // let timeLine = gsap.timeline();

  // useEffect(() => {
  //   timeLine.from(
  //     chars,
  //     {
  //       opacity: 0,
  //       yPercent: 20,
  //       duration: 2,
  //       ease: "back",
  //       stagger: 0.05,
  //     },
  //     []
  //   );
  // }, []);

  return (
    <div className='wrapper grid grid-cols-1 lg:grid-cols-2 items-center'>
      <div className='left'>
        <h1 className='left-title text-5xl md:text-6xl leading-tight'>
          Providing Solutions for <br /> Greening the World
        </h1>
        <h1 className='left-desc font-medium mt-[17px] max-w-lg leading-6'>
          We are fully prepared to be the main facilitator in realizing a greener world in the future by committing to developing innovative,
          sustainable and environmentally friendly solutions.
        </h1>
        <div className='btn flex items-center gap-3'>
          <Button className={`bg-[#313A36] text-white hover:bg-[#0f231a] mt-7`} href='#reasons'>
            Get Started
          </Button>
          <Button className={`bg-white border text-black hover:-translate-y-2 mt-7`} link='/products'>
            Explore
          </Button>
        </div>
      </div>
      <div className='right p-5 flex justify-center lg:justify-end'>
        <img src={landingImg1} className='hidden md:block animate-updown' />
      </div>
    </div>
  );
};

export default SectionLanding;
