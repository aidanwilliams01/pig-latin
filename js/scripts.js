function pigLatin(text) {
  const textArray = text.split(" ");
  let results = "";
  textArray.forEach(function(word) {
    if (word[0].toLowerCase().includes("a") || word[0].toLowerCase().includes("e") || word[0].toLowerCase().includes("i") || word[0].toLowerCase().includes("o") || word[0].toLowerCase().includes("u"))  {
      results = results.concat(" ").concat(word.concat("way"));
    }
    else if (word.slice(0, 2).toLowerCase() === "qu") {
      results = results.concat(" ").concat(word.slice(2).concat(word.slice(0, 2)).concat("ay"));
    }
    else {
      for (let index = 1; index < text.length; index++) {
        if (word[index].toLowerCase().includes("a") || word[index].toLowerCase().includes("e") || word[index].toLowerCase().includes("i") || word[index].toLowerCase().includes("o") || word[index].toLowerCase().includes("u"))  {
          results = results.concat(" ").concat(word.slice(index).concat(word.slice(0, index)).concat("ay"));
          return results;
        }
      }
    }});
  return results.trim();
}