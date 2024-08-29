import { useState, useEffect } from "react";
import gsap from "gsap";


const items = [1, 2, 3, 4, 5, 6];

const Marquee = ({ className, children }) => {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const [tween, setTween] = useState(null);

  useEffect(() => {
    // Membuat tween GSAP
    const newTween = gsap.to(".marquee_part", {
      xPercent: -100,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });

    // Memposisikan marquee di tengah
    gsap.set(".marquee_inner", { xPercent: -50 });

    // Menambahkan event listener untuk scroll event
    window.addEventListener("scroll", function () {
      // Memperbarui status isScrollingDown
      if (window.scrollY > currentScroll) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }

      // Memperbarui timeScale tween berdasarkan status isScrollingDown
      gsap.to(newTween, {
        timeScale: isScrollingDown ? 1 : -1,
      });

      // Memperbarui currentScroll
      setCurrentScroll(window.scrollY);
    });

    // Menyimpan tween dalam state
    setTween(newTween);

    // Membersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", function () {
        // ...
      });
    };
  }, []);

  return (
    <>
      <div className={`spacer ${className}`}></div>
      <div className='marquee text-white bg-[#222] uppercase font-bold text-5xl px-0 py-8 overflow-hidden'>
        <div className='marquee_inner w-fit flex flex-row antialiased' key={items.id}>
          {items.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <div className='marquee_part flex items-center flex-shrink-0 px-4 font-smooth'>
              <svg className='pr-5' xmlns='http://www.w3.org/2000/svg' width='68' height='68' viewBox='0 0 68 68' fill='none'>
                <path
                  d='M33.61 0L35.28 14.81C36.29 23.82 43.4 30.92 52.41 31.94L67.22 33.61L52.41 35.28C43.4 36.29 36.3 43.4 35.28 52.41L33.61 67.22L31.94 52.41C30.93 43.4 23.82 36.3 14.81 35.28L0 33.61L14.81 31.94C23.82 30.93 30.92 23.82 31.94 14.81L33.61 0Z'
                  fill='white'
                />
              </svg>
              {children}
            </div>
          ))}
        </div>
      </div>
      <div className='spacer'></div>
    </>
  );
};

export default Marquee;
