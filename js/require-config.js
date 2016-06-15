require.config({
	paths:{
		'jquery':'../module/jq/jquery',
		'bootstrap':'../module/bootstrap/js/bootstrap',
        'bootstrapcss':'../module/bootstrap/css/bootstrap.min',
        'stylecss':'../css/style'
	},
	map: {
        '*': {
            'cssjs': '../module/requirejs/css',
        }
    },    
    shim:{
        //调用bootstrap.js之前，必须先加载jquery.js。bootstrap插件需要在jq的环境下才能运行。
        "bootstrap":{
            deps:['jquery','cssjs!bootstrapcss'],
            exports:"bootstrap"
        }
    }
});