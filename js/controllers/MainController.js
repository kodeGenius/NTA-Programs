// controller
app.controller('MainController', ['$scope', function($scope) {
    $scope.name = "This is Nigeria";
    $scope.program = {
    series: "Sherlock",
    series_img: "img/sherlock.jpg",
    genre: "Crime drama",
    onair: "Later Today",
    time: "5pm",
    season: 3,
    episode: "The Empty Hearse",
    description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
    datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
  };
  
   $scope.dead = {
    series: "Deadlock",
    series_img: "img/sherlock.jpg",
    genre: "Super Hero",
      onair: "Now",
    time: "9 pm",
    season: 4,
    episode: "The Super Hero",
    description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
    datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
  }
    
  }]);
