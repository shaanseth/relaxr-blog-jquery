$(document).ready(function() {
  $(".readmore").click(function (event) {
    event.preventDefault();
    $(this).closest(".post").find(".hiddentext").slideToggle("slow");
    $(this).text($(this).text() == "Read less..." ? "Read more..." : "Read less...");
  })
})
