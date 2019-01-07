// On scroll increase opacity of navbar
$(window).scroll(function() 
{
    var scrollTop = $(this).scrollTop();
    var range = $(window).width()
    range *= 0.6
    $('.navbar-default').css(
    {
        opacity: function()
        {
            return 1 - (range - scrollTop) / range;
        }
    });
});