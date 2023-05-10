function pigLatin(text) {
  if (text[0].includes("a") || text[0].includes("e") || text[0].includes("i") || text[0].includes("o") || text[0].includes("u"))  {
      return text.concat("way");
  }
}