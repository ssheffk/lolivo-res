"use client";
import React from "react";
import HTMLFlipBook from "react-pageflip";
import Page_1 from "./../../../assets/media/menu/1.jpg";
import Page_2 from "./../../../assets/media/menu/2.jpg";
import Page_3 from "./../../../assets/media/menu/3.jpg";
import Page_4 from "./../../../assets/media/menu/4.jpg";
import Page_5 from "./../../../assets/media/menu/5.jpg";
import Page_6 from "./../../../assets/media/menu/6.jpg";
import Page_7 from "./../../../assets/media/menu/7.jpg";
import Page_8 from "./../../../assets/media/menu/8.jpg";
import Page_9 from "./../../../assets/media/menu/9.jpg";
import Page_10 from "./../../../assets/media/menu/10.jpg";
import Page_11 from "./../../../assets/media/menu/11.jpg";
import Page_12 from "./../../../assets/media/menu/12.jpg";
import Page_13 from "./../../../assets/media/menu/13.jpg";
import Page_14 from "./../../../assets/media/menu/14.jpg";
import Page_15 from "./../../../assets/media/menu/15.jpg";

import Image from "next/image";
function MyMenu(props: any) {
  return (
    <HTMLFlipBook
      // style={{ border: "1px solid black" }}
      width={300}
      height={500}
    >
      <Image src={Page_1} alt="menu-1" />
      <Image src={Page_2} alt="menu-2" />
      <Image src={Page_3} alt="menu-3" />
      <Image src={Page_4} alt="menu-4" />
      <Image src={Page_5} alt="menu-5" />
      <Image src={Page_6} alt="menu-6" />
      <Image src={Page_7} alt="menu-7" />
      <Image src={Page_8} alt="menu-8" />
      <Image src={Page_9} alt="menu-9" />
      <Image src={Page_10} alt="menu-10" />
      <Image src={Page_11} alt="menu-11" />
      <Image src={Page_12} alt="menu-12" />
      <Image src={Page_13} alt="menu-13" />
      <Image src={Page_14} alt="menu-14" />
      <Image src={Page_15} alt="menu-15" />
      <Image src={Page_1} alt="last-page" />
    </HTMLFlipBook>
  );
}

export default MyMenu;
