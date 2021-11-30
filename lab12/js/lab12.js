/* Lab 12: Condtionals
 * Author: Sukhnoor Sahota & Luke Pilapil
 * Created: 11/15/21
 */

console.log("Hi");

//Assign the houses.
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0){
    return "Ravenclaw";
  }
  else if (mod == 1){
    return "Gryffindor"
  }
  else if (mod == 2){
    return "Slytherin";
  }
  else if (mod ==3){
    return "Hufflepuff";
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function(){
  var name = document.getElementById("input").value;
  var house = sortingHat (name);
  newText = "<p> The Sorting Hat has sorted you into" + house + "</p>";
  document.getElementById("ouput"). innerHTML = newText;
});

/ take a string and return a hashed checksum of the string
// from https://stackoverflow.com/questions/26057572/
function checksum(s) {
  var hash = 0, strlen = s.length, i, c;
  if ( strlen === 0 ) {
    return hash;
  }
  for ( i = 0; i < strlen; i++ ) {
    c = s.charCodeAt( i );
    hash = ((hash << 5) - hash) + c;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

// Three pure javascript functions to manipulate classes
// from https://stackoverflow.com/questions/6787383/how-to-add-remove-a-class-in-javascript
function hasClass(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
//
function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}
//
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}

// Given a name, hash the string, and
// return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
function sortingHatHash(str) {
  checksumValue = checksum(str);
  mod = Math.abs(checksumValue) % housesArray.length;
  return housesArray[mod];      // returns an object from the array
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  // get value from input field
  var name = document.getElementById("input").value;
  // use name to get house from SortingHat function
  var houseObj = sortingHatHash(name);
  // output to output div (adding some text and HTML around the results)
  newText = "<h2>" + houseObj.title + "!</h2>" +
          introHTML +
          "<p>\"" + houseObj.text + "\"</p>" +
          creditHTML;
  var outputArea = document.getElementById("output");
  outputArea.innerHTML = newText;
  removeClass(outputArea, "hidden");
  removeClass(document.getElementById("tail-box"), "hidden");
})

var myInput = document.getElementById("input");
myInput.addEventListener("focus", function() {
  addClass(document.getElementById("output"), "hidden");
  addClass(document.getElementById("tail-box"), "hidden");
});
