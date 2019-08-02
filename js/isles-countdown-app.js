$(document).ready(function() {
    
    var seasonStartDate="2019/10/4";

    var oneDay = 24*60*60*1000;
    var todaysDate = new Date();
    var secondDate = new Date(seasonStartDate);
    var daysRemaining = Math.ceil(Math.abs(todaysDate.getTime() - secondDate.getTime())/(oneDay));
    //daysRemaining = 7;
    //console.log(daysRemaining);

    $('.dayTarget').empty();
    $('.dayTarget').append(daysRemaining);
    $("body").css({"background-color":"#00529B"});

    displayDankImage();


function displayDankImage(){

    var dankBank = [
                "https://46wvda23y0nl13db2j3bl1yx-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/image.jpg", //lou
                "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fnhl.bamcontent.com%2Fimages%2Fphotos%2F281468274%2F1024x576%2Fcut.jpg&f=1", //lou
                "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3oriOg7y7JbCV9CiyY%2Fgiphy.gif&f=1", //trotz brows
                "http://i.imgur.com/bBiwzJY.gif", //leddy
                "https://cdn-images-1.medium.com/max/1600/1*JMG2V59iMIXpAHKg9bXNYg.gif", //pulock
                "https://78.media.tumblr.com/72d97fc5a25fcdaf0ff12e7097128c4f/tumblr_p5axwiVAVQ1w7b94zo2_500.gif", //ebs
                "https://cdn-images-1.medium.com/max/1600/1*tB0JOhP0qBGpKsACPtGBPQ.gif", //bailey
                "https://cdn-images-1.medium.com/max/1600/1*m9SGfDWoJDumlSD83N2JlQ.gif", //ho-sang
                "http://giant.gfycat.com/GraveBraveAntlion.gif", //lee
                "https://media2.giphy.com/media/xTiN0NaLs6XmLQyjXq/giphy.gif", //beaver
                "https://thumbs.gfycat.com/CheeryKindlyAsianconstablebutterfly-size_restricted.gif", //beaver again
                "http://cdn1.sbnation.com/imported_assets/1595217/fleuryfalldown_medium.gif" //ders
                ];    

    var num = Math.floor(Math.random() * 13);
    var dankUrl = dankBank[num]; 
    console.log(dankBank[num]);
    $('body').css({"background-color":"#00529B"});
    $("body").css({"background":"url("+dankUrl});
    $("body").css({"background-repeat":"no-repeat"});
    $("body").css({"background-size":"100%"});
}

});
