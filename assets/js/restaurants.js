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
			description: 'Fast food chicken place',
			numReview: 30,
			meanPrice: 1,
			foodType: 'Chicken',
			imageSrc: '../assets/images/chikfila.png',
		},
		{
			name: 'Raising Canes',
			rating: 4,
			description: 'A better fast food chicken place',
			numReview: 25,
			meanPrice: 2,
			foodType: 'Chicken',
			imageSrc: '../assets/images/raisingcanes.png',
		},
		{
			name: 'Panda Express',
			rating: 3,
			description: 'Authentic asian cuisine',
			numReview: 20,
			meanPrice: 1,
			foodType: 'Asian',
			imageSrc: '../assets/images/panda.png',
		},
		{
			name: 'Chilis',
			rating: 3,
			description: 'Tex Mex Grill',
			numReview: 30,
			meanPrice: 2,
			foodType: 'Tex Mex',
			imageSrc: '../assets/images/chilis.png',
		},
		{
			name: 'Olive Garden',
			rating: 2,
			description: 'Authentic italian food straight out of the microwave',
			numReview: 10,
			meanPrice: 2,
			foodType: 'Italian',
			imageSrc: '../assets/images/olivegarden.png',
		},
		{
			name: 'Taco Cabana',
			rating: 4,
			description: 'Authentic mexican food from burritos to chimichangas',
			numReview: 10,
			meanPrice: 2,
			foodType: 'Mexican',
			imageSrc: '../assets/images/tacocabana.png',
		},
	];

	self.restaurants = ko.observableArray([
		new RestaurantDetails(self.restaurantsList[0])
	]);
}

ko.applyBindings(new RestaurantViewModel());
