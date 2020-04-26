(function($, window, document, undefined) {
  "use strict";
  Drupal.behaviors.quicksearch_init = {
    attach: function(context, settings) {
      var $quicksearch_list = $(".quick-search-list", context);
      $quicksearch_list.attr("id", "quick-search-list");
    }
  };
})(jQuery, this, this.document);