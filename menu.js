$(document).ready(function(){
  $(".navi-sp-btn").click(function(){
    $(".navi-sp__ul").slideToggle();
  });
});

$(window).load(function(){
  $(".product-img__li img").click(function(){
    var img_src = $(this).attr("src");
    $(".product-img-display img").attr("src", img_src);
  });
});