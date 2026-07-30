export const SITE_URL = "https://sourca-workflow.vercel.app";
export const OG_IMAGE_URL = `${SITE_URL}/sourcixa-og.png`;
export const pageUrl = (path = "/") => `${SITE_URL}${path === "/" ? "" : path}`;
