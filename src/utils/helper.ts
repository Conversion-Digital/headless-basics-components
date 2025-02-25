
export function capitalizeFirstChars(inputString: string): string {
  return inputString
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export function convertToDate(isoString: string): string | null {
  try {
    const date = new Date(isoString)
    if (isNaN(date.getTime())) {
      throw new Error(`Invalid date string: ${isoString}`)
    }
    return date.toLocaleDateString()
  } catch (error) {
    console.error(error)
    return null
  }
}