$(document).ready(function() {
    var keyHistory = '';
         $(document).keypress(function(e) {
            keyHistory += String.fromCharCode(e.which) 
            if(keyHistory.length == 9) {
                alert(keyHistory);
                keyHistory = match =  '';
            }
        });
});
