
export const isNumeric = (n: unknown): n is number =>
  !isNaN(parseFloat(n as string)) && isFinite(n as number)