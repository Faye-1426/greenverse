import { useEffect } from "react";
import { servicesBanner } from "../../assets/img";
import { BoxContainer, SpacingLayout } from "../../layouts";
import gsap from "gsap";
// import { gsap } from "gsap-trial";
// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
// import { SplitText } from "gsap-trial/SplitText";
// import { Button } from "flowbite-react";
// gsap.registerPlugin(ScrollTrigger, SplitText);

const Banner = ({ title, children, image, subtitle }) => {
  // useEffect(() => {
  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".textParallax",
  //       start: "top 20%",
  //       end: "bottom 20%",
  //       scrub: 1,
  //     },
  //   });

  //   tl.from(".textParallax", { yPercent: 0 }).to(".textParallax", {
  //     yPercent: 100,
  //     ease: "back",
  //   });
  // });
  return (
    <div>
      <div className='w-full banner mt-7 relative '>
        <img src={image ? image : servicesBanner} className='w-full h-[50vh] object-cover' alt='' />
        <SpacingLayout className='flex items-center'>
          <div className='textParallax w-full text absolute bottom-1/2 translate-y-1/2 text-xl left-0 sm:left-[100px] lg:left-[120px] text-center sm:text-left'>
            <p className='text-[#C8C8C8] sm:text-xl text-base'>{subtitle}</p>
            <p className='text-[#C8C8C8] text-xl lg:text-[40px] leading-7 lg:leading-[44px]'>
              <span className='text-white'>{title} </span>
              {children}
            </p>
          </div>
        </SpacingLayout>
      </div>
    </div>
  );
};

export default Banner;
