import React from "react";
import HomePageDivider from "./Divider";
import HomePageMap from "./Map";
import ButtonLink from "../button-link";
import Image from "next/image";
import Entrance from "./../../../assets/media/front-entrance.jpeg";
interface HomepageHeroProps {
  data: any;
}

const HomepageHero: React.FC<HomepageHeroProps> = ({ data }) => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-[200px]">
      <div className="container">
        <div className="relative mb-[14px] lg:mb-12">
          <Image
            src={Entrance}
            alt="entrance"
            className="rounded-tr-[600px] rounded-tl-[600px]"
          />
          <div className="absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-between  xl:w-full">
            <div className="flex flex-col items-end max-xl:hidden">
              <div className="text-lg leading-none mb-1.5 text-appGray-700">
                Шумен, ул.Спартак 24
              </div>
              <HomePageMap map={"https://maps.app.goo.gl/ZEzvJUTNZdTqd1Uy7"} />
            </div>
            <div className="h-px flex-1 bg-appGray-lolivo ml-4 max-xl:hidden" />
            <div className="h-px flex-1 bg-appGray-lolivo mr-4 max-xl:hidden" />
            <div className="homeHero--openTime max-xl:hidden">
              <div className="flex flex-col items-end max-xl:hidden">
                <div className="text-lg leading-none mb-1.5 text-appGray-700">
                  Работно време 8ч - 24ч
                </div>
                <p className="text-lg leading-none mb-1.5 flex  text-appGray-400 hover:underline lg:text-sm lg:leading-none">
                  (Понеделник-Неделя)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between mb-6 xl:hidden">
          <div>
            <div className="text-sm leading-none mb-1.5 lg:text-lg lg:leading-none"></div>
            <HomePageMap map={data} />
          </div>
          <div className="homeHero--openTime">
            <div className="flex flex-col items-end ">
              <div className="text-appGray-700">Раб. време 8ч - 24ч</div>
              <p className=" flex  text-appGray-400 hover:underline">
                (Пон-Нед)
              </p>
            </div>
          </div>
        </div>
        <div className="homeHero--description mb-6 lg:mb-14">
          <React.Fragment>
            <p className=" text-sm leading-[1.3] tracking-[-0.41px] uppercase text-appGray-700 lg:text-[40px] lg:leading-none">
              Открийте разнообразна гама от кулинарни удоволствия в нашия
              ресторант, включващи изискани вечери, приготвени от пресни местни
              продукти, с придружена обширна селекция от напитки, осигуряващи
              незабравимо изживяване за всички гости.
            </p>
          </React.Fragment>
        </div>
        <ButtonLink className="uppercase max-w-max mx-auto text-appGray-lolivo">
          <span>При нас ще откриете</span>
        </ButtonLink>
        <HomePageDivider />
      </div>
    </section>
  );
};

export default HomepageHero;
