import React from "react";
import HomePageDivider from "./Divider";

import Image, { StaticImageData } from "next/image";

import Entrance from "./../../../assets/media/main.jpeg";
import Pizza from "./../../../assets/media/pizza-bar.jpeg";
import Selfie from "./../../../assets/media/selfie-podiumm.jpeg";
import Playground from "./../../../assets/media/kids.jpeg";
import Terrace from "./../../../assets/media/terrace.jpeg";
import EntranceTwo from "./../../../assets/media/main2.jpeg";
interface HomepageAmbienceProps {
  data: any;
}

interface RestaurantSection {
  title: string;
  image: StaticImageData;
}

const restaurantSections: RestaurantSection[] = [
  {
    title: "Вътрешна зала",
    image: Entrance,
  },
  {
    title: "Селфи зона",
    image: Selfie,
  },
  {
    title: "Пицария",
    image: Pizza,
  },
  {
    title: "Селфи зона",
    image: Playground,
  },
  {
    title: "Тераса",
    image: Terrace,
  },
  {
    title: "Вътрешна зала",
    image: EntranceTwo,
  },
];
const HomepageAmbience: React.FC<HomepageAmbienceProps> = ({ data }) => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="text-xs leading-none mb-2.5 lg:text-base lg:leading-none lg:mb-[14px]">
            [ 2 ]
          </div>
          <h2 className="text-lg leading-none uppercase font-Gloock mb-4 lg:text-5xl lg:leading-none lg:mb-6">
            Ресторанта разполага с
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 auto-rows-fr lg:gap-6">
          {restaurantSections.map((item, index) => (
            <div
              key={index}
              className="homeAmbience--gridItem w-full h-full relative lg:min-h-[360px]"
            >
              <div className="flex absolute z-10 top-5 left-5 bg-appBody rounded-[32px] px-[14px] py-2.5 max-w-[calc(100%-28px)] lg:top-8 lg:left-8 lg:px-6 lg:py-4">
                <h3 className="text-xs leading-none uppercase truncate lg:text-base lg:leading-none">
                  {item.title}
                </h3>
              </div>
              <Image
                src={item.image}
                className="w-full h-full top-0 left-0 object-cover"
                alt="ambience"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
            </div>
          ))}
        </div>
      </div>
      <HomePageDivider />
    </section>
  );
};

export default HomepageAmbience;
