$(document).ready(function() {
  $("#track-form").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var reasonInput = $("select#reason").val();
    var areaInput = $("select#area").val();
    var howfastInput = $("select#howfast").val();
    var frontBackInput = $("select#frontorback").val();
    var reactionInput = $("select#reaction").val();
console.log("it is working")
if (frontBackInput === "1") {
  $("#java").show();
  }
  else if (reasonInput ==="2"){
    $("#php").show();
  }
  else {
    $("#css").show();
  };
  });
  $("button#grey").click(function(){
    $("body").addClass("grey-background");
  });
  $(".btn-test").click(function(){
    $(".show-test").show();
    $(".show-result").hide();
  });
  $(".btn-result").click(function(){
    $(".show-result").show();
    $(".show-test").hide();
  });
});
