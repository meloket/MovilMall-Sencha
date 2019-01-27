Ext.define('MobileApp.controller.EventsController', {
   extend: 'Ext.app.Controller',

   config: {
      views: ['Events.EventsPanel',
         'Events.EventsNavigationView',
         'Events.EventsList',
         'Events.EventsTabPanel',
         'Events.MyEventsList',
         'Events.EventsProfileView',
         'Events.EventsAllCommentView',
         'Events.EventCommentOverlayView'
      ],
      models: ['EventsListModel', 'EventsCommentDataViewModel', 'MyEventsListModel'],
      stores: ['EventsListStore',
         'MyEventsListStore',
         'EventDetailsStore',
         'EventsCommentDataViewStore',
         'EventsListSqlStore',
         'MyEventsListSqlStore'],
      refs: {
         eventsSlideButton: '#eventsSlideButton',
         eventsList: 'eventslist',
         myEventsList: 'myeventslist',
         eventsNavigationView: 'eventsnavigationview',
         eventProfImg: '#eventProfImg',
         eventsTabPanel: 'eventstabpanel',
         slidelist: 'slidelist',
         attendEvButt: '#attendEvBut',
         postComment: '#evePostComment',
         eventsProfileView: 'eventsprofileview',
         viewAllComButt: '#eViewAllCom',
         eventsCommentDataView: '#eventsCommentDataView',
         eventsCommentsOverlay: '#eventsCommentsOverlay',
         eventCommentOverlayView: 'eventcommentoverlayview',
         eventsAllCommentView: 'eventsallcommentview'
      },

      control: {
         eventsSlideButton: {
            tap: 'onEventsSlideButton'
         },
         eventsList: {
            itemtap: 'onTapEventsList'/*,
            initialize: 'onScrollEndOfEventsList'*/
         },
         myEventsList: {
            itemtap: 'onTapEventsList',
            painted: 'onPaintMyEventsList'
         },
         eventsNavigationView: {
            push: 'onEventsNavPush',
            pop: 'onEventsNavPop'
         },
         eventsTabPanel: {
            activeitemchange: 'onActiveItem'
         },
         eventslist: {
            swipe: 'onSwipeEventsList',
            tap: 'onTapEventsLis',
            painted: 'onPaintEventsList'
         },
         myeventslist: {
            swipe: 'onSwipeEventsList',
            tap: 'onTapEventsLis'
         },
         attendEvButt: {
            change: 'onTapAttEventBut'
         },
         /* likeImg: {
            tap: 'onTapLike'
         },*/
         postComment: {
            tap: 'onPostComment'
         },
         'eventsprofileview #evCommTextField': {
            keyup: 'onKeyUpCommentField',
            clearicontap: 'onClearCommentField'
         },
         viewAllComButt: {
            tap: 'onViewAllComm'
         },
         eventsCommentDataView: {
            itemtaphold: 'onTapCommemt'
         },
         eventsCommentsOverlay: {
            itemtaphold: 'onTapCommemt'
         },
         eventcommentoverlayview: {
            itemtap: 'onTapEventOverlay'
         },
         'eventslist #pull': {
            latestfetched: 'onEventsListPull'
         },
         'eventsprofileview #eventsProHeader': {
            tap: 'onTapEventsProHeader'
         },
         'eventsprofileview #markOnCal': {
            tap: 'onMarkCalendar'
         }
      }
   },
   onMarkCalendar: function()
   {
      /*var platform = device.platform;
      alert(platform);*/
      //"use strict";
      /*var startDate = new Date(2014, 2, 15, 18, 30, 0, 0, 0); // beware: month 0 = january, 11 = december
      var endDate = new Date(2014, 2, 15, 19, 30, 0, 0, 0);
      var title = "My nice event";
      var location = "Home";
      var notes = "Some notes about this event.";
      var success = function (message) { alert("Success: " + JSON.stringify(message)); };
      var error = function (message) { alert("Error: " + message); };
      
      // if you want to create a calendar with a specific color, pass in a JS object like this:
      var createCalOptions = window.plugins.calendar.getCreateCalendarOptions();
      createCalOptions.calendarName = "My Cal Name";
      createCalOptions.calendarColor = "#FF0000"; // an optional hex color (with the # char), default is null, so the OS picks a color
      window.plugins.calendar.createCalendar(createCalOptions, success, error);
      
      window.plugins.calendar.createEventInNamedCalendar(title, location, notes, startDate, endDate, calendarName, success, error);
      */
      var language = this.getApplication().getController('SettingsController').lang;
      var record = this.getEventsList().getSelection()[0].data;
      console.log(record);
      var startDate = new Date(record.date.split("/")[2], record.date.split("/")[1] - 1, record.date.split("/")[0]);
      console.log(startDate);
      var endDate = new Date(record.date.split("/")[2], record.date.split("/")[1] - 1, record.date.split("/")[0]);
      console.log(endDate);
      if (record.fromEventsTime != null)
      {
         var fromEventTime = record.fromEventsTime.split(":");
         if (fromEventTime[1].split(" ")[1] == "AM")
         {
            startDate.setHours(fromEventTime[0]);
            startDate.setMinutes(fromEventTime[1].split(" ")[0]);
         } else
         {
            startDate.setHours(parseInt(fromEventTime[0]) + 12);
            startDate.setMinutes(fromEventTime[1].split(" ")[0]);
         }
      }

      if (record.toEventsTime != null)
      {
         var toEventTime = record.toEventsTime.split(":");
         if (toEventTime[1].split(" ")[1] == "AM")
         {
            endDate.setHours(toEventTime[0]);
            endDate.setMinutes(toEventTime[1].split(" ")[0]);
         } else
         {
            endDate.setHours(parseInt(toEventTime[0]) + 12);
            endDate.setMinutes(toEventTime[1].split(" ")[0]);
         }
      }
      var title = record.name;
      var where = record.location;
      var notes = record.details;

      var success = function(message)
      {
         if (language == "fr")
         {
            navigator.notification.alert("Evento agregado con éxito.");
         } else
         {
            navigator.notification.alert("Event added successfully.");
         }
      };
      var error = function(message)
      {
         if (language == "fr")
         {
            navigator.notification.alert("Se produjo un error al agregar el evento");
         } else
         {

            navigator.notification.alert("Error occurred while adding the event.");
         }

      };

      // Code to create an event in calendar
      window.plugins.calendar.createEvent(title, where, notes, startDate, endDate, success, error);
   },

   init: function()
   {
      this.eventId;
      this.commentId;
      this.eventsSql;
      this.myEventsSql;
      this.list;
      this.from;
      this.attnEveChange;

      Ext.getStore('EventsListStore').on({
         scope: this,
         load: this.onLoadEventsListStore
      });

      Ext.getStore('MyEventsListStore').on({
         scope: this,
         load: this.onLoadEventsListStore
      });
   },

   onLoadEventsListStore: function(store)
   {
      var proxyStore = store;
      if (proxyStore.getInitialConfig().storeId == 'EventsListStore')
      {
         this.eventsSql = true; //to confirm that only first time store should load,after that data shoul comes from local sql table

      }

      if (proxyStore.getInitialConfig().storeId == 'MyEventsListStore')
      {
         this.myEventsSql = true; //to confirm that only first time store should load,after that data shoul comes from local sql table

      }

      var proxyStoreString = proxyStore.getInitialConfig().storeId;
      var sqlStore = Ext.getStore(proxyStoreString.replace('Store', 'SqlStore'));


      if (this.from != 'scroll')             //prevents store to clear if its called from scrollend.
      {
         var db = openDatabase("Sencha", "", "Sencha", 200000);
         db.transaction(function(e)
         {
            e.executeSql('DELETE FROM ' + proxyStoreString.replace('Store', 'Model'), [], function()
            {
            }, function(tx, error)
            {
            });
         });
         sqlStore.removeAll();
      }

      proxyStore.each(function(item)
      {
         var exist = sqlStore.find('key', item.data.key);
         if (exist == -1)
         {
            sqlStore.add(item);
         }
      });
      if (this.from != 'scroll')              //prevents entry of record into local web sql table and do entry only first time load.
      {
         sqlStore.sync();
      }
   },

   onEventsListPull: function()
   {
      this.from = "";
      var store = Ext.getStore('EventsListStore');
      this.loadEventsStore(store);
   },

   onScrollEndOfEventsList: function(list)
   {
      if (list)
      {
         list.getScrollable().getScroller().on({
            scope: this,
            scrollend: 'onScroll'
         });
      }
   },

   onScroll: function(scroller, x, y)
   {
      /*if (y >= scroller.maxPosition.y)
      {*/
         this.from = 'scroll';
         // var sqlStore = Ext.getStore('OffersHotDealsDataViewSqlStore');
         var sqlStore = this.list.getStore();
         if (sqlStore.getInitialConfig().storeId.indexOf('Sql') != -1)
         {
            var proxyStoreString = sqlStore.getInitialConfig().storeId;
            var proxyStore = Ext.getStore(proxyStoreString.replace('Sql', ''));
            var createdAt;
            var params;
            var key;


            if (sqlStore.last())
            {

               key = sqlStore.last().data.key;

               if (this.list.xtype == 'eventslist')
               {

                  createdAt = sqlStore.last().data.createdAt;
                  params = { createdAt: createdAt, key: key };
               }

               this.loadEventsStore(proxyStore, params);
            }
         }


      //}
   },

   onTapCommemt: function(view, idx, list, rec, e)
   {
      this.eventId = rec.data.eventId;
      this.commentId = rec.data.key;
      var userName = rec.data.userName;
      var value = this.getUsername(userName);
      if (value)
      {
         var overlay = Ext.create('MobileApp.view.Events.EventCommentOverlayView');
         overlay.show();
      }
   },

   getUsername: function(userName)
   {
      var store = Ext.getStore('LoginStore').data.items;
      if (store.length != 0)
      {
         var uname = store[0].data.name;
         if (uname == userName)
         {
            return true;
         } else
         {
            return false;
         }
      }
   },

   onTapEventOverlay: function(view, index, list, record)
   {

      if (index == 0)
      {
         this.onDeleteComment(view);
      }
      if (index == 1)
      {
         this.onCancelComment(view);

      }

   },

   onCancelComment: function(view)
   {
      view.hide();
   },

   onDeleteComment: function(view)
   {
      var eventId = this.eventId;
      var commentId = this.commentId;

      Ext.Ajax.request({
         method: 'DELETE',
         url: MobileApp.util.Config.getBaseUrl() + '/UserEvent/DeleteEventComment',
         scope: this,
         params: {
            key: commentId,
            eventId: eventId
         },
         success: function(response)
         {
            if (response)
            {
               var commDataView = this.getEventsProfileView().down('#commDataView').getStore().findRecord("key", commentId);
               this.getEventsProfileView().down('#commDataView').getStore().remove(commDataView);
               var cmntView = this.getEventsProfileView().down('#commDataView');
               cmntView.refresh();
               view.hide();
            }

         },
         failure: function(response)
         {
            var error = 'Something went wrong';
            if (response.status == 401)
            {
               error = 'Sorry, You are not authorized to access this module.';
            }
            Ext.Msg.alert('', error);
         }
      });

   },

   onTapEventsMenu: function()
   {
      this.getEventsTabPanel().setActiveItem(0);

      var skipLogin = this.getApplication().getController('LoginController').skipLogin;
      if (skipLogin)
      {
         this.getEventsTabPanel().down('#myEventsTab').disable();
      }
      var store = Ext.getStore('EventsListStore');
      this.list = this.getEventsList();
      if (!this.eventsSql)
      {
         var scroll = this.list.getScrollable().getScroller();
         scroll.refresh();
         scroll.minPosition.y = -130;
         scroll.scrollTo(null, -130);
         //console.log(scroll.position);
         this.list.down('#pull').setState('loading');
         this.loadEventsStore(store);
      }

   },

   onTapEventsLis: function(touch)
   {
      if (touch.target.id != "")
      {
         this.getApplication().getController('OffersController').setSliderIn();
      }
   },

   onSwipeEventsList: function(event)
   {
      if (event.direction == "left")
      {
         var me = this,
             mainEl = me.getSlidelist().element;
         if (mainEl.hasCls('out'))
         {
            mainEl.removeCls('out').addCls('in');
         }
      }
   },

   onActiveItem: function(view, value)
   {
      var language = this.getApplication().getController('SettingsController').lang;
      if (value.xtype == "eventslist")
      {
         value.setActiveItem(0);
         if (language == "fr")
         {
            view.getParent().getNavigationBar().setTitle("Eventos");
         } else
         {
            view.getParent().getNavigationBar().setTitle("Events");
         }

      }

      if (value.xtype == "myeventslist")
      {
         value.setActiveItem(0);
         var myEvStore = Ext.getStore('MyEventsListStore');
         var events = Ext.getStore('LoginStore').data.items[0].data.events;
         var params = { events: events };
         if (!this.myEventsSql || this.attnEveChange)
         {

            this.loadMyEventStore(myEvStore, params);
            this.attnEveChange = false;
         }

         if (language == "fr")
         {
            view.getParent().getNavigationBar().setTitle("Mis Eventos");
         } else
         {
            view.getParent().getNavigationBar().setTitle("My Events");
         }


      }
   },

   onEventsSlideButton: function()
   {
      this.getApplication().getController('MainController').toggleNav();
   },

   onTapEventsList: function(view, index, ctx, record, touch)
   {
      if (touch.target.id == 'shareImg')
      {
         this.onShareEvents(record);
      } else
      {
         var slider = this.getApplication().getController('OffersController').setSliderIn();
         if (slider != false)
         {
            if (!this.eventsProfileView)
            {
               this.eventsProfileView = Ext.create('MobileApp.view.Events.EventsProfileView');
            }
            this.eventsProfileView.setTitle(record.data.name);
            this.getEventsNavigationView().push(this.eventsProfileView);
            this.setProfileViewValues(record, this.eventsProfileView);
            // this.setLikeBut(record);
            var commStore = Ext.getStore('EventsCommentDataViewStore');
            var params = { eventId: record.data.key };
            this.loadStore(commStore, params);

         }
      }

   },

   onSkipLoginCheck: function()
   {

      var skipLogin = this.getApplication().getController('LoginController').skipLogin;
      if (skipLogin)
      {
         var language = this.getApplication().getController('SettingsController').lang;

         if (language == "fr")
         {
            Ext.Msg.confirm('Confirmar', 'Para darle Me Gusta a un evento, primero tiene que crear un pefil. ¿Desea hacerlo ya?', function(btn)
            {
               if (btn == "yes")
               {
                  window.location.reload();
               } else
               {

                  return false;
               }
            });
         } else
         {
            Ext.Msg.confirm('Confirmar', 'To like a event you must first create a profile. Do you want to do it now ?', function(btn)
            {
               if (btn == "yes")
               {
                  window.location.reload();
               } else
               {
                  return false;
               }
            });

         }
      }
   },

   setLikeBut: function(record)
   {
      var likeImage = document.getElementById('eveLikeIcon');
      var skipLogin = this.getApplication().getController('LoginController').skipLogin;
      if (skipLogin)
      {
         this.onSkipLoginCheck();
      }
      var loginStore = Ext.getStore('LoginStore').data.items;
      if (loginStore.length != 0)
      {
         var likedEvents = loginStore[0].data.eventsLiked;
         for (var i = 0; i < likedEvents.length; i++)
         {
            if (likedEvents[i] == record.data.key)
            {
               likeImage.style.backgroundPosition = '-21px 0px';
            }
         }
      }

   },

   onEventsNavPush: function()
   {
      this.hideEventsSlideButton();
   },

   onEventsNavPop: function(view, item)
   {
      if (view.getActiveItem().xtype == "eventstabpanel")
      {
         this.showEventsSlideButton();
      }

   },

   hideEventsSlideButton: function()
   {
      var eventsSlideButton = this.getEventsSlideButton();
      if (eventsSlideButton.isHidden())
      {
         return;
      }
      eventsSlideButton.hide();
   },

   showEventsSlideButton: function()
   {
      var eventsSlideButton = this.getEventsSlideButton();
      eventsSlideButton.show();
   },

   loadEventsStore: function(store, params)
   {
      if (this.from!='scroll')
      {
         Ext.Viewport.setMasked({ xtype: 'loadmask', message: 'Cargando...' });
      }
 
      store.load({
         params: params,
         scope: this,

         callback: function(response, operation, success)
         {
            if (success != true)
            {
               Ext.Viewport.setMasked(false);
               if (response)
               {
                  var data = response.operations[0].request.proxy.reader.jsonData.message;
                  Ext.example.msg('Message', data);
               } else
               {
                  var errorCode = operation.error.status;
                  var error = 'Something went wrong';
                  if (errorCode == 401)
                  {
                     error = 'Sorry, You are not authorized to access this module.';
                  }
                  Ext.example.msg('Message', error);

                  //todo : Messagebox color changes
               }
            } else
            {
               Ext.Viewport.setMasked(false);
               for (var i = 0; i < response.length; i++)
               {
                  if (response[i].data.date != null)
                  {
                     var date = response[i].data.date;
                     var fdate = new Date(date);
                     fdate.toLocaleString();

                     var dateR = fdate.getDate();
                     var monthR = fdate.getMonth()+1;
                     var yearR = fdate.getFullYear();
                     var newDate = dateR + '/' + monthR + '/' + yearR;
                     response[i].data.date = newDate;
                  }
               }
               var eventsList = this.getEventsList();
               if (eventsList)
               {
                  eventsList.refresh();
                  var scroll = this.list.getScrollable().getScroller();
                  scroll.minPosition.y = 0;
                  eventsList.down('#pull').setState('loaded');
                  eventsList.down('#pull').setState('release');
               }

            }

         }
      });
   },

   setProfileViewValues: function(record, profileView)
   {
      profileView.down('#eventProfImg').setSrc('');
      profileView.down('#profImgOne').show();
      profileView.down('#eventProfImg').hide();
      //  profileView.down('#eventProfImg').setSrc(img);
      /* if (record.data.photo == "data:,")
      {
         profileView.down('#eventProfImg').setSrc("./resources/icons/nw-icons/bg.jpg");
      } else
      {
         profileView.down('#eventProfImg').setSrc(img);
      }*/
      var ppi = window.devicePixelRatio;
      profileView.down('#eventProfImg').setSrc(MobileApp.util.Config.getImgUrl() + '/image/300x225/' + ppi + '/' + record.data.key);
      profileView.setTitle(record.data.name);

      var attendees = document.getElementById('eventProfileAttendees');
      attendees.innerHTML = record.data.attendeeCount;


      var location = document.getElementById('eventProfileLocation');
      location.innerHTML = record.data.location;


      var date = document.getElementById('eventDate');
      date.innerHTML = record.data.date;

      var time = document.getElementById('eventTime');
      time.innerHTML = record.data.fromEventsTime + " a " + record.data.toEventsTime;

      var details = document.getElementById('evnetDetails');
      details.innerHTML = record.data.details;

      var eventName = document.getElementById('eventTitle');
      eventName.innerHTML = record.data.name;

      var eventLike = document.getElementById('eventLikeCount');
      eventLike.innerHTML = record.data.likeCount;
      /* profileView.down('#usersAttend').setHtml('Users attending: ' + record.data.attendeeCount);
      profileView.down('#location').setHtml(record.data.location);
      profileView.down('#date').setHtml(record.data.date);
      profileView.down('#time').setHtml(record.data.time);
      profileView.down('#details').setHtml(record.data.details);*/
      var commBut = this.getEventsProfileView().down('#evePostComment');
      var commField = this.getEventsProfileView().down('#evCommTextField');

      commBut.setDisabled(true);
      commField.setValue('');
      
      var loginStore = Ext.getStore('LoginStore').data.items;
      if (loginStore.length != 0)
      {
         var isEventAtt = loginStore[0].data;
         if (isEventAtt.events.indexOf(record.data.key) == -1)
         {
            profileView.down('#attndEvToggle').uncheck();
         } else
         {
            profileView.down('#attndEvToggle').check();
         }
         var eventsLikedArray = isEventAtt.eventsLiked;
         var alreadyLikedOrNot = eventsLikedArray.indexOf(record.data.key);
         var view = document.getElementById('eveLikeIcon');
         if (alreadyLikedOrNot != -1)  //already liked
         {
            view.style.backgroundPosition = '-21px 0px';
         } else
         {
            view.style.backgroundPosition = '0px 0px';
         }
      }
   },

   onTapAttEventBut: function(field, value)
   {

      var skipLogin = this.getApplication().getController('LoginController').skipLogin;

      console.log(this.getApplication().getController('SettingsController').lang);

      var toggled;
      if (skipLogin)
      {
         this.onSkipLoginCheck();
         var checked = this.getEventsProfileView().down('#attndEvToggle');
         checked.setChecked(false);
      }


      this.attnEveChange = true;

      if (value == true)
      {
         toggled = true;
      } else
      {
         toggled = false;
      }     


      var logStore = Ext.getStore('LoginStore').data.items;
      if (logStore.length != 0)
      {
         var userId = logStore[0].data.key;
         if (this.getEventsList().getSelection()[0])
         {
            var eventId = this.getEventsList().getSelection()[0].data.key;

            Ext.Ajax.request({
               url: MobileApp.util.Config.getBaseUrl() + '/UserEvent/AttendEvent',
               method: 'POST',
               scope: this,
               params: { userId: userId, toggled: toggled, eventId: eventId },
               success: function(response)
               {
                  if (toggled)
                  {
                     Ext.getStore('LoginStore').data.items[0].data.events.push(eventId);
                  }
                  if (!toggled)
                  {
                     var index = Ext.getStore('LoginStore').data.items[0].data.events.indexOf(eventId);
                     Ext.getStore('LoginStore').data.items[0].data.events.splice(index, 1);
                  }

               }
            });
         }
      }

   },

   onTapLike: function()
   {
      var skipLogin = this.getApplication().getController('LoginController').skipLogin;
      if (skipLogin)
      {
         this.onSkipLoginCheck();
      }
      var loginStore = Ext.getStore('LoginStore').data.items;
      if (loginStore.length != 0)
      {
         var eventsLikedArray = loginStore[0].data.eventsLiked;
         var userId = Ext.getStore('LoginStore').data.items[0].data.key;
         var eventId = this.getEventsList().getSelection()[0].data.key;
         var likeValue = document.getElementById('eventLikeCount').innerHTML;

         var view = document.getElementById('eveLikeIcon');
         var toggled;

         var alreadyLikedOrNot = eventsLikedArray.indexOf(eventId);
         if (alreadyLikedOrNot != -1)  //already liked
         {
            view.style.backgroundPosition = '0px 0px';
            toggled = false;
            document.getElementById('eventLikeCount').innerHTML = parseInt(likeValue) - 1;
            loginStore[0].data.eventsLiked.pop(eventId);

         } else
         {
            view.style.backgroundPosition = '-21px 0px';
            document.getElementById('eventLikeCount').innerHTML = parseInt(likeValue) + 1;
            toggled = true;
            loginStore[0].data.eventsLiked.push(eventId);
         }


         Ext.Ajax.request({
            url: MobileApp.util.Config.getBaseUrl() + '/UserEvent/LikeEvent',
            method: 'POST',
            scope: this,
            params: { userId: userId, toggled: toggled, eventId: eventId },
            success: function(response)
            {
               var result = Ext.JSON.decode(response.responseText);
               if (result)
               {
                  if (result.success == false)
                  {
                     Ext.Msg.alert('', "Sorry");
                  }
               }
            },
            failure: function(response)
            {
               var error = 'Something went wrong';
               if (response.status == 401)
               {
                  error = 'Sorry, You are not authorized to access this module.';
               }
               Ext.Msg.alert('', error);
               if (toggled == false)
               {
                  view.style.backgroundPosition = '-21px 0px';
                  document.getElementById('eventLikeCount').innerHTML = parseInt(likeValue) - 1;
                  loginStore[0].data.eventsLiked.pop(eventId);
               } else
               {
                  view.style.backgroundPosition = '0px 0px';
                  document.getElementById('eventLikeCount').innerHTML = parseInt(likeValue) + 1;
                  loginStore[0].data.eventsLiked.push(eventId);
               }
            }
         });
      }

   },

   onPostComment: function()
   {
      var skipLogin = this.getApplication().getController('LoginController').skipLogin;
      if (skipLogin)
      {
         this.onSkipLoginCheck();
         this.getEventsProfileView().down('#evCommTextField').setValue('');
      }
      var logStore = Ext.getStore('LoginStore').data.items;
      if (logStore.length != 0)
      {
         var userId = logStore[0].data.key;
         var eventId = this.getEventsList().getSelection()[0].data.key;
         var comment = this.getEventsProfileView().down('#evCommTextField').getValue();
         Ext.Ajax.request({
            method: 'POST',
            url: MobileApp.util.Config.getBaseUrl() + '/UserEvent/PostEventComment',
            scope: this,
            params: {
               eventId: eventId,
               userId: userId,
               value: comment
            },
            success: function(response)
            {
               var result = Ext.JSON.decode(response.responseText);
               if (result.success == 'profanity')
               {
                  return;
               }
               if (result)
               {
                  var commDataView = this.getEventsProfileView().down('#commDataView');
                  commDataView.getStore().add(result);
                  this.getEventsProfileView().down('#evCommTextField').setValue('');
                  //commDataView.refresh();
               }
            },
            failure: function(response)
            {
               var error = 'Something went wrong';
               if (response.status == 401)
               {
                  error = 'Sorry, You are not authorized to access this module.';
               }
               Ext.Msg.alert('', error);
            }
         });
      }
   },

   loadStore: function(store, params)
   {
      /*  var myMask = new Ext.LoadMask(Ext.getBody(), { msg: "Loading..." });
      myMask.show();*/
      store.load({
         scope: this,
         params: params,
         callback: function(response, operation, success)
         {
            if (success != true)
            {
               //myMask.hide();
               if (response)
               {
                  var data = response.operations[0].request.proxy.reader.jsonData.message;
                  Ext.example.msg('Message', data);
               } else
               {
                  var errorCode = operation.error.status;
                  var error = 'Something went wrong';
                  if (errorCode == 401)
                  {
                     error = 'Sorry, You are not authorized to access this module.';
                  }
                  Ext.example.msg('Message', error);

                  //todo : Messagebox color changes
               }
            } /* else
            {
               myMask.hide();
            }*/
         }
      });
   },

   loadMyEventStore: function(store, params)
   {
      Ext.Viewport.setMasked({ xtype: 'loadmask', message: 'Cargando...' });
      store.load({
         scope: this,
         params: params,
         callback: function(response, operation, success)
         {
            if (success != true)
            {
               Ext.Viewport.setMasked(false);
               if (response)
               {
                  var data = response.operations[0].request.proxy.reader.jsonData.message;
                  Ext.example.msg('Message', data);
               } else
               {
                  var errorCode = operation.error.status;
                  var error = 'Something went wrong';
                  if (errorCode == 401)
                  {
                     error = 'Sorry, You are not authorized to access this module.';
                  }
                  Ext.example.msg('Message', error);

                  //todo : Messagebox color changes
               }
            } else
            {
               Ext.Viewport.setMasked(false);
               for (var i = 0; i < response.length; i++)
               {
                  if (response[i].data.date != null)
                  {
                     var date = response[i].data.date;
                     var fdate = new Date(date);
                     fdate.toLocaleString();

                     var dateR = fdate.getDate();
                     var monthR = fdate.getMonth()+1;
                     var yearR = fdate.getFullYear();
                     var newDate = dateR + '/' + monthR + '/' + yearR;
                     response[i].data.date = newDate;
                  }
               }

               var myEventsList = this.getMyEventsList();
               if (myEventsList)
               {
                  myEventsList.refresh();
               }
            }
         }
      });
   },

   onViewAllComm: function()
   {
      if (!this.eventsAllCommentView)
      {
         this.eventsAllCommentView = Ext.create('MobileApp.view.Events.EventsAllCommentView');
      }
      var navView = this.getEventsProfileView().getParent();
      navView.push(this.eventsAllCommentView);
   },

   onTapEventsProHeader: function(touch)
   {
      if (touch.target.id == 'eveLikeIcon')
      {
         this.onTapLike();
      }

      if (touch.target.id == 'eveShareImg')
      {
         var rec = this.getEventsList().getSelection()[0];
         this.onShareEvents(rec);
      }

   },

   onShareEvents: function(record)
   {
      window.plugins.socialsharing.share("" + "Hola, descarga la aplicación MovilMall y busca la evento" + "" + record.data.name + "" + "de" + record.data.location + "" + record.data.date + "" + record.data.time, null, record.data.photo, null);
   },

   onPaintMyEventsList: function()
   {
      var lang = this.getApplication().getController('SettingsController').lang;
      if (lang == "fr")
      {
         this.getEventsNavigationView().getNavigationBar().setTitle("Mis Eventos");
      } else
      {
         this.getEventsNavigationView().getNavigationBar().setTitle("My Events");
      }

   },

   onPaintEventsList: function()
   {
      var lang = this.getApplication().getController('SettingsController').lang;
      if (lang == "fr")
      {
         this.getEventsNavigationView().getNavigationBar().setTitle("Eventos");
      } else
      {
         this.getEventsNavigationView().getNavigationBar().setTitle("Events");
      }

   },
   
   onKeyUpCommentField:function()
   {
      var textField = this.getEventsProfileView().down('#evCommTextField');
      var button = this.getEventsProfileView().down('#evePostComment');
      var value = textField.getValue();
      if (value != '') {
         button.setDisabled(false);
      } else {
         button.setDisabled(true);
      }
   },

   onClearCommentField: function () {
      var button = this.getEventsProfileView().down('#evePostComment');
      button.setDisabled(true);
   }
});