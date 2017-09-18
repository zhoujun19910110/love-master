/**
 * Created by xiaohui on 2017/8/25.
 */
define(function (require, exports) {
    var Template = require('template');
    function init() {
        var mockTask = ['Kiss','React','VR/AI/IoT'];//请求数据
        var htmlStr = Template('liTemp',{list:mockTask});//生成内容
        $('#ulDom').html(htmlStr);//渲染节点
    }

    function destroy() {

    }

    exports.title = 'Discovery';
    exports.init = init;
    exports.destroy = destroy;
});