export function splitByDash(text: string): [string, string] {
  const index = text.indexOf('-');
  if (index === -1) {
    return [text.trim(), ''];
  }
  const firstPart = text.slice(0, index).trim();
  const secondPart = text.slice(index + 1).trim();
  return [firstPart, secondPart];
}
