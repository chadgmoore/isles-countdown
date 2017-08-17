$(document).ready(function() {
    
    var seasonStartDate="2017/10/6";

    var oneDay = 24*60*60*1000;
    var todaysDate = new Date();
    var secondDate = new Date(seasonStartDate);
    var daysRemaining = Math.ceil(Math.abs(todaysDate.getTime() - secondDate.getTime())/(oneDay));
    daysRemaining = 72;



    // $('.outerWhiteCircle').delay(1000).animate({opacity: 0.75, duration: "slow", easing: "easein"});

    $('.dayTarget').empty();
    $('.dayTarget').append(daysRemaining);
    $("body").css({"background-color":"#00529B"});

    var data = {"islandersRoster":[
    {"sweaterNumber":"1", "firstName":"Thomas", "lastName":"Greiss", "position":"G", "gif":"http://bloguin.com/islandersinsight/wp-content/uploads/sites/173/2014/10/Tavares-Goal-vs-Hurricanes.gif"},
    {"sweaterNumber":"2", "firstName":"Nick", "lastName":"Leddy", "position":"D", "gif":"http://i.imgur.com/bBiwzJY.gif"},
    {"sweaterNumber":"6", "firstName":"Ryan", "lastName":"Pulock", "position":"D", "gif":"https://cdn-images-1.medium.com/max/1600/1*JMG2V59iMIXpAHKg9bXNYg.gif"},
    {"sweaterNumber":"7", "firstName":"Jordan", "lastName":"Eberle", "position":"F", "gif":"http://stream1.gifsoup.com/view4/1219351/jordan-eberle-o.gif"},
    {"sweaterNumber":"10", "firstName":"Alan", "lastName":"Quine", "position":"C", "gif":"http://cdn.barstoolsports.com/wp-content/uploads/2016/04/23/Apr-23-2016-0030.gif"},
    {"sweaterNumber":"11", "firstName":"Shane", "lastName":"Prince", "position":"LW", "gif":"http://cdn.barstoolsports.com/wp-content/uploads/2016/04/28/Prince.gif"},
    {"sweaterNumber":"12", "firstName":"Josh", "lastName":"Bailey", "position":"LW", "gif":"http://i.imgur.com/OKwlm99.gif"},
    {"sweaterNumber":"13", "firstName":"Matthew", "lastName":"Barzal", "position":"C", "gif":"https://the1stpass.files.wordpress.com/2016/12/barzal-5.gif?w=712"},
    {"sweaterNumber":"14", "firstName":"Thomas", "lastName":"Hickey", "position":"D", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2014/01/Thomas-Hickey-Goal-vs-Rangers.gif"},
    {"sweaterNumber":"15", "firstName":"Cal", "lastName":"Clutterbuck", "position":"RW", "gif":"https://snyislanders.files.wordpress.com/2013/12/clutterbuckshhhh.gif"},
    {"sweaterNumber":"16", "firstName":"Andrew", "lastName":"Ladd", "position":"LW", "gif":"http://sonsofpenn.com/wp-content/uploads/2017/03/laddbackmason.gif"},
    {"sweaterNumber":"25", "firstName":"Jason", "lastName":"Chimera", "position":"LW", "gif":"http://giant.gfycat.com/AdvancedCourageousBarracuda.gif"},
    {"sweaterNumber":"27", "firstName":"Anders", "lastName":"Lee", "position":"C", "gif":"http://giant.gfycat.com/GraveBraveAntlion.gif"},
    {"sweaterNumber":"29", "firstName":"Brock", "lastName":"Nelson", "position":"C", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2014/02/Brock-Nelson-Goal-vs-Rangers.gif"},
    {"sweaterNumber":"41", "firstName":"Jaroslav", "lastName":"Halak", "position":"G", "gif":"https://media2.giphy.com/media/91uSZRRHVszCM/200.gif"},
    {"sweaterNumber":"42", "firstName":"Scott", "lastName":"Mayfield", "position":"D", "gif":"http://blueseatblogs.com/wp-content/uploads/2016/12/2016-12-06-19_22_36.gif"},
    {"sweaterNumber":"44", "firstName":"Calvin", "lastName":"de Haan", "position":"D", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2014/02/Calvin-de-Haan-Goal-vs-Flames.gif"},
    {"sweaterNumber":"50", "firstName":"Adam", "lastName":"Pelech", "position":"D", "gif":"REPLACEME"},
    {"sweaterNumber":"53", "firstName":"Casey", "lastName":"Cizikas", "position":"C", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2014/01/Casey-Cizikas-Goal-vs-Blackhawks.gif"},
    {"sweaterNumber":"55", "firstName":"Johnny", "lastName":"Boychuk", "position":"D", "gif":"http://giant.gfycat.com/AdvancedCourageousBarracuda.gif"},
    {"sweaterNumber":"66", "firstName":"Joshua", "lastName":"Ho-Sang", "position":"RW", "gif":"https://media4.giphy.com/media/3o7buis1pOwJn7fHRC/giphy.gif"},
    {"sweaterNumber":"72", "firstName":"Anthony", "lastName":"Beauvillier", "position":"C", "gif":"https://media2.giphy.com/media/xTiN0NaLs6XmLQyjXq/giphy.gif"},
    {"sweaterNumber":"86", "firstName":"Nikolay", "lastName":"Kulemin", "position":"L", "gif":"http://bloguin.com/islandersinsight/wp-content/uploads/sites/173/2014/11/Kulemin-Goal-vs-Penguins.gif"},
    {"sweaterNumber":"91", "firstName":"John", "lastName":"Tavares", "position":"C", "gif":"http://i.imgur.com/A1nf6XM.gif"}    
]};

for ( i in data.islandersRoster ) {
    if (data.islandersRoster[i].sweaterNumber == daysRemaining) {
        $('.nameTarget').empty();
        $('.nameTarget').append(data.islandersRoster[i].sweaterNumber);
        $("body").css({"background":"url("+data.islandersRoster[i].gif+")"});
        $("body").css({"background-size":"contain"});
        $("body").css({"background-repeat":"no-repeat"});
        $("body").css({"background-color":"#00529B"});
        // $('.outerCircle').delay(1800).animate({opacity: 0.5, duration: "slow", easing: "easein"});
        // $('.outerCircle').delay(6400).animate({opacity: 1, duration: "slow", easing: "easein"});
        $('.nameTarget').empty();
        $('.nameTarget').empty().append('<span id=nameColor>'+data.islandersRoster[i].firstName + " " + data.islandersRoster[i].lastName + ' more days!</span>');
    }
    // else (data.islandersRoster[i].sweaterNumber != daysRemaining){
    //  $('body').css({"background":"url(http://1.cdn.nhle.com/nhl/images/upload/2014/07/OKPOSO_JT_FANTASY_072814.jpg)"});
    // }
}

if (daysRemaining <= 0){
        $("body").css({"background":"url(http://giant.gfycat.com/NaiveIckyGermanshorthairedpointer.gif"});
        $("body").css({"background-size":"contain"});
        $("body").css({"background-repeat":"no-repeat"});
        $('.dayTarget').empty();
        $('.displayInfo').empty();
        $('.displayInfo').append("<span id=nameColor>"+"Let's Go Isles!"+"</span>");
        $('.cover-heading').empty();
}


});

// function setSweaterNumber(sweaterNum){
//         $('.dayTarget').empty();
//         $('.dayTarget').append(sweaterNum);
//         console.log('This is the sweaterNum: ' + sweaterNum);
//     };


var dankBank = [
                "https://i.redd.it/p4qu1obhwrby.jpg", 
                "https://i.imgur.com/YsW7e7u.jpg", 
                "https://68.media.tumblr.com/b7422a08959b5a7832f48dabdb16c541/tumblr_ojnm1iYKlX1qgw93ro1_540.gif", 
                "http://giant.gfycat.com/NaiveIckyGermanshorthairedpointer.gif", "https://68.media.tumblr.com/b7422a08959b5a7832f48dabdb16c541/tumblr_ojnm1iYKlX1qgw93ro1_540.gif",
                "https://s-media-cache-ak0.pinimg.com/originals/bb/1f/de/bb1fde918e3a952639d0ab1b5369dfdb.jpg"

                ];    

function displayDankImage(){

    //the first statement should generate a random number in the range 0 to 6 (the subscript values of the image file names in the imagesArray)
    var num = Math.floor(Math.random() * 4); // 0...6
    //the second statement display the random image from the imagesArray array in the canvas image using the random number as the subscript value
    document.canvas.src = dankBank[num];

}

/*
Rewrite for 2017-2018.


1 If days remaining = a sweater number:
    Load gif of player
DONE


2 If days remaining != sweater number
pick random background


3 "Make it Dank" in the modal
4 Make it responsive
5 Set a number?



*/