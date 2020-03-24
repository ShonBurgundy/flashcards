$(document).ready(function() {
  $(".clickable").click(function() {
    $(this).parents(".card").children(".flash").toggle();
  });
});
