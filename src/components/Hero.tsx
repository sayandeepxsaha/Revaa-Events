
import {  AnimatedMarqueeHero } from "./heroComponent";
export const Hero = () => {
  const images = [
    "/hero/hero1.webp",
    "/hero/hero2.webp",
    "/hero/hero3.webp",
    "/hero/hero4.webp",
    "/hero/hero5.webp",
    "/hero/hero6.webp",
    "/hero/hero7.webp",
  ];
  return (
    <div>
      {/* <CarouselComponent /> */}
      <div className="-mt-20 mb-10">

       <AnimatedMarqueeHero
      tagline="Your Vision, Our Mission"
      title={
        <>
          Brings your dream
          <br />
          event to life
        </>
      }
      description="“At Revaa Events, we craft unforgettable experiences - with creativity, precision, and elegance, we transform your vision into timeless celebrations.”"
      ctaText="Collections"
      images={images}
      />

      </div>
    </div>
  );
};
