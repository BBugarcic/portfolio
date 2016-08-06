// twitter button in the footer of index page
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id))
    {js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


// facebook button in the footer of the index page
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


  //google maps API
  var map;
  function initMap() {
    var mapStyle = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];

    var handler = Gmaps.build('Google');
    handler.buildMap({
        internal: {id: 'map'},
        provider: {
          zoom: 10,
          center: new google.maps.LatLng(52.5520332, 13.439426),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: mapStyle
        }
      },
      function(){}
    );
  };
	/*var styles = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];*/


	/*var myAdress = {lat: 52.5520332, lng: 13.439426};

	map = new google.maps.Map(document.getElementById('map'), {
		center: myAdress,
		zoom: 9
	});

	map.setOptions({styles: styles});

	var marker = new google.maps.Marker({
		position: myAdress,
		map: map,
		title: 'Hello World!'
	});*/


var worksObj = [
  {
    workTitle: "Tribute Page",
    languages: "html5 css3",
    description: "Tribute page deducated to Nikola Tesla's work and life",
    url: "http://bbugarcic.github.io/tributePage/"
  },
  {
    workTitle: "Pomodoro Clock",
    languages: "html5 css3 JS jQuery",
    description: "Timer based on Pomodoro time managment model.",
    url: "http://bbugarcic.github.io/pomodoroClock/"
  },
  {
    workTitle: "Calculator",
    languages: "html5 css3 js jQuery",
    description: "Cool retro Calculator",
    url: "http://bbugarcic.github.io/JScalculator/"
  }
];

$(document).on("ready page:change", function(){

  //google maps API
  initMap();

  for(i = 0; i < worksObj.length; i++) {
    $(".work-wrapper").append("\
      <div class='col-md-4 col-xs-12'>\
        <figure class='project-item'>\
          <div class='project-cover'>\
            <h2>" + worksObj[i].workTitle + "</h2>\
            <i class='fa fa-bullseye' id='" + i + "'aria-hidden='true'></i>\
          </div><!-- end project-cover -->\
          <figcaption class='item-caption'>\
            <h2>" + worksObj[i].workTitle + "</h2>\
                      <h4>" + worksObj[i].languages + "</h4>\
                      <p>" + worksObj[i].description + "</p>\
                      <div>\
                        <a class='btn btn-default' href='" + worksObj[i].url + "' target='_blank'>Open page</a>\
                    </div>\
                  </figcaption><!-- end figcaption -->\
              </figure><!-- end figure -->\
            </div><!-- end col class -->\
    ");
  }


  $(window).stellar({ horizontalScrolling: false });
  //$.initialize();
	var $navbar = $(".navbar");
	var $root = $("html, body");

	// smooth scrolling
	// handle click on navbar link
	$navbar.find("a").on("click", function() {

		var $navLink = $(this);
		var $id = $navLink.attr("href");

		$root.animate({
			scrollTop: $($id).offset().top
		}, 300);

		return false;
	});

	// toggle collapsed navbar on click and touch
	$(function () {
    	$('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
        	$('.navbar-toggle:visible').click();
        });
    });

	var $animatedDiv = $(".animated.invisible");

	// changing visability of headline in divs with parallax effects (static background)
	$(window).on("scroll", function() {

		$animatedDiv.each(function() {

			if($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.5) {
				$(this).removeClass("invisible").addClass("visible");
			}
		});
	});

	// Stellar
 	$.stellar();

	// Tooltips
	$(function () {
    $("#item1").tooltip();
		$('[data-toggle="tooltip"]').tooltip();
    });

	// faq section
	function changeHeightFaq(id) {
		var selector = "#" + id;
		console.log(selector);
		if($(selector).hasClass("expanded-faq-height open-panel-body")) {
			console.log("if");
			$(selector).removeClass("expanded-faq-height open-panel-body");
			$("#faq").animate({
				"height": "600px"
			}, 500);

		} else {
			console.log("else");
			$("#faq").find(".expanded-faq-height").removeClass("expanded-faq-height open-panel-body");
			$(selector).addClass("expanded-faq-height open-panel-body");
			$("#faq").animate({
				"height": "800"
			}, 500);
		}
	}

	var panelTitleId;
	$(".panel-title").on("click", function(event) {
		panelTitleId = event.target.id;
		changeHeightFaq(panelTitleId);
	});

	// textarea field
	$(".message-box").on("click", function() {
		$(".message-box").css("background-color", "#dddddd");
	});

	// submit
	$("#submitBtn").on("click", function() {
		// get input
		var name = $("#name").val();
		var surname = $("#surname").val();
		var comment = $(".message-box").val();

		if(comment === "") {
			$(".message-box").css("border", "solid").css("border-size", "3px").css("border-color", "red");
		} else {
			// populate the DOM elements
			$("#name, #surname, .message-box").val("");
			$("#char-count").html("");
			$("#reaction").html("Your message is sent. I will get back to you as soon as possible.");
		}

	});

});
