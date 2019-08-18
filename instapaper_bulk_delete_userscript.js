// ==UserScript==
// @name         Instapaper Bulk Delete
// @namespace    https://www.instapaper.com/u
// @version      0.1
// @description  Provides an option to bulk delete all articles on current page of instapaper
// @author       Sean Laidlaw
// @match        https://www.instapaper.com/u
// @grant        none
// ==/UserScript==

(function() {

	// Create the button object
	var button = document.createElement("button");
	button.innerHTML = "Bulk Delete";

	// add the button to the top button bar
	var body = document.getElementsByClassName("top_buttons")[0];
	body.appendChild(button);


	// set all checkboxes and menu buttons as var
	var chkbox = document.getElementsByClassName('article_selected_indicator');
	var menu_buttons = document.getElementsByClassName('js_batch');

	// Add event handler to button
	button.addEventListener ("click", function() {

		//click on the checkbox next to every article
		for(var i = 0; i < chkbox.length; i++) {
			chkbox[i].click();
		}

		//loop through the menu buttons and click when found the delete button
		for(var i = 0; i < menu_buttons.length; i++) {
			if (menu_buttons[i].getAttribute('data-action') == "delete") {
				menu_buttons[i].click();
				break;
			}
		}
	});

})();
