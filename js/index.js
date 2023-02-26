console.log("My index. js file is loaded correctly!");

$(document).ready(function(){
    

    // Event listener for view work button
    $("#contactButton").hover(function(){
        console.log("Contact button is hovered.");

       $(this).css("background-color", "#ffcc00");
      
    },
    // handler out
    function() {
        $(this).css("background-color", "#f0ffff");
    });

    // Event listener for contact me tabs
    $( "#contactTab" ).tabs();

});