myFocus.setting({
    style:'mF_tab',//风格样式(对这款tag来说这是固定的)
    id:'yourtab1',//绑定ID
    trigger:'mouseover',//tab切换模式：'click'(点击切换)/'mouseover'(悬停切换，这模式下默认有100毫秒延迟)
    type:'slide',//切换效果：'none'（无效果）/'fade'（淡入效果）/'slide'（滑动效果）
    auto:false,//是否自动切换，true为自动，false为非自动
    time:2,//自动切换模式下的切换时间间隔，单位秒
    width:230,//宽(内容区)，单位像素
    height:510//高(内容区)，单位像素，支持'auto'自适应设置
});
    