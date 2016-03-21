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

$('.sort-beer').on('click', function (e) {
  e.preventDefault();

  sortBeers();
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

var sortBeers = function () {

  var len = beers.length;

  for (var i = len - 1; i >= 0; i --) {
    for (var j = 1 ; j <= i; j++) {
      if (beers[j - 1].rating > beers[j].rating) {
        var temp = beers[j - 1];
        beers[j - 1] = beers[j];
        beers[j] = temp;
      }
    }
  }

  if (sortDescending) {
    beers.reverse();
  }

  sortDescending = !sortDescending;

  updateBeers();
}

updateBeers();