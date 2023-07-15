import Image from "next/image";
import desk from "../public/image-hero-desktop.png";
import databiz from "../public/client-databiz.svg";
import audio from "../public/client-audiophile.svg";
import maker from "../public/client-maker.svg";
import meet from "../public/client-meet.svg";

export default function Home() {
  return (
    <main className="mt-2 h-full w-full flex flex-row justify-center items-center gap-space">
      <div className="details flex flex-col justify-center items-start mt-36">
        <div className="flex flex-col justify-center w-desc">
          <span className="text-black text-header font-epilogue font-bold leading-xl mb-12">
            Make <br /> remote work
          </span>
          <div className="desc mb-12 text-lg">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </div>
          <div className="group button border border-mediumGray rounded-lg h-14 w-40 flex justify-center items-center bg-black
           hover:bg-white hover:text-black">
            <span className="flex-none text-white font-epilogue text-center leading-none">
              Learn more
            </span>
          </div>
          <div className="flex justify-start mt-32 items-start gap-10">
            <Image src={databiz} alt="comp" />
            <Image src={audio} alt="comp" />
            <Image src={meet} alt="comp" />
            <Image src={maker} alt="comp" />
          </div>
        </div>
      </div>
      <div className="image w-heroW h-heroH">
        <Image src={desk} alt="hero" />
      </div>
    </main>
  );
}
