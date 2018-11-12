$(document).ready(function () {
   $("#div1").addClass("hello5");

   $("#div1").click(function () {
       console.log("dian");
       $(this).after($("<p>dsasaddsa</p>"));
   })

});