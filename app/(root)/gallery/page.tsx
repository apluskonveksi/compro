"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import LightGalleryImage from "@/components/Lightgallery";
import ButtonGallery from "@/components/ButtonGallery";


const Gallery = () => {
  const [data, setData] = useState([]);
  const [activeButton, setActiveButton] = useState("kaos");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getGallery = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `/api/cloudinary?activeButton=${activeButton}`
        );
        setData(response.data);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
        // Setelah permintaan selesai, isLoading diubah menjadi false
      }
    };
    getGallery();
  }, [activeButton]);

  return (
    <section className="w-full flex flex-col md:flex-row gap-4 my-8 md:my-14">

      <div className="w-full md:w-52 border-r border-gray-300 pr-4 md:pr-0">
        <ButtonGallery
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </div>
      <LightGalleryImage data={data} isLoading={isLoading} />
    </section>
  );
};
export default Gallery;
