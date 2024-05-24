'use client';
import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page_1 from '1.jpg';
import Page_2 from '2.jpg';
import Page_3 from '3.jpg';
import Page_4 from '4.jpg';
import Page_5 from '5.jpg';
import Page_6 from '6.jpg';
import Page_7 from '7.jpg';
import Page_8 from '8.jpg';
import Page_9 from '9.jpg';
import Page_10 from '10.jpg';
import Page_11 from '11.jpg';
import Page_12 from '12.jpg';
import Page_13 from '13.jpg';
import Page_14 from '14.jpg';
import Page_15 from '15.jpg';
import Page_16 from '16.jpg';

import Image from 'next/image';
const menuPages = [
  {
    page: 1,
    src: '/1.jpg',
  },
  {
    page: 2,
    src: '/2.jpg',
  },
  {
    page: 3,
    src: '/3.jpg',
  },
  {
    page: 4,
    src: '/4.jpg',
  },
  {
    page: 5,
    src: '/5.jpg',
  },
  {
    page: 6,
    src: '/6.jpg',
  },
  {
    page: 7,
    src: '/7.jpg',
  },
  {
    page: 8,
    src: '/8.jpg',
  },
  {
    page: 9,
    src: '/9.jpg',
  },
  {
    page: 10,
    src: '/10.jpg',
  },
  {
    page: 11,
    src: '/11.jpg',
  },
  {
    page: 12,
    src: '/12.jpg',
  },
  {
    page: 13,
    src: '/13.jpg',
  },
  {
    page: 14,
    src: '/14.jpg',
  },
  {
    page: 15,
    src: '/15.jpg',
  },
  {
    page: 16,
    src: '/16.jpg',
  },
];
function MyMenu(props: any) {
  return (
    <HTMLFlipBook
      width={300}
      height={400}
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
          height="300"
        />
      ))}
    </HTMLFlipBook>
  );
}

export default MyMenu;
