import type { Metadata } from "next";
import "./globals.css";
import "./refinements.css";
import {SITE_DESCRIPTION,SITE_NAME,SITE_URL} from "./site-metadata";

export const metadata: Metadata = {
  metadataBase:new URL(SITE_URL),
  title:{default:"The Presence Condition — Photography Project by D. Melania",template:`%s — ${SITE_NAME}`},
  description:SITE_DESCRIPTION,
  authors:[{name:"D. Melania"}],
  creator:"D. Melania",
  publisher:"D. Melania",
  category:"Photography",
  alternates:{canonical:`${SITE_URL}/`},
  robots:{index:true,follow:true},
  openGraph:{
    title:"The Presence Condition — Photography Project by D. Melania",
    description:SITE_DESCRIPTION,
    url:`${SITE_URL}/`,
    siteName:SITE_NAME,
    type:"website",
    images:[{url:`${SITE_URL}/archive/TPC-00172.jpg`}],
  },
  twitter:{
    card:"summary_large_image",
    title:"The Presence Condition — Photography Project by D. Melania",
    description:SITE_DESCRIPTION,
    images:[`${SITE_URL}/archive/TPC-00172.jpg`],
  },
};

const structuredData={
  "@context":"https://schema.org",
  "@type":"CreativeWork",
  name:SITE_NAME,
  url:`${SITE_URL}/`,
  description:SITE_DESCRIPTION,
  creator:{
    "@type":"Person",
    name:"D. Melania",
    sameAs:["https://www.instagram.com/d._melania/"],
  },
  image:`${SITE_URL}/archive/TPC-00172.jpg`,
  genre:["Photography","Conceptual art","Photographic archive"],
  inLanguage:"en",
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/>{children}</body></html>}
