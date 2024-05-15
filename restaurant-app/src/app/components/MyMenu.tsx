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
      <Image
        src={
          "https://lolivo.bg/images/admin/index.php/apps/files_sharing/ajax/publicpreview.php?x=1920&y=561&a=true&file=1.jpg&t=JQPxvHjzMkqD6xJ&scalingup=0"
        }
        alt="menu-1"
        width="300"
        height="300"
      />
      <Image
        src={
          "https://lolivo.bg/images/admin/index.php/apps/files_sharing/ajax/publicpreview.php?x=1920&y=561&a=true&file=2.jpg&t=HtaKxxcMb9Gs37p&scalingup=0"
        }
        alt="menu-2"
        width="300"
        height="300"
      />
      <Image
        src={
          "https://lolivo.bg/images/admin/index.php/apps/files_sharing/ajax/publicpreview.php?x=1920&y=561&a=true&file=3.jpg&t=764f0LsLEaD2URL&scalingup=0"
        }
        alt="menu-3"
        width="300"
        height="300"
      />
      <Image
        src={
          "https://lolivo.bg/images/admin/index.php/apps/files_sharing/ajax/publicpreview.php?x=1920&y=561&a=true&file=4.jpg&t=RyknR6dCvGvBxdT&scalingup=0"
        }
        alt="menu-4"
        width="300"
        height="300"
      />
      <Image
        src={
          "https://lolivo.bg/images/admin/index.php/apps/files_sharing/ajax/publicpreview.php?x=1920&y=561&a=true&file=5.jpg&t=lt0gQNCetQ0bueM&scalingup=0"
        }
        alt="menu-5"
        width="300"
        height="300"
      />
      <Image
        src={
          "https://lolivo.bg/images/admin/index.php/apps/files_sharing/ajax/publicpreview.php?x=1920&y=561&a=true&file=6.jpg&t=M9ACEytkuSvVoPf&scalingup=0"
        }
        alt="menu-6"
        width="300"
        height="300"
      />
      <Image
        src={
          "https://lolivo.bg/images/admin/index.php/apps/files_sharing/ajax/publicpreview.php?x=1920&y=561&a=true&file=7.jpg&t=IZp0PLwr56nJrIH&scalingup=0"
        }
        alt="menu-7"
        width="300"
        height="300"
      />
      <Image
        src={
          "https://lolivo.bg/images/admin/index.php/apps/files_sharing/ajax/publicpreview.php?x=1920&y=561&a=true&file=8.jpg&t=KrHaUxeAFnBn43Z&scalingup=0"
        }
        alt="menu-8"
        width="300"
        height="300"
      />
      <Image
        src={
          "https://lolivo.bg/images/admin/index.php/apps/files_sharing/ajax/publicpreview.php?x=1920&y=561&a=true&file=9.jpg&t=rZiHMXcYUZ6fakt&scalingup=0"
        }
        alt="menu-9"
        width="300"
        height="300"
      />
      <Image
        src={
          "https://lolivo.bg/images/admin/index.php/apps/files_sharing/ajax/publicpreview.php?x=1920&y=561&a=true&file=10.jpg&t=Trm6kMumzsSFUs7&scalingup=0"
        }
        alt="menu-10 "
        width="300"
        height="300"
      />
      <Image
        src={
          "https://lolivo.bg/images/admin/index.php/apps/files_sharing/ajax/publicpreview.php?x=1920&y=561&a=true&file=11.jpg&t=naLdIpkXmMhtmHn&scalingup=0"
        }
        alt="menu-11 "
        width="300"
        height="300"
      />
      <Image
        src={
          "https://lolivo.bg/images/admin/index.php/apps/files_sharing/ajax/publicpreview.php?x=1920&y=561&a=true&file=12.jpg&t=iMWePvcfzeBXHja&scalingup=0"
        }
        alt="menu-12 "
        width="300"
        height="300"
      />
      <Image
        src={
          "https://lolivo.bg/images/admin/index.php/apps/files_sharing/ajax/publicpreview.php?x=1920&y=561&a=true&file=13.jpg&t=J1vzLohNDHgxiaP&scalingup=0"
        }
        alt="menu-13 "
        width="300"
        height="300"
      />
      <Image
        src={
          "https://lolivo.bg/images/admin/index.php/apps/files_sharing/ajax/publicpreview.php?x=1920&y=561&a=true&file=14.jpg&t=1sIzwNjISsf9aM2&scalingup=0"
        }
        alt="menu-14 "
        width="300"
        height="300"
      />
      <Image
        src={
          "https://lolivo.bg/images/admin/index.php/apps/files_sharing/ajax/publicpreview.php?x=1920&y=561&a=true&file=15.jpg&t=B2OeSqZi0Ft0GiM&scalingup=0"
        }
        alt="menu-15 "
        width="300"
        height="300"
      />
      <Image
        src={
          "https://lolivo.bg/images/admin/index.php/apps/files_sharing/ajax/publicpreview.php?x=1920&y=561&a=true&file=lolivo-16.jpg&t=gk67KAbBXXDEFzw&scalingup=0"
        }
        alt="last-page"
        width="300"
        height="300"
      />
    </HTMLFlipBook>
  );
}

export default MyMenu;
