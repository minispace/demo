//minispaceѡ�к�����Ч��demo
function hoverAndSelect() {
	this.obj = "";
}

hoverAndSelect.prototype = {
	//������������ܱ�ѡ�е�����ģ�飨�������ǩ����
	init: function(obj) {
		this.obj = obj;
		this.sethoverAndSelectEvent();
	},
	//���ѡ�к������¼�
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