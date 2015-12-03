$(document).ready(function(){
    $("#review-text").hide();
    $("#review-name").hide();
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
      showReviewBox();
    });
    /*
    $('#submit').click(function() {
      var review = document.getElementById("review-text");
      var name = document.getElementById("review-name");
      if (review != null) {
        hideReviewBox();
      } else {
        addReview(review, name);
        hideReviewBox();
      }
    });
    */
    $('#cancel').click(hideReviewBox());
});

function showReviewBox() {
  $('#add-review').hide();
  $('#review-text').show();
  $("#review-name").show();
  $('#submit').show();
  $('#cancel').show();
};

function hideReviewBox() {
  $('#submit').hide();
  $('#cancel').hide();
  $('#add-review').show();
  $('#review-text').hide();
  $("#review-name").hide();
};

function clearReviewBox() {
  document.getElementById("review-name").value = '';
  document.getElementById("review-text").value = '';
}

function Review(name, body) {
  var self = this;
  self.name = name;
  self.body = body;
}

function ReviewsViewModel() {
  var self = this;

  self.reviews = [
    {
      reviewText: "Delicious food, I especially liked meal number one. It was scrumptious.",
      reviewName: "Karina Todorka"
    },
    {
      reviewText: "Honestly thought it was OK, maybe use more seasoning next time. Free chips and salsa though.",
      reviewName: "Atticus Krystian"
    }
  ];

  self.initiateReviews = ko.observableArray([
    new Review(self.reviews[0].reviewName, self.reviews[0].reviewText),
    new Review(self.reviews[1].reviewName, self.reviews[1].reviewText)
  ]);

  self.addReview = function() {
    self.initiateReviews.push(new Review(document.getElementById("review-name").value, document.getElementById("review-text").value));
    clearReviewBox();
    hideReviewBox();
  }
}

ko.applyBindings(ReviewsViewModel());

var zipcode = getElementById('zip').value;
console.log(zipcode);
