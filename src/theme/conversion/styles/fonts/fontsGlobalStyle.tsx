'use client';

import { Inter as FontSans, Urbanist, Staatliches, Poppins, Figtree} from "next/font/google"
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans", 
  display: "swap",
})

const fontUrbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
})

const fontStaatliches = Staatliches({
  subsets: ["latin"],
  variable: "--font-staatliches",
  display: "swap",
  weight: "400"
})

const fontPoppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: "400"
})

const fontFigtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
  weight: "400"
})

const FontsGlobalStyle = () => {
  return (
    <>
      <style jsx global>{`
              :root {
                --font-sans: ${fontSans.style.fontFamily};
                --font-urbanist: ${fontUrbanist.style.fontFamily};
                --font-staatliches: ${fontStaatliches.style.fontFamily};
                --font-poppins: ${fontPoppins.style.fontFamily};
                --font-figtree: ${fontFigtree.style.fontFamily};
            }`}</style>
    </>
  )
}

export default FontsGlobalStyle
