'use client';

import { useEffect } from "react";
import ScrollExpandMedia from "@/components/scroll-expansion-hero";
// import { VideoExpansionTextBlend } from "@/components/Expansion";

const Night = () => {
  const mediaType = "video";

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, [mediaType]);

  return (
    <div className="min-h-screen text-white ">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/event/video.mp4"
        posterSrc="/event/bg.png"
        bgImageSrc="/event/bg.png"
        title="REVAA Couture Night"
        date="Coming Soon"
        scrollToExpand=""
        />
        {/* <VideoExpansionTextBlend /> */}
    </div>
  );
};

export default Night;
