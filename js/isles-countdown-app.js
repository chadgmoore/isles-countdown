$(document).ready(function() {
<<<<<<< HEAD
    var seasonStartDate="2016/10/13";
=======
    
    var seasonStartDate="2017/10/6";
>>>>>>> 2017

    var oneDay = 24*60*60*1000;
    var todaysDate = new Date();
    var secondDate = new Date(seasonStartDate);
    var daysRemaining = Math.ceil(Math.abs(todaysDate.getTime() - secondDate.getTime())/(oneDay));
    // daysRemaining = 72;



    // $('.outerWhiteCircle').delay(1000).animate({opacity: 0.75, duration: "slow", easing: "easein"});

    $('.dayTarget').empty();
    $('.dayTarget').append(daysRemaining);
    $("body").css({"background-color":"#00529B"});

    var data = {"islandersRoster":[
    {"sweaterNumber":"1", "firstName":"Thomas", "lastName":"Greiss", "position":"G", "gif":"http://bloguin.com/islandersinsight/wp-content/uploads/sites/173/2014/10/Tavares-Goal-vs-Hurricanes.gif"},
    {"sweaterNumber":"2", "firstName":"Nick", "lastName":"Leddy", "position":"D", "gif":"http://i.imgur.com/bBiwzJY.gif"},
<<<<<<< HEAD
    {"sweaterNumber":"3", "firstName":"Travis", "lastName":"Hamonic", "position":"D", "gif":"http://bloguin.com/islandersinsight/wp-content/uploads/sites/173/2014/11/Hamonic-Goal-vs-Capitals.gif"},
    {"sweaterNumber":"6", "firstName":"Ryan", "lastName":"Pulock", "position":"D", "gif":"http://gothamsn.com/wp-content/uploads/2016/05/PULOCK.gif"},
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
    {"sweaterNumber":"30", "firstName":"Jean-Francois", "lastName":"Berube", "position":"G", "gif":"http://668d3eaa831be4d52f0d515f.ingoalmagazine.netdna-cdn.com/wp-content/uploads/2016/03/Berube2.gif"},
    {"sweaterNumber":"41", "firstName":"Jaroslav", "lastName":"Halak", "position":"G", "gif":"https://media2.giphy.com/media/91uSZRRHVszCM/200.gif"},
    {"sweaterNumber":"42", "firstName":"Scott", "lastName":"Mayfield", "position":"D", "gif":"https://45.media.tumblr.com/05fc81934cdb7c3550017707255c1348/tumblr_o583vhLOPU1ql0njbo1_400.gif"},
    {"sweaterNumber":"44", "firstName":"Calvin", "lastName":"De Haan", "position":"D", "gif":"http://cdn.fansided.com/wp-content/blogs.dir/111/files/2014/02/Calvin-de-Haan-Goal-vs-Flames.gif"},
    {"sweaterNumber":"50", "firstName":"Adam", "lastName":"Pelech", "position":"C", "gif":"http://38.media.tumblr.com/b5206852ffc7b699a0ddd347101fbd5d/tumblr_nig0iz2ACK1s2s4fio1_400.gif"},
=======
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
>>>>>>> 2017
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
    else {
            var dankBank = [
                "https://i.redd.it/p4qu1obhwrby.jpg", 
                "https://i.imgur.com/YsW7e7u.jpg", 
                "https://68.media.tumblr.com/b7422a08959b5a7832f48dabdb16c541/tumblr_ojnm1iYKlX1qgw93ro1_540.gif", 
                "http://giant.gfycat.com/NaiveIckyGermanshorthairedpointer.gif", "https://68.media.tumblr.com/b7422a08959b5a7832f48dabdb16c541/tumblr_ojnm1iYKlX1qgw93ro1_540.gif",
                "https://s-media-cache-ak0.pinimg.com/originals/bb/1f/de/bb1fde918e3a952639d0ab1b5369dfdb.jpg",
                "http://giant.gfycat.com/NaiveIckyGermanshorthairedpointer.gif",
                "https://68.media.tumblr.com/cfc65c05e6c93a32b9a6ea222c6d7395/tumblr_omu2diTxuR1rhtaw5o1_540.gif",
                "https://eyesonisles.com/wp-content/uploads/getty-images/2017/08/643270154-new-york-islanders-v-new-jersey-devils.jpg.jpg",
                "http://cdn.exstreamist.com/wp-content/uploads/2016/10/watch-New-York-Islanders-online.jpg",
                "https://s-media-cache-ak0.pinimg.com/originals/bb/1f/de/bb1fde918e3a952639d0ab1b5369dfdb.jpg",
                "http://az616578.vo.msecnd.net/files/2016/01/10/635880612321265916-63417908_159739593_std.jpg",
                "https://eyesonisles.com/wp-content/uploads/usat-images/2016/04/9967917-nhl-new-york-islanders-at-pittsburgh-penguins-1.jpeg",
                "https://68.media.tumblr.com/cfd6a4f90456076c6128c9be1a757f18/tumblr_omiumqHzHl1viy6gjo1_540.gif",
                "https://68.media.tumblr.com/b359085f385ec28755e8550b1215b6f2/tumblr_omh9kwv8hx1ulql2vo1_540.gif",
                "https://thumbs.gfycat.com/CloseDangerousIndianpangolin-size_restricted.gif"
                ];    

            function displayDankImage(){

                var num = Math.floor(Math.random() * 14);
                var dankUrl = dankBank[num]; 
                // console.log(dankBank[num]);
                $('body').css({"background-color":"#00529B"});
                $("body").css({"background":"url("+dankUrl});
                // $("body").css({"background-repeat":"no-repeat"});
                // $("body").css({"background-size":"cover"});
                $("body").css({"background-repeat":"no-repeat"});
                $("body").css({"background-size":"100%"});
            }

            displayDankImage();


        }
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