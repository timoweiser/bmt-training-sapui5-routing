sap.ui.define([
	"bmt/training/routing/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("bmt.training.routing.controller.Products", {
		_myTimeOut: null,

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf bmt.training.routing.view.Products
		 */
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("products").attachPatternMatched(this._onObjectMatched, this);
		},
		
		_onObjectMatched: function (oEvent){
			var oRouterArgs = oEvent.getParameter("arguments");
			var oQuery = oRouterArgs["?query"] || null;
			if(oQuery !==  null){
			   var oInput = this.getView().byId("idFilterInput");
			   oInput.setValue(oQuery.filter);

				var oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.Contains, oQuery.filter);
				var oBinding = this.getView().byId("idProductsTable").getBinding("items");
				oBinding.filter(oFilter);
			}
		},
		
		onPressFilter: function (){
			var sFilterValue = this.getView().byId("idFilterInput").getValue();
			var oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.Contains, sFilterValue);
			var oBinding = this.getView().byId("idProductsTable").getBinding("items");
			oBinding.filter(oFilter);
		},

		/**
		 * Event handler when a table item gets pressed
		 * @param {sap.ui.base.Event} oEvent the table selectionChange event
		 * @public
		 */
		onPress : function (oEvent) {
			// The source is the list item that got pressed
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("product", {
				productId: oItem.getBindingContext().getProperty("ID")
			});
		}

	});

});