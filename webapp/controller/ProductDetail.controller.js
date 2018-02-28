sap.ui.define([
	"bmt/training/routing/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("bmt.training.routing.controller.ProductDetail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf bmt.training.routing.view.ProductDetail
		 */
		onInit: function() {
			this.getRouter().getRoute("product").attachPatternMatched(this._onObjectMatched, this);
		},
		
		_onObjectMatched: function (oEvent){
			var sObjectId =  oEvent.getParameter("arguments").productId;
			var sObjectPath = "/Products/" + sObjectId;
			this.getView().bindElement({
				path: sObjectPath,
				events: {
					change: this._onBindingChange.bind(this)
				}
			});
		},
		
		_onBindingChange: function (){
			var oView = this.getView(),
				oElementBinding = oView.getElementBinding(),
				oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				
			var sObjectPath = oElementBinding.getBoundContext().getPath();
			var oObject = this.getView().getModel().getProperty(sObjectPath);

			// No data for the binding
			if (!oObject) {
				oRouter.getTargets().display("productNotFound");
				return;
			}
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf bmt.training.routing.view.ProductDetail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf bmt.training.routing.view.ProductDetail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf bmt.training.routing.view.ProductDetail
		 */
		//	onExit: function() {
		//
		//	}

	});

});