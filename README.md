jquery-utils
============

Useful and applicable tiny functions (i think) ought to but not, exist in jQuery

util functions
----------

* $.fold(objs, fn, acc)

common handy function operating on list/array in either directions, applying certain function with current element and the accumulated value from last element. for more details, please refer to *functional programing concept*.

Examples:

```javascript
$('.interactive').click(function() {
  var objs = $(this).find('.content >.hidden');
  if ($(objs).is(':visible')) {
    // use $.fn._foldl to chain series of similar animations
    // fade out one by one
    $(objs)._foldl(function(acc, obj) {
      return $.fn.fadeOut.bind($(obj), 1500, acc)
    }, function() {})();
  } else {
    // fade in one by one
    $(objs)._foldr(function(obj, acc) {
      return $.fn.fadeIn.bind($(obj), 1000, acc);
    }, function() {})();
  }
});
```

* $.doWhen(pred, act, step)

wait until certain condition met, that is, `pred` returns `true`, then do certain action `act`. actually, the implementation calls `pred` periodically with interval `step`, and call `act` when `true` is returned. interval `step` defaults to 200ms.

Examples:

```javascript
var synced = false;
setTimeout(function() {
  synced = true;
}, 1000);
$.doWhen(function() {
  return synced;
}, function() {
  console.log("is synced? " + synced);
}, 100);
```
