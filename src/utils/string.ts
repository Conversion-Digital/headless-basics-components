export const safeJsonParse = (str: string, fallbackString?: string) => {
  try {
    return JSON.parse(str);
  } catch {
    return fallbackString || null;
  }
}

export const trim = (str: string, c: string) => {
  if (c === "]") c = "\\]";
  if (c === "^") c = "\\^";
  if (c === "\\") c = "\\\\";
  return str.replace(new RegExp(
    "^[" + c + "]+|[" + c + "]+$", "g"
  ), "");
}

export const isBase64 = (encodeStr: string) => {
  if (encodeStr === "" || encodeStr.trim() === "") {
    return false;
  }

  try {
    return btoa(atob(encodeStr)) == encodeStr;
  } catch (err) {
    return false;
  }
};


export function parseText(text: string): { text: string; isHtml: boolean } {
  const isHtml = /<\/?[a-z][\s\S]*>/i.test(text)
  const cleanedText = isHtml ? text?.replace(/<[^>]*>?/gm, "") : text?.trim()
  return { text: cleanedText, isHtml }
}


export function unescapeString(s: string) {
  return s.replace(/\\n/g, '\n')
    .replace(/\\'/g, '\'')
    .replace(/\\"/g, '"')
    .replace(/\\&/g, '&')
    .replace(/\\r/g, '\r')
    .replace(/\\t/g, '\t')
    .replace(/\\b/g, '\b')
    .replace(/\\f/g, '\f');
}


// Original function with the anchor tags processing removed
export function stripAndUpdateTags(html: string) {
  if (!html && typeof html !== "string") {
    return "";
  }
  // console.log("HTML is : ", html);
  const strippedHTML = html
    .replace(/<style[^>]*>.*<\/style>/g, "")
    // Remove script tags and content
    .replace(/<script[^>]*>.*<\/script>/g, "")
    // Remove all opening, closing and orphan HTML tags
    .replace(/<[^>]+>/g, "")
    // Remove leading spaces and repeated CR/LF
    .replace(/([\r\n]+ +)+/g, "\n")
    // Remove any leftover leading spaces and newlines
    .replace(/^[\n ]+/g, "");
  // console.log("Stripped HTML is : ", strippedHTML);

  // Split the stripped text into an array of lines
  const lines = strippedHTML.split("\n");

  // Create the HTML string for the <ul> element
  let ulHTML = '<ul class="grid h-full grid-cols-1 items-center justify-items-center">';

  // Iterate through the lines and create <li> elements
  lines.forEach((line) => {
    ulHTML += `<li class="text-body2 font-400 leading-body2">${line}</li>`;
  });

  ulHTML += "</ul>";

  // console.log("The HTML unordered list is: ", ulHTML);
  return ulHTML;
}