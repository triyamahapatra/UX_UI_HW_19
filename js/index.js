console.log("whatup");

$(document).ready(function() {
    $(".Title").click(function() {
      $(this).next(".dropdownContent").slideToggle("slow");
    });
  });
  