(function($, window, document, undefined) {
  "use strict";
  Drupal.behaviors.quicksearch = {
    attach: function(context, settings) {
      /**
* @file
* Quick search and filter functions.
*
* Some logic to get listnav and quicksearch to play nice together. We want
* them to share the same "no results" message, as well as properly function
* as an intersection. That is, each search method should be able to filter
* the results of the other.
*
* This is achieved by giving each filter it's own classes to "show" and
* "hide" each result. A result is only shown if it has the ".listNavShow" and
* ".quickSearchShow" classes. In addition, the "no results" message is only
* shown if there are no results matching this selector.
*
* This code relies on the TODO: id attribute attached to the "majors_index" view in
* the views_view_list preprocessor function.
*/
      // The ul element to be filtered
      var $list = $("#quick-search-list", context);
      // Search form.
            var $form = $("#quick-search-form", context);
      // Search box (input).
            var $input = $("#quick-search-input", context);
      // Container.
            var $wrapper = $(".quick-search-container");
      // Text that announces how many results are shown
            var $results_text = $("#quick-search-results-text");
      // Letter selection menu.
            var $letterMenu = $("#quick-search-list-nav");
      // ===Functions and attributes to enhance UX of filter===
      /* Prevent a disabled letter from being selected through tab-navigation or
 * scrolling to top of page on click.
 * The interval is used because the buttons are added dynamically, so
 * we must wait for them to be present.*/      var checkForLetters = setInterval(function() {
        var letterDisabled = $(".ln-disabled");
        if (letterDisabled.length) {
          letterDisabled.removeAttr("href");
          letterDisabled.attr("tabindex", "-1").attr("aria-disabled", "true");
          clearTimeout(checkForLetters);
        }
      }, 100);
      // Hide the letter-selection menu once the user has typed something in:
            $input.on("keyup", function() {
        if (!$(".ln-selected").hasClass("all")) {
          /* Simulate a user clicking on the "all" label, and then refocusing
    on input box:*/
          $(".all").trigger("click");
          $($input).focus();
        }
        if ($input.val() == "") {
          $letterMenu.fadeIn();
        } else {
          $letterMenu.fadeOut();
        }
      });
      // Setup variables for timer.
            var typingTimer;
 // Timer identifier.
            var doneTypingInterval = 500;
 // Time in ms.
      // On keyup, start the countdown => this is used to detect when user is done typing (for the moment)
            $input.keyup(function() {
        clearTimeout(typingTimer);
        if ($input.val()) {
          typingTimer = setTimeout(showResults, doneTypingInterval);
        }
      });
      /* This function will run once the user has stopped typing --
this is implemented in order to avoid repeated flashing of results on the
screen while the list is filtering.*/      function showResults() {
        // Flash list so screen reader knows content was added.
        $list.fadeOut(10);
        setTimeout(function() {
          $list.fadeIn(10);
        }, 1);
      }
      /* ====End of UX features===*/      var $init_check = $(".ln-letters").length;
      // Initialize index.
            if (!$init_check) {
        $("#quick-search-list").listnav({
          includeAll: true,
          includeNums: false,
          noMatchText: "No matching results.",
          showCounts: false,
          onClick: noResultsCheck
        });
      }
      $("#quick-search-list-nav .ln-letters > a").on("click touchstart", function() {
        $(this).focus();
      });
      // Initialize index classes so that the no results check works correctly.
            $list.children("li").addClass("listNavShow");
      // Initialize search.
            if (!$init_check) {
        $input.quicksearch("#quick-search-list li", {
          delay: 100,
          noResults: $results_text,
          show: function() {
            var $item = $(this).closest("li").not(".ln-no-match.listNavHide");
            // Provide a custom class for quicksearch matches.
                        $item.addClass("quickSearchShow");
            $item.removeClass("quickSearchHide");
          },
          hide: function() {
            var $item = $(this).closest("li");
            // Provide a custom class for quicksearch non-matches.
                        $item.removeClass("quickSearchShow");
            $item.addClass("quickSearchHide");
          },
          onAfter: noResultsCheck
        });
      }
      // Handle form submission behavior.
            $form.submit(function(event) {
        // Prevent the form from submitting as normal.
        event.preventDefault();
      });
      // Check that the no results message is displayed correctly.
            function noResultsCheck() {
        // Number of results shown by both filters.
        var results = $list.children(".listNavShow.quickSearchShow").length;
        var heading = $wrapper.find(".results-text-heading");
        $results_text.css("display", "block");
        if (results === 0) {
          $results_text.html("No matching results");
          heading.hide();
        } else if (results === 1) {
          $results_text.html(results + " result");
          heading.show();
        } else {
          $results_text.html(results + " results");
          heading.show();
        }
      }
    }
  };
})(jQuery, this, this.document);