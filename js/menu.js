$('#hamburguer').click(function() {
    $('#menu').animate({
        marginLeft: 0
    }); 
});
$('#close').click(function() {
    $('#menu').animate({
        marginLeft: '-100vw'
    }); 
});