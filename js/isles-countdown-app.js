$(document).ready(function() {
    
    var seasonStartDate="2021/10/2";

    var oneDay = 24*60*60*1000;
    var todaysDate = new Date();
    var secondDate = new Date(seasonStartDate);
    var daysRemaining = Math.ceil(Math.abs(todaysDate.getTime() - secondDate.getTime())/(oneDay));
    
    //for testing date math 
    //daysRemaining = 7; 
    //console.log(daysRemaining);

    $('.dayTarget').empty();
    $('.dayTarget').append(daysRemaining);
    $("body").css({"background-color":"#00529B"});

    displayAwesomeImage();


function displayAwesomeImage(){

    var awesomeImageBank = [
                "https://media.giphy.com/media/lTH2PIsmJAqAYx1ZuS/giphy.gif?cid=790b7611d43ff39dfc9013b97477e4b05a52eff442cc2e80&rid=giphy.gif&ct=g", //sparky
                "https://media.giphy.com/media/KENIdHKeKx6pmKkQXx/giphy.gif?cid=790b7611781169d72d02f71117609acf87f0285fbe6694a3&rid=giphy.gif&ct=g", //ders
                "https://media.giphy.com/media/9JrvQWqkvbxNXaMcf9/giphy.gif?cid=790b7611bca59732104a20c08809dfc21136147bae188cfe&rid=giphy.gif&ct=g", //Matty Marts
                "https://media.giphy.com/media/mCJfuMweM3WTFfmJCB/giphy.gif?cid=ecf05e475npu3uws6sic34l2vxrwmfy3neveukmyextfpjb8&rid=giphy.gif&ct=g", //
                "https://46wvda23y0nl13db2j3bl1yx-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/image.jpg", //lou
                "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3oriOg7y7JbCV9CiyY%2Fgiphy.gif&f=1", //trotz brows
                "https://cdn-images-1.medium.com/max/1600/1*JMG2V59iMIXpAHKg9bXNYg.gif", //pulock
                "https://cdn-images-1.medium.com/max/1600/1*tB0JOhP0qBGpKsACPtGBPQ.gif", //bailey
                "https://media2.giphy.com/media/xTiN0NaLs6XmLQyjXq/giphy.gif", //tito
                "https://thumbs.gfycat.com/CheeryKindlyAsianconstablebutterfly-size_restricted.gif", //tito again
                "https://media2.giphy.com/media/U84k70uLR6rTqqHUIh/giphy.gif" //tito
                ];    

    var num = Math.floor(Math.random() * 13);
    var awesomeImageUrl = awesomeImageBank[num]; 
    console.log(awesomeImageBank[num]);
    $('body').css({"background-color":"#00529B"});
    $("body").css({"background":"url("+awesomeImageUrl});
    $("body").css({"background-repeat":"no-repeat"});
    $("body").css({"background-size":"100%"});
}

});


