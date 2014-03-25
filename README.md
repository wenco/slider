slider
======

banner slider

二种焦点图效果
<pre>
<div class="eco sub-f5">
        <ul class="z-eco-list mt8 clear" id="J-push-eco" style="width: 960px; left: -320px;">
          <li class=""><a href="http://new.apdnews.com/photo/68798.html" title="一周图片精选2.8-2.14" target="_blank" class="hot-pic"> <img src="http://img.apdnews.com/1/2014/0214/20140214165358660996_320_200.jpg?2" alt="一周图片精选2.8-2.14"> <span class="texthide">一周图片精选2.8-2.14</span> </a></li>
          <li class="on"><a href="http://new.apdnews.com/photo/68785.html" title="浙江磐安新婚现场坍塌7人遇难" target="_blank" class="hot-pic"> <img src="http://img.apdnews.com/1/2014/0214/20140214161938822937_320_200.jpg?38" alt="浙江磐安新婚现场坍塌7人遇难"> <span class="texthide">浙江磐安新婚现场坍塌7人遇难</span> </a></li>
          <li class=""><a href="http://new.apdnews.com/photo/68498.html" title="图述中华各地“马上”特色元宵节" target="_blank" class="hot-pic"> <img src="http://img.apdnews.com/1/2014/0213/20140213170705219267_320_200.jpg?26" alt="图述中华各地“马上”特色元宵节"> <span class="texthide">图述中华各地“马上”特色元宵节</span> </a></li>

        </ul>
        <a title="上一条" class="j-prev" href="javascript:void(0);" id="J-EPrev"><span class="hidden">上一条</span></a> <span class="eco-cout" id="J-CoutE" style="width: 81px;"><a href="javascript:void(0);" class=""><span class="hide">1</span></a><a href="javascript:void(0);" class="on"><span class="hide">2</span><span class="go" style="overflow: hidden; width: 1.06335px;"></span></a><a href="javascript:void(0);" class=""><span class="hide">3</span></a></span> <a title="下一条" class="j-next" href="javascript:void(0);" id="J-ENext"><span class="hidden">下一条</span></a> </div>


$(function () {
	$('#J-push-eco1').wkzeng({
        previous: '#J-EPrev1',       //左
        next: '#J-ENext1',       //左
        highlight: 'on',            //点高亮状态
        actions: 'click',
        direction: 'left',
		loadingMaxWith: 27,
        actived: 1,
		size:1,
        animates: 300,
        Intervals: 10000
    });
    $('#J-push-eco').wkzeng({
        navigation: '#J-CoutE',  // dot容器
        previous: '#J-EPrev',       //左
        next: '#J-ENext',       //左
        highlight: 'on',            //点高亮状态
        loading: 'go',
        actions: 'click',
        direction: 'left',
		loadingMaxWith: 27,
        actived: 1,
        animates: 300,
        Intervals: 8000
    });
    	 
    $('#J-HotClick').tabs({
        Class:'on',
        actions: 'hover',
        NextID:'.tabs-top'
    });
    
});
</pre>

案例使用http://new.apdnews.com/
