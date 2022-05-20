//Mobile Navigation Fade Animation
$('#nav-button').click(function(){
    $('#m-nav').fadeToggle("3000");
})

// F.A.Q Collapse Animations
$('.faq-header').click(function(){
var text = $('.faq-headline', this);
var icon = $('#faq-icon', this);

if (!text.hasClass('active')) {
    text.addClass('active');

    icon.removeClass('bi-caret-right');
    icon.addClass('bi-caret-down');
    icon.addClass('active');
}
else {
    text.removeClass('active');

    icon.removeClass('bi-caret-down');
    icon.addClass('bi-caret-right');
    icon.removeClass('active');
}
})