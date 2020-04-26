(function($, window, document, undefined) {
  "use strict";
  Drupal.behaviors.breadcrumb = {
    attach: function(context, settings) {
      $(document).ready(function() {
        var $breadcrumb_list = $(".breadcrumb ol");
        var $current_page = $breadcrumb_list.find("li:last-child");
        $current_page.attr("aria-current", "page");
      });
    }
  };
})(jQuery, this, this.document);