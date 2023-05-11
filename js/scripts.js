function pigLatin(text) {
  if (text[0].toLowerCase().includes("a") || text[0].toLowerCase().includes("e") || text[0].toLowerCase().includes("i") || text[0].toLowerCase().includes("o") || text[0].toLowerCase().includes("u"))  {
      return text.concat("way");
  }
  else {
      return text.slice(1).concat(text[0]).concat("ay")
  }
}