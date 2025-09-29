import { NavbarDemo } from "@/components/Navbar";
import InfiniteGallery  from "@/components/ui/3d-gallery-photography";

export default function DemoOne() {
const sampleImages = [
		{ src: '/night/1.webp', alt: 'Image 1' },
		{ src: '/night/2.webp', alt: 'Image 2' },
		{ src: '/night/3.webp', alt: 'Image 3'},
        { src: '/night/4.webp', alt: 'Image 4'},
        { src: '/night/5.webp', alt: 'Image 5'},
	];

  return (
    <>
    <NavbarDemo/>
      <main className="min-h-screen h-full w-full">
			<InfiniteGallery
				images={sampleImages}
				speed={1.2}
				zSpacing={3}
				visibleCount={12}
				falloff={{ near: 0.8, far: 14 }}
				className="h-screen w-full rounded-lg overflow-hidden"
                />
			<div className="h-screen inset-0 pointer-events-none fixed flex items-center justify-center text-center px-3 mix-blend-exclusion text-white">
				<h1 className="font-serif text-4xl md:text-7xl tracking-tight">
					<span className="italic">Coming Soon</span>
				</h1>
			</div>

			<div className="text-center fixed bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold">
				<p>Stay Tunned</p>
				<p className=" opacity-60">
					And Connected
				</p>
			</div>
		</main>
</>
	);
}