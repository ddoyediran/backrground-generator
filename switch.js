//Using a switch statement - write a code that serves drinks base on customers preferences 


// if 1 serve fanta;
// if 2 serve coke;
// if 3 serve spirit;
// if 4 serve alcohol;

var menu = ["1. Fanta", " 2. Coke", " 3. Spirit", " 4. Alcohol"];

var pickDrink = prompt(menu + "\n" + "What do you want?");

function barMan(pickDrink) {
	var yourChoice;

	switch(pickDrink) {
		case "1": 
			return yourChoice = "Here is your Fanta. Thank you!";
		break;

		case"2": 
			return yourChoice = "Here is your Coke. Thank You!";
		break;

		case "3":
			return yourChoice = "Here is your Spirit drink. Thank You!";
		break;

		case "4": 
			return yourChoice = "Here is your alcohol. Don't get drunk, just a joke!";
		break;

		default:
			return yourChoice = "We don't have what you pick on the menu!";
		break;
	}
}

barMan(pickDrink)