$(document).ready(function() {
	var seasonStartDate="2015-10-9";

	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	var firstDate = new Date(); // Todays date
	var secondDate = new Date(seasonStartDate);

	var daysRemaining = Math.ceil(Math.abs(firstDate.getTime() - secondDate.getTime())/(oneDay));
	// daysRemaining = 0;
	
	$('.dayTarget').empty();
    $('.dayTarget').append(daysRemaining);

	var data = {"islandersRoster":[
    {"sweaterNumber":"1", "firstName":"Thomas", "lastName":"Greiss", "position":"G"},
	{"sweaterNumber":"2", "firstName":"Nick", "lastName":"Leddy", "position":"D"},
	{"sweaterNumber":"3", "firstName":"Travis", "lastName":"Hamonic", "position":"D"},
	{"sweaterNumber":"12", "firstName":"Josh", "lastName":"Bailey", "position":"L"},
	{"sweaterNumber":"14", "firstName":"Thomas", "lastName":"Hickey", "position":"D"},
	{"sweaterNumber":"15", "firstName":"Cal", "lastName":"Clutterbuck", "position":"R"},
	{"sweaterNumber":"17", "firstName":"Matt", "lastName":"Martin", "position":"L"},
	{"sweaterNumber":"18", "firstName":"Ryan", "lastName":"Strome", "position":"C"},
	{"sweaterNumber":"21", "firstName":"Kyle", "lastName":"Okposo", "position":"R", "gif":"http://assets.sbnation.com/assets/2579843/okposo.gif"},
	{"sweaterNumber":"27", "firstName":"Anders", "lastName":"Lee", "position":"C"},
	{"sweaterNumber":"29", "firstName":"Brock", "lastName":"Nelson", "position":"C"},
	{"sweaterNumber":"37", "firstName":"Brian", "lastName":"Strait", "position":"D"},
	{"sweaterNumber":"40", "firstName":"Michael", "lastName":"Grabner", "position":"R"},
	{"sweaterNumber":"41", "firstName":"Jaroslav", "lastName":"Halak", "position":"G"},
	{"sweaterNumber":"44", "firstName":"Calvin", "lastName":"De Haan", "position":"D"},
	{"sweaterNumber":"51", "firstName":"Frans", "lastName":"Nielsen", "position":"C"},
	{"sweaterNumber":"53", "firstName":"Casey", "lastName":"Cizikas", "position":"C"},
	{"sweaterNumber":"55", "firstName":"Johnny", "lastName":"Boychuk", "position":"D"},
	{"sweaterNumber":"84", "firstName":"Mikhail", "lastName":"Grabovski", "position":"C"},
	{"sweaterNumber":"86", "firstName":"Nikolay", "lastName":"Kulemin", "position":"L"},
	{"sweaterNumber":"91", "firstName":"John", "lastName":"Tavares", "position":"C", "gif":"http://i.imgur.com/A1nf6XM.gif"}    
]};

for ( var i in data.islandersRoster ) {
    if (data.islandersRoster[i].sweaterNumber == daysRemaining) {
    	$('.dayTarget').empty();
    	$('.dayTarget').append(data.islandersRoster[i].firstName);
    	$("body").css({"background":"url("+data.islandersRoster[i].gif+")"});
    	$("body").css({"background-size":"cover"});
    	$("body").css({"background-repeat":"no-repeat"});
    }
}

if (daysRemaining <= 0){
	    $("body").css({"background":"url(http://giant.gfycat.com/NaiveIckyGermanshorthairedpointer.gif"});
    	$("body").css({"background-size":"cover"});
    	$("body").css({"background-repeat":"no-repeat"});
    	$('.dayTarget').empty();
    	$('.dayTarget').append("Let's Go Isles!");
    	$('.cover-heading').empty();
}
});