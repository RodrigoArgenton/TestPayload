import LogoIcon from "./menu/LogoIcon";
import Navigation from "./menu/Navigation";


export default function HeroSection() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-row justify-center items-center gap-15 px-5 py-4">
        <div>
          <LogoIcon />
        </div>
        <div>
          <Navigation />
        </div>
      </div>
    </div>
  )
}