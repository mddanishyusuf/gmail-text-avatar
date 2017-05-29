angular.module('gmailClone',[])

.controller('mainController', ['$scope', function($scope){
	
	$scope.data = [
    {
      "first": "Bryan",
      "last": "Cranston",
      "profile_pic": "http://i.imgur.com/Qi5YNlx.png",
      "message": "Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle."
    },
    {
      "first": "Aaron",
      "last": "Paul",
      "profile_pic": null,
      "message": "Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the 'Need For Speed' Movie."
    },
    {
      "first": "Bob",
      "last": "Odenkirk",
      "profile_pic": null,
      "message": "Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle."
    },
    {
      "first": "Dominic",
      "last": "Purcell",
      "profile_pic": "http://i.imgur.com/pEkD9VK.png",
      "message": "Born in England but raised in Australia by his Norwegian father and Irish mother, Purcell was a bored landscaper who decided to attend a drama school."
    },
    {
      "first": "Wentworth",
      "last": "Miller",
      "profile_pic": null,
      "message": "Wentworth Miller is a compelling and critically acclaimed actor whose credits span both television and feature film."
    },
    {
      "first": "Sarah",
      "last": "Wayne",
      "profile_pic": null,
      "message": "Sarah Wayne Callies was born in La Grange, Illinois, and was raised in Honolulu, Hawaii, the daughter of Valerie Wayne."
    }
  ]

}])