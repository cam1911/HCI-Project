// Class to represent a row in the seat reservations grid
function SeatReservation(initialMeal) {
    var self = this;
    self.meal = ko.observable(initialMeal);

    self.formattedPrice = ko.computed(function() {
        var price = self.meal().price;
        return price ? "$" + price.toFixed(2) : "None";
    });
}

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
    var self = this;

    // Non-editable catalog data - would come from the server
    self.availableMeals = [
        {
          mealName: "Meal 1",
          price: 7.99,
          description: 'The most popular meal'
        },
        {
          mealName: "Meal 2",
          price: 6.99,
          description: 'A less popular meal'
        },
        {
          mealName: "Meal 3",
          price: 5.99,
          description: 'Our worst meal ever'
        },
        {
          mealName: "Sandwich",
          price: 3.99,
          description: 'A pretty damn good sandwich'
        },
        {
          mealName: "Fries",
          price: 2.99,
          description: 'Salty fries for salty people'
        },
        {
          mealName: "Drink",
          price: 1.99,
          description: 'Drank for people who are too thirsty'
        },
        {
          mealName: "Cookie",
          price: 1.99,
          description: 'Its actually just a cookie'
        },
    ];

    // Editable data
    self.seats = ko.observableArray([
        new SeatReservation(self.availableMeals[0]),
    ]);

    // Computed data
    self.totalSurcharge = ko.computed(function() {
       var total = 0;
       for (var i = 0; i < self.seats().length; i++) {
         total += self.seats()[i].meal().price;
        }
       return total;
    });

    // Operations
    self.addSeat = function() {
        self.seats.push(new SeatReservation("", self.availableMeals[0]));
    }
    self.removeSeat = function(seat) { self.seats.remove(seat) }
}

ko.applyBindings(new ReservationsViewModel());
