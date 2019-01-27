Ext.define('BrandAdmin.controller.LocationsController', {
	extend: 'Ext.app.Controller',
	views: ['locations.LocationsPanel', 'locations.LocationsGrid', 'locations.LocationsDetailPanel',
	'locations.LocationsDetailForm', 'locations.LocationsMapPanel'],
	stores: ['LocationsStore', 'StateComboStore', 'CityComboStore'],
	refs: [{
		ref: 'LocationsGrid',
		selector: 'locationsgrid'   
	},
		{
			ref: 'LocationsPanel',
			selector: 'locationspanel'
		},
		{
			ref: 'LocationsDetailForm',
			selector: 'locationsdetailform'
		},
		{
			ref: 'LocationsMapPanel',
			selector: 'locationsmappanel'
		}],
	init: function()
	{
		this.control({
			'locationsgrid actioncolumn': {
				click: 'onLocationsPanelActionColumn'
			},
			'locationsdetailpanel [action=cancel]': {
				click: 'onCancel'
			},
			'locationsdetailpanel [action=back]': {
				click: 'onBack'
			},
			'locationsdetailpanel [action=save]': {
				click: 'onSave'
			},
			'locationsgrid [action=new]': {
				click: 'onNewLocation'
			},
			'locationsmappanel [action=clearpin]': {
				click: 'onClickClearPin'
			},
			'locationsdetailform [itemId=stateCombo]': {
				select: this.onSelectState
			},
			'locationsmappanel [itemId=mapPanel]': {
				mapready: 'onRenderMap'
			}
		});
	},
	onSelectState: function (view, record) {
		var cityCombo = this.getLocationsDetailForm().down('#cityCombo');
		var store = this.getStore('CityComboStore');
		cityCombo.setValue('');
		store.clearFilter();
		store.filter('stateId', record[0].data.key);
	},
	onClickClearPin: function () {
		alert("hsdf");
		google.maps.event.addListener(map, 'click', function (event) {
			alert("Latitude: " + event.latLng.lat() + " " + ", longitude: " + event.latLng.lng());
		});
	},
	onSave: function()
	{
		var mapLocPos = this.getLocationsMapPanel().down('#mapPanel').gmap.marker.position;
		var mapLoc = new Array();
		mapLoc.push(mapLocPos.A);
		mapLoc.push(mapLocPos.k);
		console.log(mapLoc);
		var form = this.getLocationsDetailForm();
		var record = form.getRecord();
		form.updateRecord(record);
		record.data.mapLoc = mapLoc;
		console.log(record);
		var store = this.getLocationsStoreStore();
		this.save(record, store);
	},

	onNewLocation: function()
	{
		var panel = this.getLocationsPanel().getLayout();
		panel.setActiveItem(1);

		var form = this.getLocationsDetailForm().getForm();
		var store = this.getLocationsStoreStore();
		var record = new store.model;
		store.insert(store.data.length, record);
		form.loadRecord(record);
	},
	onBack: function () {
		var panel = this.getLocationsPanel().getLayout();
		panel.setActiveItem(0);
	},
	onCancel:function()
	{
		var panel = this.getLocationsPanel().getLayout();
		panel.setActiveItem(0);
	},
	onLocationsPanelActionColumn: function (grid, cell, row, col, e) {
		var m = e.getTarget().className.split(' '),
			 record = grid.getStore().getAt(row);
		if (m[4] == 'Edit') {
			this.editRecord(record);
		} else if (m[4] == 'Delete') {
			this.deleteRecord(grid, record);
		} else {
			return;
		}
	},
	editRecord: function (record) {
		var grid = this.getLocationsGrid().getView();
		grid.select(record);

		var panel = this.getLocationsPanel().getLayout();
		panel.setActiveItem(1);
		var form = this.getLocationsDetailForm().getForm();
		form.loadRecord(record);
	},

	save: function(record, store)
	{
		if (record.dirty)
		{

			if (!record.isValid())
			{
				Ext.example.msg('Warning', 'Fields marked with <font color = "red">*</font> cannot be empty');
				return;
			}
			var brandId = this.getStore('LoginStore').data.items[0].data.brandId;
			record.data.brandId = brandId;

			var statusBar = Ext.ComponentQuery.query('mainstatusbar');
			statusBar[0].showBusy();
			statusBar[0].setStatus({
				text: 'Saving Changes',
				iconCls: 'x-status-busy',
				clear: {
					wait: 8000,
					anim: false,
					useDefaults: false
				}
			});
			var myMask = new Ext.LoadMask(Ext.getBody(), { msg: "Saving data..." });
			myMask.show();
			store.sync({
				scope: this,
				success: function(response)
				{
					myMask.hide();
					statusBar[0].clearStatus({ useDefaults: true });
					Ext.example.msg('Success', 'Record Saved Successfully');

				},

				failure: function(response, operations)
				{
					myMask.hide();
					statusBar[0].setStatus({ useDefaults: true });
					if (!response.exceptions[0].error)
					{
						var data = response.operations[0].request.proxy.reader.jsonData.message;
						Ext.example.msg('Message', data);
					} else
					{
						var errorCode = response.exceptions[0].error.status;
						var error = 'Something went wrong';
						if (errorCode == 401)
						{
							error = 'Sorry, You are not authorized to access this module.';
						}
						Ext.example.msg('Message', error);
					}
				}
			});
		} else
		{
			Ext.example.msg('Warning', 'Found No Record to Save');
		}
	},

	onRenderMap: function () {
		var map = this.getLocationsMapPanel().down('#mapPanel');

		var marker = new google.maps.Marker({
			map: map.gmap,
			position: new google.maps.LatLng(this.Record.data.mapLoc[1], this.Record.data.mapLoc[0])
		});

		var pos = new google.maps.LatLng(this.Record.data.mapLoc[1], this.Record.data.mapLoc[0]);
		map.gmap.setCenter(pos);
		map.gmap.marker = marker;
		marker.setMap(map.gmap);
		console.log(map);
	}
});