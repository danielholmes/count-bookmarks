chrome.browserAction.onClicked.addListener((tab) => {
  const countBookmarks = (current, bookmarks) => {
    if (bookmarks.length === 0) {
      return current;
    } else if (bookmarks[0].url) {
      return countBookmarks(current + 1, bookmarks.slice(1));
    } else if (bookmarks[0].children) {
      return countBookmarks(current + countBookmarks(0, bookmarks[0].children), bookmarks.slice(1));
    } else {
      return current;
    }
  };

  chrome.bookmarks.getTree((bookmarks) => {
    alert(`${countBookmarks(0, bookmarks)} total bookmarks`);
  });  
});
