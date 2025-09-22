"use client"

import {
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer,
} from "@/components/Collections"
import { NavbarDemo } from "@/components/Navbar"
import Image from "next/image"

const IMAGES_1 = [
  "https://images.unsplash.com/photo-1529218402470-5dec8fea0761?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
]
const IMAGES_2 = [
  "https://images.unsplash.com/photo-1542052125323-e69ad37a47c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1564284369929-026ba231f89b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1532236204992-f5e85c024202?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1493515322954-4fa727e97985?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
]
const IMAGES_3 = [
  "https://images.unsplash.com/photo-1528361237150-8a9a7df33035?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1493515322954-4fa727e97985?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1608875004752-2fdb6a39ba4c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
]

function DemoVariant1() {
  return (
    <>
      <NavbarDemo />

      <div className="relative bg-white">
        {/* Heading + Text */}
        <ContainerStagger className="relative z-10 -mb-12 place-self-center px-4 md:px-6 pt-12 text-center">
          <ContainerAnimated>
            <h1 className="font-serif text-3xl md:text-5xl font-extralight">
              Things{" "}
              <span className="font-serif font-extralight text-indigo-600">
                We Arrange
              </span>
            </h1>
          </ContainerAnimated>
          <ContainerAnimated>
            <h1 className="font-serif text-3xl md:text-5xl font-extralight">
              for your Events
            </h1>
          </ContainerAnimated>
          <ContainerAnimated className="my-4">
            <p className="leading-normal tracking-tight text-muted-foreground text-sm md:text-base">
              Revaa is your trusted partner in planning, managing, <br className="hidden md:block"/> 
              and executing extraordinary events that create lasting memories.
            </p>
          </ContainerAnimated>
        </ContainerStagger>

        {/* Gradient */}
        <div
          className="pointer-events-none absolute z-10 h-[40vh] md:h-[70vh] w-full"
          style={{
            background: "linear-gradient(to right, gray, rebeccapurple, blue)",
            filter: "blur(84px)",
            mixBlendMode: "screen",
          }}
        />

        {/* ✅ Mobile: simple 2-column grid */}
        <div className="grid grid-cols-2 gap-2 p-4 md:hidden">
          {[...IMAGES_1, ...IMAGES_2, ...IMAGES_3].map((url, i) => (
            <Image
              key={i}
              src={url}
              alt="gallery item"
              width={600}
              height={400}
              className="aspect-video w-full h-auto rounded-md object-cover shadow"
            />
          ))}
        </div>

        {/* ✅ Big screens: keep existing gallery */}
        <ContainerScroll className="relative hidden md:block h-[350vh]">
          <ContainerSticky className="h-svh">
            <GalleryContainer>
              <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
                {IMAGES_1.map((url, i) => (
                  <Image
                    key={i}
                    src={url}
                    alt="gallery item"
                    width={800}
                    height={600}
                    className="aspect-video w-full h-auto rounded-md object-cover shadow"
                  />
                ))}
              </GalleryCol>
              <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
                {IMAGES_2.map((url, i) => (
                  <Image
                    key={i}
                    src={url}
                    alt="gallery item"
                    width={800}
                    height={600}
                    className="aspect-video w-full h-auto rounded-md object-cover shadow"
                  />
                ))}
              </GalleryCol>
              <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
                {IMAGES_3.map((url, i) => (
                  <Image
                    key={i}
                    src={url}
                    alt="gallery item"
                    width={800}
                    height={600}
                    className="aspect-video w-full h-auto rounded-md object-cover shadow"
                  />
                ))}
              </GalleryCol>
            </GalleryContainer>
          </ContainerSticky>
        </ContainerScroll>
      </div>
    </>
  )
}

export default DemoVariant1
