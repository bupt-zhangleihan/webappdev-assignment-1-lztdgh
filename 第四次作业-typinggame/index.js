const quotes = [
	'Whe.',
	'There is.',
	'I ought to know.',
	'I never make.',
	'What.',
	'Nothing clears.',
	'Education never.',
];

// array for storing the words of the current challenge
let words = [];
// stores the index of the word the player is currently typing
let wordIndex = 0;
// default value for startTime (will be set on start)
let startTime = Date.now();

// grab UI items
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message')
const typedValueElement = document.getElementById('typed-value');
const startBtn = document.getElementById("start");

const controller = new AbortController();

// 定义LocalStore 的存储内容：
const myStorage = localStorage;


startBtn.addEventListener('click', startBtnListen);

function addEventLis(){
	startBtn.addEventListener('click', startBtnListen);
}



function startBtnListen () {
	// 显示当前的输入框框线的内容。
	typedValueElement.hidden = false;
	// get a quote
	const quoteIndex = Math.floor(Math.random() * quotes.length);
	const quote = quotes[quoteIndex];
	// Put the quote into an array of words
	words = quote.split(' ');
	// reset the word index for tracking
	wordIndex = 0;

	// UI updates
	// Create an array of span elements so we can set a class
	const spanWords = words.map(function(word) { return `<span>${word} </span>`});
	// Convert into string and set as innerHTML on quote display
	quoteElement.innerHTML = spanWords.join('');
	// Highlight the first word
	quoteElement.childNodes[0].className = 'highlight';
	// Clear any prior messages
	messageElement.innerText = '';

	// Setup the textbox
	// Clear the textbox
	typedValueElement.value = '';
	// set focus
	typedValueElement.focus();
	// Start the timer
	startTime = new Date().getTime();

}


// 当start按钮进入到click事件时：执行监听方法。


// 输入框增加监听事件
typedValueElement.addEventListener('input', (e) => 
{
	// Get the current word
	const currentWord = words[wordIndex];
	// get the current value
	const typedValue = typedValueElement.value;

	// 判断游戏结束：完成状态
	if (typedValue === currentWord && wordIndex === words.length - 1) {
		// end of quote
		// Display success
		const elapsedTime = new Date().getTime() - startTime;
		const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
		// 存储loaclStroe当中
		let socre = elapsedTime / 1000;
		console.log(window.localStorage.getItem("score"));
		if(window.localStorage.getItem("score") === null){
			window.localStorage.setItem("score", socre);
		}if(window.localStorage.getItem("score") < socre){
			window.localStorage.setItem("score", socre);
		}
		// 存储到浏览器的会话缓存当中:
			// 关闭输入框
		typedValueElement.hidden = true;
		//messageElement.innerText = message;
		alert(message);
		// 关闭事件监听
		startBtn.removeEventListener("click",startBtnListen,false);
	} else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
		// end of word
		// clear the typedValueElement for the new word
		typedValueElement.value = '';
		// move to the next word
		wordIndex++;
		// reset the class name for all elements in quote
		for (const wordElement of quoteElement.childNodes) {
			wordElement.className = '';
		}
		// highlight the new word
		quoteElement.childNodes[wordIndex].className = 'highlight';
	} else if (currentWord.startsWith(typedValue)) {
		// currently correct
		// highlight the next word
		typedValueElement.className = '';
	} else {
		// error state
		typedValueElement.className = 'error';
	}
});
