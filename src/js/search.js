(function($, window, document, undefined) {
  "use strict";
  Drupal.behaviors.search = {
    attach: function(context, settings) {
      var $toggle_search = $(".toggle-search", context);
      var $search_icon = $toggle_search.children(".material-icons");
      var $search_box = $("#search-box");
      var $button_text = $toggle_search.children(".button-text");
      function toggle_search(event) {
        $toggle_search.off("click", toggle_search);
        $toggle_search.siblings(".search-area").animate({
          width: "toggle"
        }, {
          duration: "normal",
          easing: "swing",
          complete: function() {
            $toggle_search.toggleClass(".is-expanded");
            if ($toggle_search.hasClass(".is-expanded")) {
              $search_icon.text("close");
              $button_text.html("Close the search box");
              $search_box.focus();
            } else {
              $search_icon.text("search");
              $button_text.html("Open the search box");
            }
            $toggle_search.on("click", toggle_search);
          }
        });
        event.stopPropagation();
      }
      $toggle_search.on("click", toggle_search);
    }
  };
})(jQuery, this, this.document);