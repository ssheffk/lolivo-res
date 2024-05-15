"use client";
import React, { useState, useRef, useEffect } from "react";
import { Transition } from "react-transition-group";
import classnames from "classnames";
import ButtonLink from "../button-link";
import Image from "next/image";
import Map from "./../../../assets/media/map.jpg";
import { location } from "../lib/contants";
interface HomepageMapProps {
  map: string;
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
        Виж карта
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
                src={map}
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                className="w-full h-auto cover rounded-[10px] overflow-hidden pointer-events-auto"
              ></iframe>

              <div className="grid grid-cols-2 gap-3 mt-6 pointer-events-auto xl:hidden">
                <ButtonLink
                  theme="fill"
                  hide-arrow
                  className="justify-center uppercase"
                  onClick={() => setShowMap(false)}
                >
                  <span className="text-appText">Затвори</span>
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
