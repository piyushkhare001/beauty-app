"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
import img1 from "@/assets/images/iimg-6.jpg"
import img6 from "@/assets/images/img-1.jpg"
import img5 from "@/assets/images/img-4.jpg"
import img4 from "@/assets/images/img-5.jpg"
import img3 from "@/assets/images/img-7.jpg"
import img2 from "@/assets/images/img-9.jpg"
import Experts from '@/app/components/main/Experts';

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="flex flex-col gap-7 mt-7">
   <h1 className="text-6xl  text-center font-sans font-bold  text-white">Our Experts ...</h1>  

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={"#"}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Lana Del Rey",
    title: "john deo",
    src: img1,
    ctaText: "About",

    content: () => {
      return (
        <p>
        Our team of experts at Beauty Salon is comprised of highly skilled and experienced professionals dedicated to bringing out the best in you. Each of our stylists, estheticians, and beauty therapists is trained in the latest techniques and trends to ensure you receive top-notch service.<br></br> With a passion for beauty and a commitment to excellence, our experts take the time to understand your unique needs and preferences, providing personalized treatments that leave you looking and feeling your absolute best. Trust our team to deliver exceptional results, every time.
        </p>
      );
    },
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di",
    src: img2,
    ctaText: "About",

    content: () => {
      return (
        <p>
           Our team of experts at Beauty Salon is comprised of highly skilled and experienced professionals dedicated to bringing out the best in you. Each of our stylists, estheticians, and beauty therapists is trained in the latest techniques and trends to ensure you receive top-notch service.<br></br> With a passion for beauty and a commitment to excellence, our experts take the time to understand your unique needs and preferences, providing personalized treatments that leave you looking and feeling your absolute best. Trust our team to deliver exceptional results, every time.
        </p>
      );
    },
  },

  {
    description: "Metallica",
    title: "The Bell Tolls",
    src: img3,
    ctaText: "About",
    
    content: () => {
      return (
        <p>
          Our team of experts at Beauty Salon is comprised of highly skilled and experienced professionals dedicated to bringing out the best in you. Each of our stylists, estheticians, and beauty therapists is trained in the latest techniques and trends to ensure you receive top-notch service.<br></br> With a passion for beauty and a commitment to excellence, our experts take the time to understand your unique needs and preferences, providing personalized treatments that leave you looking and feeling your absolute best. Trust our team to deliver exceptional results, every time.
        </p>
      );
    },
  },
  {
    description: "Led Zeppelin",
    title: "Stairway",
    src:img4,
    ctaText: "About",
   
    content: () => {
      return (
        <p>
           Our team of experts at Beauty Salon is comprised of highly skilled and experienced professionals dedicated to bringing out the best in you. Each of our stylists, estheticians, and beauty therapists is trained in the latest techniques and trends to ensure you receive top-notch service.<br></br> With a passion for beauty and a commitment to excellence, our experts take the time to understand your unique needs and preferences, providing personalized treatments that leave you looking and feeling your absolute best. Trust our team to deliver exceptional results, every time.
        </p>
      );
    },
  },
  {
    description: "Mustafa Zahid",
    title: "About",
    src: img5,
    ctaText: "About",

    content: () => {
      return (
        <p>
           Our team of experts at Beauty Salon is comprised of highly skilled and experienced professionals dedicated to bringing out the best in you. Each of our stylists, estheticians, and beauty therapists is trained in the latest techniques and trends to ensure you receive top-notch service.<br></br> With a passion for beauty and a commitment to excellence, our experts take the time to understand your unique needs and preferences, providing personalized treatments that leave you looking and feeling your absolute best. Trust our team to deliver exceptional results, every time.
        </p>
      );
    },
  },
];
