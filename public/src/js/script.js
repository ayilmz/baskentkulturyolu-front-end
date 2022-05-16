let isMobileDevice;
import 'jquery';
import 'parsleyjs';
import './plugins/jquery.fancybox.min';
import './plugins/masonry.min';
import './plugins/jquery-ui';
import './pages/google-maps'
import './pages/header';
import './pages/all-activities';
import './pages/instagram';
import './pages/events-places';
import './pages/login-register';
import './pages/login-timer';
import './pages/hero-banner';
import './pages/categories';


$(document).ready(function() {
    if($(".fancy-box-item-timer").length > 0){
        $(".fancy-box-item-timer").fancybox({
            'transitionIn'	:	'elastic',
            'transitionOut'	:	'elastic',
            'speedIn'		:	600,
            'speedOut'		:	200,
            'overlayShow'	:	false
        });
    }

    if($(".fancy-box-item-header").length > 0){
        $(".fancy-box-item-header").fancybox({
            'transitionIn'	:	'elastic',
            'transitionOut'	:	'elastic',
            'speedIn'		:	600,
            'speedOut'		:	200,
            'overlayShow'	:	false,
            'showCloseButton': false,
        });
    }
});
