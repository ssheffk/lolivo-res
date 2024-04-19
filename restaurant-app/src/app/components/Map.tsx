"use client";
import React, { useState, useRef, useEffect } from "react";
import { Transition } from "react-transition-group";
import classnames from "classnames";
import ButtonLink from "../button-link";
import Image from "next/image";
import Map from "./../../../assets/media/map.jpg";
interface HomepageMapProps {
  map: any;
}
const HomepageMap: React.FC<HomepageMapProps> = ({ map }) => {
  const [showMap, setShowMap] = useState<boolean>(false);

  const mapRef = useRef<HTMLDivElement | null>(null);

  const transitionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mapRef?.current && !mapRef?.current?.contains(event.target as Node)) {
        setShowMap(false);
      }
    };

    if (showMap) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMap]);
  return (
    <div className="relative" ref={mapRef}>
      <button
        className={classnames(
          "flex text-xs leading-none text-appGray-400 hover:underline lg:text-sm lg:leading-none",
          { underline: showMap }
        )}
        onClick={() => setShowMap((prev) => !prev)}
      >
        {/* <a href={"https://maps.app.goo.gl/ZEzvJUTNZdTqd1Uy7"} target="_blank"> */}
        Виж карта
        {/* </a> */}
      </button>
      <Transition
        appear={true}
        in={showMap}
        timeout={400}
        unmountOnExit={true}
        nodeRef={transitionRef}
      >
        {(state) => (
          <div
            className={classnames(
              "absolute z-50 bottom-0 w-[calc(100vw-48px)] pointer-events-none",
              `fade-${state}`
            )}
          >
            <div className="relative z-10 top-4 translate-y-full bg-[#E5E4DA] rounded-2xl p-4 pb-6 xl:p-2 xl:w-[440px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14184.512735698781!2d26.936674802038837!3d43.26365834510801!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a58afa366b5d89%3A0xeb9023e0409beac8!2sShumen%20Center%2C%20ul.%20%22Spartak%22%2024%2C%209703%20Shumen!5e0!3m2!1sen!2sbg!4v1713455963896!5m2!1sen!2sbg"
                width="400"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                className="w-full h-auto cover rounded-[10px] overflow-hidden pointer-events-auto"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* <Image
                src={Map}
                alt="map"
                width={848}
                height={480}
                className="w-full h-auto cover rounded-[10px] overflow-hidden pointer-events-auto"
              /> */}
              <div className="grid grid-cols-2 gap-3 mt-6 pointer-events-auto xl:hidden">
                <ButtonLink
                  theme="fill"
                  hide-arrow
                  className="justify-center uppercase"
                  onClick={() => setShowMap(false)}
                >
                  <span className="text-appText">Затвори</span>
                </ButtonLink>
                <ButtonLink
                  hide-arrow
                  className="justify-center uppercase"
                  onClick={() => setShowMap(false)}
                >
                  <span>Виж карта</span>
                </ButtonLink>
              </div>
            </div>
            <div
              className="fixed top-0 left-0 w-screen h-screen bg-[#17171799] cursor-pointer xl:hidden"
              onClick={() => setShowMap(false)}
            />
          </div>
        )}
      </Transition>
    </div>
  );
};

export default HomepageMap;
