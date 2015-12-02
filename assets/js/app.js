$(document).ready(function(){
    $("#review-text").hide();
    $('#submit').hide();
    $('#cancel').hide();
    $("nav li a").hover(function(){
        $(this).css("color", "#ff6130");
        $(this).css("background-color", "#4d534c");
        }, function(){
        $(this).css("color", "");
        $(this).css("background-color", "#4d534c");
    });
    $("#genres img").click(function() {
      $(this).css("opacity", "1");
    });
    $('#add-review').click(function(){
      $('#add-review').hide();
      $('#review-text').show();
      $('#submit').show();
      $('#cancel').show();
      var review = "review";
      if (review != null) {
        //document.getElementById("review-name").innerHTML =
        document.getElementById("user-review").innerHTML = review;
      }
    });
    $('#submit').click(function() {
      
    });
    $('#cancel').click(function() {
      $('#submit').hide();
      $('#cancel').hide();
      $('#add-review').show();
      $('#review-text').hide();
    });
});
