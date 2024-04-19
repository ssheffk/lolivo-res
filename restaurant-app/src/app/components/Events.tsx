import React from "react";
import HomePageDivider from "./Divider";

import EventsPageEventCard from "../EventCard";
interface HomepageEventsProps {
  data: any;
  items: any[];
}

interface Event {
  data: string;
  title: string;
  description: string;
}

const events: Event[] = [
  {
    data: "Рождени дни",
    title: "Рождени дни",
    description:
      "Описание за рождени дни, че могат да се използват има зали снимки .. итн",
  },
  {
    data: "Юбилеи",
    title: "Юбилеи",
    description:
      "Описание за Юбилеи, че могат да се използват има зали снимки .. итн",
  },
  {
    data: "Мероприятия",
    title: "Мероприятия",
    description: "Всякакъв вид мероприятия могат да бъдат добавени тук",
  },
  {
    data: "Балове",
    title: "Балове",
    description: "Всякакъв вид мероприятия могат да бъдат добавени тук",
  },
];

const HomepageEvents: React.FC<HomepageEventsProps> = ({ data, items }) => {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center mb-8 lg:mb-20">
          <div className="text-xs leading-none mb-2.5 lg:text-base lg:leading-none lg:mb-[14px]">
            [ 3 ]
          </div>
          <h2 className="text-lg leading-none uppercase font-Gloock mb-4 lg:text-5xl lg:leading-none lg:mb-6">
            Събития
          </h2>
          <p
            className="text-sm leading-[1.3] tracking-[-0.41px] text-appGray-700 uppercase max-w-[745px] mx-auto
                    mb-8 lg:text-base lg:leading-[1.3] lg:mb-[45px]"
          >
            Може да се добави текст и тук
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {events.map((item, index) => (
            <EventsPageEventCard
              key={index}
              card={{
                data: `${item.data}`,
                title: `${item.title}`,
                description: `${item.description}`,
              }}
            />
          ))}
        </div>
      </div>
      <HomePageDivider arc />
    </section>
  );
};

export default HomepageEvents;
