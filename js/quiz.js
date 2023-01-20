
// 1. Create a multidimensional array to hold quiz questions and answers
var questions = [
	['What year was JavaScript created?', '1995'],
	['How many molecules of oxygen does ozone have?', 'Three'],
	// ['Night Crawler, member of the X-Men, has what kind of powers?', 'can teleport'],
	// ['Which infinity stone was located on Vormir?', 'soul stone'],
	// ['How many films did Sean Connery play James Bond in?', 'seven'],
	// ['In which year did Usain Bolt set his 100m in 9.58 seconds world record?', '2009'],
	// ['In which US city is Broadway located?', 'NYC'],
	// ['What is a plié in ballet?', 'bending of the knees'],
	// ['What or who is the Ford Mustang named after?', 'a wwII fighter plane'],
	// ['How many soccer players should each team have on the field at the start of each match?', '11'],
	// ['What are the surnames of the father-son duos who both served as US presidents?', 'Adams and Bush']

];



// 2. Store the number of questions answered correctly
let correct = [];
let incorrect = [];
let correctAnswers = 0;



/*
  3. Use a loop to cycle through each question
	  - Present each question to the user
	  - Compare the user's response to answer in the array
	  - If the response matches the answer, the number of correctly
		answered questions increments by 1
*/

for (let i = 0; i < questions.length; i++) {
	let question = questions[i][0];
	let answer = questions[i][1];
	let response = prompt(question);

	if (response === answer) {
		correctAnswers += 1;
		correct.push(question);
	} else {
		incorrect.push(question);

	}

}

// add stuff to list on html
function createListItems(arr) {
	let items = '';
	for (let i = 0; i < arr.length; i++) {
		items += `<li>${arr[i]}</li>`;
	}
	return items;
}




// 4. Display the number of correct answers to the user

let html = ` <h1>you got ${correctAnswers} questions(s) correct</h1> 
<h2>You got these questions right:</h2>
<ol>${createListItems(correct)}</ol>
<h2>You got these questions wrong:</h2>
<ol>${createListItems(incorrect)}</ol>
   `;


document.querySelector('main').innerHTML = html;