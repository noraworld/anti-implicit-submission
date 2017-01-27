(() => {

  'use strict';

  window.addEventListener('keydown', function(event) {
    justBeforeKey = event.key;
    if (event.key === 'Enter' && document.activeElement.nodeName === 'INPUT' && document.activeElement.getAttribute('type') === 'text') {
      let confirm = window.prompt('Are you sure you want to submit? Type "sure" if you want to.');
      if (confirm !== 'sure') {
        event.preventDefault();
        return false;
      }
    }
  }, true);

})();
