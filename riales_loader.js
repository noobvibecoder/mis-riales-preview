window.addEventListener('flutter-first-frame', function () {
  var loader = document.getElementById('app-loader');
  if (loader) {
    loader.remove();
  }
});
