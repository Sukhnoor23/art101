/* Lab 9: Javascript with the Web
 * Author: Sukhnoor Sahota
 * Created: 11/1/21
 */


var outputEL = document.createElement("content");

// I created a new element, assigned a variable, and changed the attribute.
var new1El = document.createElement("p");
new1El.setAttribute('html','Hello World');
outputEL.appendChild(new1El);

// Then I created a second element and repeated what I did for the first element but changed the attribute.
var new2El =document.createElement("p");
new2El.setAttribute('html','Goodbye World');
outputEL.appendChild(new2El);
