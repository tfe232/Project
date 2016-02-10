$(document).ready(function() {
  $(".btn").on("click", addItem);

  $("ol").on("click", ".link-delete", deleteItem);
});

function addItem() {
  var text = window.prompt("Where do you think I'm going?");
  var delete_link = '<a href="#" class="link-delete">(Delete)</a>'

  $("ol").append("<li>" + text + " " + delete_link + "</li>");
  var numItems = $("li").length;

  if (numItems == 1) {
    $(".total").html(numItems + " Guess");
  }
  else {
    $(".total").html(numItems + " Guesses");
  }
}

function deleteItem(event) {
  console.info(event);
  $(event.target).parent().fadeOut();

}
