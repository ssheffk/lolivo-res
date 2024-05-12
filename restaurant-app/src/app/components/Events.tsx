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
}

const events: Event[] = [
  {
    data: "Рожден ден",
    title: "Рожден ден",
  },
  {
    data: "Семейни мероприятия",
    title: "Семейни мероприятия",
  },

  {
    data: "Тийм билдинг",
    title: "Тийм билдинг",
  },
  {
    data: "Юбилей",
    title: "Юбилей",
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
            При нас можете да отпразнувате
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {events.map((item, index) => (
            <EventsPageEventCard
              key={index}
              card={{
                data: `${item.data}`,
                title: `${item.title}`,
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
