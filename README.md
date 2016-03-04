# oneScrollHeader
Very minimalistic jQuery plugin. Header the entire height of the screen, scrolling or touch move causes smooth scrolling to the end caps (beginning of content)

# Usage Examples

$('.header-home).oneScrollHeader();

# options
    $('.header-home).oneScrollHeader({
        animationTime: 1000, // the animation speed of the scroll (defaults: 1000)
        marginTop: 0, // the indentation after the animation ends (defaults: 0)
        delayMove: 2 // pass false touch events (defaults: 2)
    }
    
# Events 

Event Type          | Description
--------------------|--------------------------------------------
oneScrollHeader.end | the end of the animation the scroll


#### Examples
  $('.header-home).on('oneScrollHeader.end', function () {
        console.log('событие сработало');
    });