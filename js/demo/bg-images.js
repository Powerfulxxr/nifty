
// Pages.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -



/*
This is just a demo to replace the background image.
For a static background image, you should add a new class.



Example:

.bg-mountain {
    background-image: url ('...');
}




Then add the class to "bg-overlay"

<div id="bg-overlay" class="bg-img bg-mountain"></ div>



*/




$(document).ready(function() {
	/*lockScreen();*/
	if($().camera==undefined) return;
	$('#camera_wrap_1').camera({
		height: 'auto',
		
		loader: 'bar',

		hover: false,

		opacityOnGrid: false,
		
		pagination: false
		
	});
	$(window).resize(changebg("#camera_wrap_1"));
});

function changebg(id){
    banner_slider_height = $(window).outerHeight()-285;
	
	var bheight = document.documentElement.clientHeight;
	if(bheight == 0){bheight = 1000;}
    banner_slider_height = (banner_slider_height<bheight) ? bheight : banner_slider_height;
    $(id).height(banner_slider_height);
    $(window).resize(function(){
        banner_slider_height = $(window).outerHeight()-285;
        banner_slider_height = (banner_slider_height<bheight) ? bheight : banner_slider_height;
        $(id).height(banner_slider_height);
    });
}


/*function lockScreen(){
	var $imgHolder 	= $('#demo-bg-list');
    var $bgBtn 		= $imgHolder.find('.demo-chg-bg');
    var $target 	= $('#bg-overlay');

    $bgBtn.on('click', function(e){
        e.preventDefault();
        e.stopPropagation();


        var $el = $(this);
        if ($el.hasClass('active') || $imgHolder.hasClass('disabled'))return;
        if ($el.hasClass('bg-trans')) {
            $target.css('background-image','none').removeClass('bg-img');
            $imgHolder.removeClass('disabled');
            $bgBtn.removeClass('active');
            $el.addClass('active');

            return;
        }

        $imgHolder.addClass('disabled');
        var url = $el.attr('src').replace('/thumbs','');

        $('<img/>').attr('src' , url).load(function(){
            $target.css('background-image', 'url("' + url + '")').addClass('bg-img');
            $imgHolder.removeClass('disabled');
            $bgBtn.removeClass('active');
            $el.addClass('active');

            $(this).remove();
        })

    });
}*/

