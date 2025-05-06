// Hide the fields at FomLoad  
hidden.hide();  
isshiddenField.hide();



checkbox.change(function () {  
    if (checkbox.is(':checked')) {  
        hidden.show();  
    } else {  
        hidden.hide();  
        
    }  
});  