/* Lab 7: Functions
 * Author: Sukhnoor Sahota
 * Created: 10/26/21
 */
// categorizeUserName -  a function that takes user input and organizes it.
function sortUserName() {
  var userName = window.prompt ("Hi, please tell me your name");
  console.log("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log ("nameArray =", nameArray);
  //categorize array
  var nameArraySort = nameArray.sort('');
  console.log("nameArrayCategorize =", nameArraySort);
  // Join string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  // user.Name.toLower().split("").sort().join("")
  return nameSorted;
}


//output
document.writeln("hey, I wrote your name: ",
     sortUserName(),"</br>");
