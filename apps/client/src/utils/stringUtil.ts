const scliceString = (str: string, limit: number = 500) =>
  str.length <= limit ? str : `${str.slice(0, limit)}...`;

const MD_CHARS = [
  "\\*",
  "_",
  "`",
  "\\[",
  "\\]",
  "\\(",
  "\\)",
  "#",
  "\\+",
  "-",
  "\\.",
  "!",
];

const removeMarkdownSpecialChars = (str: string) =>
  str.replace(new RegExp(MD_CHARS.join("|"), "g"), "");

export { scliceString, removeMarkdownSpecialChars };
