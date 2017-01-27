(() => {

  'use strict';

  window.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && document.activeElement.nodeName === 'INPUT' && document.activeElement.getAttribute('type') === 'text') {
      event.preventDefault();
      return false;
    }
  }, true);

})();
