$(document).ready(function() {
  $("#track-form").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var reasonInput = $("select#reason").val();
    var areaInput = $("select#area").val();
    var reasonInput = $("select#howfast").val();
    var howfastInput = $("select#frontorback").val();
    var frontBackInput = $("select#reaction").val();
console.log("it is working")
if (frontBackInput === "1") {
  $("#java").show();
  }
  else if (reasonInput ==="3"){
    $("#php").show();
  }
  else {
    $("#css").show();
  }
 });
});
