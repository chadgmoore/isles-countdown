$(document).ready(function() {
    
    var seasonStartDate="2018/10/4";

    var oneDay = 24*60*60*1000;
    var todaysDate = new Date();
    var secondDate = new Date(seasonStartDate);
    var daysRemaining = Math.ceil(Math.abs(todaysDate.getTime() - secondDate.getTime())/(oneDay));
    //daysRemaining = 7;
    // console.log(daysRemaining);



    // $('.outerWhiteCircle').delay(1000).animate({opacity: 0.75, duration: "slow", easing: "easein"});

    $('.dayTarget').empty();
    $('.dayTarget').append(daysRemaining);
    $("body").css({"background-color":"#00529B"});

    

    var data = {"islandersRoster":[
    {"sweaterNumber":"1", "firstName":"Thomas", "lastName":"Greiss", "position":"G", "gif":"http://bloguin.com/islandersinsight/wp-content/uploads/sites/173/2014/10/Tavares-Goal-vs-Hurricanes.gif"},
    {"sweaterNumber":"2", "firstName":"Nick", "lastName":"Leddy", "position":"D", "gif":"http://i.imgur.com/bBiwzJY.gif"},
    {"sweaterNumber":"6", "firstName":"Ryan", "lastName":"Pulock", "position":"D", "gif":"https://cdn-images-1.medium.com/max/1600/1*JMG2V59iMIXpAHKg9bXNYg.gif"},
    {"sweaterNumber":"7", "firstName":"Jordan", "lastName":"Eberle", "position":"F", "gif":"http://stream1.gifsoup.com/view4/1219351/jordan-eberle-o.gif"},
    {"sweaterNumber":"12", "firstName":"Josh", "lastName":"Bailey", "position":"LW", "gif":"http://i.imgur.com/OKwlm99.gif"},
    {"sweaterNumber":"13", "firstName":"Matthew", "lastName":"Barzal", "position":"C", "gif":"https://the1stpass.files.wordpress.com/2016/12/barzal-5.gif?w=712"},
    {"sweaterNumber":"14", "firstName":"Thomas", "lastName":"Hickey", "position":"D", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2014/01/Thomas-Hickey-Goal-vs-Rangers.gif"},
    {"sweaterNumber":"15", "firstName":"Cal", "lastName":"Clutterbuck", "position":"RW", "gif":"https://snyislanders.files.wordpress.com/2013/12/clutterbuckshhhh.gif"},
    {"sweaterNumber":"16", "firstName":"Andrew", "lastName":"Ladd", "position":"LW", "gif":"http://sonsofpenn.com/wp-content/uploads/2017/03/laddbackmason.gif"},
    {"sweaterNumber":"27", "firstName":"Anders", "lastName":"Lee", "position":"C", "gif":"http://giant.gfycat.com/GraveBraveAntlion.gif"},
    {"sweaterNumber":"29", "firstName":"Brock", "lastName":"Nelson", "position":"C", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2014/02/Brock-Nelson-Goal-vs-Rangers.gif"},
    {"sweaterNumber":"42", "firstName":"Scott", "lastName":"Mayfield", "position":"D", "gif":"http://blueseatblogs.com/wp-content/uploads/2016/12/2016-12-06-19_22_36.gif"},
    {"sweaterNumber":"50", "firstName":"Adam", "lastName":"Pelech", "position":"D", "gif":"REPLACEME"},
    {"sweaterNumber":"53", "firstName":"Casey", "lastName":"Cizikas", "position":"C", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2014/01/Casey-Cizikas-Goal-vs-Blackhawks.gif"},
    {"sweaterNumber":"55", "firstName":"Johnny", "lastName":"Boychuk", "position":"D", "gif":"http://giant.gfycat.com/AdvancedCourageousBarracuda.gif"},
    {"sweaterNumber":"66", "firstName":"Joshua", "lastName":"Ho-Sang", "position":"RW", "gif":"https://media4.giphy.com/media/3o7buis1pOwJn7fHRC/giphy.gif"},
    {"sweaterNumber":"72", "firstName":"Anthony", "lastName":"Beauvillier", "position":"C", "gif":"https://media2.giphy.com/media/xTiN0NaLs6XmLQyjXq/giphy.gif"},
]};

for ( i in data.islandersRoster ) {
    var targetSweaterNum = data.islandersRoster[i].sweaterNumber;
    if ( targetSweaterNum == daysRemaining) {
        displaySweaterNumGif(data.islandersRoster[i].gif);
}
    else {
            displayDankImage();
        }
}


// if (daysRemaining <= 0){
//         $("body").css({"background":"url(http://giant.gfycat.com/NaiveIckyGermanshorthairedpointer.gif)"});
//         $("body").css({"background-size":"contain"});
//         $("body").css({"background-repeat":"no-repeat"});
//         $('.dayTarget').empty();
//         $('.displayInfo').empty();
//         $('.displayInfo').append("<span id=nameColor>"+"Let's Go Isles!"+"</span>");
//         $('.cover-heading').empty();
// }

function displaySweaterNumGif(){
        var gifToDisplay = data.islandersRoster[i].gif;
        $("body").css({"background":"url("+gifToDisplay});

}

function displayDankImage(){

    var dankBank = [
                "https://46wvda23y0nl13db2j3bl1yx-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/image.jpg", 
                "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fnhl.bamcontent.com%2Fimages%2Fphotos%2F281468274%2F1024x576%2Fcut.jpg&f=1", 
                "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3oriOg7y7JbCV9CiyY%2Fgiphy.gif&f=1"
                ];    

    var num = Math.floor(Math.random() * 3);
    var dankUrl = dankBank[num]; 
    // console.log(dankBank[num]);
    $('body').css({"background-color":"#00529B"});
    $("body").css({"background":"url("+dankUrl});
    // $("body").css({"background-repeat":"no-repeat"});
    // $("body").css({"background-size":"cover"});
    $("body").css({"background-repeat":"no-repeat"});
    $("body").css({"background-size":"100%"});
};

});

// function setSweaterNumber(sweaterNum){
//         $('.dayTarget').empty();
//         $('.dayTarget').append(sweaterNum);
//         console.log('This is the sweaterNum: ' + sweaterNum);
//     };


// var dankBank = [
//                 "https://i.redd.it/p4qu1obhwrby.jpg", 
//                 "https://i.imgur.com/YsW7e7u.jpg", 
//                 "https://68.media.tumblr.com/b7422a08959b5a7832f48dabdb16c541/tumblr_ojnm1iYKlX1qgw93ro1_540.gif", 
//                 "http://giant.gfycat.com/NaiveIckyGermanshorthairedpointer.gif", "https://68.media.tumblr.com/b7422a08959b5a7832f48dabdb16c541/tumblr_ojnm1iYKlX1qgw93ro1_540.gif",
//                 "https://s-media-cache-ak0.pinimg.com/originals/bb/1f/de/bb1fde918e3a952639d0ab1b5369dfdb.jpg",
//                 "http://giant.gfycat.com/NaiveIckyGermanshorthairedpointer.gif",
//                 "https://68.media.tumblr.com/cfc65c05e6c93a32b9a6ea222c6d7395/tumblr_omu2diTxuR1rhtaw5o1_540.gif",
//                 "https://eyesonisles.com/wp-content/uploads/getty-images/2017/08/643270154-new-york-islanders-v-new-jersey-devils.jpg.jpg",
//                 "http://cdn.exstreamist.com/wp-content/uploads/2016/10/watch-New-York-Islanders-online.jpg",
//                 "https://s-media-cache-ak0.pinimg.com/originals/bb/1f/de/bb1fde918e3a952639d0ab1b5369dfdb.jpg",
//                 "http://az616578.vo.msecnd.net/files/2016/01/10/635880612321265916-63417908_159739593_std.jpg",
//                 "https://eyesonisles.com/wp-content/uploads/usat-images/2016/04/9967917-nhl-new-york-islanders-at-pittsburgh-penguins-1.jpeg",
//                 "https://68.media.tumblr.com/cfd6a4f90456076c6128c9be1a757f18/tumblr_omiumqHzHl1viy6gjo1_540.gif",
//                 "https://68.media.tumblr.com/b359085f385ec28755e8550b1215b6f2/tumblr_omh9kwv8hx1ulql2vo1_540.gif",
//                 "https://thumbs.gfycat.com/CloseDangerousIndianpangolin-size_restricted.gif"
//                 ];    

// function displayDankImage(){

//     var num = Math.floor(Math.random() * 14);
//     var dankUrl = dankBank[num]; 
//     console.log(dankBank[num]);
//     $("body").css({"background":"url("+dankUrl});
//     // $("body").css({"background-repeat":"no-repeat"});
//     $("body").css({"background-size":"contain"});
//     $("body").css({"background-repeat":"no-repeat"});
//     // $("body").css({"background-size":"100% 100%"});
// }

/*
Rewrite for 2017-2018.


1 If days remaining = a sweater number:
    Load gif of player
DONE


2 If days remaining != sweater number
pick random background
DONE

3 "Make it Dank" in the modal
NO

4 Make it responsive
Next

5 Set a number?
NO


*/