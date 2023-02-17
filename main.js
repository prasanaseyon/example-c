
function show_hide(divId){
    var x=document.getElementById(divId);
    


    if(getComputedStyle(x).display === "none"){
        x.style.display='block';
        
    }


    else{
        x.style.display='none';
        
    }



   
}

if (!window.getComputedStyle) {
    // Fallback for obsolete IE
    window.getComputedStyle = function(e) {
        return e.currentStyle;
    };
}

var my_button = $(".mod");

// first, bind the touch start event to your button to activate some new style...
my_button.bind("touchstart", function() {
    $(this).addClass("button_active");
});

// next, bind the touch end event to the button to deactivate the added style...
my_button.bind("touchend", function() {
    $(this).removeClass("button_active");
});





