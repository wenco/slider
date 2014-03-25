(function ($) {
    $.fn.extend({
		
        placeholder: function (options) {
            var defaults = {
                words: '請輸入',
                classN: 'focus'
            };
            var opt = $.extend(defaults, options);
            return this.each(function () {
                var o = opt;
                var obj = $(this);
                obj.attr({'data-word': o.words});
                obj.bind({
                    focus: function () {
                        var _this = $(this);
                        if (_this.val() === _this.attr('data-word')) {
                            _this.addClass(o.classN).val('');
                        }						
                    },
                    blur: function () {
                        var _this = $(this);
                        if (_this.val().replace(/\n/g,'') == '' || _this.val() == null) {
                            _this.removeClass(o.classN).val(_this.attr('data-word'));
                        }						
                    }
                });
            });
        }
    });
})(jQuery);
