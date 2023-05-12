<diagrammenu>
<style>
#menu li{
  margin-bottom:0px;
}
.menu_title{
	margin-bottom:-5px;
	font-size:9pt;
}

#menu.nav.nav-tabs li a{
  padding-top:5px;
  padding-bottom:5px;
}

.diagrammenu .select2-container .select2-choice, .diagrammenu .select2-container-multi .select2-choices {
	padding-top:0px;
	height:30px;
	margin-top:0px;	
	border-top:0px solid #dbdbdb;
	border-left:0px solid #dbdbdb;
	border-right:0px solid #dbdbdb;
	border-bottom:0px solid #dbdbdb;  	
  	border-image-width:0px;
  	-webkit-border-radius: 0px;
  	-moz-border-radius: 0px;
  	border-radius: 0px;
  	background:white;
  	filter: none;
  	-webkit-box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0.075);
  	-moz-box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0.075);
  	box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0.075);
}

.diagrammenu .sp-replacer {
    margin:0;
    overflow:hidden;
    cursor:pointer;
    height:32px;
    padding: 5px 4px 4px 3px;
    margin-top:0px;
    display:inline-block;
    *zoom: 1;
    *display: inline;    
    border-top-width:0px;
    border-bottom:0px solid black;      
    border:0px solid black; 
    vertical-align: middle;
}

.diagrammenu .sp-replacer:hover,
.diagrammenu .sp-replacer.sp-active {
    border-color: #aaa;
    border-bottom-width:0px;
    border-top-width:0px;    
}
 .btn-toolbaritem{
   min-width:44px;
   height:32px;
 } 
 
 .diagrammenu .btn-default{
 	backgroud:#d7dee3;
    border:none;
 }

ul.dropdown-menu>li>a{
  padding:5px 20px !important;
}

.btn-toolbaritem{
  height: 49px;
  line-height: 36px;
  background-color: #f7f7f7;
}
.btn-toolbaritem:hover{
  background-color: #f7f7f7;
}
btn-default.disabled, .btn-default[disabled], fieldset[disabled] .btn-default, .btn-default.disabled:hover, .btn-default[disabled]:hover, fieldset[disabled] .btn-default:hover, .btn-default.disabled:focus, .btn-default[disabled]:focus, fieldset[disabled] .btn-default:focus, .btn-default.disabled:active, .btn-default[disabled]:active, fieldset[disabled] .btn-default:active, .btn-default.disabled.active, .btn-default.active[disabled], fieldset[disabled] .btn-default.active {
    background-color: #f7f7f7;
}
.btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default.active, .open .dropdown-toggle.btn-default {
    color: #58636b;
}
.diagrammenu .btn-default.active, .diagrammenu .btn-default.focus, .diagrammenu .btn-default:active, .diagrammenu .btn-default:focus, .diagrammenu .btn-default:hover, .diagrammenu .open > .dropdown-toggle.btn-default {
    background-color: #f7f7f7;
}
</style>
<ul class="nav nav-tabs menu">
  <li class="dropdown">
  		<a id="file" class="dropdown-toggle" data-toggle="dropdown" href="#">
			<span href="#">文档 <span class="caret"></span>
		</a>
		<ul class="dropdown-menu" aria-labelledby="file" role="menu">
				<li><a href="#" onclick="{importdocument}">导入设计文档</a></li>
		</ul>
  </li>
  <li class="dropdown">
  		<a id="view" class="dropdown-toggle hidden-xs" data-toggle="dropdown" href="#">视图 <span class="caret"></span>	</a>
		<ul id="view-options" class="dropdown-menu" aria-labelledby="view" role="menu">
			<li><a role="tab" tabindex="-1" href="#" id="view_property"  class="menu_item" alt="property" onclick="{openproperty}"><i class="fa fa-check-square-o"></i>属性窗口    F2</a></li>
			<li><a role="tab" tabindex="-1" href="#" id="view_widgets"  class="menu_item" alt="navigation" onclick="{openwidget}"><i class="fa fa-check-square-o"></i>控件窗口    F3</a></li>
		</ul>
  </li>
  <li><a href="#" id="btn-save" class="btn-save" onclick="{savedocument}"><span class="fa fa-save"></span> 保存</a></li>
