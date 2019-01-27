/**
 * @author Shea Frederick
 */
Ext.define('Ext.ux.GMapPanel', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.gmappanel',
    
    requires: ['Ext.window.MessageBox'],
    
    initComponent : function(){
        Ext.applyIf(this,{
            plain: true,
            gmapType: 'map',
            border: false
        });
        
        this.callParent();        
    },
    
    afterFirstLayout : function(){
        var center = this.center;
        this.callParent();       
        
        if (center) {
            if (center.geoCodeAddr) {
                this.lookupCode(center.geoCodeAddr, center.marker);
            } else {
                this.createMap(center);
            }
        } else {
            Ext.Error.raise('center is required');
        }
              
    },
    
    createMap: function(center, marker) {
        var options = Ext.apply({}, this.mapOptions);
        
        options = Ext.applyIf(options, {
            zoom: 14,
            center: center,
            //set ROADMAP instead of HYBRID (custom Change)
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        this.gmap = new google.maps.Map(this.body.dom, options);
       /*comment to not add center default marker*/
       
       /* if (marker) {
            this.addMarker(Ext.applyIf(marker, {
                position: center
            }));
        }*/
        
        Ext.each(this.markers, this.addMarker, this);
        this.fireEvent('mapready', this, this.gmap);
       //Handles click event in map
       console.log(this.markers);
       var cMarker = marker;
       console.log(this);
        var markers;
        var map = this.gmap;
        if (map) {
           google.maps.event.addListener(map, 'click', function (event) {
              //marker.setMap(null);
              if (map.marker)
              {
                 map.marker.setMap(null);
              }
              if (markers)
                 markers.setMap(null);
              marker = new google.maps.Marker({
                 map: map,
                 position: event.latLng
              });
              
              markers = marker;
              map.marker = marker;

           });
        }
    },
    
    addMarker: function(marker) {
        marker = Ext.apply({
            map: this.gmap
        }, marker);
        
        if (!marker.position) {
            marker.position = new google.maps.LatLng(marker.lat, marker.lng);
        }
        var o =  new google.maps.Marker(marker);
        Ext.Object.each(marker.listeners, function(name, fn){
            google.maps.event.addListener(o, name, fn);    
        });
        return o;
    },
    
    lookupCode : function(addr, marker) {
        this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({
            address: addr
        }, Ext.Function.bind(this.onLookupComplete, this, [marker], true));
    },
    
    onLookupComplete: function(data, response, marker){
        if (response != 'OK') {
            Ext.MessageBox.alert('Error', 'An error occured: "' + response + '"');
            return;
        }
        this.createMap(data[0].geometry.location, marker);
    },
    
    afterComponentLayout : function(w, h){
        this.callParent(arguments);
        this.redraw();
    },
    
    redraw: function(){
        var map = this.gmap;
        if (map) {
            google.maps.event.trigger(map, 'resize');
        }
    },
    
    getMAp: function ()
    {
       return this.gmap;
    }

    

 
});
