function longestWord(str){
let words= str.split(" ");
let longestWord="";
for (let word of words)
{
	if(word.length > longestWord.length)
	{
          longestWord= word;
	}

}
return longestWord;
}

console.log(longestWord("She believed she can, so she did"));
console.log(longestWord("Hardwork never fails"));