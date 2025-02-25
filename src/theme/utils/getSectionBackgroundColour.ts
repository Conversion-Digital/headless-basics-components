export function getSectionBackgroundColour(
  backgroundColour: string,
  defaultColourClass: string
) {

  if (!backgroundColour) {
    return defaultColourClass
  }

  const colors: { [key: string]: string } = {
    d1d3d4: "bg-[#d1d3d4]",
    ffffff: "bg-[#ffffff]",
    f6f6f6: "bg-[#f6f6f6]",
    fed095: "bg-lighterYellow",
    faa634: "bg-my-yellow",
    "000000": "bg-my-black",
    "3d3d3e": "bg-my-black",
  }
  const colourClass = colors[backgroundColour as keyof typeof colors]

  if (!colourClass) {
    return defaultColourClass
  }

  return colourClass
}
