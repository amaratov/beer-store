//Onload
window.addEventListener("load",function () {
    $("#skipForm").hide();
    $("#advancedDiv").hide();
     if ($(window).width()>600){
         $("#logoBtn").hide();
     }else {
         $("#logoBtn").show();
         $("#logoLink").hide();
     }
     console.log("test");
},false);

let nav = document.querySelector("nav"),
    sticky = nav.offsetTop;
function scrollNav(){
    if ($(window).width()>768){
        if (window.pageYOffset > sticky) {
            nav.classList.add("sticky");
            $("#navBtn").hide();
            $("#article").css("margin-top", "100px");
        } else {
            nav.classList.remove("sticky");
            $("#navBtn").show();
            $("#article").css("margin-top", "0");
        }
    }
}
window.addEventListener("scroll",scrollNav,false);

let skip = $("#skipForm");
$("#skipImg").click(function () {
    if (skip.css('display') === "none"){
        skip.show("slow");
    }else {
        skip.hide("slow");
    }
});
$("#showAdv").click(function () {
    $("#advancedDiv").show("slow");
});
$("#bStyle").chosen();
$("#bAttr").chosen();
