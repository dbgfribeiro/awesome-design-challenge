
/*-------------MENU-------------*/

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

/*-------------NEW-PROJECT-------------*/
$('#new').click(function() {
    $('.display-allocations').css({
        "display":"none",
    });
    $('.display-new-allocation').css({
        "display":"block",
    });
});


$('#back').click(function() {
    $('.display-allocations').css({
        "display":"block",
    });
    $('.display-new-allocation').css({
        "display":"none",
    });
});
