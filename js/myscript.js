//loader image
$(function () {

	"use strict";
	var topoffset = 60;
	$('.navbar a[href*=#]:not([href=#])').click(function() {
    	if (location.pathname.replace(/^\//,'') === 
      	this.pathname.replace(/^\//,'') && 
      	location.hostname === this.hostname) {
      	var target = $(this.hash);
      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      	if (target.length) {
        	$('html,body').animate({
          	scrollTop: target.offset().top-topoffset
       		 }, 750);
        	return false;
      	} //target.length
    	} //click function
  	}); //smooth scrolling



  //  Accordion Panels
  $(".accordion div").show();
  setTimeout("$('.accordion div').slideToggle('slow');", 1000);
  $(".accordion h3").click(function () {
      $(this).next(".pane").slideToggle("slow");
      $(this).toggleClass("current");
      $(this).siblings("h3").removeClass("current");
  });


  //Scrolling image effct
  var ypos,image;
	function parallex() {
		image = document.getElementById('newyorkBackground');
		ypos = window.pageYOffset - 100;;
		image.style.top = ypos * .45+ 'px';
	}
	window.addEventListener('scroll', parallex),false;

  //make navbar close after clicked
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
});