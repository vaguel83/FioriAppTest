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
          let clear_press = evt.getSource().getId().includes('clear_button');
          let submit_press = evt.getSource().getId().includes('submit_button');
        console.log("clear button pressed:" + clear_press);
        console.log("submit button pressed:" + submit_press);
        // MessageToast.show(evt.getSource().getId() + " Toasty!!!");
        if (submit_press)
        {
            const oNameInput = this.getView().byId("nameInput");
            const oLastNameInput = this.getView().byId("lastnameInput");
            const oAddressInput = this.getView().byId("addressInput");

            const oNameText = this.getView().byId("nameText");
            const oLastNameText = this.getView().byId("lastnameText");
            const oAddressText = this.getView().byId("addressText");

            let value = oNameInput.getValue();
            oNameText.setText(value);
            value = oLastNameInput.getValue();
            oLastNameText.setText(value);
            value = oAddressInput.getValue();
            oAddressText.setText(value);

            MessageToast.show( "Hello " + value );
        }

        if (clear_press)
        {
            const oNameText = this.getView().byId("nameText");
            const oLastNameText = this.getView().byId("lastnameText");
            const oAddressText = this.getView().byId("addressText");


            oNameText.setText("");

            oLastNameText.setText("");

            oAddressText.setText("");
        }

        
      },
    });
  }
);
