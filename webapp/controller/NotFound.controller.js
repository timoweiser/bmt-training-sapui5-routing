sap.ui.define([
	"bmt/training/routing/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("bmt.training.routing.controller.NotFound", {

			onNavPressed : function () {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("products");
			}

	});

});