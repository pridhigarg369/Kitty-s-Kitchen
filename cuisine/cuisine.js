// -----------------------------Transparent to Solid header--------------------------------
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    console.log("mepw");
    var hide3 = document.getElementsByClassName("posfix")[0];   
    // var show = document.getElementsByClassName("header")[0];
    // var smlogo = document.getElementsByClassName("logo")[0];
    var head_border = document.getElementById("Header-Border");
    // var hdele = document.getElementsByClassName("header_element")[0];
    // var bold1 = document.getElementsByClassName("bold");
    // var fixabout = document.getElementsByClassName("div_background")[0];
    if(document.body.scrollTop > 90 || document.documentElement.scrollTop > 90){
        hide3.style.display= "block";
        head_border.style.display="block";
        // show.classList.add('posfix');
        // smlogo.classList.add('fixlogo');
        // hdele.classList.add('fixheader_element');
        // fixabout.classList.add('fixabout');
        // for(var i=0;i<bold1.length;i++){
        //     bold1[i].classList.add('fixbold');
        // }        
    }
    else{
        hide3.style.display="none";
        head_border.style.display="none";
        // show.classList.remove('posfix');
        // smlogo.classList.remove('fixlogo');
        // hdele.classList.remove('fixheader_element');
        // fixabout.classList.remove('fixabout');
        // for(var i=0;i<bold1.length;i++){
        //     bold1[i].classList.remove('fixbold');
        // }
    }
}
// ------------------------------------------------------------------------------------
// -------------------DHAM OPEN-----------------------------
function openpage(){
    window.open("E:/HTML/Kitty's Kitchen/dham/dham.html","_self");
}
// -----------------------------------------------

// ----------------------------------------Up Down Button---------------------------
var downbtn = 5000;

function topFunction(){
    console.log("meow");
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
    downbtn=500;
}
function downFunction(){
    window.scrollTo(0,downbtn);
    downbtn=downbtn+700;
}
// ----------------------------------------Up Down Button---------------------------