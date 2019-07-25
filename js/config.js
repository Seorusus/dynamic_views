/**
 * @file
 */

(function ($) {
  'use strict';

  window.onpopstate = function () {
    if ( $('#views-exposed-form-congress-block-1').length) {
      window.location.reload();
    }
  };

  Drupal.behaviors.dynamic_views = {
    attach: function(context) {
      $('.js-form-item-year', context).on('click', function() {
        var year = $(this).find('label').html();
        window.location.replace('?year=' + year);
      });

      // Disabled label click before page reload.
      $('#yer-list label', context).on('click', function (event) {
        event.preventDefault()
      });

      $('input[name=field_month_computed_value]', context).on('click', function() {
        var month = $(this).next('label').html();
        var pathName = window.location.search.toString();
        var location = pathName.replace(/(month=).*?(&|$)/,'$1' + month + '$2');
        window.history.pushState('', '', location);
      });
    }
  }
})(jQuery);
