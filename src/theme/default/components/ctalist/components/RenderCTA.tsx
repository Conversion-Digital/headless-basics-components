import { checkPrefetchAvailability, cn } from "@conversiondigital/headless-basics-data/src";
import Link from "next/link";

export const renderCTA = (linkObj: { name: any; url: string | undefined; }, languageSite: any, className = "") => {
  if (linkObj?.name) {
    const isInternalLink = typeof linkObj?.url === "string" && linkObj.url.startsWith("/");

     if (isInternalLink) {
       return (
         <Link
           className={cn(
             "mt-8 box-border w-full rounded-full bg-my-yellow px-8 py-3 text-center text-base font-800 uppercase tracking-0.1em text-my-blue transition hover:bg-my-brown-grey hover:text-my-white sm:w-auto sm:max-w-[300px]",
             className
           )}
           href={linkObj?.url ?? ""}
           prefetch={checkPrefetchAvailability(linkObj?.url)}
           data-attr-prefetch={checkPrefetchAvailability(linkObj?.url)}
         >
           {linkObj?.name ?? ""}
         </Link>
       );
     } else {
       return (
         <a
           className={cn(
             "mt-8 box-border w-full rounded-full bg-my-yellow px-8 py-3 text-center text-base font-800 uppercase tracking-0.1em text-my-blue transition hover:bg-my-brown-grey hover:text-my-white sm:w-auto sm:max-w-[300px]",
             className
           )}
           href={linkObj?.url ?? ""}
         >
           {linkObj?.name ?? ""}
         </a>
       );
     }
   }
  return null;
};
