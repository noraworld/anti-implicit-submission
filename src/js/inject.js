(() => {

  'use strict';

  let unlocked = false;
  let isPressSuperEnter = false;

  window.addEventListener('keydown', function(event) {
    if (document.activeElement.nodeName === 'INPUT') {
      if (((event.ctrlKey && !event.metaKey) || (event.metaKey && !event.ctrlKey)) && event.key === 'Enter') {
        // console.log('super + enter');
        isPressSuperEnter = true;
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        return false;
      }
      else if (event.key === 'Enter' && !unlocked) {
        // console.log('enter');
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        return false;
      }
      else if (event.key === 'Enter' && unlocked) {
        // console.log('submit!');
        isPressSuperEnter = false;
        unlocked = false;
      }
      else {
        isPressSuperEnter = false;
        unlocked = false;
      }
    }
  }, true);

  window.addEventListener('keyup', function(event) {
    if (document.activeElement.nodeName === 'INPUT') {
      if (isPressSuperEnter && event.key === 'Enter') {
        unlocked = true;
        // console.log('unlocked!');
      }
      else {
        unlocked = false;
        // console.log('locked...');
      }
    }
  }, true);

  let input = document.querySelectorAll('input');
  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('blur', function(event) {
      // console.log('blur');
      isPressSuperEnter = false;
      unlocked = false;
    });
  }

  chrome.runtime.sendMessage({load: true}, function(response) {});
})();
