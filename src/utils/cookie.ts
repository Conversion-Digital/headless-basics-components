export function getCookieValue(cookieName: string) {
  if (typeof window === "undefined") return;
  const allCookies = "; " + document.cookie;
  const parts = allCookies.split("; " + cookieName + "=");
  if (parts && parts.length === 2) {
    return parts.pop()?.split(";").shift();
  }
}

export function setCookieValue(cookieName: string, cookieValue: string, days: number) {
  if (typeof window === "undefined") return;
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = cookieName + "=" + (cookieValue || "") + expires + "; path=/";
}

export function setGeoRedirectedCookie() {
  setCookieValue('geoRedirected', 'true', 1209600); // set for 2 weeks
}