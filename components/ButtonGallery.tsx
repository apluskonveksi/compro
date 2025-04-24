"use client"



const buttons: { id: number; type: "button" | "submit" | "reset"; name: string }[] = [
  {
    id: 1,
    type: "button",
    name: "kaos",
  },
  {
    id: 2,
    type: "button",
    name: "jersey",
  },
  {
    id: 3,
    type: "button",
    name: "kemeja",
  },
  {
    id: 4,
    type: "button",
    name: "jaket",
  },
  {
    id: 5,
    type: "button",
    name: "rompi",
  },
  {
    id: 6,
    type: "button",
    name: "seragam-kantor",
  },
  {
    id: 7,
    type: "button",
    name: "seragam-sekolah",
  },
  {
    id: 8,
    type: "button",
    name: "hoodie",
  },
  {
    id: 9,
    type: "button",
    name: "wearpack",
  },
  {
    id: 10,
    type: "button",
    name: "souvenir",
  }
];



import React, { useEffect, useRef, useState } from "react";

interface ButtonGalleryProps {
  activeButton: string;
  setActiveButton: (buttonName: string) => void;
}

const ButtonGallery: React.FC<ButtonGalleryProps> = ({ activeButton, setActiveButton }) => {


  const [isMobile, setIsMobile] = useState<boolean>(false);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Listen to window resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);


  useEffect(() => {
    // Scroll ke tombol aktif saat activeButton berubah
    if (isMobile && buttonRefs.current[activeButton]) {
      buttonRefs.current[activeButton]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeButton, isMobile]);


  if (isMobile) {
    return (
      <div className="flex gap-2 bg-[#121212]  overflow-x-auto w-full sticky top-10 px-4 py-2 scrollbar-hide">
        {buttons.map((button) => (
          <button
            key={button.id}
            ref={(el) => {
              buttonRefs.current[button.name] = el;
            }}
            type={button.type}
            onClick={() => setActiveButton(button.name)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap capitalize ${activeButton === button.name
              ? "text-red-500 font-bold"
              : "text-gray-300"
              }`}
          >
            {button.name}
          </button>
        ))}
      </div>
    );
  }


  return (
    <div className="touch-manipulation w-92 hidden md:flex flex-col items-start ">
      {buttons?.map((button, i) => (
        <button
          key={i}
          type={button?.type}
          onClick={() => setActiveButton(button?.name)}
          className={`p-3 capitalize text-lg cursor-pointer ${activeButton === button?.name
            ? " text-red-500 font-semibold"
            : " text-[#1A202D]/50 hover:text-red-500 "
            }`}
        >
          {button?.name}

        </button>
      ))}
    </div>
  )
}

export default ButtonGallery;



