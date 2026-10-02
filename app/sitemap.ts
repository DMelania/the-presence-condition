import type {MetadataRoute} from "next";
import archive from "../data/public-archive.json";
import conditions from "../data/conditions.json";
import {SITE_URL} from "./site-metadata";

export const dynamic="force-static";

export default function sitemap():MetadataRoute.Sitemap{
  const visible=archive.filter(p=>p.content_pool==="ARCHIVE"||p.curation_status==="CURATED"||p.curation_status==="SEQUENCE_MEMBER"||p.home_featured);
  const paths=[
    "",
    "/archive",
    "/condition",
    "/about",
    "/info",
    "/copyright",
    ...conditions.map(condition=>`/condition/${condition.slug}`),
    ...visible.map(p=>`/archive/${p.archive_id}`),
  ];
  return paths.map(path=>({url:path?`${SITE_URL}${path}/`:`${SITE_URL}/`}));
}
