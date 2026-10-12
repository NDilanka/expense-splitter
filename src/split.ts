export type Line = { amount: number };
export function splitTotal(lines: Line[], currency: string): string {
  return lines.map(line => line.amount.toFixed(2)).join(",");
}
