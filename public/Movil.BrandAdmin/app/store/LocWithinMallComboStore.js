Ext.define('BrandAdmin.store.LocWithinMallComboStore', {
   extend: 'Ext.data.Store',
   fields: ['name', 'id'],
   autoLoad: true,


   data: [     
      { name: 'Primer Piso', id: '1' },
      { name: 'Segundo Piso', id: '2' },
      { name: 'Tercer Piso', id: '3' },
      { name: 'Cuarto Piso', id: '4' }
   ]
});