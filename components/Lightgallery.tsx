"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

interface GalleryItem {
  secure_url: string;
  created_at: string;
}

interface LightGalleryImageProps {
  data: GalleryItem[];
  isLoading: boolean;
}

const LightGalleryImage = ({ data, isLoading }: LightGalleryImageProps) => {
  return (
    <div

    >
      {isLoading ? (
        <div className="text-center text-md md:text-lg font-medium">Loading...</div>
      ) : (
        <LightGallery
          plugins={[lgZoom]}
          speed={800}
          elementClassNames="w-full bg-gray-200 p-4 md:p-8 relative z-10 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {data?.map((g, i) => (
            <Link
              key={i}
              href={g?.secure_url}
              className="overflow-hidden"
              passHref={true}
              prefetch={true}
              data-sub-html={`<h4>Property of Aplus Konveksi`}


            >
              <div
                data-aos="zoom-in-up"
                data-aos-duration="800"
                className="overflow-hidden shadow-md  w-full relative"
              >
                <Image
                  className="w-full hover:scale-110 duration-700 object-cover  mx-auto"
                  src={g?.secure_url}
                  alt="Aplus Gallery"
                  placeholder="blur"
                  blurDataURL={g?.secure_url}
                  width={1200}
                  height={900}
                  priority={true}
                />
              </div>
            </Link>
          ))}
        </LightGallery>
      )}
    </div>
  );
};

export default LightGalleryImage;
