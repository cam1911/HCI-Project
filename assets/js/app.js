$(document).ready(function(){
    $("#nav-bottom-row li a").hover(function(){
        $(this).css("color", "#ff6130");
        $(this).css("background-color", "#4d534c");
        }, function(){
        $(this).css("color", "");
        $(this).css("background-color", "#4d534c");
    });
    $('#add-review').click(function(){
      var review = prompt("Leave A Review");
      if (review != null) {
        //document.getElementById("review-name").innerHTML =
        document.getElementById("user-review").innerHTML = review;
    }
    })
});
