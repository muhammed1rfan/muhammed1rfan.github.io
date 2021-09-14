<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"> </script>
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
