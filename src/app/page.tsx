import Image from "next/image";
import HeroPage from "@/app/components/main/HeroPage"
import Footer from "./components/common/Footer";
import Experts from "@/app/components/main/Experts"
import Reviews from "@/app/components/main/Review"
import Services from "@/app/components/main/Services"

export default function Home() {
  return (
    <main className="">
      <div className="">
          <HeroPage/>
          <Services/>
          <Experts/>
          <Reviews/>
          <Footer/>
      </div>
    </main>
  );
}
