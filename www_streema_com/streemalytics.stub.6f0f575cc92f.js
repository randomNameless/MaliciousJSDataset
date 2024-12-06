/**
 * Create global _streemalytics variable with stub methods for
 * streemalytics object.
 */

// Create a queue, but don't obliterate an existing one!
window._streemalytics || (window._streemalytics = []);

// A list of all the methods in analytics.js that we want to stub.
window._streemalytics.methods = ['identify', 'track', 'page', 'alias', 'ready', 'tunein', 'tuneinUpdate'];

// Define a factory to create queue stubs. These are placeholders for the
// "real" methods in analytics.js so that you never have to wait for the library
// to load asynchronously to actually track things. The `method` is always the
// first argument, so we know which method to replay the call into.
window._streemalytics.factory = function (method) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(method);
    window._streemalytics.push(args);
    return window._streemalytics;
  };
};

// For each of the methods, generate a queueing method.
for (var i = 0; i < window._streemalytics.methods.length; i++) {
  var method = window._streemalytics.methods[i];
  window._streemalytics[method] = window._streemalytics.factory(method);
}
