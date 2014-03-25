(function ($) {
    $.fn.extend({
        tabs: function (options) {
            var defaults = {
                Class: 'on',
                actions: 'click',
                NextID: '.tabs'
            };
            var opt = $.extend(defaults, options);
            return this.each(function () {
                var flg = false;
                var o = opt;
                var obj = $(this);
                var items = $(' a', obj);

                function hover(i) {
                    items.eq(i).addClass('on').siblings().removeClass('on');
                    $(o.NextID).eq(i).show().siblings(o.NextID).hide();
                }

                if (o.actions == 'click') {
                    items.bind({
                        click: function (e) {
                            var i = $(this).index();
                            hover(i);
                            e.stopPropagation();
                        }
                    });
                } else {
                    items.bind({
                        mouseenter: function (e) {
                            var _this = $(this);
                            var i = $(this).index();
                            hover(i);
                            e.stopPropagation();
                        },
                        mouseleave: function (e) {
                            e.stopPropagation();
                        }
                    });
                }
            });
        }
    });
})(jQuery);
