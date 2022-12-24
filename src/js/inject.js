(() => {

  'use strict';

  chrome.storage.sync.get(function(storage) {
    let executable = true;
    if (storage.exceptions !== undefined) {
      for (let i = 0; i < storage.exceptions.length; i++) {
        if (parseURL(location.href).match(RegExp(wildcardToRegExp(parseURL(storage.exceptions[i]))))) {
          executable = false;
        }
      }
    }
    if (executable) {
      setHandler();
    }
  });

  function suppressSubmission(event) {
    console.log(event.key);
  }

  function setHandler() {
    window.addEventListener('keydown', suppressSubmission, true);
  }

  function parseURL(url) {
    // cut 'http' or 'https'
    // http://www.example.com  => www.example.com
    // https://www.example.com => www.example.com
    url = url.replace(/^https?:\/\//g, '');

    // append trailing slash
    // example.com/foo/bar => example.com/foo/bar/
    url = (url[url.length-1] === '/') ? url : url + '/';

    return url;
  }

  function wildcardToRegExp(wildcard) {
    let regexp = wildcard.replace('*', '.*');
    regexp = '^' + regexp + '$';

    return regexp;
  }

  chrome.runtime.sendMessage({load: true}, function(response) {});
})();
