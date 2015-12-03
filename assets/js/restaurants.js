function RestaurantDetails(restaurant) {
	var self = this;

	self.restaurant = ko.observable(restaurant);
}

function RestaurantViewModel() {
	var self = this;

	self.restaurantsList = [
		{
			name: 'Chick-Fil-A',
			rating: 5,
			description: 'Fast-food chain serving chicken sandwiches, strips & nuggets along with salads & sides.',
			numReview: 30,
			meanPrice: 1,
			foodType: 'Chicken',
			imageSrc: '../assets/images/chikfila.png',
			zip: '75080',
			delivery: true,
		},
		{
			name: 'Raising Canes',
			rating: 4,
			description: 'Fast-food chain specializing in fried chicken fingers, crinkle-cut fries & Texas toast.',
			numReview: 25,
			meanPrice: 2,
			foodType: 'Chicken',
			imageSrc: '../assets/images/raisingcanes.png',
			zip: '75080',
			delivery: true,
		},
		{
			name: 'Panda Express',
			rating: 3,
			description: 'Fast-food chain for Chinese standards, including some health-conscious options.',
			numReview: 20,
			meanPrice: 1,
			foodType: 'Asian',
			imageSrc: '../assets/images/panda.png',
			zip: '75080',
			delivery: true,
		},
		{
			name: 'Chilis',
			rating: 3,
			description: 'Family-friendly chain serving classic Tex-Mex & American fare in a Southwestern-style',
			numReview: 30,
			meanPrice: 2,
			foodType: 'Tex Mex',
			imageSrc: '../assets/images/chilis.png',
			zip: '75090',
		},
		{
			name: 'Olive Garden',
			rating: 2,
			description: 'Authentic italian food straight out of the microwave',
			numReview: 10,
			meanPrice: 2,
			foodType: 'Italian',
			imageSrc: '../assets/images/olivegarden.png',
			zip: '75090',
		},
		{
			name: 'Taco Cabana',
			rating: 4,
			description: 'Authentic mexican food from burritos to chimichangas',
			numReview: 10,
			meanPrice: 2,
			foodType: 'Mexican',
			imageSrc: '../assets/images/tacocabana.png',
			zip: '75090',
			delivery: true,
		},
	];

	self.restaurants = ko.observableArray([
		new RestaurantDetails(self.restaurantsList[0])
	]);
}

// var zipcode = document.getElementById('zip').value;
// console.log(zipcode);

ko.applyBindings(new RestaurantViewModel());
