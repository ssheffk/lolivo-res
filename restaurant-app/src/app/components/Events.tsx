import React from 'react';
import HomePageDivider from './Divider';

import EventsPageEventCard from '../EventCard';
import {
  anniversaryImage,
  familyImage,
  main2Image,
  teamBuildingImage,
} from '../lib/contants';

interface Event {
  data: string;
  title: string;
  image: string;
}

const events: Event[] = [
  {
    data: 'Рожден ден',
    title: 'Рожден ден',
    image: '/main2.jpeg',
  },
  {
    data: 'Семейни мероприятия',
    title: 'Семейни мероприятия',
    image: '/family.jpeg',
  },

  {
    data: 'Тийм билдинг',
    title: 'Тийм билдинг',
    image: '/anniversiry.jpeg',
  },
  {
    data: 'Юбилей',
    title: 'Юбилей',
    image: '/hall.jpeg',
  },
];

const HomepageEvents: React.FC = () => {
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
                image: `${item.image}`,
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
