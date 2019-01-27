Ext.define('SuperAdmin.store.MoviesRatingComboStore', {
   extend: 'Ext.data.Store',
   autoLoad: true,
   fields: [
    //  { rating: 'id', type: 'int' },
      { name: 'rating', type: 'string' }
   ],
   data: [
      { /*id: '1',*/ rating: 'G' },
      { /*id: '2',*/ rating: 'PG' },
      { /*id: '3',*/ rating: 'PG-13' },
      { /*id: '4', */rating: 'R' },
      {/* id: '5',*/ rating: 'NC-17' }   
   ]
});