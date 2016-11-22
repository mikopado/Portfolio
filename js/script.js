$(function () { 

	var isCollapsed = false;	

	
	$(document).click(function() { // To make button go away when the button looses the focus and let user clicks on menu links
		var screenWidth = window.innerWidth;
		if(screenWidth < 768) {
			$("#menu-collapse").collapse('hide');

		}
		
	});	


	$("#menu-collapse").on('hidden.bs.collapse', function() {//If menu is hidden changes the color of button to black
		$(".menu-active").css("background-color", "#000");
		isCollapsed = false;
	});

	$("#menu-collapse").on('shown.bs.collapse', function() { //If menu is shown cahnges the color of button to gray
		$(".menu-active").css("background-color", "#555");
		isCollapsed = true;
	});

	$(window).resize(function() { // Control the background color of navigation bar when resizing window
		var screenWidth = window.innerWidth;
		$(".navbar.navbar-inverse.navbar-fixed-top").css("transition-duration", "0s");
		
		if (screenWidth < 768) { //if small screen makes background color of navbar black
			$('.navbar.navbar-inverse.navbar-fixed-top').css("background-color", "#000");
		
		} else if(screenWidth >= 768) { //if large screen check the height of scroll and then collapses the menu if it's shown at least when you resize back to small screen the menu is hidden
			checkScrolled();
			if(isCollapsed) {
				$("#menu-collapse").collapse('hide');
				isCollapsed = false;
				
			}
			
		}

		
	});

	
 	
	var lastScroll = 0;
	
	$(window).scroll(function(event){ // Handles the transition from nav-bar with background to nav-bar without it while scrolling window
		if(window.innerWidth >= 768)
		{
			checkScrolled();
			$(".navbar.navbar-inverse.navbar-fixed-top").css("transition-duration", "2s");
		}
		
	});

	function checkScrolled() {
		var thisscroll = $(this).scrollTop();
		
		if (thisscroll > lastScroll){ // If Scroll Down	makes background color of navbar black        
	        $('.navbar.navbar-inverse.navbar-fixed-top').css("background-color", "#000");
	    } else {  // if Scroll Up makes the background color transparent if the scroll is at very top	       
	        if(thisscroll + $(window).height() < $(document).height()) {
	            $('.navbar.navbar-inverse.navbar-fixed-top').css("background-color", "transparent");
	        }
	    }
	    lastScrollTop = thisscroll;
		
	  
	};
	
	// Initialize tooltips
	$(document).ready(function(){
    	$('[data-toggle="tooltip"]').tooltip();

	});


	$('div.col-md-4.col-xs-6').hover(function() {// When hover projects in my portfolio area let visualize the title of project

		var pro = $(this).attr("id");		
		$('#'+ pro + '> a.proj-title').removeClass('sr-only');		
		$('#'+ pro + '> a.proj-title').css("top", "40%");
		keepHover($('#'+ pro + '> .project'), true);
		}, function() {

		var pro = $(this).attr("id");	
		$('#' + pro + ' > a.proj-title').addClass('sr-only');
		$('#'+ pro + '> a.proj-title').css("top", "50%");
		keepHover($('#'+ pro + '> .project'), false);
		}	
		
	
	);

	function keepHover (elem, isHover) {
		if(isHover){
			elem.css('filter', 'brightness(30%');
		} else {
			elem.css('filter', 'brightness(100%)');
		}
		
	};

	openLink = function(url) {//Function to open link from View Code buttons
		window.open(url, "_blank");
	};


	$('.edit-buttons').mouseup(function(){//Let buttons loose the focus after click on them
		$(this).blur();
	});
});