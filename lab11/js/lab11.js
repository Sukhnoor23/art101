/* Lab 11: Libraries and jQuery
 * Author: Sukhnoor Sahota & Luke Pilapil
 * Created: 11/8/21
 */

//using jQuery to add buttons and to make it say something.
 $(document).on('click', '#btnClick', function(){
     alert("Button is clicked");
 });

//changed what the button said
 $(document).on('click', '#btnClick2', function(){
     alert("How are you doing?");
 });

//changed the button again
 $(document).on('click', '#btnClick3', function(){
     alert("The Results");
 });

// Using jQuery we added a click event
// We used the effect of a Animation
 $(document).ready(function(){
   $("button").click(function(){
     $("div").animate({left: '950px'});
   });
 });
