import type {Metadata} from "next";

export const SITE_URL="https://ddaiana.github.io/the-presence-condition";
export const SITE_NAME="The Presence Condition";
export const SITE_DESCRIPTION="An ongoing photography project by D. Melania, recording photographs as evidence that a person was present.";

export function pageMetadata({
  title,
  description,
  path,
  image="/archive/TPC-00172.jpg",
}: {
  title:string;
  description:string;
  path:string;
  image?:string;
}):Metadata{
  const url=path?`${SITE_URL}${path}/`:`${SITE_URL}/`;
  const imageUrl=`${SITE_URL}${image}`;
  return {
    title,
    description,
    alternates:{canonical:url},
    openGraph:{
      title,
      description,
      url,
      siteName:SITE_NAME,
      type:"website",
      images:[{url:imageUrl}],
    },
    twitter:{card:"summary_large_image",title,description,images:[imageUrl]},
  };
}
