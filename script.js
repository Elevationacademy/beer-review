var sortDescending = true;

var beers = [
  { name: "Hey", category: "Porter", rating: 4 },
  { name: "Yo", category: "IPA", rating: 1 },
  { name: "Sup", category: "Wheat", rating: 2 },
  { name: "Boy", category: "Pilsner", rating: 5 },
  { name: "Shiz", category: "IPA", rating: 2 }
];

$('.post-beer').on('click', function (e) {
  e.preventDefault();

  var name = $('#beer-name').val();
  var category = $('#beer-category').val();
  var rating = $('#beer-rating').val();

  addBeer(name, category, rating);
  updateBeers();
});

var addBeer = function (name, category, rating) {
  var beer = {
    name: name,
    category: category,
    rating: rating
  };

  beers.push(beer);
};

var updateBeers = function () {
  $('.beers').empty();

 
  for (var i = 0; i < beers.length; i++) {
    var name = beers[i].name;
    var category = beers[i].category;
    var rating = beers[i].rating;

    $('.beers').append('<p>' + name + ' - ' + category + ' - ' + rating + '</p>')
  }
}

updateBeers();