<propertyEditorPage>
<style>
	.table-propertyEditor,.table-propertyEditor  table{
	   font-size:9pt;
	   margin-bottom:0px;
	}
		
	.table-propertyEditor input[type="text"]{
	   padding:5px;
	}
</style>
<div class="property_message property-panel desktop desktop-background" style="display:none1;border:10px 0px 10px 0px">
	<div class="panel-heading">
		<a href="#" class="btn-property-close"><i class="fa fa-angle-double-right"></i></a> 页面设置
	</div>
	<table class="table table-propertyEditor" style="height:60px">
			<tr>
				<td>
				    <div class="property-header">大小</div>
					<div class="btn-group" style="padding:6px">
						<label for="pageSize" class="control-label">尺寸</label>
						<select id="pageSize" style="width:120px"  onchange="{pagesizechange}">
							<option value="1500X2160">A3 (1500X2160)</option>
							<option value="1050X1510">A4 (1050X1510)</option>
							<option value="750X1080">A5 (750X1080)</option>
							<option value="720X1140">高清</option>
							<option value="1080X1920">超清</option>
							<option value="Other" disabled>其他</option>
						</select>
					</div>
					<div class="btn-group" style="padding:6px">
						<label for="pageDirection" class="control-label">方向</label>
						<select id="pageDirection" style="min-width:80px"  onchange="{pagedirectionchange}">
							<option value="vertical">竖向</option>
							<option value="horizontal">横向</option>
						</select>
					</div>
				</td>
			</tr>
			<tr>
		 		<td>
		 		<div class="btn-group" style="padding:6px">
		 			<label for="backgroundWidth">宽度</label>
		 			<input type="text" id="backgroundWidth" name="backgroundWidth" style="width:60px;"	value="{activepanel.width}" min="250" title="最小值  250"	 class="number" onchange="{pagechange}"/>
		 		</div>
		 		<div class="btn-group" style="padding:6px">
		 			<label for="backgroundHeight">高度</label>
					<input type="text" id="backgroundHeight" name="backgroundHeight"  style="width:60px;" value="{activepanel.height}" min="150" title="最小值  150" class="number" onchange="{pagechange}"/>
		 		</td>
			</tr>
			<tr>
				<td>
					<div class="btn-group" style="padding:6px;">
						<input type="checkbox" id="show-thumbnail" title="显示缩率图"  checked={true:designer.showthumbnail}  onchange="{showthumbnail}"/>
						<label for="show-thumbnail"> 
							显示缩率图
						</label>
					</div>
					<div class="btn-group" style="padding-right:6px;padding-top:6px;padding-bottom:6px">
						<label for="showgrid">
							<input type="checkbox" name="showgrid" id="showgrid" title="显示网格" checked={true:activepanel.showgrid} onchange="{change}"/> 
							显示网格
						</label>
						<input type="text" id="dpi"  name="dpi"	class="number align-grid" min=4  title="网格宽度"  value={activepanel.dpi} name="dpi" style="max-width:25px" show={activepanel.showgrid} onchange="{change}"/>
						<label for="aligngrid" class="aligngrid" show={activepanel.showgrid}> 
							<input type="checkbox" id="aligngrid"  name="aligngrid" class="aligngrid"	title="自动对齐网格" checked={true:activepanel.aligngrid} show={activepanel.showgrid} onchange="{change}"/>
							自动对齐
						</label>
					</div>
				</td>	
			</tr>	
		 	<tr>
				<td>
					<div class="property-header">背景</div>
					<div class="btn-group" style="padding:6px">
						<label for="backgroundfilltype">类型</label>
						<select id="backgroundfilltype"  style="width:60px"  onchange="{backgroundchange}">
					    	<option value="color">颜色</option>
					    	<option value="gradient">渐变</option>
				    	</select>
				    </div>
				    <div class="btn-group backgroundColor"  show={background.filltype=="color"}>
				    		<input type="text" id="backgroundColor" class="colorpick"	style="background: none; border: solid 2px lightgray;" title="背景色" onchange="{backgroundchange}"/>
				    </div>
			   		<div class="btn-group backgroundGradient" show={background.filltype=="gradient"}>							
						<div class="backgroundGradient" style="margin-bottom:2px">
				    		<div class="btn-group">
								<input type="text" id="desktop-begin-color" class="colorpick col-lg-3" style="width:50px;height:30px;border:solid 2px lightgray" title="背景色" onchange="{backgroundchange}"/>
								<a id="desktop-color-exchange" href="#"><span class="fa fa-exchange"></span></a>		    	
								<input type="text" id="desktop-end-color" class="colorpick col-lg-3" style="width:50px;height:30px;border:solid 2px lightgray" title="背景色" onchange="{backgroundchange}"/>
							</div>									
				    	</div>
					</div>	
					<div class="btn-group" show={background.filltype=="image"}>
						<select id="backgroundImagetype" class="backgroundImage"  style="width:90px" onchange="{backgroundchange}" >
							<option value="fit">自适应</option>
							<option value="fill">填充</option>
							<option value="repeat">重复</option>
							<option value="center">居中</option>
						</select>
					</div>
				</td>
			</tr>
			<tr class="backgroundImage" show={background.filltype=="image"}>
				<td style="border-width:0px">
					<div class="btn-group text-center" style="padding:6px 6px 6px 32px">
						<div class="backgroundImage">
							<a href='#'><img id="backgroundImage" class="img-rounded" style="padding:0px"	src="" width="100%"  title="背景图片"  onclick="{uploadbackground}"></img></a>
						</div>
						<a href="#" id="background_image_upload" if={!activepanel.rootwidget.background.image} onclick="{uploadbackground}">选择图片</a>	
						<a href="#" id="background_image_remove" if={activepanel.rootwidget.background.image} onclick="{removebackground}">清空</a>							
						<input type="file" style="display: none" id="backgroundFile" accept="image/*" onchange="{backgroundchange}"/>						
					</div>
				</td>
			</tr>
			<tr class="backgroundGradient" show={background.filltype=="gradient"}>
				<td style="border-width:0px;padding-top:0px;">
					<div class="btn-group" style="padding:0px 6px 6px 6px">							
						<div class="backgroundGradient" style="margin-bottom:2px">
							<div class="btn-group">
								<div class="btn-group" style="margin-top:5px">
									<label for="desktop-gradient-type">类型</label>
									<select id="desktop-gradient-type" style="width:120px;margin-right:5px" onchange="{backgroundchange}">
										<option value="none">无</option>
								    	<option value="liner">线性</option>
								    	<option value="radial">放射性</option>
							    	</select>
						    	</div>
						    	<div class="btn-group" style="margin-top:5px">
						    		<div class="btn-group desktop-gradient-angle">
								    	<label for="desktop-gradient-angle">渐变角度</label>
								    	<input type="text" id="desktop-gradient-angle" value="0" class="number" 	min=0 max=360  style="width:30px;border:solid 1px lightgray" title="角度 (0~360)" onchange="{backgroundchange}"/>
							    	</div>
							    	<div class="btn-group desktop-gradient-radius">
								    	<label for="desktop-gradient-radius">渐变半径</label>
								    	<input type="text" id="desktop-gradient-radius" value="" class="number" min=5 max=100  style="width:30px;border:solid 1px lightgray" title="半径 (5~100)" onchange="{backgroundchange}"/>
							    	</div>
						    	</div>
					    	</div>
				    	</div>
					</div>
				</td>
			</tr>
		</table>
