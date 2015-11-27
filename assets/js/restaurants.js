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
			description: 'Fast-food chain specializing in fried chicken fingers, crinkle-cut fries & Texas toast.',
			numReview: 30,
			meanPrice: 1,
			foodType: 'Chicken',
		},
		{
			name: 'Raising Canes',
			rating: 4,
			description: 'Fast-food chain specializing in fried chicken fingers, crinkle-cut fries & Texas toast.',
			numReview: 25,
			meanPrice: 2,
			foodType: 'Chicken',
		},
		{
			name: 'Panda Express',
			rating: 3,
			description: 'Authentic asian cuisine',
			numReview: 20,
			meanPrice: 1,
			foodType: 'Asian',
		},
		{
			name: 'Chilis',
			rating: 3,
			description: 'Tex Mex Grill',
			numReview: 30,
			meanPrice: 2,
			foodType: 'Tex Mex',
		},
		{
			name: 'Olive Garden',
			rating: 2,
			description: 'Authentic italian food straight out of the microwave',
			numReview: 10,
			meanPrice: 2,
			foodType: 'Italian',
		},
		{
			name: 'Taco Cabana',
			rating: 4,
			description: 'Authentic mexican food from burritos to chimichangas',
			numReview: 10,
			meanPrice: 2,
			foodType: 'Mexican',
		},
	];

	self.restaurants = ko.observableArray([
		new RestaurantDetails(self.restaurantsList[0])
	]);
}

ko.applyBindings(new RestaurantViewModel());
