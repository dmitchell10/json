/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.

*/

function addToList(list, newThing) {
	var fav = document.getElementById("fav-list");
	var input = document.getElementById("new-thing");
	var inputText = input.value;
	var li = document.createElement("li");
	var liText = document.createTextNode(inputText);

	li.appendChild(liText);
	fav.appendChild(li);

	// Reset input to blank
	input.value = "";
}

function buttonAdd() {
	var button = document.getElementById("new-thing-button");

  button.onclick = function(event) {
		// Prevent default action of submitting a form (which is to refresh the page)
		event.preventDefault();
  	var inputText = document.getElementById("new-thing").value;

		if (inputText === "") {
			alert("Enter something");
		} else {
  		addToList();
  	}
  }
}

window.onload = function() {
  // when someone clicks the button...
  buttonAdd();
};




/*

Bonus:



When they click submit without typing anything, alert the user
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/
