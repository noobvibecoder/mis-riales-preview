(function () {
  if (!window.location.pathname.startsWith('/riales-preview/')) {
    return;
  }
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      registrations.forEach(function (registration) {
        registration.unregister();
      });
    });
  }
  if ('caches' in window) {
    caches.keys().then(function (keys) {
      keys.forEach(function (key) {
        if (key.indexOf('flutter') !== -1 || key.indexOf('riales') !== -1) {
          caches.delete(key);
        }
      });
    });
  }
})();
