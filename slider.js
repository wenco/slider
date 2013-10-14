(function ($) {
        $.extend({
            slider: function (pts) {
                var options = {
                    bigID: '#big',//大图ID
                    smallID: '#small',//小图ID
                    Time: 6000,//轮换时间
                    clickType: 'hover',//click or hover
                    fadeIn: 400,//进入时间
                    fadeOut: 300,//消失时间
                    Class: 'active'//样式名称
                }
                obj = $.extend(options, pts);
                var _small = $(obj.smallID);
                var _count = _small.find('li').length;
                obj.Time = obj.Time ? obj.Time : 5000;
                var _init = null;
                _run = function () {
                    var _this = _small.find('.' + obj.Class);
                    var _index = _this.index();
                    _index = _index + 1;
                    _index = _index > _count - 1 ? 0 : _index;
                    _this.find('span').remove();
                    $(obj.smallID + ' li').eq(_index).addClass(obj.Class).siblings().removeClass(obj.Class);
                    _this = _small.find('.' + obj.Class);
                    $('<span />').appendTo(_this).stop(true, true).animate({'width': '100%'}, obj.Time)
                    $(obj.bigID + ' li').eq(_index).fadeIn(obj.fadeIn).siblings().fadeOut(obj.fadeOut);
                };
                _hover = function () {
                    $(obj.smallID + ' li').hover(function () {
                        clearInterval(_init);
                        var _this = $(this);
                        var _index = _this.index();
                        _this.find('span').remove();
                        _this.addClass(obj.Class).siblings().removeClass(obj.Class);
                        $(obj.bigID + ' li').eq(_index).fadeIn(obj.fadeIn).siblings().fadeOut(obj.fadeOut);
                        ;
                    }, function () {
                        _init = setInterval(function () {
                            _run();
                        }, obj.Time);
                    });
                };
                $(obj.bigID).hover(
                        function () {
                            clearInterval(_init);
							$(obj.smallID).find('span').remove();
                        },
                        function () {
                            _init = setInterval(function () {
                                _run();
                            }, obj.Time);
                        }
                );
                _click = function () {
                    $(obj.smallID + ' li').click(function () {
                        clearInterval(_init);
                        var _this = $(this);
                        var _index = _this.index();
                        _this.find('span').remove();
                        _this.addClass(obj.Class).siblings().removeClass(obj.Class);
                        $(obj.bigID + ' li').eq(_index).fadeIn(obj.fadeIn).siblings().fadeOut(obj.fadeOut);
                        _init = setInterval(function () {
                            _run();
                        }, obj.Time);
                    });
                }
                _init = setInterval(_run, obj.Time);
                obj.clickType != 'hover' ? _click() : _hover();
            },
            scrollPic: function (ops) {//id,left,right,text,time
                var defaults = {
                    picID: '#pic',//图片
                    leftID: '#left',//左ID
                    rightID: '#right',//右ID
                    txtID: '#txt',//文字ID
                    Time: 4000//轮换时间
                }
                o = $.extend(defaults, ops);
                var _flg = false;
                var _a = $(o.picID);
                var _txt = $(o.txtID);
                var _l = $(o.leftID);
                var _r = $(o.rightID);
                var _count = _a.find('li').length;
                var _time = o.Time ? o.Time : 3000;
                var _run1 = null;
                var _i = 0;
                var _w = parseInt(_a.find('li').css('width'));
                _a.css({'width': _count * _w});
                _init1 = function () {
                    _i = _i + 1;
                    _i = _i >= _count ? 0 : _i;
                    _a.stop(true, true).animate({'left': -_i * _w});
                    _txt.html(_i + 1);
                }
                _run1 = setInterval(_init1, _time);
                _l.click(function () {
                    clearInterval(_run1);
                    _i = _i + 1;
                    _i = _i >= _count ? 0 : _i;
                    _txt.html(_i + 1);
                    _a.stop(true, true).animate({'left': -_i * _w});
                    _run1 = setInterval(function () {
                        _init1();
                    }, _time);
                    return _flg;
                });
                _r.click(function () {
                    clearInterval(_run1);
                    _i = _i - 1;
                    _i = _i < 0 ? _count - 1 : _i;
                    _txt.html(_i + 1);
                    _a.stop(true, true).animate({'left': -_i * _w});
                    _run1 = setInterval(function () {
                        _init1();
                    }, _time);
                    return _flg;
                });
                _a.hover(function () {//bug
                            clearInterval(_run1);
                        },
                        function () {
                            _run1 = setInterval(function () {
                                _init1();
                            }, _time);
                        }
                );
            }
        });
    })(jQuery);
    
    
    /*
    //js调用
    $(function () {
        $.slider({
            bigID: '#J-Pic',
            smallID: '#J-Text',
            clickType: 'hover',
            Time: 6000,
            Class: 'active'
        });
        $.scrollPic({
            picID: '#J-Scroll',//图片
            leftID: '#J-Prev',//左ID
            rightID: '#J-Next',//右ID
            txtID: '#J-Txt',//文字ID
            Time: 3000//轮换时间
        });
      });
      
    
    */
