"use client";
import HomePageDivider from "./Divider";
import Image from "next/image";

interface MenuItem {
  title: string;
  image: string;
}

const menuData: MenuItem[] = [
  {
    title: "Закуска",

    image: "/breakfast.jpg",
  },
  {
    title: "Обяд",

    image: "/lunch.jpg",
  },
  {
    title: "Вечеря",

    image: "/dinner.jpg",
  },
];

const HomepageMenu: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center mb-8 lg:mb-[88px]">
          <div className="text-xs leading-none mb-2.5 lg:text-base lg:leading-none lg:mb-[14px]">
            [ 1 ]
          </div>
          <h2 className="text-lg leading-none uppercase font-Gloock mb-4 lg:text-5xl lg:leading-none lg:mb-6">
            Комбинация
          </h2>
          <p className="text-sm leading-[1.3] tracking-[-0.41px] text-appGray-700 uppercase max-w-[745px] mx-auto lg:text-base lg:leading-[1.3]">
            от ястия
          </p>
        </div>
      </div>
      {menuData.map((item: MenuItem, index) => (
        <div key={index} className="flex relative">
          {
            <div className="container">
              <div className="relative z-10 flex flex-col items-center text-center py-12 max-w-[765px] mx-auto lg:py-[150px]">
                <h3 className="text-sm leading-none font-Gloock text-white uppercase mb-3 lg:text-[32px] lg:leading-none lg:mb-[18px]">
                  {item.title}
                </h3>
              </div>
              <Image
                alt="sample"
                src={item.image}
                objectFit="cover"
                fill
                className="w-full h-full top-0 left-0 object-cover rounded-2xl"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
            </div>
          }
        </div>
      ))}
      <HomePageDivider />
    </section>
  );
};

export default HomepageMenu;
