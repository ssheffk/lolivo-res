"use client";
import Header from "./Header";
import Footer from "./Footer";
import React, { FC, PropsWithChildren, useMemo } from "react";
// import { PageProps } from '@/types';
import Head from "next/head";

interface ExtendedProps extends PropsWithChildren<any> {
  defaultTitle?: string;
}
export const PageWrapper: FC<ExtendedProps> = ({ children }) => {
  const title = "Ресторант - L'Olivo";
  const description = "Ресторант с детски кът";
  const image = "https://example.com/pasta.jpg";
  const domain = "https://lolivo.bg";
  const routePath = "/pasta-recipe";
  return (
    <div className="overflow-hidden">
      <Head>
        <title>{`L'Olivo`}</title>
        <meta name="description" content={"Delicius rest"} />
        <meta property="og:site_name" content={`L'Olivo`} />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:title" content={`${title} - Tastyyy`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="twitter:url" content={`${domain}`} />
        <meta property="twitter:title" content={`L'Olivo`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gloock&family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" sizes="16x16" href="/l-olivo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/l-olivo.png" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
