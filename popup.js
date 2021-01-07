(function () {
  var video = document.getElementById("video");
  chrome.storage.sync.get(['removeVideoBlock'], function (result) {
    console.debug(result)
    video.checked = result.removeVideoBlock;
  });

  video.addEventListener("change", function (e) {
    console.debug(e);
    if (video.checked) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { todo: "removeVideoBlock" });
      });
    }

    // set to checked
    chrome.storage.sync.set({ removeVideoBlock: video.checked }, function () {
      console.debug('removeVideoBlock is set to ' + video.checked);
    });
  })
})();