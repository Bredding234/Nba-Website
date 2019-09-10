var fullDate = new Date();
function RenderDate(){

fullDate.setDate(1);
var day = fullDate.getDay();

var endDate = new Date(fullDate.getFullYear(),fullDate.getMonth() + 1,0).getDate();

var prevDate = new Date(fullDate.getFullYear(),fullDate.getMonth(),0).getDate();

var today = new Date().getDate();
console.log(today);

var Months= [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
];

document.getElementById('date_str').innerHTML = fullDate.toDateString();
document.getElementById('Month').innerHTML = Months[fullDate.getMonth()];

var cells = "";

for (x = day; x>0; x--){
    cells += "<div class = 'calendar'>" + (prevDate - x + 1)  + "</div>"
}

for(i = 1; i<=endDate; i++){
    if(i == today){
    cells += "<div class = 'today'>" + i + "</div";
    } else{
    cells+= "<div>" + i + "</div>";
    }

}

//document.getElementsByClassName("calendar")[0].innerHTML = cells;
}
function moveDate(para){
    if(para == 'prev'){
        fullDate.setMonth(fullDate.getMonth()-1);
        RenderDate();
    }else if (para == 'next'){
        fullDate.setMonth(fullDate.getMonth() + 1);
        RenderDate();
    }
}

var button = document.getElementById("click");

var bodyBcg = document.querySelector('body');
var teams = ["https://www.pixelstalk.net/wp-content/uploads/2016/04/Lakers-logo-wallpapers-HD-free-download.jpeg",
"https://wallpapercave.com/wp/wp1840190.jpg",
"https://wallpapercave.com/wp/wp1871816.jpg",
"https://www.nba.com/resources/static/team/v2/celtics/media/GRD2014_wide_logo-1920x1200.jpg",
"https://www.nba.com/resources/static/team/v2/hornets/NOP_wallpaper_1920x1200.jpg",
"https://wallpapercave.com/wp/p5uk7fE.jpg",
"http://www.basketwallpapers.com/wp-content/uploads/2017/04/Houston-Rockets-2017-BasketWallpapers.com-.jpg",
"https://wallpapercave.com/wp/wp2518650.jpg",
"https://wallpapercave.com/wp/wc1752961.jpg",
"https://stmed.net/sites/default/files/chicago-bulls-wallpapers-30977-3052529.jpg",
"https://www.nba.com/cavaliers/sites/cavaliers/files/171023-logo-thumb.jpg",
"https://www.nba.com/resources/static/team/v2/bucks/150409-wallpaper-primary-2524x2524.jpg",
"https://cdn.vox-cdn.com/thumbor/8ZfFV7LrGUP6pygHC2n64fxVs94=/0x0:2732x2048/1200x800/filters:focal(1148x806:1584x1242)/cdn.vox-cdn.com/uploads/chorus_image/image/55970031/RW.IPAD.F2.0.png",
"https://wallpapercave.com/wp/wp2015319.jpg",
"https://wallpapercave.com/wp/RBtBeZ5.jpg",
"https://wallpapercave.com/wp/wp2004648.jpg",
"https://wallpapercave.com/wp/wp1918408.jpg",
"https://wallpapercave.com/wp/wp1919102.jpg",
"https://wallpapercave.com/wp/wp1877037.png",
"https://wallpapercave.com/wp/wp1906755.jpg",
"https://wallpapercave.com/wp/wp1982959.jpg",
"https://images8.alphacoders.com/971/971146.jpg",
"https://wallpapercave.com/wp/wp1931480.jpg",
"https://wallpapercave.com/wp/wp1830199.png",
"https://wallpapercave.com/wp/wp1909080.jpg",
"https://www.nba.com/kings/sites/kings/files/16-17new_wallpaper_wide_v1-1.jpg",
 "https://wallpapercave.com/wp/wp1878775.jpg",
 "https://wallpapercave.com/wp/wp1955396.jpg",
 "https://wallpapercave.com/wp/wp1884481.jpg",
 "https://wallpapercave.com/wp/mB1y7vL.jpg"];
var imageindex = 0;


function changeTeam() {
document.body.style.backgroundImage = "url("+ teams[imageindex] +")";
   imageindex++;
//document.body.style.backgroundImage = "url('https://image.roku.com/blog/wp-content/uploads/2017/10/900NBATNT_Tweet_1200x675_NYC_op21.jpg')";
//document.getElementById('image').src = teams[imageindex];
//document.getElementById('sec1').style.backgroundImage = teams[imageindex]
//bodyBcg.style.backgroundImage = teams[imageindex];
  // imageindex++;
    //let random = Math.floor(Math.random()*teams.length);
    //document.body.style.backgroundImage = teams[random];
}