/*Navigation bar*/

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

/*---Navigation bar---*/

/*Quiz*/

function check() {

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
    var correct = 0;

	if (question1 == "Beijing") {
		correct++;
    }
	if (question2 == "Ottawa") {
		correct++;
    }	
	if (question3 == "Wellington") {
		correct++;
    }
    
    if (question4 == "Tokyo") {
        correct++;
	}
	
	var pictures = ["quiz/win.gif", "quiz/meh.gif", "quiz/lose.gif"];
	var messages = ["Great job!", "That's just okay.", "You really need to do better!"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 4) {
		score = 1;
	}

	if (correct == 4) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];

}

/*---Quiz---*/
