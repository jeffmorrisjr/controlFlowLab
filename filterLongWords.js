var longWords = ["Jeff", "Likes", "Pretzels"];
var test = 6;
var newWords= [];
for (i = 0; i < longWords.length; i += 1) {
	if (longWords[i].length < test) {
		newWords.push(longWords[i]);
	}
}
console.log(newWords)





