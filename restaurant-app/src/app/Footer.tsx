import React from "react";
interface FooterProps {
  data: any;
}

interface FooterData {
  title: string;
  content: { title: string; link: string }[];
}

const footerData: FooterData[] = [
  {
    title: "Връзки",
    content: [
      {
        title: "Facebook",
        link: "https://www.facebook.com/profile.php?id=61554922003302",
      },
      {
        title: "Instagram",
        link: "https://www.instagram.com/lolivo_bar_and_dinner/?igsh=MXFob2kxeDR1NGViOQ==",
      },
    ],
  },
  {
    title: "Запитвания",
    content: [
      {
        title: "0882 244 244",
        link: "",
      },
    ],
  },
  {
    title: "Локация",
    content: [
      {
        title: "град Шумен, ул. Спартак 24",
        link: "https://maps.app.goo.gl/ZEzvJUTNZdTqd1Uy7",
      },
    ],
  },
];

const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="bg-appText py-10 md:py-12">
      <div className="container">
        <div className="md:grid md:grid-cols-[auto,1fr]">
          <nav className="grid grid-cols-[repeat(2,auto)] justify-between gap-x-12 gap-y-8 mx-auto mb-10 max-md:max-w-[225px] md:mb-20 lg:grid-cols-[repeat(4,auto)] lg:gap-20 xl:gap-[128px]">
            {footerData.map((col, index) => (
              <div key={index} className="content footer--nav-col">
                <div className="content-primitive content--paragraph">
                  <p>{col.title}</p>
                </div>
                {col.content.map((item, index) => (
                  <div
                    key={index}
                    className="content-primitive content--bulletList"
                  >
                    <ul>
                      <li>
                        <a
                          {...(item.link.length > 0 ? { href: item.link } : {})}
                          target="_blank"
                          className="text-sm leading-[1.3] tracking-[-0.41px] text-appGray-500 text-center mb-8
                     md:text-base md:leading-[1.3] md:text-left"
                        >
                          {item.title}
                        </a>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </nav>
        </div>
        <div className="flex flex-col items-center text-center md:flex-row md:justify-between">
          <span className="text-sm leading-none tracking-[-0.41px] text-appBody mr-2 md:text-base md:leading-none md:mr-3">
            Powered by serjs
          </span>

          <div className="text-xs leading-none text-appGray-500 md:text-base md:leading-none md:text-appBody">
            &copy; {new Date().getFullYear()} NEVERLAND. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
