import React from "react";
import HomePageDivider from "./Divider";

import Image from "next/image";
import {
  decorImage,
  mainImage,
  pizzaBarImage,
  selfieFlowersImage,
  teamBuildingImage,
  terraceImage,
} from "../lib/contants";

interface RestaurantSection {
  title: string;
  image: string;
}

const restaurantSections: RestaurantSection[] = [
  {
    title: "Бар",
    image: mainImage,
  },
  {
    title: "Селфи зона",
    image: selfieFlowersImage,
  },
  {
    title: "Пицария",
    image: pizzaBarImage,
  },
  {
    title: "Декор",
    image: decorImage,
  },
  {
    title: "Лятна тераса",
    image: terraceImage,
  },
  {
    title: "Просторна зала",
    image: teamBuildingImage,
  },
];
const HomepageAmbience: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="text-xs leading-none mb-2.5 lg:text-base lg:leading-none lg:mb-[14px]">
            [ 2 ]
          </div>
          <h2 className="text-lg leading-none uppercase font-Gloock mb-4 lg:text-5xl lg:leading-none lg:mb-6">
            Ресторанта разполага
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
                height={360}
                width={640}
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
