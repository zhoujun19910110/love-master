/**
 * Created by xiaohui on 2017/8/25.
 */
define(function (require, exports) {

    function init() {
        console.log('Hello Kiss');
    }

    function destroy() {
        console.log("I will be comeback")
    }

    exports.title = 'Home';
    exports.init = init;
    exports.destroy = destroy;
});