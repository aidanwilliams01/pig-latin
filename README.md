Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will add 'way' to the end of words that begin with a vowel regardless of case."
Code: pigLatin("A");
Expected Output: "Away"

Test: "It will add 'ay' to the end of words that begin with a consonant."
Code: pigLatin("code");
Expected Output: "odecay"

Test: "It will add 'ay' to the end of words that begin with two consonants."
Code: pigLatin("stove");
Expected Output: "ovestay"

Test: "It will add 'ay' to the end of words that begin with three or more consonants."
Code: pigLatin("string");
Expected Output: "ingstray"

Test: "It will add 'qu' to the end of words that begin with a 'qu'."
Code: pigLatin("quick");
Expected Output: "ickquay"

Test: "It will translate input with multiple words."
Code: pigLatin("a code stove string quick");
Expected Output: "away odecay ovestay ingstray ickquay"