</ul>
<div>
	<div>
			<div class="diagrammenu-panel diagrammenu">
				<div class="btn-group"  style="padding-left:1px">
				   	  <a id="btn-lock"  class="btn btn-default btn-toolbaritem   " href="#" data-toggle="tooltip" data-placement="bottom" title="锁定/解除锁定" onclick="{lock}" disabled={true:focuswidget()==null}><i class="fa fa-lock {fa-unlock:!focuswidget()||focuswidget().editable}"></i></a>
					  <a id="btn-duplicate"  class="btn btn-default btn-toolbaritem " href='#' data-toggle="tooltip" data-placement="bottom" title="复印" onclick="{duplicate}" disabled={true:focuswidget()==null}><i class="fa fa-copy"></i></a>
					  <a id="btn-paste" class="btn btn-default btn-toolbaritem " href="#" data-toggle="tooltip" data-placement="bottom" title="粘贴" onclick="{paste}"  disabled={true:document.copyObj==null}><i class="fa fa-paste"></i></a>
					  <a id="btn-delete"  class="btn btn-default btn-toolbaritem " href='#' data-toggle="tooltip" data-placement="bottom" title="删除" onclick="{removewidget}" disabled={true:focuswidget()==null}><i class="fa fa-times"></i></a>
					  <a id="btn-front" class="btn btn-default btn-toolbaritem "  href="#"  data-toggle="tooltip" data-placement="bottom" title="置前" onclick="{bringfont}" disabled={true:focuswidget()==null}><img src="images/front.png"/></a>
					  <a id="btn-bottom" class="btn btn-default btn-toolbaritem "  href="#" data-toggle="tooltip" data-placement="bottom" title="置后" onclick="{setback}" disabled={true:focuswidget()==null}><img src="images/bottom.png"/></a>
					  <a id="btn-group" class="btn btn-default btn-toolbaritem " href="#" data-toggle="tooltip" data-placement="bottom" title="组合" onclick="{group}" disabled={true:!activePanel||activePanel.selectwidgets.length<2}><img src="images/group.png"/></a>
					  <a id="btn-ungroup" class="btn btn-default btn-toolbaritem " href="#" data-toggle="tooltip" data-placement="bottom" title="拆分" onclick="{ungroup}" disabled={true:focuswidget()==null||focuswidget().type!='noticeboard'}><img src="images/ungroup.png"/></a>
				</div>
				<div class="btn-group" style="margin-left:-7px;padding-left:0px;">
					<a id="btn-align-left" class="btn btn-default btn-toolbaritem btn-alignment"  href="#" data-toggle="tooltip" data-placement="bottom" title="向左对齐" onclick="{alignleft}" disabled={true:!activePanel||activePanel.selectwidgets.length<2}><i class="fa fa-align-left"></i></a>
				 	<a id="alignment" class="btn btn-default btn-toolbaritem  btn-alignment" href="#" style="min-width:20px;width:20px;padding:10px 0" data-toggle="dropdown" disabled={true:!activePanel||activePanel.selectwidgets.length<2}><span class="caret"></span></a>    						    
			      	<ul class="dropdown-menu" role="menu" aria-labelledby="alignment">								      
				      <li><a id="btn-equal-width" href="#" onclick="{alignequalwidth}" >水平等间距</a></li>
				      <li><a id="btn-align-center-horizontal" href="#" onclick="{aligncenterhorizontal}" >水平居中对齐</a></li>
				      <li class="divider"></li>			      
				      <li><a id="btn-align-top"   href="#" onclick="{aligntop}" >向上对齐</a></li>
				      <li><a id="btn-align-bottom" href="#" onclick="{alignbottom}" >向下对齐</a></li>
				      <li><a id="btn-equal-height" href="#" onclick="{alignequalheight}" >垂直等间距</a></li>
				      <li><a id="btn-align-center-vertical" href="#" onclick="{aligncentervertical}" >垂直居中对齐</a></li>
				    </ul>
				    <a id="btn-align-right" class="btn btn-default btn-toolbaritem btn-alignment" href="#" data-toggle="tooltip" data-placement="bottom" title="向右对齐" onclick="{alignright}" disabled={true:!activePanel||activePanel.selectwidgets.length<2}><i class="fa fa-align-right"></i></a>
				 </div>
				 <div class="btn-group" style="padding-left:0px;margin-left:-7px">
						<a href='#' class="btn btn-default btn-toolbaritem " id="btn-zoomout"  data-toggle="tooltip" data-placement="bottom" title="缩小" onclick="{zoomout}"><i class="fa fa-search-minus"></i></a>
						<a id="btn-zoom"  class="btn btn-default btn-toolbaritem  "  style="width:66px" data-toggle="dropdown"  href="#" title="缩放" >{(activePanel.scale*100).toFixed(0)}% <span class="caret"/></a>
						<ul class="dropdown-menu" role="menu" aria-labelledby="btn-zoom">
					      	  <li><a class="btn-zoom"  href="#" value="10"  onclick={zoom}>10%</a></li>
					      	  <li><a class="btn-zoom"  href="#" value="15" onclick={zoom}>15%</a></li>
					      	  <li><a class="btn-zoom"  href="#" value="25" onclick={zoom}>25%</a></li>
					      	  <li><a class="btn-zoom"  href="#" value="50">50%</a></li>
					      	  <li><a class="btn-zoom"  href="#" value="75">75%</a></li>
					      	  <li><a class="btn-zoom"  href="#" value="100">100%</a></li>
					      	  <li><a class="btn-zoom"  href="#" value="125">125%</a></li>
					      	  <li><a class="btn-zoom"  href="#" value="150">150%</a></li>
					      	  <li><a class="btn-zoom"  href="#" value="175">175%</a></li>
					      	  <li><a class="btn-zoom"  href="#" value="200">200%</a></li>								      
			      		</ul>
						<a href='#' class="btn btn-default btn-toolbaritem " id="btn-zoomin"  data-toggle="tooltip" data-placement="bottom" title="放大" onclick="{zoomin}"><i class="fa fa-search-plus"></i></a>
						<a id="btn-undo"  class="btn btn-default btn-toolbaritem " href="#" style="width:40px;" data-toggle="tooltip" data-placement="bottom" title="撤销" onclick="{undo}" disabled={true:!activePanel||activePanel.history.length==0}><i class="fa fa-undo"></i></a>
						<a id="btn-redo"  class="btn btn-default btn-toolbaritem " href="#" style="width:40px;"  data-toggle="tooltip" data-placement="bottom" title="恢复" onclick="{redo}" disabled={true:!activePanel||activePanel.redohistory.length==0}><i class="fa fa-repeat"></i></a>
						<!-- <a id="btn-filter" class="btn btn-default btn-toolbaritem "   href='#'  data-toggle="tooltip" data-placement="bottom" title="滤镜" onclick="{filter}"><i class="fa fa-tint"></i></a> -->
					</div>
					<div class="btn-group font hidden-xs hidden-sm" style="padding-left:0px;margin-left:-7px">						
						<input type="hidden" class="fontname" id="fontname" name="fontname"  title="字体名称" style="width:120px;margin-right:-5px" onchange="{fontnamechange}"/>
						<input type="text" id="fontcolor" name="fontcolor" class="colorpick btn btn-default btn-toolbaritem"  style="border:0px;padding:0px" data-toggle="tooltip" data-placement="bottom" title="颜色" onchange="{fontcolorchange}"></input>
						<input type="hidden" class="fontsize"  id="fontsize" title="字体大小" style="width:80px;margin-left:-5px;margin-right:-3px" onchange="{fontsizechange}"/>
					 </div>
				<div class="btn-group  hidden-xs hidden-sm" style="margin-left:-5px;margin-right:-7px" if={document.type!=='table'}>
	                  <a if={document.type!=='er'} id="table-relationship" class="btn btn-default btn-toolbaritem  btn-relationship" href="#" data-toggle="dropdown">主键关联 <span class="caret"></span></a>    						    
			      	  <ul class="dropdown-menu" role="menu" aria-labelledby="table-relationship">								      
						        <li><a  class="btn-link-relation" href="#" value="02120" title="identitying relationship">主键关联<image src="images/relation.png"  style="height:20px"></a></li>
								    <li><a  class="btn-link-relation" href="#" value="02122" title="none-identitying relationship">外键关联<image src="images/none-relation.png"  style="height:20px"></a></li>
					      </ul>
				 </div>
				 <a href='#' class="btn btn-default btn-toolbaritem  btn-share" data-toggle="tooltip" data-placement="bottom" title="预览"  onclick="{display}"><i class="fa fa-play"></i></a>
				 
			</div>
	</div>	
