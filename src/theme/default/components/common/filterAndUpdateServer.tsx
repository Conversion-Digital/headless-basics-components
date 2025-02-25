
import cheerio from "cheerio";
import { filterAndUpdateTags, removeHeadBodyTag } from "./filterAndUpdateClass";
import { processURLForNavigationServer } from "@conversiondigital/cd-headless-data"
import { LanguageSite } from "@conversiondigital/cd-headless-data/src/interfaces"

export async function filterAndUpdateClassServer(html: string, languageSite: LanguageSite):Promise<string> {
  const passOne = filterAndUpdateTags(html, languageSite);
  const passTwo = await filterAndUpdateHrefServer(passOne, languageSite);
  const finamHtml = removeHeadBodyTag(passTwo);
  return finamHtml;
}

export async function filterAndUpdateHrefServer(html: string, languageSite: LanguageSite):Promise<string> {
  if (!html && typeof (html) !== 'string') {
    return "";
  }

  const $ = cheerio.load(html);

  // Process anchor tags' href attribute
  await processAnchorTagsServer($, languageSite);

  return $.html();
}

export async function processAnchorTagsServer($: any, languageSite: LanguageSite) {
  const anchorElements = Array.from($("a"));

  await Promise.all(anchorElements.map(async (element) => {
    const href = $(element).attr("href");
    if (href) {
      const processedHref = await processURLForNavigationServer(href, languageSite);
      $(element).attr('href', processedHref);
      $(element).addClass("underline text-my-yellow font-medium pb-2 inline-block");
    }
  }));
}
