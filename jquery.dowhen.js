/*
 * jquery.dowhen.js
 *
 * Perform an action when certain condition meets.
 * Periodically checks for certain condition, do the action if met.
 *
 */
;(function($) {
    $.doWhen = function(pred, act, step) {
        step = step || 200;  // default step is 200ms
        act = act || function() {};  // default action does nothing
        if (pred()) {
            act();
        } else {
            console.log('blocking...');
            setTimeout($.doWhen, step, pred, act, step);
        }
        return this;
    };
})(jQuery);
