(function () {
  removeVideoBlock();

  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    removeVideoBlock();
  });

  document.getElementById('TopstoryContent').addEventListener('DOMNodeInserted', function (e) {
    removeVideoBlock();
  });

  function removeVideoBlock() {
    chrome.storage.sync.get(['removeVideoBlock'], function (result) {
      if (result.removeVideoBlock) {
        var nodes = [...document.querySelectorAll('.TopstoryItem.Card')].map((v, i) => v.querySelector("a").href.indexOf("zvideo") !== -1 ? v : false).filter(v => v)
        nodes.forEach(v => v.remove())
        console.debug(nodes.length + ' video block been removed');
      }
    });

  }
})();
