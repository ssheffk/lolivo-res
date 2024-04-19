import React from "react";

import HomePageDivider from "./Divider";
import StarIcon from "./../../../assets/icons/star.svg";
import HomePageMap from "./Map";
import ButtonLink from "../button-link";
import Image from "next/image";
interface HomepageHeroProps {
  data: any;
}

const HomepageHero: React.FC<HomepageHeroProps> = ({ data }) => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-[200px]">
      <div className="container">
        <div className="relative mb-[14px] lg:mb-12">
          <svg
            viewBox="0 0 1376 986"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="w-full"
          >
            <path
              d="M0 238.786C403.766 -78.5849 972.234 -78.5849 1376 238.786V986H0V238.786Z"
              fill="url(#pattern0)"
            />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_560_272"
                  transform="matrix(0.000558036 0 0 0.000596162 0 -0.301242)"
                />
              </pattern>

              <image
                id="image0_560_272"
                width="1792"
                height="2688"
                xlinkHref={"./../../../assets/media/cover.jpg"}
              />
            </defs>
          </svg>
          <div className="absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-between xl:top-10 xl:w-full">
            <div className="flex flex-col items-end max-xl:hidden">
              <div className="text-lg leading-none mb-1.5">
                Шумен, ул.Спартак 24
              </div>
              <HomePageMap map={"https://maps.app.goo.gl/ZEzvJUTNZdTqd1Uy7"} />
            </div>
            <div className="h-px flex-1 bg-[#808000] mx-4 max-xl:hidden" />
            <div className="bg-white bg-opacity-40 px-4 py-[14px] rounded-[128px] max-w-max lg:px-20 lg:py-14">
              <div className="flex items-center">
                <Image
                  src={StarIcon}
                  className="w-2 h-2 lg:w-12 lg:h-12"
                  alt="star"
                />

                <h1 className="text-[#808000] text-xl leading-none font-Gloock mx-2.5 lg:text-[80px] lg:leading-none lg:mx-12 2xl:text-[112px] 2xl:leading-none">
                  {"Lolivo"}
                </h1>
                <Image
                  src={StarIcon}
                  className="w-2 h-2 lg:w-12 lg:h-12"
                  alt="star"
                />
              </div>
            </div>
            <div className="h-px flex-1 bg-[#D9D9D9] mx-4 max-xl:hidden" />
            <div className="homeHero--openTime max-xl:hidden">
              <div className="flex flex-col items-end max-xl:hidden">
                <div className="text-lg leading-none mb-1.5">
                  Работно време 9ч - 21ч
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
              <div className="">Раб. време 9ч - 21ч</div>
              <p className=" flex  text-appGray-400 hover:underline">
                (Пон-Нед)
              </p>
            </div>
          </div>
        </div>
        <div className="homeHero--description mb-6 lg:mb-14">
          <React.Fragment>
            <p className="text-sm leading-[1.3] tracking-[-0.41px] uppercase text-appGray-700 lg:text-[40px] lg:leading-none">
              текст да бъде добавен и тук информационен
            </p>
          </React.Fragment>
        </div>
        <ButtonLink className="uppercase max-w-max mx-auto">
          <span>При нас ще откриете</span>
        </ButtonLink>
        <HomePageDivider />
      </div>
    </section>
  );
};

export default HomepageHero;
