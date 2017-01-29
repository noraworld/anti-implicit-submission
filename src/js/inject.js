(() => {

  'use strict';

  let exceptions = [];
  let key = null;
  let isPressEnterTwice = false;

  chrome.storage.sync.get(function(storage) {
    if (storage.exceptions === undefined) {
      save();
    }
    else {
      exceptions = storage.exceptions;
    }
  });

  window.addEventListener('keydown', function(event) {
    if (document.activeElement.nodeName === 'INPUT') {
      if ((key === 'Enter') && (event.key === 'Enter')) {
        isPressEnterTwice = true;
      }
      else {
        isPressEnterTwice = false;
      }
      key = event.key;

      if ((isPressEnterTwice === false) && (event.key === 'Enter') && (exceptions.indexOf(window.location.href) < 0)) {
        event.preventDefault();
        return false;
      }
    }
  }, true);

  window.addEventListener('submit', function(event) {
    if (exceptions.indexOf(window.location.href) < 0) {
      if (isPressEnterTwice) {
        confirm = window.prompt('Are you sure?');
        switch (confirm) {
          case 'sure':
            // do nothing. just confirming the submission.
            break;
          case 'disable':
            exceptions.unshift(window.location.href);
            save();
            break;
          default:
            event.preventDefault();
            return false;
            break;
        }
      }
      else {
        event.preventDefault();
        return false;
      }
    }
  }, true);

  function save() {
    chrome.storage.sync.set({exceptions: exceptions});
  }

})();
