"use client";
import Slider from "react-slick";
import Image from "next/image";
import { IMAGES } from "../constants/images";

const images = [
  {
    id: 0,
    src: IMAGES.IMG0,
    alt: "Gallery Image 0",
  },
  {
    id: 1,
    src: IMAGES.IMG1,
    alt: "Gallery Image 1",
  },
  {
    id: 2,
    src: IMAGES.IMG2,
    alt: "Gallery Image 2",
  },
  {
    id: 3,
    src: IMAGES.IMG3,
    alt: "Gallery Image 3",
  },
  {
    id: 4,
    src: IMAGES.IMG4,
    alt: "Gallery Image 4",
  },
  {
    id: 5,
    src: IMAGES.IMG5,
    alt: "Gallery Image 5",
  },
  {
    id: 6,
    src: IMAGES.IMG6,
    alt: "Gallery Image 6",
  },
  {
    id: 7,
    src: IMAGES.IMG7,
    alt: "Gallery Image 7",
  },
  {
    id: 8,
    src: IMAGES.IMG8,
    alt: "Gallery Image 8",
  },
  {
    id: 9,
    src: IMAGES.IMG9,
    alt: "Gallery Image 9",
  },
  {
    id: 10,
    src: IMAGES.IMG10,
    alt: "Gallery Image 10",
  },
  {
    id: 11,
    src: IMAGES.IMG11,
    alt: "Gallery Image 11",
  },
  {
    id: 12,
    src: IMAGES.IMG12,
    alt: "Gallery Image 12",
  },
  {
    id: 13,
    src: IMAGES.IMG13,
    alt: "Gallery Image 13",
  },
  {
    id: 14,
    src: IMAGES.IMG14,
    alt: "Gallery Image 14",
  },
];

export default function ImageGallary() {
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
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Gallery</h2>
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
