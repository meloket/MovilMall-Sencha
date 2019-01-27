Ext.define('MobileApp.store.AddressDataViewStore', {
   extend: 'Ext.data.Store',

   config: {
      fields: [
         'mallName', 'mallAddress', 'locWithinMall' 
      ],
      data: [
          { mallName: 'Pheonix Mall', mallAddress: 'Opp St Xaviers School,Nearby Thames MarketOpp St Xaviers School,Nearby Thames Market', locWithinMall: 'Level 1' }
        


      ]
   }
});