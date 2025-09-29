"use client";

import { useEffect } from "react";
import ScrollExpandMedia from "@/components/scroll-expansion-hero";

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
  video: {
    src: "/event/video.mp4",
    poster:
      "https://images.pexels.com/videos/5752729/space-earth-universe-cosmos-5752729.jpeg",
    background: "/event/bg.png",
    title: "REVAA Couture Night",
    date: "Coming Soon",
    scrollToExpand: "",
    about: {
      overview:
        "Revaa Couture Night is an exclusive fashion extravaganza curated by Revaa...",
      conclusion: "",
    },
  },
};

const MediaContent = ({ mediaType }: { mediaType: "video" | "image" }) => {
  const currentMedia = sampleMediaContent[mediaType];
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-pink-400 ">
        About the Event
      </h2>
      <p className="text-lg -mb-20 text-black">
        {currentMedia.about.overview}
      </p>
    </div>
  );
};

// Shared helper
const useResetScroll = (deps:React.DependencyList[] = []) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, deps);
};

// Components
export const VideoExpansionTextBlend = () => {
  const mediaType = "video";
  const currentMedia = sampleMediaContent[mediaType];
  useResetScroll([]);

  return (
    <div className="min-h-screen text-white">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

// Do the same for ImageExpansionTextBlend, VideoExpansion, ImageExpansion
