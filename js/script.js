// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
 var input=$("#search-term").val()
 console.log($("#search-term").val())
  $.ajax({
  url: "https://api.giphy.com/v1/gifs/search?q="+input+"&rating=pg&api_key=dc6zaTOxFJmzC",
  method: "GET",
  success: function(response) {
  console.log(response);
  var url1 =Math.floor( Math.random()*response.data.length);
  var url = response.data[url1].images.original.url;
  $(".text-center").html('<img src=' + url + '>')
  },
});

 //{
     //game:"Fortnite"
 //}
  
});

