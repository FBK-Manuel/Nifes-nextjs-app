"use client";
import Slider from "react-slick";
import Image from "next/image";
import { IMAGES } from "../constants/images";

const images = [
  {
    id: 1,
    src: IMAGES.ASS1,
    alt: "Gallery Image 1",
  },
  {
    id: 2,
    src: IMAGES.ASS2,
    alt: "Gallery Image 2",
  },
  {
    id: 3,
    src: IMAGES.ASS3,
    alt: "Gallery Image 3",
  },
  {
    id: 4,
    src: IMAGES.ASS4,
    alt: "Gallery Image 4",
  },
  {
    id: 5,
    src: IMAGES.ASS5,
    alt: "Gallery Image 5",
  },
  {
    id: 6,
    src: IMAGES.ASS6,
    alt: "Gallery Image 6",
  },
  {
    id: 7,
    src: IMAGES.ASS7,
    alt: "Gallery Image 7",
  },
  {
    id: 8,
    src: IMAGES.ASS8,
    alt: "Gallery Image 8",
  },
  {
    id: 9,
    src: IMAGES.ASS9,
    alt: "Gallery Image 9",
  },
  {
    id: 10,
    src: IMAGES.ASS10,
    alt: "Gallery Image 10",
  },
];

export default function AssImageGallary() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // number of images visible at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Our Associates
        </h2>
        <Slider {...settings}>
          {images.map((image) => (
            <div key={image.id} className="px-2">
              <div className="relative w-full h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
