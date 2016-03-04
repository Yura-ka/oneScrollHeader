!function ($) {

    var defaults = {
        sectionContainer: "section",
        animationTime: 1000,
        marginTop: 0,
        delayMove: 2
    };

    $.fn.oneScrollHeader = function (options) {
        var settings = $.extend({}, defaults, options);
        var $this = $(this);
        var oneTouchstart;
        var twoTouchmove = [];
        var delayMove = 0;
        var touchScrollDirection;

        var heightWindow = $(window).height();
        this.css({'height': heightWindow});

        function scrollTopAnimete(){
            $('body').stop().animate({
                scrollTop: heightWindow - settings.marginTop
            }, settings.animationTime);
            $('body').queue(function () {
                $this.trigger('oneScrollHeader.end');
            });
        };

        $this.on('touchstart', function (event) {
            oneTouchstart = event.originalEvent.touches[0].pageY;
        });
        $this.on('touchmove', function (event) {
            twoTouchmove = event.originalEvent.touches[0].pageY;

            touchScrollDirection =  oneTouchstart - twoTouchmove > 0 ? 'up' : 'down';

            if( touchScrollDirection === 'up') {
                event.preventDefault();
                delayMove ++;
                if ( delayMove > settings.delayMove ) {
                    scrollTopAnimete();
                    delayMove = 0;
                }
            }

        });

        $this.on('mousewheel DOMMouseScroll', function (event) {
            var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
            if (delta < 0) {
                event.preventDefault();
                scrollTopAnimete();
            }
        });
    }

}($);
