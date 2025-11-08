"use client";
import React from "react";
import HTMLFlipBook from "react-pageflip";

import Image from "next/image";
const menuPages = [
  {
    page: 1,
    src: "/1.jpg",
  },
  {
    page: 2,
    src: "/2.jpg",
  },
  {
    page: 3,
    src: "/3.jpg",
  },
  {
    page: 4,
    src: "/4.jpg",
  },
  {
    page: 5,
    src: "/5.jpg",
  },
  {
    page: 6,
    src: "/6.jpg",
  },
  {
    page: 7,
    src: "/7.jpg",
  },
  {
    page: 8,
    src: "/8.jpg",
  },
  {
    page: 9,
    src: "/9.jpg",
  },
  {
    page: 10,
    src: "/10.jpg",
  },
  {
    page: 11,
    src: "/11.jpg",
  },
  {
    page: 12,
    src: "/12.jpg",
  },
  {
    page: 13,
    src: "/13.jpg",
  },
  {
    page: 14,
    src: "/14.jpg",
  },
  {
    page: 15,
    src: "/15.jpg",
  },
  {
    page: 16,
    src: "/16.jpg",
  },
  {
    page: 17,
    src: "/17.jpg",
  },
  {
    page: 18,
    src: "/18.jpg",
  },
  {
    page: 19,
    src: "/19.jpg",
  },
  {
    page: 20,
    src: "/20.jpg",
  },
];
function MyMenu(props: any) {
  return (
    <HTMLFlipBook
      width={300}
      height={500}
      className="flipbook"
      // style={{ border: "1px solid black" }}
      startPage={0}
      size="stretch"
      style={{}}
      maxWidth={0}
      minHeight={0}
      maxHeight={0}
      drawShadow={false}
      flippingTime={1000}
      usePortrait={false}
      startZIndex={0}
      autoSize={true}
      maxShadowOpacity={0}
      showCover={false}
      mobileScrollSupport={true}
      clickEventForward={true}
      useMouseEvents={true}
      swipeDistance={0}
      showPageCorners={true}
      disableFlipByClick={false}
      // children={undefined}
      minWidth={0}
    >
      {menuPages.map((page: any, index: number) => (
        <Image
          key={index}
          src={page.src}
          alt={`MENU-PAGE-${index}`}
          width="300"
          height="400"
        />
      ))}
    </HTMLFlipBook>
  );
}

export default MyMenu;
