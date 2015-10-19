$(document).ready(function(){

  /*******************************/
  /* CARD TEMPLATE CODE          */
  /*******************************/

  if('content' in document.createElement('template')) {
    // Templates are supported
    var distanceUnit = 'mi';
    var restaurants = [
      { 'title': 'Raising Cane\'s',
        'description':'Fast-food chain specializing in fried chicken fingers, crinkle-cut fries & Texas toast.',
        'ratings': '4',
        'reviews': '37 reviews',
        'price': '$',
        'genre': 'American',
        'distance': '2.8' },
      { 'title': 'Chik-fil-a',
        'description':'Fast-food chain serving chicken sandwiches, strips & nuggets along with salads & sides.',
        'ratings': '5',
        'reviews': '29 reviews',
        'price': '$',
        'genre': 'American',
        'distance': '2.3' },
      { 'title': 'Chili\'s',
        'description':'Family-friendly chain serving classic Tex-Mex & American fare in a Southwestern-style…',
        'ratings': '2',
        'reviews': '13 reviews',
        'price': '$$',
        'genre': 'American',
        'distance': '5.4' }.
      { 'title': 'Panda Express',
        'description':'Fast-food chain for Chinese standards, including some health-conscious options.',
        'ratings': '4',
        'reviews': '15 reviews',
        'price': '$',
        'genre': 'Chinese',
        'distance': '1.4' }.
      { 'title': 'Olive Garden',
        'description':'Lively, family-friendly chain featuring Italian standards such as pastas & salads, with a full…',
        'ratings': '2',
        'reviews': '40 reviews',
        'price': '$$',
        'genre': 'Italian',
        'distance': '6.9' }.
      { 'title': 'Taco Cabana',
        'description':'Colorful chain eatery for classic Mexican fare, including freshly made salsa & tortillas.',
        'ratings': '4',
        'reviews': '48 reviews',
        'price': '$',
        'genre': 'Mexican',
        'distance': '13.9' }
    ];

    // get ref to restaurants in main DOM
    var restaurantList = document.getElementByID('restaurants');

    // loop to create a restaurant card
    for (var i = 0; i < restaurants.length; i++) {
      var restaurant = restaurants[i];
      var tempCard = document.getElementById('restaurant-card-template').content.cloneNode(true);
      tempCard.querySelector('card-title').innerText = restaurant.title;
      tempCard.querySelector('card-description').innerText = restaurant.description;
      tempCard.querySelector('card-price').innerText = restaurant.price;
      tempCard.querySelector('card-genre').innerText = restaurant.genre;
      tempCard.querySelector('card-distance').innerText = restaurant.distance + ' ' + distanceUnit;
      restaurantList.appendChild(tempCard);
    }

  } else {
    // Templates are not supported
    // this is the part where you cry
  }

});
