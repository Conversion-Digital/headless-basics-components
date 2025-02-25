
export function getSectionAlign(align: string, defaultAlignClass?: string) {
  if (!align) {
    return defaultAlignClass
  }

  const aligns = {
    center: "text-center",
    right: "text-right",
    left: "text-left",
  }
  const alignClass = aligns[align?.toLowerCase() as keyof typeof aligns]

  if (!alignClass) {
    return defaultAlignClass
  }

  return alignClass
}