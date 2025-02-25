"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cnm as cn } from "../../utils/cnMerge";;
import { countryCodeWithNames } from "../../utils/constants";
import { getCookieValue, setGeoRedirectedCookie } from "../../utils/cookie";

export const GeoAlert = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [websiteCountryCode, setWebsiteCountryCode] = useState("US"); // Default to "US" if no country in the URL
  const currentCountryCode: string | undefined = getCookieValue("country");

  useEffect(() => {
    // Extract the visited country from the pathname
    const pathCountryCode = pathname.split("/")[1].toUpperCase();
    if (countryCodeWithNames[pathCountryCode as keyof typeof countryCodeWithNames]) {
      setWebsiteCountryCode(pathCountryCode);
    } else {
      setWebsiteCountryCode("US"); // Default to "US"
    }
  }, [pathname]);

  const closePopup = () => {
    setGeoRedirectedCookie();

    // In this case we avoid React state as the initial code for display is handled in
    // vanilla JS within the layout and is lazy loaded.
    const geoPopup = document.getElementById("geo-popup");
    if (geoPopup) {
      geoPopup.style.display = "none";
    }
  };

  /*
   * Following method is used to compare and identify that current location is matched with site url or not.
   */
  const checkCurrentLocation = () => {
    if (currentCountryCode) {
      return (pathname === "/" && currentCountryCode === "US") || pathname.includes(currentCountryCode.toLowerCase());
    }
    return false;
  };

  // Function to get button class based on screen size and country code
  const getButtonClass = (countryCode: string) => {
    const additionalClasses = countryCode === "US" ? "w-3/12" : "w-5/12 sm:w-4/12";
    return additionalClasses;
  };

  return (
    <div
      id="geo-popup"
      style={{ display: "none" }}
      className="fixed sm:bottom-4 bottom-20 sm:w-full w-95-per sm:right-14 sm:left-auto left-1/2 sm:mb-0 mb-1 sm:translate-x-px -translate-x-2/4 z-100 md:hidden sm:max-w-lg max-w-full shadow-md"
    >
      {!checkCurrentLocation() && currentCountryCode && (
        <>
          <div className="bg-white p-4 w-full mx-auto relative z-10 max-h-500">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-white hover:text-my-dark-blue w-5 h-5 text-lg leading-5 font-semibold rounded-full bg-my-yellow"
            >
              &times;
            </button>
            <p id="geo-popup-us" className="text-base mb-6 pr-12">
              We think you are in the {countryCodeWithNames[currentCountryCode as keyof typeof countryCodeWithNames]}. Update your location?
            </p>
            <button
              className={cn(
                "mr-6 border-2 border-my-dark-blue bg-white border-solid text-my-dark-blue hover:text-white py-1.5 px-2 rounded-3xl text-base font-bold tracking-widest transition text-center hover:bg-my-dark-blue",
                getButtonClass(websiteCountryCode),
              )}
              onClick={() => {
                closePopup();
                websiteCountryCode === "US" ? router.push("/") : router.push("/" + websiteCountryCode.toLowerCase());
              }}
            >
              {countryCodeWithNames[websiteCountryCode as keyof typeof countryCodeWithNames]}
            </button>
            <button
              className={cn(
                "bg-my-yellow border-my-yellow mr-6 border-2 border-solid text-my-dark-blue hover:border-my-dark-blue hover:text-white py-1.5 px-2 rounded-3xl text-base font-bold tracking-widest transition text-center hover:bg-my-dark-blue",
                getButtonClass(currentCountryCode),
              )}
              onClick={() => {
                closePopup();
                currentCountryCode === "US" ? router.push("/") : router.push("/" + currentCountryCode.toLowerCase());
              }}
            >
              {countryCodeWithNames[currentCountryCode as keyof typeof countryCodeWithNames]}
            </button>
          </div>
          <div className="fixed inset-0 z-0" onClick={closePopup}></div>
        </>
      )}
    </div>
  );
};

export default GeoAlert;
