$('i').on('click',function(){
    $('.slider').css('top',-$(this).attr('data-index')*400+'px');
})