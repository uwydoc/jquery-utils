/*
 * jquery.fold.js
 *
 * Implement `foldl' and `foldr'(see functional programming concept for details)
 *
 */
;(function($) {
    $.foldl = function(objs, fn, acc) {
        for (var i = 0; i < objs.length; i++) {
            acc = fn.call(this, acc, $(objs[i]));
        }
        return acc;
    };
    $.foldr = function(objs, fn, acc) {
        for (var i = objs.length; i >= 0; i--) {
            acc = fn.call(this, $(objs[i]), acc);
        }
        return acc;
    };
    $.fold = $.foldl;
    // @note The following functions would break the chain property of jQuery,
    //       DO use them with caution.
    $.fn._foldl = function( callbacks, args ) {
        return $.foldl( this, callbacks, args );
    }
    $.fn._foldr = function( callbacks, args ) {
        return $.foldr( this, callbacks, args );
    }
    $.fn._fold = $.fn._foldl;
})(jQuery);
