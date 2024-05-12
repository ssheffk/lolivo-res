import React from "react";

interface HomepageTestimonialsProps {
  data: any;
  items: any[];
}

const HomepageTestimonials: React.FC<HomepageTestimonialsProps> = ({
  data,
  items,
}) => {
  return (
    <section className="overflow-hidden pb-14 md:pb-20 lg:pb-[120px]">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="text-xs leading-none mb-2.5 lg:text-base lg:leading-none lg:mb-[14px]">
            [ 4 ]
          </div>
          <h2 className="text-lg leading-none font-Gloock mb-4 lg:text-5xl lg:leading-none lg:mb-6">
            {"Добре дошли в L`Оlivo"}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HomepageTestimonials;
