


/*
example from giphy website: 

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
xhr.done(function(data) { console.log("success got data", data); });

giphy API key: 9OITCt8vj9Ey0OaPr8PoA9Qo3JAL9gxx

*/


$(document).ready(function(){ 

    var topics = ["Rick Sanchez", "Randy Savage", "Mr T", "Farva", "Rick James", "Charlie Murphy", "Mike Tyson", "Andy Dwyer", "Fogell", "Keegan-Michael Key", "Jordan Peele", "Bill Burr"];

    // create loop that appends a button for each string in the array   - DONE

    function makeB() {                              // create the buttons
        $(".buttonMe").empty();                     // makes sure there are no duplicates
        for (var i = 0; i < topics.length; i++) {
            var butHtml = $("<button>");            // create an HTML button
            butHtml.addClass("greatMan");           // Add a div class called 'greatMan' to each button
            butHtml.text(topics[i]);                // Push the string from the array to the button that was created for it
          $(".buttonMe").append(butHtml);           // Add the buttons to the 'buttonMe' div
        }
      }

    makeB();                                        // Call the function to make the buttons




    // on click event, display 10 static gifs
    // with ratings under each gif

    // on click event gif, gif plays, on click again gif pauses










    /////// ^ get the above working before moving on to this ^///////////

    // Add a form to your page takes the value from a user input box and adds it into your topics array. 
    // Then make a function call that takes each topic in the array remakes the buttons on the page.

});



