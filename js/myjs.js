$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $(".navbar").css({
        "background-color": "rgba(255, 255, 255, .7)"
      });
      $(".navbar-default").css({
        "background-color": "rgba(255, 255, 255, .7)",
        "border-color": "rgba(255, 255, 255, .7)"
      });
      $(".vincentwang a").css({
        "color": "#304966",
        "border": "2px solid #354458",
      });
      $(".navbar-default .navbar-nav>li>a").css({
        "color": "#354458"
      });
    } else {
      $(".navbar").css({
        "background-color": "transparent"
      });
      $(".navbar-default").css({
        "background-color": "transparent",
        "border-color": "transparent"
      });
      $(".vincentwang a").css({
        "color": "#fff",
        "border": "2px solid #FDFEFE"
      });
      $(".navbar-default .navbar-nav>li>a").css({
        "color": "#FDFEFE"
      });
    }
  });

  //  Accordion Panels
  $(".accordion div").show();
  setTimeout("$('.accordion div').slideToggle('slow');", 1000);
  $(".accordion h3").click(function() {
    $(this).next(".pane").slideToggle("slow");
    $(this).toggleClass("current");
    $(this).siblings("h3").removeClass("current");
  });
});
/*Light box*/
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
