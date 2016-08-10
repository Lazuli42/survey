$("#blanks form").submit(function(event) {
  var nameInput = $("input#name").val();
  var foodInput = $("input:radio[name=food]:checked").val();
  var favoriteColor = $("#color").val();
  var musicInput = $("#music").val();

  $(".name").text(nameInput)
  $(".food").text(foodInput)
  $(".color").text(favoriteColor)
  $(".music").text(musicInput)

  $("#output").show();

  event.preventDefault();
});
