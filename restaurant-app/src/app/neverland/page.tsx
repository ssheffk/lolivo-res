import { GetStaticProps } from "next";
import React from "react";
import { PageWrapper } from "../PageWrapper";
import ArchWithStar from "../components/ArcWithStar";
import EventsPageEventCard from "../EventCard";

import neverland from "./../../../assets/media/Neverland_.png";
import lava from "./../../../assets/media/neverland/lava.jpg";
import football from "./../../../assets/media/neverland/football.jpg";
import shoot from "./../../../assets/media/neverland/shoot.jpg";

import Image from "next/image";

const NeverlandPage: React.FC = () => {
  return (
    <PageWrapper page={"page"} header={"header"} footer={"footer"}>
      <section className="pt-[108px] pb-10 overflow-hidden md:pb-20 lg:pt-[218px] lg:pb-[120px] min-h-dvh">
        <div className="container max-w-[1198px] ">
          <ArchWithStar />
          <div className="relative px-4 max-w-[400px] mx-auto mb-10 lg:max-w-[745px] lg:mb-20 xl:px-0">
            <Image
              src={neverland}
              alt="neverland"
              width={1078}
              height={678}
              className="w-full h-auto cover rounded-[10px] overflow-hidden pointer-events-auto"
            />
            <h1 className="text-xl leading-none font-Gloock uppercase text-center mb-6 lg:text-5xl lg:leading-none">
              Coming soon...
            </h1>
          </div>
        </div>
        <div className="container">
          {
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
              {[
                { image: lava, title: "Lava", description: "Lava game" },
                {
                  image: football,
                  title: "Football",
                  description: "Football game",
                },
                { image: shoot, title: "Shoot", description: "Shoot game" },
              ].map((item, index) => (
                <EventsPageEventCard key={index} card={item} />
              ))}
            </div>
          }
        </div>
      </section>
    </PageWrapper>
  );
};

// export const getStaticProps: GetStaticProps<
//   PageProps<EventsPageData>
// > = async () => {
//   const client = getBcmsClient();
//   try {
//     const { header, footer } = await getHeaderAndFooter(client);
//     const eventsPage = (await client.entry.get({
//       // Template name or ID
//       template: "events_page",
//       // Entry slug or ID
//       entry: "events",
//     })) as EventsPageEntry;
//     if (!eventsPage) {
//       throw new Error("Events page entry does not exist.");
//     }
//     const eventItems = (await client.entry.getAll({
//       // Event item name or ID
//       template: "event",
//     })) as EventsPageEntry[];
//     return {
//       props: {
//         header,
//         footer,
//         page: {
//           meta: eventsPage.meta.en as EventsPageEntryMeta,
//           events: eventItems.map((e) => e.meta.en) as EventEntryMeta[],
//         },
//       },
//     };
//   } catch (error) {
//     return {
//       notFound: true,
//     };
//   }
// };

export default NeverlandPage;
