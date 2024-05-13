import React from "react";
import ArchWithStar from "../components/ArcWithStar";
import { PageWrapper } from "../PageWrapper";

const ReservationPage: React.FC<any> = ({ header, footer, page }) => {
  return (
    <PageWrapper page={page} header={header} footer={footer}>
      <section className="pt-[108px] pb-10 overflow-hidden md:pb-20 lg:pt-[218px] lg:pb-[120px] ">
        <div className="container max-w-[1198px] min-h-dvh">
          <ArchWithStar />
          <div className="relative px-4 max-w-[400px] mx-auto lg:max-w-[808px] xl:px-0">
            <h1 className="text-xl leading-none font-Gloock uppercase text-center mb-10 lg:text-5xl lg:leading-none lg:mb-14">
              Телефон за резервации
            </h1>
            <div className="grid grid-cols-1 gap-4 max-w-[850px] mx-auto lg:gap-6">
              <div className="border border-[#DBD9D5] rounded-[7px] p-6">
                <h2 className="leading-none tracking-[-0.41px] font-Gloock mb-[14px] lg:text-[32px] lg:leading-none lg:mb-5">
                  Мениджър
                </h2>
                <div className="content text-sm leading-normal tracking-[-0.41px] text-appGray-200 lg:text-lg lg:leading-normal">
                  <div className="content-primitive content--paragraph">
                    <p>0882 244 244</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ReservationPage;
