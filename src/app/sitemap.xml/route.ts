const baseUrl = "https://digitalforge.be";

const locales: string[] = ["tr", "en", "nl", "fr"];
const pages: string[] = ["", "/about", "/services", "/hotpress", "/contact", "/projects"];

const createSitemapUrlSet = (pages: string[], locales: string[]): string => {
  const urlSets = locales.map((locale) =>
    pages
      .map(
        (page) =>
          `<url>
            <loc>${baseUrl}/${locale}${page}</loc>
          </url>`
      )
      .join("")
  );

  return `<urlset 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${urlSets.join("")}
      </urlset>`;
};

export const GET = async (): Promise<Response> => {
  return new Response(createSitemapUrlSet(pages, locales), {
    headers: {
      "Content-Type": "text/xml",
    },
  });
};
