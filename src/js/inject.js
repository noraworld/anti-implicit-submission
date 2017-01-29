(() => {

  'use strict';

  // let exceptions = [];
  // let key = null;
  // let isPressEnterTwice = false;
  let unlocked = false;
  // let firstUnlock = false;
  let isPressSuperEnter = false;

  window.addEventListener('keydown', function keyfunc(event) {
    if (document.activeElement.nodeName === 'INPUT') {
      if (((event.ctrlKey && !event.metaKey) || (event.metaKey && !event.ctrlKey)) && event.key === 'Enter') {
        console.log('command + enter');
        isPressSuperEnter = true;
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        return false;
      }
      else if (event.key === 'Enter' && !unlocked) {
        console.log('enter');
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        return false;
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
        console.log('unlocked!');
      }
      else {
        unlocked = false;
        console.log('locked...');
      }
    }
  }, true);

})();
