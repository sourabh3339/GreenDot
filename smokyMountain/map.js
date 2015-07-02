(function(external) {
    console.log("map file loaded");


    var map = {
        /*properties of map*/

        prop: {
            center: new google.maps.LatLng(51.508742, -0.120850),

            zoom: 10,

            mapTypeId: google.maps.MapTypeId.HYBRID
        },
        /*for initialising map*/
        init: function() {

            this.mapo = new google.maps.Map(document.getElementById("googleMap"), this.prop);
        },

        /*get location*/
        getLocation: function() {

            /*success callback*/
            var success = function(position) {
                console.log(position);
                var pos = new google.maps.LatLng(position.coords.latitude,
                    position.coords.longitude);
                this.mapo.setCenter(pos);
            };

            var faliure = function(err) {
                console.log("error have happpend " + err.message);
            };

            if (navigator.geolocation) {
                /*binding success callback with current reference so that it can recognise this.mapo*/
                navigator.geolocation.getCurrentPosition(success.bind(this), faliure);
            } else {
                // Browser doesn't support Geolocation
                console.log("no geolocation");
            }

        }

    }
    map.init();
    map.getLocation();

}(this));
