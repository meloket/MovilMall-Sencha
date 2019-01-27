Ext.define('BrandAdmin.store.HomeDataViewStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.HomeDataViewModel',
   autoLoad: true,
   data: [
      /*{
         img: 'profile',
         title: 'Profile',
         details: 'Enter and modify details such as Brand Name,' +
            'Contact Info, Business type, Product Categories, Photographs etc.',
         lang: 'en'
      }, {
         img: 'location',
         title: 'Locations',
         details: 'Enter and modify location details such as address, ' +
            'map, open timings, phone numbers etc.',
         lang: 'en'
      },
      {
         img: 'offerbag',
         title: 'Offers',
         details: 'Add new offers for this store with offer details and modify the existing ones according to need.',
         lang: 'en'
      },
      {
         img: 'movie',
         title: 'Movies',
         details: 'Add movie show timings as well as modify them for your brand.',
         lang: 'en'
      },
      {
         img: 'events',
         title: 'Events',
         details: 'Add new events and modify existing ones to build up your brand audience and expand your reach.',
         lang: 'en'
      },
      {
         img: 'analytic',
         title: 'Analytics',
         details: 'View statistical and analytic numbers about performance of this store and customer reach.',
         lang: 'en'
      },*/
      

     //spenish
      

      //DONT CHANGE IMG:'{NAME}',ACCORDING TO IT MOVIES IS BEING HIDE AND SHOW IN BRANDADMINMAIN CONTROLLER..
      //MAKE SURE THAT IMAGE NAME CAN NOT BE CHANGED
      //cant taken that on basis of idx bcz it can be change through movies hide/show
      {
         img: 'profile',
         titleSp: 'Perfil',
         titleEn: 'Profile',
         detailsSp: 'Ingrese y modificar detalles como Marca, Información de Contacto, el tipo de negocios, Categorías de productos,fotografías.',
         detailsEn: 'Enter and modify details such as Brand Name,' +
           'Contact Info, Business type, Product Categories, Photographs etc.',
         lang: 'fr'
      }, {
         img: 'locations',
         titleSp: 'Locales',
         titleEn: 'Locations',
         detailsSp: 'Introducir y modificar datos de localización, tales como dirección, mapa,' + 'horarios abiertos, números de teléfono, etc',
         detailsEn: 'Enter and modify location details such as address, ' +
           'map, open timings, phone numbers etc.',
         lang: 'fr'
      },
      {
         img: 'offer',
         titleSp: 'Ofertas',
         titleEn: 'Offers',
         detailsSp: 'Añadir nuevas ofertas para este almacén con detalles de la oferta y modificar los existentes según las necesidades.',
         detailsEn: 'Add new offers for this store with offer details and modify the existing ones according to need.',
         lang: 'fr'
      },
     /* {
         img: 'movie',
         titleSp: 'Películas',
         titleEn: 'Movie',
         detailsSp: 'Añadir horarios de películas tiempos, así como modificarlos para su marca.',
         detailsEn: 'Add movie show timings as well as modify them for your brand.',
         lang: 'fr'
      },*/
      {
         img: 'events',
         titleSp: 'Eventos',
         titleEn: 'Events',
         detailsSp: 'Añade nuevo Eventos y modificar los ya existentes para aumentar su público marca y ampliar su alcance.',
         detailsEn: 'Add new events and modify existing ones to build up your brand audience and expand your reach.',

         lang: 'fr'
      },
      {
         img: 'analytics',
         titleSp: 'Estadísticas',
         titleEn: 'Analytics',
         detailsSp: 'Ver los números estadísticos y analíticos sobre el desempeño de esta tienda y alcance de los clientes.',
         detailsEn: 'View statistical and analytic numbers about performance of this store and customer reach.',

         lang: 'fr'
      }
   ]
});