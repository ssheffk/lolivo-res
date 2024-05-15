"use client";
import React from "react";
import HTMLFlipBook from "react-pageflip";
// import Page_1 from "1.jpg";
// import Page_2 from "2.jpg";
// import Page_3 from "3.jpg";
// import Page_4 from "4.jpg";
// import Page_5 from "5.jpg";
// import Page_6 from "6.jpg";
// import Page_7 from "7.jpg";
// import Page_8 from "8.jpg";
// import Page_9 from "9.jpg";
// import Page_10 from "10.jpg";
// import Page_11 from "11.jpg";
// import Page_12 from "12.jpg";
// import Page_13 from "13.jpg";
// import Page_14 from "14.jpg";
// import Page_15 from "15.jpg";

import Image from "next/image";

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
      <Image src={"/1.jpg"} alt="menu-1" width="300" height="300" />
      <Image src={"/2.jpg"} alt="menu-2" width="300" height="300" />
      <Image src={"/3.jpg"} alt="menu-3" width="300" height="300" />
      <Image src={"/4.jpg"} alt="menu-4" width="300" height="300" />
      <Image src={"/5.jpg"} alt="menu-5" width="300" height="300" />
      <Image src={"/6.jpg"} alt="menu-6" width="300" height="300" />
      <Image src={"/7.jpg"} alt="menu-7" width="300" height="300" />
      <Image src={"/8.jpg"} alt="menu-8" width="300" height="300" />
      <Image src={"/9.jpg"} alt="menu-9" width="300" height="300" />
      <Image src={"/10.jpg"} alt="menu-10 " width="300" height="300" />
      <Image src={"/11.jpg"} alt="menu-11 " width="300" height="300" />
      <Image src={"/12.jpg"} alt="menu-12 " width="300" height="300" />
      <Image src={"/13.jpg"} alt="menu-13 " width="300" height="300" />
      <Image src={"/14.jpg"} alt="menu-14 " width="300" height="300" />
      <Image src={"/15.jpg"} alt="menu-15 " width="300" height="300" />
      <Image src={"/1.jpg"} alt="last-pa ge" width="300" height="300" />
    </HTMLFlipBook>
  );
}

export default MyMenu;
