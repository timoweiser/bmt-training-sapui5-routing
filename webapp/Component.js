sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"bmt/training/routing/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("bmt.training.routing.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			this.getRouter().initialize();
			
			var oJSONModel = new sap.ui.model.json.JSONModel({
				Products: [
					{
						"ID": 0,
						"Name": "Caffe Latte Vanille",
						"Description": "Vanille Geschmack",
						"Price": "2.99",
						"Rating": 5
					},
					{
						"ID": 1,
						"Name": "Caffe Latte Cappucino",
						"Description": "Feinste Röstung",
						"Price": "2.69",
						"Rating": 4
					}
				]
			});
			this.setModel(oJSONModel);
			
			if(this.getComponentData() != null){
				var oParams = this.getComponentData().startupParameters;
				if(oParams.productId != null){
					var sProductId = oParams.productId[0];
					this.getRouter().navTo("product", {
						productId: sProductId
					}, false);
				}
			}
			//Always start at product page
			//this.getRouter().navTo("products", true);
		}
	});
});