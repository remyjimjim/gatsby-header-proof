(function($, window, document, undefined) {
  "use strict";
  Drupal.behaviors.wwu_mobile_menu = {
    attach: function(context, settings) {
      //For some reason, this file is not being found or used 
      var $mobile_language_button = $("langOptionButton");
      var $mobile_language_menu = $("#dropLangMenu");
      $mobile_language_button.click(function(event) {
        if ($mobile_language_menu.css("display") === "none") {
          $mobile_language_menu.show("linear");
        } else {
          $mobile_language_menu.hide("linear");
        }
        event.stopPropagation();
      });
    }
  };
})(jQuery, this, this.document);