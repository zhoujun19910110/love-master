/**
 * Created by xiaohui on 2017/8/25.
 */
define(function (require, exports) {
    function getHashParam(name) {
        var hash = location.hash;
        var regex = new RegExp(name + "=([^&]+)"),
            results = regex.exec(hash);
        if (!results) return '';
        if (!results[1]) return '';
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    exports.getHashParam = getHashParam;
});

