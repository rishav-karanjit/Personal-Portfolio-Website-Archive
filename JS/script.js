$( ".flip-card" ).click(function() {
    if (  $( this ).css( "transform" ) == 'none' ){
        $(this).css("transform","rotateY(180deg);");
    } else {
        $(this).css("transform","" );
    }
});