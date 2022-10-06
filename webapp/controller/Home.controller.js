sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("btp.academy.fiorifirstapp.controller.Home", {
      onInit: function () {},

      onPress: function (evt) {
        // MessageToast.show(evt.getSource().getId() + " Toasty!!!");

        MessageToast.show(evt.getParameter("id") + " Toasty!!");
      },
    });
  }
);
