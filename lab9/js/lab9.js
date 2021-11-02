/* Lab 9: Javascript with the Web
 * Author: Sukhnoor Sahota
 * Created: 11/1/21
 */


// Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("output");
console.log("outputEl: ", outputEl);

// I created a new element, assigned a variable, and changed the attribute.
var new1El = document.createElement("p");

// Change the html attribute of new1El
new1El.innerHTML = "Hello World!";

// Then I created a second element and repeated what I did for the first element but changed the attribute.
var new2El = document.createElement("p");

// Change the html attribute of new2El
new2El.innerHTML = "Goodbye World!";

//Append both elements <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the css attributes
new1El.style.color = "pink";
new2El.style.color = "green";
