import React from "react";
import { GetStaticProps } from "next";
import { PageWrapper } from "../PageWrapper";

import ArchWithStar from "../components/ArcWithStar";

import ButtonLink from "../button-link";
import Image from "next/image";
// import Map from "./../../../assets/media/location.png";
import { location } from "../lib/contants";

const ContactPage: React.FC<any> = ({ header, footer, page }) => {
  return (
    <PageWrapper page={page} header={""} footer={""}>
      <section className="pt-[108px] pb-10 overflow-hidden md:pb-20 lg:pt-[218px] lg:pb-[120px]">
        <div className="container max-w-[1198px] min-h-dvh">
          <ArchWithStar />
          <div className="relative px-4 max-w-[400px] mx-auto lg:max-w-[560px] xl:px-0">
            <h1 className="text-xl leading-none font-Gloock uppercase text-center mb-8 lg:text-5xl lg:leading-none lg:mb-20">
              Къде можете да ни намерите
            </h1>

            <p className="contactPage--description text-sm leading-[1.3] tracking-[-0.41px]  text-center text-appGray-700 mb-8 lg:text-base lg:leading-[1.3] lg:mb-12">
              Работно време от 08:00ч до 24:00ч (Понеделник-Неделя)
            </p>
            <div className="bg-[#E5E4DA] rounded-2xl p-4 mb-8 lg:mb-10">
              <Image
                src={"/location.png"}
                alt="map"
                width={1078}
                height={678}
                className="w-full h-auto cover rounded-[10px] overflow-hidden pointer-events-auto"
              />
            </div>
            <ButtonLink to={location} className="uppercase max-w-max mx-auto">
              <span>Виж карта</span>
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ContactPage;
