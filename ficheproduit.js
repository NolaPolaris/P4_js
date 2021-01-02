
$(document).ready(function (){
    $('#color-sliding').click(function(){
        $('i#arrow-right').toggleClass('rotation');
        $('div#color_select').slideToggle('slow');
    });

    $('#detail-sliding').click(function(){
        $('i#arrow-right').toggleClass('rotation');
        $('div#detail_select').slideToggle('slow');
    });

    $('#avis-sliding').click(function(){
        $('i#arrow-right').toggleClass('rotation');
        $('div#avis_select').slideToggle('slow');
    });
});
