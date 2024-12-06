function selectRandomEntry (list) {
  const id = Math.floor(Math.random() * list.length);
  const entry = list[id];
  return entry.filePath + '/' + entry.fileName;
}
function slideshow () {
  document.getElementById("latestadditions").src = selectRandomEntry(latestAdditionsImageSet);
  window.setTimeout(slideshow, 5000);
}
document.addEventListener("DOMContentLoaded", function () {
  slideshow();
});
