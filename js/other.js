window.addEventListener("load",function () {
    $("#advancedDiv").hide();
    if ($(window).width()>600){
        $("#logoBtn").hide();

    }else {
        $("#logoBtn").show();
        $("#logoLink").hide();
    }
},false);


$("#showAdv").click(function () {
    $("#advancedDiv").show("slow");
});
$("#bStyle").chosen();
$("#bAttr").chosen();