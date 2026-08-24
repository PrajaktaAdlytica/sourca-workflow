export const SITE_URL = "https://origincue.com";
export const OG_IMAGE_URL = `${SITE_URL}/origincue-og.png`;
export const pageUrl = (path = "/") => `${SITE_URL}${path === "/" ? "" : path}`;
