

///////////////  CLICK EVENT NOT WORKING FOR DYNAMICALLY CREATED ELEMENTS ////////////////////////
///////////////  CLICK EVENT NOT WORKING FOR DYNAMICALLY CREATED ELEMENTS ////////////////////////
///////////////  CLICK EVENT NOT WORKING FOR DYNAMICALLY CREATED ELEMENTS ////////////////////////
///////////////  CLICK EVENT NOT WORKING FOR DYNAMICALLY CREATED ELEMENTS ////////////////////////
///////////////  CLICK EVENT NOT WORKING FOR DYNAMICALLY CREATED ELEMENTS ////////////////////////
///////////////  CLICK EVENT NOT WORKING FOR DYNAMICALLY CREATED ELEMENTS ////////////////////////
///////////////  CLICK EVENT NOT WORKING FOR DYNAMICALLY CREATED ELEMENTS ////////////////////////
///////////////  CLICK EVENT NOT WORKING FOR DYNAMICALLY CREATED ELEMENTS ////////////////////////



$(document).ready(function(){ 

   var topics = ["Ice Pirates", "Coming to America", "Trading Places", "Super Troopers","Superbad", "Fear and Loathing in Las Vegas", "Conan the Barbarian", "The Hangover", "Zombieland", "Hot Fuzz", "Tropic Thunder", "Black Dynamite",];

    function makeB() {                                                      // Create the buttons
        $(".buttonMe").empty();                                             // Makes sure there are no duplicates
        for (var i = 0; i < topics.length; i++) {
            var butHtml = $("<button>");                                    // Create an HTML button
            butHtml.addClass("gifMeUp");                                   // Add a div class called 'gifMeUp' to each button
            butHtml.text(topics[i]);                                        // Push the string from the array to the button that was created for it
            butHtml.attr("data-name", topics[i]);                           // Add a data attribute
          $(".buttonMe").append(butHtml);                                   // Add the buttons to the 'buttonMe' div
        }
    }

    makeB();                                                                // Call the function to make the buttons

    function doTheWork() {
        $(".gifMe").empty();                                            // Clear the previous Gifs
        var whoIbe = $(this).attr("data-name");                           // Pull the name of the button from the data-name attribute
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + whoIbe +"&api_key=9OITCt8vj9Ey0OaPr8PoA9Qo3JAL9gxx&limit=10&rating=pg-13"; // giphy API URL

        $.ajax({                                                            // AJAX request
            url: queryURL,                                                  // Call the URL stored in queryURL
            method: "GET"                                                   // Use 'GET'
        }).then(function(response) {                                      // Wait until the request is complete, store in 'response'
            
            console.log(response);    

            var results = response.data;                                            // Create variable 'results' to hold resonse.data  
                for (var  j= 0; j < results.length; j++) {                          // For Loop to loop through the 10 results
                    var gifDiv = $("<div class='gifMeUp'>");                      // create a div class called 'gifMeUp'
                    var rating = results[j].rating;                                 // variable to hold the rating
                    var p = $("<p>").text("Rating: " + rating.toUpperCase());       // Push the rating to the HTML in Uppercase
                    var newImg = $("<img>");                                   // Create an IMG HTML element
                    newImg.attr("src", results[j].images.fixed_height_still.url);    // Give a still image as the source
                    newImg.attr("data-still", results[j].images.fixed_height_still.url);    // assign the still image to 'data-still'
                    newImg.attr("data-animate", results[j].images.fixed_height.url);        // assign the moving image to date-animate'
                    newImg.attr("data-state", "still");                                     // assign attr data-state 'still'
                    newImg.addClass("gif");                                                 // Add div class 'gif' to the new images
                    gifDiv.prepend(p);                                              // Add the rating to the gif's div
                    gifDiv.prepend(newImg);                                    // Add the IMG element and source to the gif's div
                    $(".gifMe").prepend(gifDiv);                                    // Push to the HTML
                }
                $(".gif").on("click", function() {                                 // on event listener
                    
                    var state = $(this).attr("data-state");
                        if (state === "still") {                                    // If attr data-state is 'still'
                            $(this).attr("src", $(this).attr("data-animate"));      // change the image source to the moving image
                            $(this).attr("data-state", "animate");                  // and set attr data-state to 'animate'
                        } else {                                                    // Else (data-state is set to animate)
                            $(this).attr("src", $(this).attr("data-still"));        // change the image source to the still image
                            $(this).attr("data-state", "still");                    // and set attr data-state to 'still'
                        }    
                        return false;
                })               
        });  
    };

  $(document).on("click", ".gifMeUp" , doTheWork);

    $("form").submit(function(){
        event.preventDefault();
        var newValue = $(".addMe").val();
        topics.push(newValue);
        makeB();
        });


});


