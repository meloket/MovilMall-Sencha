Ext.define('BrandAdmin.view.locations.LocationsGridPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'locationsgridpanel',
   //title:'Locations Detail',
   cls: 'flatgrid',
 
   layout: {
      type: 'vbox',
      align:"center"
   },
   border: false,
   items: [{
      xtype: 'locationsgrid',
      height:300
   }, {
      xtype: 'label',
      width: '880px',
      style: 'color:red;',
      locales: {
         html: 'grid.locations.note.html'
      },
    //  html: 'Copia el código QR de cada localidad y pégalo en donde dice "Enter text to share here", luego de que el código QR sea generado, haz click con el botón derecho del mouse sobre la imagen y gúardala en tu escritorio para que la puedas imprimir. Este será el código que tus visitantes usarán para acumular puntos por cada visita a tu tienda o local.',
      display: 'block'
   } ,{
      xtype: 'locationqriframeview',
      height:370
   }]
});