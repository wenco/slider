(function ($) {
    $.fn.extend({
        wkzeng: function (options) {

            var defaults = {
                navigation: '',  // dot容器
                previous: '',       //左
                next: '',       //左
                count: '',   //总数
                on: '',      //当前数
                highlight: 'on',            //点高亮状态
                loading: 'go',     //进度条
                loadingWith: 20,
                loadingMaxWith: 25,
                actions: 'click',  //动作
                direction: 'left', //方向
                size: 1,     // 计数器
                actived: 1,  //初始状态
                animates: 300,
                Intervals: 5000,
				afterdo: null
            };

            var opt = $.extend(defaults, options);

            return this.each(function () {
                var o = opt;
                var obj = $(this);
                var navigation = $(o.navigation);
                var previous = $(o.previous);
                var next = $(o.next);
                var count = $(o.count);
                var on = $(o.on);
                var run = null,
                    nav = 0,
                    chrildli = 1,
                    all = 1,
                    now = 0;

                chrildli = obj.find('li').length;
                if (o.direction == 'left' || o.direction == 'right') {
                    nav = obj.parent().css('width');                    
                } else {
                    nav = obj.parent().css('height');                    
                }
				all = Math.ceil(chrildli / o.size);
                nav = parseInt(nav);
                var list = function () {
                    var html = '';
                    for (i = 1; i <= all; i++) {
                        var ac = i == o.actived ? 'class="' + o.highlight + '"' : '';
                        html = html + '<a ' + ac + 'href="javascript:void(0);"><span class="hide">' + i + '</span></a>';
                    }
                    if (o.direction == 'left' || o.direction == 'right') {
                        obj.css({'width': all * nav});
                    }
                    count.html('/' + all);
                    on.html(o.actived);
                    obj.find('li').removeClass(o.highlight).eq(o.actived - 1).addClass(o.highlight);
                    navigation.css({'width': all * o.loadingMaxWith}).html(html);
                    $('<span class="' + o.loading + '"></span>').appendTo(navigation.find('.' + o.highlight));
                    navigation.find('.' + o.loading).animate({'width': o.loadingWith}, { queue: true, duration: o.Intervals });
                };
                list();
                var items = $(' a', navigation);
                var index = function () {
                    if (o.navigation == '') {
                        now = obj.find('.' + o.highlight).index();
                    } else {
                        now = navigation.find('.' + o.highlight).index();
                    }
                    now = now < all - 1 ? now + 1 : 0;
                    navigation.find('.' + o.loading).remove();
                    classSet();
                    loadingAdd();
                };
                var stop = function () {
                    clearInterval(run);
                };
                var play = function () {
                    if (!o.Intervals) {
                        run = null;
                    } else {
                        run = setInterval(function () {
                            autoRun();
                        }, o.Intervals);
                    }
                };
                play();
                var autoRun = function () {
                    index();
                    direction();
                };
                var direction = function () {
                    on.html(now + 1);
                    if (o.direction == 'left') {
                        obj.animate({'left': -now * nav}, { queue: false, duration: o.animates });
                    }
                    if (o.direction == 'right') {
                        obj.animate({'right': now * nav}, { queue: false, duration: o.animates });
                    }
                    if (o.direction == 'top') {
                        obj.animate({'top': -now * nav}, { queue: false, duration: o.animates });
                    }
                    if (o.direction == 'bottom') {
                        obj.animate({'bottom': now * nav}, { queue: false, duration: o.animates });
                    }
					if (typeof o.afterdo == 'function') {
                        o.afterdo(this.index = now);
                    }
                };
                var classSet = function () {
                    items.removeClass(o.highlight).eq(now).addClass(o.highlight);
                    obj.find('li').removeClass(o.highlight).eq(now).addClass(o.highlight);
                };
                var loadingAdd = function () {
                    $('<span class="' + o.loading + '"></span>').appendTo(navigation.find('.' + o.highlight));
                    $('.' + o.loading).animate({'width': o.loadingWith}, o.Intervals);
                };

                if (o.actions == 'click') {
                    previous.bind({
                        click: function () {
                            stop();
                            autoRun();
                            play();
                        }
                    });
                    next.bind({
                        click: function () {
                            stop();
                            autoRun();
                            play();
                        }
                    });
                    items.bind({
                        click: function () {
                            stop();
                            now = $(this).index();
                            classSet();
                            navigation.find('.' + o.loading).remove();
                            direction();
                            loadingAdd();
                            play();
                        }
                    });

                } else {
                    previous.bind({
                        mouseenter: function () {
                            stop();
                            autoRun();
                        },
                        mouseleave: function () {
                            play();
                        }
                    });
                    next.bind({
                        mouseenter: function () {
                            stop();
                            autoRun();
                        },
                        mouseleave: function () {
                            play();
                        }
                    });
                    items.bind({
                        mouseenter: function () {
                            stop();
                            now = $(this).index();
                            classSet();
                            navigation.find('.' + o.loading).remove();
                            direction();
                        },
                        mouseleave: function () {
                            loadingAdd();
                            play();
                        }
                    });
                }

                obj.hover(
                    function () {
                        stop();
                        navigation.find('.' + o.loading).remove();
                    },
                    function () {
                        loadingAdd();
                        play();
                    }
                );

            });
        }
    });
})(jQuery);
