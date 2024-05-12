import React from "react";

import Selfie from "./../../assets/media/selfie.jpg";
import Image from "next/image";

interface EventsPageEventCardProps {
  card: any;
}
const EventsPageEventCard: React.FC<EventsPageEventCardProps> = ({ card }) => {
  return (
    <article className="px-6 py-8 rounded-2xl bg-[#EDEBE1]">
      <Image
        src={card.image ? card.image : Selfie}
        alt="event"
        className="cover aspect-[1.25] rounded-2xl overflow-hidden mb-4 lg:aspect-[1.77] lg:mb-6"
      />

      <div className="text-xs leading-none tracking-[-0.41px] text-appGray-600 uppercase mb-2 lg:text-base lg:leading-none lg:mb-3">
        {card.date}
      </div>
      <h3 className="leading-none font-Gloock mb-[14px] lg:text-[32px] lg:leading-none lg:mb-6">
        {card.title}
      </h3>
    </article>
  );
};

export default EventsPageEventCard;
