//minispace选中和悬浮效果demo
function hoverAndSelect() {
	this.obj = "";
}

hoverAndSelect.prototype = {
	//传入参数：可能被选中的所有模块（类名或标签名）
	init: function(obj) {
		this.obj = obj;
		this.sethoverAndSelectEvent();
	},
	//添加选中和悬浮事件
	sethoverAndSelectEvent: function() {
		var block=this.obj;
		$(block).mouseover(function() {
				if($(this).attr("class") != "selected") $(this).addClass("hover");
			})
			.mouseout(function() {
				$(this).removeClass("hover");
			})
			.mouseup(function() {
				$(this).removeClass("hover");
				$(block).removeClass("selected");
				$(this).addClass("selected");
			});
	}
}