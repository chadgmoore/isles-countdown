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
    {"sweaterNumber":"1", "firstName":"Thomas", "lastName":"Greiss", "position":"G", "gif":"http://bloguin.com/islandersinsight/wp-content/uploads/sites/173/2014/10/Tavares-Goal-vs-Hurricanes.gif"},
	{"sweaterNumber":"2", "firstName":"Nick", "lastName":"Leddy", "position":"D", "gif":"http://i.imgur.com/bBiwzJY.gif"},
	{"sweaterNumber":"3", "firstName":"Travis", "lastName":"Hamonic", "position":"D", "gif":"http://bloguin.com/islandersinsight/wp-content/uploads/sites/173/2014/11/Hamonic-Goal-vs-Capitals.gif"},
	{"sweaterNumber":"12", "firstName":"Josh", "lastName":"Bailey", "position":"L", "gif":"http://i.imgur.com/OKwlm99.gif"},
	{"sweaterNumber":"14", "firstName":"Thomas", "lastName":"Hickey", "position":"D", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2014/01/Thomas-Hickey-Goal-vs-Rangers.gif"},
	{"sweaterNumber":"15", "firstName":"Cal", "lastName":"Clutterbuck", "position":"R", "gif":"https://snyislanders.files.wordpress.com/2013/12/clutterbuckshhhh.gif"},
	{"sweaterNumber":"17", "firstName":"Matt", "lastName":"Martin", "position":"L", "gif":"http://cdn2.sbnation.com/imported_assets/1598309/crosbyhit_medium.gif"},
	{"sweaterNumber":"18", "firstName":"Ryan", "lastName":"Strome", "position":"C", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2014/03/Ryan-Strome-Goal-vs-Canucks.gif"},
	{"sweaterNumber":"21", "firstName":"Kyle", "lastName":"Okposo", "position":"R", "gif":"http://assets.sbnation.com/assets/2579843/okposo.gif"},
	{"sweaterNumber":"27", "firstName":"Anders", "lastName":"Lee", "position":"C", "gif":"http://giant.gfycat.com/GraveBraveAntlion.gif"},
	{"sweaterNumber":"29", "firstName":"Brock", "lastName":"Nelson", "position":"C", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2014/02/Brock-Nelson-Goal-vs-Rangers.gif"},
	{"sweaterNumber":"37", "firstName":"Brian", "lastName":"Strait", "position":"D", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2014/01/Brian-Stait-Goal-vs-Flyers.gif"},
	{"sweaterNumber":"40", "firstName":"Michael", "lastName":"Grabner", "position":"R", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2013/12/Grabner-Goal-vs-Rangers.gif"},
	{"sweaterNumber":"41", "firstName":"Jaroslav", "lastName":"Halak", "position":"G", "gif":"https://media2.giphy.com/media/91uSZRRHVszCM/200.gif"},
	{"sweaterNumber":"44", "firstName":"Calvin", "lastName":"De Haan", "position":"D", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2014/02/Calvin-de-Haan-Goal-vs-Flames.gif"},
	{"sweaterNumber":"51", "firstName":"Frans", "lastName":"Nielsen", "position":"C", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2014/03/Frans-Nielsen-Goal-vs-Oilers.gif"},
	{"sweaterNumber":"53", "firstName":"Casey", "lastName":"Cizikas", "position":"C", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2014/01/Casey-Cizikas-Goal-vs-Blackhawks.gif"},
	{"sweaterNumber":"55", "firstName":"Johnny", "lastName":"Boychuk", "position":"D", "gif":"http://giant.gfycat.com/AdvancedCourageousBarracuda.gif"},
	{"sweaterNumber":"84", "firstName":"Mikhail", "lastName":"Grabovski", "position":"C", "gif":"http://giant.gfycat.com/HelplessSecretAidi.gif"},
	{"sweaterNumber":"86", "firstName":"Nikolay", "lastName":"Kulemin", "position":"L", "gif":"http://bloguin.com/islandersinsight/wp-content/uploads/sites/173/2014/11/Kulemin-Goal-vs-Penguins.gif"},
	{"sweaterNumber":"91", "firstName":"John", "lastName":"Tavares", "position":"C", "gif":"http://i.imgur.com/A1nf6XM.gif"}    
]};

for ( var i in data.islandersRoster ) {
    if (data.islandersRoster[i].sweaterNumber == daysRemaining) {
    	$('.dayTarget').empty();
    	$('.dayTarget').append(data.islandersRoster[i].sweaterNumber);
    	$("body").css({"background":"url("+data.islandersRoster[i].gif+")"});
    	$("body").css({"background-size":"cover"});
    	$("body").css({"background-repeat":"no-repeat"});
    	$('.cover-container').delay(800).animate({opacity: 0.1, duration: "slow", easing: "easein"});
    	$('.cover-container').delay(6400).animate({opacity: 1, duration: "slow", easing: "easein"});
    	
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