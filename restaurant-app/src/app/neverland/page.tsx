"use client";
import { GetStaticProps } from "next";
import React from "react";
import { PageWrapper } from "../PageWrapper";
import ArchWithStar from "../components/ArcWithStar";

import Image from "next/image";

const NeverlandPage: React.FC = () => {
  return (
    <PageWrapper page={"page"} header={"header"} footer={"footer"}>
      <section className="pt-[108px] pb-10 overflow-hidden md:pb-20 lg:pt-[218px] lg:pb-[120px] min-h-[130vh]">
        <div className="container max-w-[1198px] ">
          <ArchWithStar />
          <div className="relative px-4 max-w-[400px] mx-auto mb-10 lg:max-w-[745px] lg:mb-20 xl:px-0">
            <Image
              src={"/Neverland_.png"}
              alt="neverland"
              width={1078}
              height={678}
              className="w-full h-auto cover rounded-[10px] overflow-hidden pointer-events-auto"
            />
            <h1 className="text-xl leading-none font-Gloock uppercase text-center mb-6 lg:text-5xl lg:leading-none">
              Очаквайте скоро ...
            </h1>
          </div>
        </div>
        {/* <div className="container">
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
        </div> */}
      </section>
    </PageWrapper>
  );
};

// export const getStaticProps: GetStaticProps<any> = async () => {
//   const postsDirectory = path.join(process.cwd(), "posts");
//   const filenames = await fs.readdir(postsDirectory);

//   const posts = filenames.map(async (filename) => {
//     const filePath = path.join(postsDirectory, filename);
//     const fileContents = await fs.readFile(filePath, "utf8");

//     // Generally you would parse/transform the contents
//     // For example you can transform markdown to HTML here

//     return {
//       filename,
//       content: fileContents,
//     };
//   });
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts: await Promise.all(posts),
//     },
//   };
// };
export default NeverlandPage;
