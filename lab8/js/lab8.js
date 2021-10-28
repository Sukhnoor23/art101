/* Lab 8: Anon Functions and Callbacks
 * Author: Sukhnoor Sahota
 * Created: 10/27/21
 */


var sukhnoorArray = [22, 14, 17, 7, 23]

console.log("My Array", sukhnoorArray)

// Mutiplying by two
function timesTwo(x){
    var results = 2 * x
    return results
}

//Mutiply all intergers in the array.
sukhnoorArray.map(function(x){
          var results = x * 2
          return results;
})


console.log("Numbers in the array, mutiplied by 2:" sukhnoorArray)

var outputEl = document.getElementById("output");
outputEl.innerHTML = mapResults; //put your results here 
