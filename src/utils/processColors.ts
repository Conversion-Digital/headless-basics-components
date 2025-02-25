// Version 4.1
// eslint-disable-next-line
// @ts-nocheck
const processColor = (percentage: number, color0: string, color1?: string, linear?: boolean) => {
  if (color0.includes("var(")) {
    throw `Tried to call processColors with a css var! ${color0}`;
  }
  let r,
    g,
    b,
    P,
    f,
    t,
    h,
    a = typeof color1 == "string";
  const m = Math.round;
  if (
    typeof percentage != "number" ||
    percentage < -1 ||
    percentage > 1 ||
    typeof color0 != "string" ||
    (color0[0] != "r" && color0[0] != "#") ||
    (color1 && !a)
  )
    return null;
  (h = color0.length > 9),
    (h = a ? (color1.length > 9 ? true : color1 == "c" ? !h : false) : h),
    (f = processColor.pSBCr(color0)),
    (P = percentage < 0),
    (t = color1 && color1 != "c" ? processColor.pSBCr(color1) : P ? { r: 0, g: 0, b: 0, a: -1 } : { r: 255, g: 255, b: 255, a: -1 }),
    (percentage = P ? percentage * -1 : percentage),
    (P = 1 - percentage);
  if (!f || !t) return null;
  if (linear) (r = m(P * f.r + percentage * t.r)), (g = m(P * f.g + percentage * t.g)), (b = m(P * f.b + percentage * t.b));
  else
    (r = m((P * f.r ** 2 + percentage * t.r ** 2) ** 0.5)),
      (g = m((P * f.g ** 2 + percentage * t.g ** 2) ** 0.5)),
      (b = m((P * f.b ** 2 + percentage * t.b ** 2) ** 0.5));
  (a = f.a), (t = t.a), (f = a >= 0 || t >= 0), (a = f ? (a < 0 ? t : t < 0 ? a : a * P + t * percentage) : 0);
  if (h) return "rgb" + (f ? "a(" : "(") + r + "," + g + "," + b + (f ? "," + m(a * 1000) / 1000 : "") + ")";
  else return "#" + (4294967296 + r * 16777216 + g * 65536 + b * 256 + (f ? m(a * 255) : 0)).toString(16).slice(1, f ? undefined : -2);
};

processColor.pSBCr = (d) => {
  const i = parseInt;
  let n = d.length;
  const x = {};
  if (n > 9) {
    const [r, g, b, a] = (d = d.split(","));
    n = d.length;
    if (n < 3 || n > 4) return null;
    (x.r = i(r[3] == "a" ? r.slice(5) : r.slice(4))), (x.g = i(g)), (x.b = i(b)), (x.a = a ? parseFloat(a) : -1);
  } else {
    if (n == 8 || n == 6 || n < 4) return null;
    if (n < 6) d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (n > 4 ? d[4] + d[4] : "");
    d = i(d.slice(1), 16);
    if (n == 9 || n == 5)
      (x.r = (d >> 24) & 255), (x.g = (d >> 16) & 255), (x.b = (d >> 8) & 255), (x.a = Math.round((d & 255) / 0.255) / 1000);
    else (x.r = d >> 16), (x.g = (d >> 8) & 255), (x.b = d & 255), (x.a = -1);
  }
  return x;
};

export const processColors = (percentage: number, color0: string, color1?: string, linear?: boolean) => {
  return processColor(percentage, color0, color1, linear);
};

export const lighterGradient = (color: string, percent?: number = 0.6, darken?: boolean, vertical?: boolean) => {
  const colorLighter = processColors(percent, color);
  const colorDarker = processColors(-percent, color);
  return `linear-gradient(${vertical ? "to top" : "to right"}, ${darken ? colorDarker : color}, ${colorLighter})`;
};

export const rgbToHex = (color: string) => {
  let a = color.split("(")[1].split(")")[0];
  a = a.split(",");
  const b = a.map((x) => {
    x = parseInt(x).toString(16);
    return x.length == 1 ? "0" + x : x;
  });
  return "#" + b.join("");
};

export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const pickTextColorBasedOnBgColorSimple = (bgColor, lightColor = "#ffffff", darkColor = "#000000") => {
  const color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : rgbToHex(bgColor).substring(1, 7);
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 170 ? darkColor : lightColor;
};

export const shouldForegroundBeDark = (color: string) => {
  return pickTextColorBasedOnBgColorSimple(color) === "#000000";
};
