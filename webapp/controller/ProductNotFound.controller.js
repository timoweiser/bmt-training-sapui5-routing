sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("bmt.training.routing.controller.ProductNotFound", {
		
		onNavBack: function (oEvent){
			var oHistory, sPreviousHash, oRouter;
			oHistory = sap.ui.core.routing.History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();
			
			if(sPreviousHash !== undefined){
				window.history.go(-1);
			}else{
				oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("products", true);
			}
		}

	});

});