var btn = document.getElementById("btn");
var quote = document.getElementById("quote");
var auther = document.getElementById("auther");

var quotesArray = [
	{
		quote: `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`,
		author: `― Bernard M. Baruch`
	},
	{
		quote: `A room without books is like a body without a soul.`,
		author: `― Marcus Tullius Cicero`
	},
	{
		quote: `Be yourself; everyone else is already taken.`,
		author: `― Oscar Wilde`
	},
	{
		quote: `So many books, so little time.`,
		author: `― Frank Zappa`
	},
	{
		quote: `If you tell the truth, you don't have to remember anything.`,
		author: `― Mark Twain`
	},
	{
		quote: `A friend is someone who knows all about you and still loves you.`,
		author: `― Elbert Hubbard`
	},
	{
		quote: `Live as if you were to die tomorrow. Learn as if you were to live forever.`,
		author: `― Mahatma Gandhi`
	},
	{
		quote: `The man who does not read has no advantage over the man who cannot read.`,
		author: `― Mark Twain`
	},
	{
		quote: `If you don't stand for something you will fall for anything.`,
		author: `― Gordon A. Eadie`
	},
	{
		quote: `Be what you want to be, Not what they want you to be.`,
		author: `― Hassen Abdelmalek`
	},
]

var qouteIndex;
var temp; 

function desplayQuote() {
	var rondomNum = Math.floor((Math.random() * quotesArray.length)); 

	if (rondomNum == temp) {
		rondomNum = Math.floor((Math.random() * quotesArray.length)); 
		quote.innerHTML = `${quotesArray[rondomNum].quote}`
		auther.innerHTML = `${quotesArray[rondomNum].author}`
	}else{
		quote.innerHTML = `${quotesArray[rondomNum].quote}`
		auther.innerHTML = `${quotesArray[rondomNum].author}`
	}
	temp = rondomNum;
}