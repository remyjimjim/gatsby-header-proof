(function($, window, document, undefined) {
  "use strict";
  Drupal.behaviors.timeline_block = {
    attach: function(context, settings) {
      function set_block_height() {
        $(".timeline-block").each(function() {
          $(this).css("min-height", $(this).children(".timeline-heading").innerWidth());
        });
      }
      set_block_height();
      $(window).resize(set_block_height);
    }
  };
})(jQuery, this, this.document);