"use client";
import Slider from "react-slick";
import { IMAGES } from "../constants/images";
import Image from "next/image";
const slides = [
  {
    id: 1,
    src: IMAGES.SLIDE1,
    alt: "Slide 1",
  },
  {
    id: 2,
    src: IMAGES.SLIDE2,
    alt: "Slide 2",
  },
  {
    id: 3,
    src: IMAGES.SLIDE3,
    alt: "Slide 3",
  },
  {
    id: 4,
    src: IMAGES.SLIDE4,
    alt: "Slide 4",
  },
  {
    id: 5,
    src: IMAGES.SLIDE5,
    alt: "Slide 5",
  },
  {
    id: 6,
    src: IMAGES.SLIDE6,
    alt: "Slide 6",
  },
  {
    id: 7,
    src: IMAGES.SLIDE7,
    alt: "Slide 7",
  },
  {
    id: 8,
    src: IMAGES.SLIDE8,
    alt: "Slide 8",
  },
];
export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div>
      <h1 className="md:text-5xl sm:text-2xl hover:text-[#e5408f] font-bold text-center py-6">
        NIFES Atani Family
      </h1>

      <Slider {...settings}>
        {slides.map((img, index) => (
          <div key={index} className="relative w-full  h-[600px]">
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
