$(function() {
	//页面初始
	$("#studyPanel").load("./samples/start.html");
	$("#codeContainer").val("");
	$("#showPanel").html("");
	
	
	//键盘按下时触发，实时显示代码编辑结果
	showResult();
	$("#codePanel").keydown(function() {
		showResult();
	});
	function showResult() {
		$(".show").html($("#codeContainer").val());
	}
	
	//左侧导航栏隐藏与显示
	$(".menuBtn").click(function() {
		var status = $("#navHelp").css("display");
		if(status === "none") {
			$("#navHelp").css("display", "block");
			$(".menuBtn").addClass("active");
			$(".wrapper").addClass("menu-open");
			$(".navHeader").css("display", "block");
		} else if(status === "block") {
			$("#navHelp").css("display", "none");
			$(".menuBtn").removeClass("active");
			$(".wrapper").removeClass("menu-open");
			$(".navHeader").css("display", "none");
		}
	});

	//导航栏各项点击事件
	var changeContain = function(el, id) {
		$(".item li").addClass("normal");
		$(el).removeClass("normal");
		$(el).addClass("changeColor");
		
		$("#studyPanel").html("");
		$("#codeContainer").val("");
		$("#showPanel").html("");
		
		var study = "./samples/"+id+"-study.html";
		var code = "./samples/"+id+"-code.html";
		$("#studyPanel").load(study);
		
//		$("#codeContainer").load(code, function(response, status, xhr) {
//			$(this).val(response);
//		});
//		
//		$("#showPanel").load(code);
		
		$("#showPanel").load(code, function(response, status, xhr) {
			$("#codeContainer").val(response);
		});
	}
	
	$("#wid-attr").click(function() {
		changeContain(this, "wid-attr");
	});

	$("#wid-fun").click(function() {
		changeContain(this, "wid-fun");
	});
	
	$("#wid-event").click(function() {
		changeContain(this, "wid-event");
	});
	
	$("#pre-attr").click(function(){
		changeContain(this, "pre-attr");
	});

	$("#pre-fun").click(function() {
		changeContain(this, "pre-fun");
	});

	$("#pre-event").click(function() {
		changeContain(this, "pre-event");
	});

	$("#acw").click(function() {
		changeContain(this, "acw");
	});

	$("#note").click(function() {
		changeContain(this, "note");
	});
	
	$("#box").click(function() {
		changeContain(this, "box");
	});
	
	$("#drawEllipse").click(function() {
		changeContain(this, "drawEllipse");
	});
	
	$("#drawArrow").click(function() {
		changeContain(this, "drawArrow");
	});
});