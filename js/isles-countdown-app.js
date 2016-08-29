$(document).ready(function() {
    var seasonStartDate="2016/10/13";

    var oneDay = 24*60*60*1000;
    var todaysDate = new Date();
    var secondDate = new Date(seasonStartDate);
    var daysRemaining = Math.ceil(Math.abs(todaysDate.getTime() - secondDate.getTime())/(oneDay));
    // daysRemaining = 0;

    $('.dayTarget').empty();
    $('.dayTarget').append(daysRemaining);
    $("body").css({"background-color":"#00529B"});

    var data = {"islandersRoster":[
    {"sweaterNumber":"1", "firstName":"Thomas", "lastName":"Greiss", "position":"G", "gif":"http://bloguin.com/islandersinsight/wp-content/uploads/sites/173/2014/10/Tavares-Goal-vs-Hurricanes.gif"},
    {"sweaterNumber":"2", "firstName":"Nick", "lastName":"Leddy", "position":"D", "gif":"http://i.imgur.com/bBiwzJY.gif"},
    {"sweaterNumber":"3", "firstName":"Travis", "lastName":"Hamonic", "position":"D", "gif":"http://bloguin.com/islandersinsight/wp-content/uploads/sites/173/2014/11/Hamonic-Goal-vs-Capitals.gif"},
    {"sweaterNumber":"10", "firstName":"Alan", "lastName":"Quine", "position":"C", "gif":"http://i0.wp.com/gothamsn.com/wp-content/uploads/2016/04/QUINEot.gif"},
    {"sweaterNumber":"11", "firstName":"Shane", "lastName":"Prince", "position":"C", "gif":"https://dabuzzzadotcom.files.wordpress.com/2016/03/shaneprince.gif"},
    {"sweaterNumber":"12", "firstName":"Josh", "lastName":"Bailey", "position":"L", "gif":"http://i.imgur.com/OKwlm99.gif"},
    {"sweaterNumber":"14", "firstName":"Thomas", "lastName":"Hickey", "position":"D", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2014/01/Thomas-Hickey-Goal-vs-Rangers.gif"},
    {"sweaterNumber":"15", "firstName":"Cal", "lastName":"Clutterbuck", "position":"R", "gif":"https://snyislanders.files.wordpress.com/2013/12/clutterbuckshhhh.gif"},
    {"sweaterNumber":"16", "firstName":"Andrew", "lastName":"Ladd", "position":"L", "gif":"http://assets.sbnation.com/assets/2251739/quickgoal.gif"},
    {"sweaterNumber":"17", "firstName":"PA", "lastName":"Parenteau", "position":"R", "gif":"https://media.giphy.com/media/TZV698g7T2q0o/giphy.gif"},
    {"sweaterNumber":"18", "firstName":"Ryan", "lastName":"Strome", "position":"C", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2014/03/Ryan-Strome-Goal-vs-Canucks.gif"},
    {"sweaterNumber":"25", "firstName":"Jason", "lastName":"Chimera", "position":"L", "gif":"http://cdn1.sbnation.com/assets/3715321/him.gif"},
    {"sweaterNumber":"27", "firstName":"Anders", "lastName":"Lee", "position":"C", "gif":"http://giant.gfycat.com/GraveBraveAntlion.gif"},
    {"sweaterNumber":"29", "firstName":"Brock", "lastName":"Nelson", "position":"C", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2014/02/Brock-Nelson-Goal-vs-Rangers.gif"},
    {"sweaterNumber":"41", "firstName":"Jaroslav", "lastName":"Halak", "position":"G", "gif":"https://media2.giphy.com/media/91uSZRRHVszCM/200.gif"},
    {"sweaterNumber":"44", "firstName":"Calvin", "lastName":"De Haan", "position":"D", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2014/02/Calvin-de-Haan-Goal-vs-Flames.gif"},
    {"sweaterNumber":"53", "firstName":"Casey", "lastName":"Cizikas", "position":"C", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2014/01/Casey-Cizikas-Goal-vs-Blackhawks.gif"},
    {"sweaterNumber":"55", "firstName":"Johnny", "lastName":"Boychuk", "position":"D", "gif":"http://giant.gfycat.com/AdvancedCourageousBarracuda.gif"},
    {"sweaterNumber":"84", "firstName":"Mikhail", "lastName":"Grabovski", "position":"C", "gif":"http://giant.gfycat.com/HelplessSecretAidi.gif"},
    {"sweaterNumber":"86", "firstName":"Nikolay", "lastName":"Kulemin", "position":"L", "gif":"http://bloguin.com/islandersinsight/wp-content/uploads/sites/173/2014/11/Kulemin-Goal-vs-Penguins.gif"},
    {"sweaterNumber":"91", "firstName":"John", "lastName":"Tavares", "position":"C", "gif":"http://i.imgur.com/A1nf6XM.gif"}    
]};

for ( i in data.islandersRoster ) {
    if (data.islandersRoster[i].sweaterNumber == daysRemaining) {
        $('.dayTarget').empty();
        $('.dayTarget').append(data.islandersRoster[i].sweaterNumber);
        $("body").css({"background":"url("+data.islandersRoster[i].gif+")"});
        $("body").css({"background-size":"contain"});
        $("body").css({"background-repeat":"no-repeat"});
        $("body").css({"background-color":"#00529B"});
        $('.inner').delay(800).animate({opacity: 0.1, duration: "slow", easing: "easein"});
        $('.inner').delay(6400).animate({opacity: 1, duration: "slow", easing: "easein"});
        $('.displayInfo').empty();
        $('.displayInfo').empty().append('<span id=nameColor>'+data.islandersRoster[i].firstName + ' ' + data.islandersRoster[i].lastName + '</span>' + " more days!");
    }
    // else (data.islandersRoster[i].sweaterNumber != daysRemaining){
    //  $('body').css({"background":"url(http://1.cdn.nhle.com/nhl/images/upload/2014/07/OKPOSO_JT_FANTASY_072814.jpg)"});
    // }
}

if (daysRemaining <= 0){
        $("body").css({"background":"url(https://uproxx.files.wordpress.com/2016/04/jt-2.gif?w=650"});
        $("body").css({"background-size":"contain"});
        $("body").css({"background-repeat":"no-repeat"});
        $('.dayTarget').empty();
        $('.displayInfo').empty();
        $('.displayInfo').append("<span id=nameColor>"+"Let's Go Isles!"+"</span>");
        $('.cover-heading').empty();
}
});

