function pigLatin(text) {
  if (text[0].toLowerCase().includes("a") || text[0].toLowerCase().includes("e") || text[0].toLowerCase().includes("i") || text[0].toLowerCase().includes("o") || text[0].toLowerCase().includes("u"))  {
      return text.concat("way");
  }
  else if (text.slice(0, 2).toLowerCase() === "qu") {
      return text.slice(2).concat(text.slice(0, 2)).concat("ay")
    }
  else {
      for (let index = 1; index < text.length; index++) {
          if (text[index].toLowerCase().includes("a") || text[index].toLowerCase().includes("e") || text[index].toLowerCase().includes("i") || text[index].toLowerCase().includes("o") || text[index].toLowerCase().includes("u"))  {
          return text.slice(index).concat(text.slice(0, index)).concat("ay")
          }
      }
  }
}