/**
 * Created by xiaohui on 2017/8/25.
 */

$(function () {
    define(function (require) {
        var util = require('./common/util');
        var memory = {
            page: null
        };
        var page = '';

        window.onhashchange = function () {
            loadHtml();
        };
        function loadHtml() {
            page = util.getHashParam('r') || 'home';
            $.ajax({
                type: 'get',
                url: 'src/html/' + page + '.html',
                success: function (html) {
                    destroyLastPage();
                    initHtml(html);
                    loadJs();
                }
            });
        }

        function initHtml(html) {
            $('#container').html(html).css('display', 'block');
            $(window).scrollTop(0);
        }

        function loadJs() {
            seajs.use('js/' + page, function (context) {
                $('title').html(context.title);
                memory.page = context;
                context.init();
            });
        }

        function destroyLastPage() {
            if (memory.page && memory.page.destroy) {
                memory.page.destroy();
            }
        }

        loadHtml();
    });
});