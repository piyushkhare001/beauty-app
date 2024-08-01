import { HoverEffect } from "../ui/card-hover-effect";
import img1 from "@/assets/images/waxinnf.jpg"
import img2 from "@/assets/images/head-massage.jpg"
import img3 from "@/assets/images/hairdresser.jpg"
import img4 from "@/assets/images/facialer.jpg"
import img5 from "@/assets/images/beautician.jpg"
export default function services() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
 const projects = [
    {
        title: "Haircut & Styling",
        description: "Experience a fresh look with our expert haircut and styling services. Our skilled stylists will work with you to achieve the perfect cut and style that complements your personality and preferences.",
        link : "/",
        img : img1
      },
      {
        title: "Facial Treatments",
        description: "Pamper your skin with our rejuvenating facial treatments. We offer a variety of facials designed to cleanse, hydrate, and revitalize your skin, leaving you with a glowing complexion."
        ,
        link : "/",
        img : img2
      },
      {
        title: "Manicure & Pedicure",
        description: "Indulge in our luxurious manicure and pedicure services. Our treatments include nail shaping, cuticle care, exfoliation, and a relaxing hand and foot massage for perfectly polished nails."
        ,
        link : "/",
        img : img3
      },
      {
        title: "Waxing Services",
        description: "Achieve smooth and hair-free skin with our professional waxing services. We offer full-body, facial, and bikini waxing to ensure a comfortable and effective hair removal experience."
        ,
        link : "/",
        img : img4
      },
      {
        title: "Massage Therapy",
        description: "Relax and unwind with our therapeutic massage services. Choose from a variety of techniques including Swedish, deep tissue, and aromatherapy massages to alleviate stress and muscle tension."
        ,
        link : "/",
        img : img5
      }
];
