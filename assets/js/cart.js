// Class to represent a row in the seat reservations grid
function SeatReservation(initialMeal) {
    var self = this;
    self.meal = ko.observable(initialMeal);

    self.formattedPrice = ko.computed(function() {
        var price = self.meal().price;
        return price ? "$" + price.toFixed(2) : "None";
    });

    self.addTax = ko.computed(function() {
      var price = self.meal().price;
      var tax = ( price * .0825 ) + price;
      return tax ? "$" + price.toFixed(2) : "None";
    });

    self.getTotal = ko.computed(function() {
      var price = self.meal().price;
      var tax = ( price * .0825 ) + price;
      var total = tax + price;
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
          description: 'The most popular meal. Comes with fries and drink',
          imageSrc: '../assets/images/american.png',
        },
        {
          mealName: "Meal 2",
          price: 6.99,
          description: 'The second most popular meal.',
          imageSrc: '../assets/images/deli.png',
        },
        {
          mealName: "Meal 3",
          price: 5.99,
          description: 'The third most popular meals',
          imageSrc: '../assets/images/pizza.png',
        },
        {
          mealName: "Sandwich",
          price: 3.99,
          description: 'A pretty awesome sandwich',
          imageSrc: '../assets/images/deli.png',
        },
        {
          mealName: "Spaghetti",
          price: 2.99,
          description: 'Spaghetti and meatballs with tomato sauce',
          imageSrc: '../assets/images/italian.png',
        },
        {
          mealName: "Specialty Plate",
          price: 1.99,
          description: 'Chefs special limited edition plate',
          imageSrc: '../assets/images/indian.png',
        },
        {
          mealName: "Panini",
          price: 1.99,
          description: 'A grilled sandwich pressed to perfection',
          imageSrc: '../assets/images/sandwiches.png',
        },
    ];

    // Editable data
    self.seats = ko.observableArray([
        //new SeatReservation(self.availableMeals[0]),
    ]);

    // Computed data
    self.totalSurcharge = ko.computed(function() {
       var total = 0;
       for (var i = 0; i < self.seats().length; i++) {
         total += self.seats()[i].meal().price;
        }
       return total;
    });
    self.addTax = ko.computed(function() {
      var total = 0;
      for (var i = 0; i < self.seats().length; i++) {
        total += self.seats()[i].meal().price;
       }
      var tax = ( total * .0825 );
      return tax ? "$" + tax.toFixed(2) : "None";
    });
    self.addDelivery = ko.computed(function() {
      var total = 0;
      for (var i = 0; i < self.seats().length; i++) {
        total += self.seats()[i].meal().price;
       }
       //var tax = ( total * .0825 );
      total = total + 4;
      return total ? "$" + total.toFixed(2) : "None";
    });
    self.endCost = ko.computed(function() {
      var total = 0;
      for (var i = 0; i < self.seats().length; i++) {
        total += self.seats()[i].meal().price;
       }
      var tax = ( total * .0825 );
      total = total + 4 + tax;
      return total ? "$" + total.toFixed(2) : "None";
    });


    // Operations
    self.addSeat = function() {
      self.seats.push(new SeatReservation("", self.availableMeals[0]));
    }
    self.removeSeat = function(seat) { self.seats.remove(seat) }
}

ko.applyBindings(new ReservationsViewModel());
