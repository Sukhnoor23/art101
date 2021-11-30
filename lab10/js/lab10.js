/* Lab 9: Javascript with the Web
 * Author: Sukhnoor Sahota & Luke Pilapil
 * Created: 11/3/21
 */

 // Create an event handler for a button click.
 var button = document.getElementById('my-button');

 //Add a function to the button.
 window.onload = function sayMyname() {
   var name = prompt('What is your name');
   var h1 = document.querySelector('h1');
   h1.innerText = "Hello,"  +  name;
 }

 //Add an event handler to say the name.
 button.addEventListener('click', sayMyname);
