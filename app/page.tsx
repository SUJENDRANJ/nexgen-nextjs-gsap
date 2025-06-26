import Hero from "@/components/Hero";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="w-screen h-screen relative overflow-hidden">
        {/* Spline 3D Scene Fullscreen */}
        <Spline scene="https://prod.spline.design/V08PqXr6Iob9W1Qz/scene.splinecode" />

        {/* Black Overlay to Cover Bottom Watermark */}
        <div className="absolute bottom-0 left-0 w-full h-[80px] bg-black z-10"></div>
      </div>
    </div>
  );
}