</div>
<input type="file" style="display: none" id="documentFile" accept="text/plain" />

<script>
	this.designer=opts;
	this.document=opts.document;
	this.activePanel=opts.document.activePanel.instance;
	this.focuswidget=function(){
		return ths.activePanel.focuswidget;
	}
	this.defaultfont=this.document.defaultfont;
	this.defaultconnectionType=function(){
		return this.document.defaultconnectionType;
	}
	this.defaulttableconnectionType=this.document.defaulttableconnectionType;
	this.defaultentityconnectionType=this.document.defaultentityconnectionType;
	var ths=this;
	
	var windows=localStorage.getItem("visor_windows");
	if(windows===null){
		    windows={
		    		property:1,
		    		navigation:1,
		    		templatelist:1
		    };
	 }
    else{
    	windows=JSON.parse(windows);
    }
	
	var showPanels=function(windows){
    	for(s in windows){
			var key=s;
			var value=windows[key];
			if(value===1){
				$("#view-options").find("a[alt="+key+"]").find("i").removeClass("fa-square-o").addClass("fa-check-square-o");
			}
			else{
				 $("#view-options").find("a[alt="+key+"]").find("i").removeClass("fa-check-square-o").addClass("fa-square-o");
			}
		}
		if(windows.property===1){
			$(".propertyEditForm").show();
		}
		else{
			$(".propertyEditForm").hide();
		}
		
		if(windows.navigation===1){
			$("#navigation").show();
		}
		else{
			$("#navigation").hide();
		}
		
		if(windows.property===1){
			$("#panel_propertyEditor").show();
		}
		else{
			$("#panel_propertyEditor").hide();
		}
		
		if((windows.property===1)&&(windows.navigation===1))
		   $("#panel_workspace").removeClass("col-lg-10").removeClass("col-lg-12").addClass("col-lg-8");
		else if((windows.property===1)||(windows.navigation===1))
			$("#panel_workspace").removeClass("col-lg-8").removeClass("col-lg-12").addClass("col-lg-10");
		else
			$("#panel_workspace").removeClass("col-lg-8").removeClass("col-lg-10").addClass("col-lg-12");
	};
	
	newpage(){
		 opts.trigger("newpage");
	}
	
	newdocument(){
		if(ths.document.id){
			  if(window.confirm(MESSAGE.NEW_DOCUMENT_CONFIRM))  
				  ths.designer.createdocument();
		}
		else
			ths.designer.createdocument();
	}
	
	savedocument(){
		opts.trigger('savedocument');
	}
	
	removedocument(){
		 if(window.confirm("确定要删除当前文档?"))  
			opts.trigger("removedocument");
	}
	
	exportdocument(){
		 var currentdoc={};
		 $.extend(currentdoc,ths.document.persist());
		/*  currentdoc.imageData=ths.designer.panels[0].rootwidget.getImageData(0,0,null,null,96,96);
		 currentdoc.activePanel=ths.activePanel.rootwidget.name;
		 currentdoc.panels=JSON.parse(currentdoc.content);
		 delete currentdoc.content; */
		 Downloader.save(JSON.stringify(currentdoc),currentdoc.name+".txt");
	}
	
	importdocument(){
		$("#documentFile").val("");
		$("#documentFile").trigger("click");
	}
	
	exporttable(){
		var currentdoc=ths.document.activePanel.listTables(ths.activePanel);
		Downloader.save(JSON.stringify(currentdoc,null,2),ths.activePanel.title+".txt");
	}
	
	exportentity(){
		var currentdoc=ths.document.activePanel.listEntities();
		Downloader.save(JSON.stringify(currentdoc,null,2),ths.activePanel.title+".txt");
	}
	exportdocumentwithformat(){
		var currentdoc={};
		 $.extend(currentdoc,ths.document.persist());
		 currentdoc.imageData=ths.document.panels[0].instance.rootwidget.getImageData(0,0,null,null,96,96);
		 currentdoc.activePanel=ths.activePanel.rootwidget.name;
		 currentdoc.panels=JSON.parse(currentdoc.content);
		 delete currentdoc.content;
		 Downloader.save(JSON.stringify(currentdoc,null,2),currentdoc.name+".txt");
	}
	
	this.designer.on("openpropertypanel",function(){
		ths.openproperty();
	});
	
	this.designer.on("openwidgetpanel",function(){
		ths.openwidget();
	});
	
	openproperty(){
		var target="property"
    	if(windows[target]===1){
    		windows[target]=0; 
			 $("#view-options").find("a[alt="+target+"]").find("i").removeClass("fa-check-square-o").addClass("fa-square-o");
		 }
		 else{
			 windows[target]=1; 
			 $("#view-options").find("a[alt="+target+"]").find("i").removeClass("fa-square-o").addClass("fa-check-square-o");
			 
		 }
		 localStorage.setItem("visor_windows", JSON.stringify(windows));
		 showPanels(windows);
	}
	openwidget(){
		var target="navigation"
	    	if(windows[target]===1){
	    		windows[target]=0; 
				 $("#view-options").find("a[alt="+target+"]").find("i").removeClass("fa-check-square-o").addClass("fa-square-o");
			 }
			 else{
				 windows[target]=1; 
				 $("#view-options").find("a[alt="+target+"]").find("i").removeClass("fa-square-o").addClass("fa-check-square-o");
				 
			 }
			 localStorage.setItem("visor_windows", JSON.stringify(windows));
			 showPanels(windows);
	}
	
	lock(){
	 	if(ths.focuswidget()){
   			ths.focuswidget().editable=!ths.focuswidget().editable;
   		}
	 	ths.activePanel.paint();
	}
	
	duplicate(){
		ths.document.activePanel.copy();
		ths.document.activePanel.paste();
	}
	
	paste(){
		ths.document.activePanel.paste();
	}
	
	removewidget(){
		ths.activePanel.deleteFocus();
	}
	
	bringfont(){
		ths.activePanel.focuswidget.topDepth();
		ths.activePanel.paint();
	}
	
	setback(){
		 ths.activePanel.focuswidget.downDepth();
		 ths.activePanel.paint();
	}
	group(){
		
  		 var panel1=ths.activePanel;
  		var selectwidgets=panel1.selectwidgets;
  		 if(selectwidgets.length>=2){
  			var groupName=panel1.getName("noticeboard");
  			var box2=$.widgets("noticeboard",{
				  x:panel1.selectRect.x/panel1.scale,
				  y:panel1.selectRect.y/panel1.scale,
				  name:groupName,	
				  text:"",
				  alpha:0.4,
				  editable:true,
				  height:panel1.selectRect.height/panel1.scale,
				  width:panel1.selectRect.width/panel1.scale,
				  minwidth:panel1.selectRect.width/2,
				  minheight:panel1.selectRect.height/2,
			      click:designer.widgetClickEvent			   			
			  }).appendPresenter(panel1);
  			box2.Scale(panel1.scale);
			  for(var i=0;i<=selectwidgets.length-1;i++){
				  selectwidgets[i].x-=box2.x;
				  selectwidgets[i].y-=box2.y;	
				  selectwidgets[i].scale=1;
				  box2.appendWidget(selectwidgets[i]);
				  panel1.removeWidget(selectwidgets[i]);
			  }
			  panel1.clearSelection();
			  panel1.selectwidgets.push(box2);
			  panel1.paint();
  		 }
	}
	ungroup(){
		var panel1=ths.activePanel;
   		panel1.clearSelection();
   		if(panel1.focuswidget&&panel1.focuswidget.widgets.length>0){
   		     for(var i=0;i<panel1.focuswidget.widgets.length;i++){
				  var _widget=panel1.focuswidget.widgets[i];
				  _widget.x+=panel1.focuswidget.x;
				  _widget.y+=panel1.focuswidget.y;	
				  _widget.editable=panel1.focuswidget.editable;
				  _widget.appendPresenter(panel1);								 
				  panel1.selectwidgets.push(_widget);
   		      }
			  panel1.removeWidget(panel1.focuswidget);	
			  panel1.focuswidget=null;
			  panel1.paint();
		  }
	}
	var  win=null;
	display(){
	    debugger;
		opts.trigger("savedocument");
		if(win)
			win.close();
		win=window.open("display.html","_blank");
		
		
	}
	alignleft(){
		var panel1=ths.activePanel;
   		var x=0;
   		for(var i=0;i<panel1.selectwidgets.length;i++){
   			if(panel1.selectwidgets[i].type.indexOf("Connector")<0){
   				if(x==0)
   					x=panel1.selectwidgets[i].x;
   				else
   					x=Math.min(x,panel1.selectwidgets[i].x);
   			}
   		}
   		for(var i=0;i<panel1.selectwidgets.length;i++){
   			if(panel1.selectwidgets[i].type.indexOf("Connector")<0)
   				panel1.selectwidgets[i].x=x;
   		}
   		panel1.paint();
	}
	alignright(){
		var panel1=ths.activePanel;
   		var x=0;
   		for(var i=0;i<panel1.selectwidgets.length;i++){
   			if(panel1.selectwidgets[i].type.indexOf("Connector")<0){
   				if(x==0)
   					x=panel1.selectwidgets[i].x+panel1.selectwidgets[i].width;
   				else
   					x=Math.max(x,panel1.selectwidgets[i].x+panel1.selectwidgets[i].width);
   			}
   		}
   		for(var i=0;i<panel1.selectwidgets.length;i++){
   			if(panel1.selectwidgets[i].type.indexOf("Connector")<0)
   				panel1.selectwidgets[i].x=x-panel1.selectwidgets[i].width;
   		}
   		panel1.paint();
	}
	alignequalwidth(){
		var panel1=ths.activePanel;
   		var _widgets=[];
   		for(var i=0;i<panel1.selectwidgets.length;i++){
   			if(panel1.selectwidgets[i].type.indexOf("Connector")<0){
   				_widgets.push(panel1.selectwidgets[i]);
   			}
   		}
   		var space=Math.round(panel1.selectRect.width/_widgets.length);
   		for(var i=0;i<_widgets.length;i++){
   			_widgets[i].x=panel1.selectRect.x+i*space;
   		}
   		panel1.paint();
	}
	aligncenterhorizontal(){
		var panel1=ths.activePanel;
  		 var y=panel1.selectRect.y+panel1.selectRect.height/2;
  		 for(var i=0;i<panel1.selectwidgets.length;i++){
  			if(panel1.selectwidgets[i].type.indexOf("Connector")<0){
  				panel1.selectwidgets[i].y=y-panel1.selectwidgets[i].height/2;
  			}
  		 }
  		panel1.paint();
	}
	aligntop(){
		var panel1=ths.activePanel;
   		var y=0;
   		for(var i=0;i<panel1.selectwidgets.length;i++){
   			if(panel1.selectwidgets[i].type.indexOf("Connector")<0){
   				if(y==0)
   					y=panel1.selectwidgets[i].y;
   				else
   					y=Math.min(y,panel1.selectwidgets[i].y);
   			}
   		}
   		
   		for(var i=0;i<panel1.selectwidgets.length;i++){
   			if(panel1.selectwidgets[i].type.indexOf("Connector")<0)
   				panel1.selectwidgets[i].y=y;
   		}
   		panel1.paint();
	}
	alignbottom(){
		var panel1=ths.activePanel;
   		var y=0;
   		for(var i=0;i<panel1.selectwidgets.length;i++){
   			if(panel1.selectwidgets[i].type.indexOf("Connector")<0){
   				if(y==0)
   					y=panel1.selectwidgets[i].y+panel1.selectwidgets[i].height;
   				else
   					y=Math.max(y,panel1.selectwidgets[i].y+panel1.selectwidgets[i].height);
   			}
   		}
   		for(var i=0;i<panel1.selectwidgets.length;i++){
   			if(panel1.selectwidgets[i].type.indexOf("Connector")<0)
   				panel1.selectwidgets[i].y=y-panel1.selectwidgets[i].height;
   		}
   		panel1.paint();
	}
	alignequalheight(){
		var panel1=ths.activePanel;
   		var _widgets=[];
   		for(var i=0;i<panel1.selectwidgets.length;i++){
   			if(panel1.selectwidgets[i].type.indexOf("Connector")<0){
   				_widgets.push(panel1.selectwidgets[i]);
   			}
   		}
   		var space=Math.round(panel1.selectRect.height/_widgets.length);
   		for(var i=0;i<_widgets.length;i++){
   			_widgets[i].y=panel1.selectRect.y+i*space;
   		}
   		panel1.paint();
	}
	aligncentervertical(){
		 var panel1=ths.activePanel;
   		 var x=panel1.selectRect.x+panel1.selectRect.width/2;
   		 for(var i=0;i<panel1.selectwidgets.length;i++){
   			if(panel1.selectwidgets[i].type.indexOf("Connector")<0){
   				panel1.selectwidgets[i].x=x-panel1.selectwidgets[i].width/2;
   			}
   		 }
   		panel1.paint();
	}
	zoomout(){
		var scale=ths.activePanel.scale||1;
		if(scale-0.1>0.1)
			scale-=0.1;
		ths.activePanel.Scale(scale);
		$(ths.activePanel.canvas).css("height",ths.activePanel.canvas.height*scale);
	}
	
	zoomin(){
		var panel=ths.activePanel;
		var scale=panel.scale||1;
		if(scale+0.1<2.1)
			scale+=0.1;
		panel.Scale(scale);
		setTimeout(panel.canvas.focus(),200);
		$(panel.canvas).css("height",panel.canvas.height*scale);
	}	
	
	this.designer.on("undo",function(){
		ths.undo();
	});
	
	this.designer.on("redo",function(){
		ths.redo();
	});
	
	redo(){
		 if(ths.activePanel.redohistory.length>0){
			 var command=ths.activePanel.redohistory[ths.activePanel.redohistory.length-1];
			 command.redo();
			 ths.activePanel.history.push(command);
			 ths.activePanel.redohistory.splice(ths.activePanel.redohistory.length-1,1);
		 }
	}
	
	undo(){
		 if(ths.activePanel.history.length>0){
			 var command=ths.activePanel.history[ths.activePanel.history.length-1];
			 command.undo();
			 ths.activePanel.redohistory.push(command);
			 ths.activePanel.history.splice(ths.activePanel.history.length-1,1);			 
		 }
	}
	
	filter(){
		 $("#modalFilters").modal("show");
	}
	
	
	
	fontnamechange(){
		var family=$("#fontname").select2("val");
		if(ths.focuswidget()&&ths.focuswidget().font){
			ths.focuswidget().font.family=family
			ths.activePanel.paint();
		}
		else
			ths.defaultfont.family=family;
	}
	
	fontcolorchange(){
		var color=$("#fontcolor").val();
		if(ths.focuswidget()&&ths.focuswidget().font){
			ths.focuswidget().font.color=(color==="")?"none":color;
			ths.activePanel.paint();
		}
		else
			ths.defaultfont.color=color;
	}
	
	fontsizechange(){
		var size=$("#fontsize").select2("val");
		if(ths.focuswidget()&&ths.focuswidget().font){			
			ths.focuswidget().font.size=size;
			ths.activePanel.paint();
		}
		else
			ths.defaultfont.size=size;
	}
		
	//todo
	
	this.on("update",function(){
		if(this.focuswidget()&&this.focuswidget().font){
			$(".fontname").select2("val",this.focuswidget().font.family||"宋体");
	    	$(".fontsize").select2("val",this.focuswidget().font.size);
	    	$("#fontcolor").spectrum("set",this.focuswidget().font.color);
		}
	    else{
	    	$(".fontname").select2("val",this.defaultfont.family);
	    	$(".fontsize").select2("val",this.defaultfont.size);
	    	$("#fontcolor").spectrum("set",this.defaultfont.color);
	    }
	}) 
	
	this.on("mount",function(){
		
		
	    var fontsizes=[{id:'6pt',text:'6pt'},{id:'7pt',text:'7pt'},{id:'8pt',text:'8pt'},{id:'9pt',text:'9pt'},{id:'10pt',text:'10pt'},{id:'11pt',text:'11pt'},
	                   {id:'12pt',text:'12pt'},{id:'13pt',text:'13pt'},{id:'14pt',text:'14pt'},{id:'15pt',text:'15pt'},{id:'16pt',text:'16pt'},{id:'18pt',text:'18pt'},
	                   {id:'20pt',text:'20pt'},{id:'22pt',text:'22pt'},{id:'24pt',text:'24pt'},{id:'26pt',text:'26pt'},{id:'28pt',text:'28pt'},{id:'30pt',text:'30pt'},
	                   {id:'36pt',text:'36pt'},{id:'40pt',text:'40pt'},{id:'48pt',text:'48pt'},{id:'72pt',text:'72pt'}];
	    
	    var newType;
	    function isPositiveNum(s){
	    	var re = /^[0-9]*[1-9][0-9]*$/ ;
	    	return re.test(s)
	    };
	    $(".fontsize").select2({
	    	data:fontsizes,
	    	formatSelection:function(data){
	    		return data.text;
	    	},
	    	formatResult:function(data){
				return data.text;
			},
	    	formatNoMatches : function(inputText) {
				return "输入数字";
			},
			createSearchChoice:function(term){
				if(isPositiveNum(term)){
					newType= {"id":term+"pt","text":term+"pt"};
					return newType;
				}
			},
	    });
	    
	    $(".colorpick").spectrum({
	   	    showInput: true,
	   	    allowEmpty:true,
	   	    cancelText: "取消",
	   	    chooseText: "选择",
	   	    showInitial: true,
	   	    showPalette: true,
	   	    showSelectionPalette:true,
	   	    palette: [ ],
	   	    preferredFormat: "hex"
	   });
	    
	    if(this.focuswidget()){
			$(".fontname").select2("val",this.focuswidget().font.family);
	    	$(".fontsize").select2("val",this.focuswidget().font.size);
	    	$("#fontcolor").spectrum("set",this.focuswidget().font.color);
		}
	    else{
	    	$(".fontname").select2("val",this.defaultfont.family);
	    	$(".fontsize").select2("val",this.defaultfont.size);
	    	$("#fontcolor").spectrum("set",this.defaultfont.color);
	    }
	    
	    $(this.root).find(".btn-zoom").on("click",function(){
	    	var scale=parseInt($(this).attr("value"))/100;
	    	if(ths.activePanel){
		    	ths.activePanel.Scale(scale);
				$(ths.activePanel.canvas).css("height",ths.activePanel.canvas.height*scale);
				ths.update();
	    	}
	    });
	    
	    $(".btn-newpage").off().on("click",this.newpage)
	    
	    var connectionType=this.defaultconnectionType().split("-");
	    if(connectionType[0]=="lineConnector"){
	    	 $(ths.root).find("#connector-link").html($(this.root).find(".btn-link-line[value="+connectionType[1]+"]").html()+" <span class=\"caret\"></span>");
	    }
	    else if(connectionType[0]=="brokenLineConnector"){
	    	 $(ths.root).find("#connector-link").html($(this.root).find(".btn-link-brokeline[value="+connectionType[1]+"]").html()+" <span class=\"caret\"></span>");
	    }
	    else if(connectionType[0]=="quadraticCurveConnector"){
	    	 $(ths.root).find("#connector-link").html($(this.root).find(".btn-link-cure[value="+connectionType[1]+"]").html()+" <span class=\"caret\"></span>");
	    }
	    
	    $(this.root).find(".btn-link-line").off().on("click",function(){
	    	ths.document.defaultconnectionType="lineConnector-"+$(this).attr("value");
            $(ths.root).find("#connector-link").html($(this).html()+" <span class=\"caret\"></span>");
			
		 });
	    
		 
	    $(this.root).find(".btn-link-brokeline").off().on("click",function(){
	    		ths.document.defaultconnectionType="brokenLineConnector-"+$(this).attr("value");
			 	$(ths.root).find("#connector-link").html($(this).html()+" <span class=\"caret\"></span>");
		 });
		 
	    $(this.root).find(".btn-link-cure").off().on("click",function(){
	    		ths.document.defaultconnectionType="quadraticCurveConnector-"+$(this).attr("value");
			 	$(ths.root).find("#connector-link").html($(this).html()+" <span class=\"caret\"></span>");
		 });
		 
	    var tableconnectionType=this.defaulttableconnectionType.split("-");
	    $(ths.root).find("#table-relationship").html($(this.root).find(".btn-link-relation[value="+tableconnectionType[1]+"]").text()+" <span class=\"caret\"></span>");
	    
	    $(this.root).find(".btn-link-relation").off().on("click",function(){
			 	ths.document.defaulttableconnectionType="relationConnector-"+$(this).attr("value");
			 	$(".btn-link-relation").removeClass("btn-info");
			 	$(this).addClass("btn-info");
			 	$(ths.root).find("#table-relationship").html($(this).text()+" <span class=\"caret\"></span>");
			 	 opts.trigger("changedefaulttableconnectiontype",ths.document.defaulttableconnectionType);
		 });
	    
	    var entityconnectionType=this.defaultentityconnectionType.split("-");
	    $(ths.root).find("#entity-relationship").html($(this.root).find(".btn-link-reference[value="+entityconnectionType[1]+"]").text()+" <span class=\"caret\"></span>");
		 
	    $(this.root).find(".btn-link-reference").off().on("click",function(){
			 	ths.document.defaultentityconnectionType="referenceConnector-"+$(this).attr("value");
			 	$(ths.root).find(".btn-link-reference").removeClass("btn-info");
			 	$(this).addClass("btn-info");
			 	$(ths.root).find("#entity-relationship").html($(this).text()+" <span class=\"caret\"></span>");
			 	opts.trigger("changedefaultentityconnectiontype",ths.document.defaultentityconnectionType);
		 });
	    
	    $(this.root).find("#documentFile").off().on("change",function(e){
			if(this.value!=""){
				 var file = $("#documentFile")[0].files[0];
				 if(!/text\/\w+/.test(file.type)){  
				        alert(MESSAGE.NEED_TEXT_ALERT);  
				        return;  
				 }  
			     var reader = new FileReader();  
			     reader.readAsText(file);  
			     reader.onload=function(e){  
			    	 var exportDoc=JSON.parse(this.result);
			    	 if(typeof exportDoc=='object'&&exportDoc.schema){
			    		 ths.designer.reset();
			    		 exportDoc.id=null;	
			    		 ths.designer.document.restoreSchema(exportDoc);
			    		 opts.trigger("restoredocument");
			    	 }
			    	 else
			    	 if(window.confirm(MESSAGE.RESTORE_DOCUMENT_CONFIRM)){
			    		 ths.designer.reset();
			    		 exportDoc.id=null;	
			    		 ths.designer.document.restoreDocument(exportDoc);
			    		 opts.trigger("restoredocument");
			    	 }
			     }; 
			     
			 }
		});
	});
	
</script>
</diagrammenu>