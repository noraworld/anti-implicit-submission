(() => {

  'use strict';

  let exceptions = [];
  init();

  function init() {
    load();
    $('.exception').children('.url').focus();

    $('.exception').on('submit', function(event) {
      event.preventDefault();
      if ($(this).children('.url').val() === '') {
        if ($('.exception').hasClass('has-error') === false) {
          $(this).children('.url').css('border', '1px solid red');
          $('.exception').prepend('<div class="error-message"><strong>This field cannot be blank.</strong></div>');
          $('.error-message').css('color', 'red').css('margin-bottom', '10px');
          $('.exception').addClass('has-error');
        }
        return false;
      }
      add($(this).children('.url'));
      location.reload();
    });

    $(document).on('click', '.delete', function() {
      let index = $(this).parent().children('.index').text() - 1;
      exceptions.splice(index, 1);
      save();
      location.reload();
    });
  }

  function load() {
    chrome.storage.sync.get(function(storage) {
      if (storage.exceptions === undefined) {
        save();
      }
      else {
        exceptions = storage.exceptions;
      }
      for (var i = 0; i < exceptions.length; i++) {
        $('.exception-list').append('<tr><td class="index">' + (i + 1) + '</td><td class="value">' + exceptions[i] + '</td><td class="delete"><button type="button">Delete</button></td></tr>');
      }
    });
  }

  function add(url) {
    exceptions.unshift(url.val());
    save();
  }

  function save() {
    chrome.storage.sync.set({exceptions: exceptions});
  }

})();
