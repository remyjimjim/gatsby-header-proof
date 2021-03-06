(function($, window, document, undefined) {
  "use strict";
  Drupal.behaviors.external_links_a11y = {
    attach: function(context, settings) {
      // add 'open in new tab' icon and text to external links. NOTE: This isn't a recommended practice for all links, but adds a11y info in case the link doesn't open in the same window
      var $linkExternal = $('a[target="_blank"], a[target="blank"]', context);
      var $openIcon = '<span class="material-icons" aria-hidden="true">open_in_new</span>';
      var $openText = '<span class="visually-hidden">(opens in new window)</span>';
      $linkExternal.append($openIcon);
      $linkExternal.append($openText);
    }
  };
})(jQuery, this, this.document);