</div>
<script>
	var parent=this;
	if(parent.parent!=null)
		parent=parent.parent;
	this.designer=parent.opts;
	this.activepanel=this.designer.document.activePanel.instance;
	if(this.activepanel){
	    this.background=this.activepanel.background;
		this.gradient=this.activepanel.rootwidget.gradient;
	}
	var ths=this;
	pagesizechange(){
		var value=$("#pageSize").select2("val");
		ths.activepanel.pagesize=value;
	 	var target=ths.activepanel.rootwidget;
		var width=parseInt(value.substring(0,value.indexOf("X")));
		var height=parseInt(value.substring(value.indexOf("X")+1,value.length));
		var panels=ths.designer.panels;
		
		if($("#pageDirection").val()==="horizontal"){
			target.Height(width);
			target.Width(height);
			ths.activepanel.height=width;
			ths.activepanel.width=height;
		}
		else{
			target.Height(height);
			target.Width(width);
			ths.activepanel.width=width;
			ths.activepanel.height=height;
		}
		
		$("#workspace").css("width",target.width+400);
		$("#workspace").css("height",target.height+400);	
		ths.designer.updateDesktop();
	}
	
	pagedirectionchange(){	
		var direction=$("#pageDirection").select2("val");		
	 	var target=ths.activepanel.rootwidget;
	 	ths.activepanel.pagedirection=direction;
	 	var width=target.width;
	 	target.Width(target.height);
	 	target.Height(width);
		ths.activepanel.width=ths.activepanel.height;
		ths.activepanel.height=width;
	 	ths.designer.updateDesktop();
	}
	
	pagechange(){
		var target=ths.activepanel.rootwidget;
		var width=parseInt(this.backgroundWidth.value);
		var height=parseInt(this.backgroundHeight.value);
		var pageSize=width+"X"+height;
		if($("#pageSize option[value='"+pageSize+"']").size()>0)
			 $("#pageSize").select2("val",pageSize);
		else
			 $("#pageSize").select2("val","Other");
		ths.activepanel.width=width;
		ths.activepanel.height=height;
		target.width=width;
		target.height=height;
		ths.designer.updateDesktop();
	}
	
	backgroundchange(){
		var filltype=$(this.root).find("#backgroundfilltype").select2("val");		
		this.background.filltype=filltype;
		$(".backgroundimages").hide();
		if(filltype=="color"){
			this.background.color=$("#backgroundColor").val();
		}
		else if(filltype=="image"){
			$(".backgroundimages").show();
			this.background.imageType=$(ths.root).find("#backgroundImagetype").select2("val");
		}
		else if(filltype=="gradient"){
			this.gradient.begincolor=$(ths.root).find("#desktop-begin-color").val();
			this.gradient.endcolor=$(ths.root).find("#desktop-end-color").val();
			this.gradient.type=$(ths.root).find("#desktop-gradient-type").select2("val");
			this.gradient.angle=$(ths.root).find("#desktop-gradient-angle").val();
			this.gradient.radius=$(ths.root).find("#desktop-gradient-radius").val();
		}
		ths.designer.updateDesktop();
	}
	
	pageinchange(){
		ths.activepanel.pagein=parseInt($("#pagein").select2("val"));
	}
	
	pageoutchange(){
		ths.activepanel.pageout=parseInt($("#pageout").select2("val"));
	}
	
	showthumbnail(){
		debugger;
		ths.designer.showthumbnail=$("#show-thumbnail").prop("checked");
		if(!ths.designer.thumbnail)
			ths.designer.createThumbnail();
		if(ths.designer.showthumbnail){
			$("#thumbnail-box").show();
			ths.designer.drawthumbnail();
		}
		else
			$("#thumbnail-box").hide();		
		localStorage.setItem("showthumbnail", ths.designer.showthumbnail);		
	}
	
	ths.activepanel.showgrid=true;
	change(e){
		var target=e.target||e.currentTarget;
		var name=target.name;
		var value=target.value;
		if(name=="showgrid")
			ths.activepanel.showgrid=$(target).prop("checked");
		else if(name=="aligngrid")
			ths.activepanel.aligngrid=$(target).prop("checked");
		else
			ths.activepanel[name]=value;
		ths.activepanel.paint();
	}
	
	uploadbackground(){
		//$(this.root).find("#backgroundFile").trigger("click");
		parent.opts.trigger("selectbackgroundimage","background");
	}
	
	removebackground(){
		$(ths.root).find("#backgroundFile").val("");
		$(ths.root).find("#backgroundFile").trigger("change"); 
		ths.activepanel.paint();
	}
	
	//todo
	
	this.on("mount",function(){
		if(this.activepanel){
			 $("select").select2();
			 $(this.root).find(".number").number();
			 $(this.root).find(".colorpick").spectrum({
				 showInput: true,
			   	    allowEmpty:true,
			   	    cancelText: "取消",
			   	    chooseText: "选择",
			   	    showInitial: true,
			   	 	localStorageKey:"colorpick",
			   	    showPalette: true,
			   	 	showAlpha:true,
			   	    showSelectionPalette:true,
			   	    palette: [ ],
			   	    preferredFormat: "hex"
			  });
			
			 
			 $(ths.root).find("#pageDirection").select("val",ths.activepanel.pageDirection);
			 var pageSize=$("#backgroundWidth").val()+"X"+$("#backgroundHeight").val();
			 if($("#pageSize option[value='"+pageSize+"']").size()>0)
				 $(ths.root).find("#pageSize").select2("val",pageSize);
			 else
				 $(ths.root).find("#pageSize").select2("val","Other");
			 
		 	 
			var backgroundcolor=(ths.activepanel.background.color==="none")?"":ths.activepanel.background.color;
			var backgroundfilltype=ths.activepanel.background.filltype||"color";
			$(ths.root).find("#backgroundfilltype").select2("val",backgroundfilltype);
			$(ths.root).find("#backgroundColor").spectrum("set",backgroundcolor);
			$(ths.root).find("#desktop-begin-color").spectrum("set",ths.activepanel.rootwidget.gradient.begincolor);
			$(ths.root).find("#desktop-end-color").spectrum("set",ths.activepanel.rootwidget.gradient.endcolor);
			$(ths.root).find("#desktop-gradient-angle").val(ths.activepanel.rootwidget.gradient.angle);
			$(ths.root).find("#desktop-gradient-radius").val(ths.activepanel.rootwidget.gradient.radius);
			$(ths.root).find("#desktop-gradient-type").select2("val",ths.activepanel.rootwidget.gradient.type);
			
			$(ths.root).find("#pagein").select2("val",ths.activepanel.pagein||-1);
			$(ths.root).find("#pageout").select2("val",ths.activepanel.pageout||-1);
			$(ths.root).find("#backgroundImagetype").select2("val",ths.activepanel.background.imageType);	
			if(ths.activepanel.rootwidget.background.image)
				$(ths.root).find("#backgroundImage").attr("src",ths.activepanel.rootwidget.background.image.src);
			else
				$(ths.root).find("#backgroundImage").attr("src","images/picture.png");
			
			$(ths.root).find("#pageDirection").select2("val",ths.activepanel.pagedirection);
			 $(ths.root).find("#backgroundWidth").val(ths.activepanel.width);
			 $(ths.root).find("#backgroundHeight").val(ths.activepanel.height);
			 var pageSize=$(ths.root).find("#backgroundWidth").val()+"X"+$(ths.root).find("#backgroundHeight").val();
			 if($("#pageSize option[value='"+pageSize+"']").size()>0)
				 $("#pageSize").select2("val",pageSize);
			 else
				 $("#pageSize").select2("val","Other");
			
			 var uploading=false;

			 $(ths.root).find("#backgroundFile").bind("change",function(){
					 var target=ths.activepanel.rootwidget;
					 if(this.value!=""){
						 var file = $("#backgroundFile")[0].files[0];
						 if(!/image\/\w+/.test(file.type)){  
						        alert(MESSAGE.NEED_IMAGE_ALERT);  
						        return;  
						 }  
						 
						 var categoryId=localStorage.getItem("ActiveFolder");
						 if(categoryId=="null"||categoryId=="undefined")
							 categoryId=null;
						 
						 var reader = new FileReader();  
						    reader.onload=function(e){  
						    	var result=this.result;
						    	$("#backgroundImage").attr("src",result);
						    	if(target.background.image)
						    		target.background.image.src=result;
						    	else{
						    		var _a = document.createElement("img");
							    	_a.src=result;						    	
						    		target.background.image=_a;
						    	}
						    	ths.update();
						    	filter_image=target.background.image;
						    	ths.activepanel.paint();
						    	$("#modalbackgroundFile").modal("hide");
						    }; 
						    reader.readAsDataURL(file);  
						    parent.opts.trigger("uploadFile",file);
					 }
					 else{
						 $("#backgroundImage").attr("src","images/picture.png");
						 target.background.image=null;
						 target.paint();
					}
			  });
			  if(ths.designer.thumbnail && ths.designer.showthumbnail){
					ths.designer.thumbnail.refresh();
			 }
			  /* else if(!ths.designer.thumbnail&&ths.designer.showthumbnail){
				 ths.designer.createThumbnail();
			 }	 */	 
			 $(ths.activepanel.canvas).css("height",ths.activepanel.canvas.height*ths.activepanel.rootwidget.scale);
          
		  	 ths.designer.updateDesktop();
		  	 this.update();
		}
	});
</script>
</propertyEditorPage>