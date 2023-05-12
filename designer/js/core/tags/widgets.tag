<widgets>
<style>
 #widgetgroup .nav-header{
   display:block;
   line-height:35px;
   background-color: #dbdbdb;
   padding: 0 15px;
   border-bottom: 1px solid #aaaaaa;
 }
 
  #widgetgroup .nav-header i{
   padding:5px;
 }
 
  #widgetgroup .collapsed{
    background-color: #f5f5f5;
    border-bottom: none;
    padding: 2px 15px;
    border-bottom: 1px solid #dbdbdb;
  }
  
  #widgetgroup .panel-body{
	padding: 15px;
	margin: 0 0 1px 0;
	background: white;
  }
  #widgetgroup .btn-default.active, #widgetgroup .btn-default.focus, #widgetgroup .btn-default:active, #widgetgroup .btn-default:focus, #widgetgroup .btn-default:hover, #widgetgroup .open > .dropdown-toggle.btn-default {
    background-color: #dbdbdb;
  }
</style>
<div class="sidebar-nav " id="widgetgroup" >
	<a class="nav-header"  data-toggle="collapse" data-parent="#widgetgroup" name="basic" href="#basic"   if={widgetgroup.basic.visible} style="border-top: 1px solid #f5f5f5;">
		<i class="fa {widgetgroup.basic.selected?'fa-caret-down':'fa-caret-right'}" style="margin-top:1px;"></i>基本图形组件
	</a>
	<div id="basic" class="panel-collapse in {widgetgroup.basic.selected?'':'collapse'}" if={widgetgroup.basic.visible}>
		<div class="panel-body">
		  <div  class="btn-widgets sortable" id="btn-widgets">		  	  
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/label.png" title="label" data="label" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/note.png" title="note" data="note" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/box.png" title="box" data="box" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/quadrangle.png" title="quadrangle" data="quadrangle" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/circle.png" title="circle" data="circle" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/triangle.png" title="triangle" data="triangle" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/polygon.png" title="polygon" data="polygon" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/tooltip.png" title="tooltip" data="tooltip" ondragstart="drag(event)"/>		      
		  </div>
		</div>
	</div>
			
	<a class="nav-header collapsed"  data-toggle="collapse" data-parent="#widgetgroup" name="vectorgraph"  href="#vectorgraph" if={widgetgroup.vectorgraph.visible}>
		<i class="fa {widgetgroup.vectorgraph.selected?'fa-caret-down':'fa-caret-right'}" style="margin-top:1px;"></i>矢量图形
	</a>
	<div id="vectorgraph" class="panel-collapse {widgetgroup.vectorgraph.selected?'':'collapse'}" if={widgetgroup.vectorgraph.visible}>
		<div class="panel-body">
		  <div  class="btn-widgets sortable">		  	  

			  <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/box.png" title="box" data="box" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/quadrangle.png" title="quadrangle" data="quadrangle" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/circle.png" title="circle" data="circle" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/triangle.png" title="triangle" data="triangle" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/polygon.png" title="polygon" data="polygon" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/tooltip.png" title="tooltip" data="tooltip" ondragstart="drag(event)"/>		      
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/parallelogram.png" title="parallelogram" data="parallelogram" ondragstart="drag(event)"/>
			  <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/pentagon.png" title="pentagon" data="pentagon" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/swallowtailed.png" title="swallowtailed" data="swallowtailed" ondragstart="drag(event)"/>
		      
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/rightArrow.png" title="rightArrow" data="rightArrow" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/leftArrow.png" title="leftArrow" data="leftArrow" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/doubleArrow.png" title="doubleArrow" data="leftRightArrow" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/curvedUpArrow.png" title="curvedUpArrow" data="curvedUpArrow" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/curvedDownArrow.png" title="curvedDownArrow" data="curvedDownArrow" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/leftUpArrow.png" title="leftUpArrow" data="leftUpArrow" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/bentUpArrow.png" title="bentUpArrow" data="bentUpArrow" ondragstart="drag(event)"/>
		      
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/bentRightArrow.png" title="bentRightArrow" data="bentRightArrow" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/bentLeftArrow.png" title="bentLeftArrow" data="bentLeftArrow" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/notchedRightArrow.png" title="notchedRightArrow" data="notchedRightArrow" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/notchedLeftArrow.png" title="notchedLeftArrow" data="notchedLeftArrow" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/leftRightUpArrow.png" title="leftRightUpArrow" data="leftRightUpArrow" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/uTurnArrow.png" title="uTurnArrow" data="uTurnArrow" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/calloutRightArrow.png" title="calloutRightArrow" data="calloutRightArrow" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/quadArrow.png" title="quadArrow" data="quadArrow" ondragstart="drag(event)"/>
		      
		  </div>
		</div>
	</div>
 
	
	<a class="nav-header collapsed ui"  data-toggle="collapse" data-parent="#widgetgroup" name="ui"  href="#ui" if={widgetgroup.ui.visible}>
		<i class="fa {widgetgroup.ui.selected?'fa-caret-down':'fa-caret-right'}" style="margin-top:1px;"></i>UI图形组件
	</a>
	<div id="ui" class="panel-collapse {widgetgroup.ui.selected?'':'collapse'} ui" if={widgetgroup.ui.visible}>
		<div class="panel-body">
			<div class="btn-widgets">
				  <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;;" src="images/label.png" title="label" data="label" ondragstart="drag(event)"/>
			      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/link.png" title="link" data="link" ondragstart="drag(event)"/>
			      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/checkbox.png" title="checkbox" data="checkbox" ondragstart="drag(event)"/>
			      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/radio.png" title="radio" data="radio" ondragstart="drag(event)"/>
			      
			      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/textbox.png" title="textbox" data="textInput" ondragstart="drag(event)"/>
			      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/noticeboard.png" title="noticeboard" data="noticeboard" ondragstart="drag(event)"/>
		      	  <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/ruler.png" title="ruler" data="ruler" ondragstart="drag(event)"/>
		      	  <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3" style="padding:2px;" src="images/qrcode.png" title="qrcode" data="qrcode" ondragstart="drag(event)"/>
		      	  <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/spirit.gif" title="spirit" data="spirit" ondragstart="drag(event)"/>
		      	  <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/zuantai.png" title="zuantai" data="zuantai" ondragstart="drag(event)"/>
			</div>
		</div>
	</div>
	
	<a class="nav-header collapsed workflow"  data-toggle="collapse" data-parent="#widgetgroup" name="workflow"  href="#workflow" if={widgetgroup.workflow.visible}>
		<i class="fa {widgetgroup.workflow.selected?'fa-caret-down':'fa-caret-right'}" style="margin-top:1px;"></i>基本流程图
	</a>
	<div id="workflow" class="panel-collapse {widgetgroup.workflow.selected?'':'collapse'} workflow" if={widgetgroup.workflow.visible}>
		<div class="panel-body">
		  <div  class="btn-widgets sortable">
		  	  <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/start.png" title="start" data="start" ondragstart="drag(event)"/>
		  	  <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/process.png" title="process" data="process" ondragstart="drag(event)"/>		     
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/predefinedprocess.png" title="predefinedProc" data="predefinedProc" ondragstart="drag(event)"/>		      
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/decision.png" title="decision" data="decision" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/data.png" title="data" data="data" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/storedata.png" title="storedata" data="storedata" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/internalstorage.png" title="internalstorage" data="internalstorage" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/directdata.png" title="directdata" data="directdata" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/manualinput.png" title="manualinput" data="manualinput" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/card.png" title="card" data="card" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/delay.png" title="delay" data="delay" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/display.png" title="display" data="display" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/preparation.png" title="preparation" data="preparation" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/operation.png" title="manualoperation" data="manualoperation" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/document.png" title="document" data="document" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/papertape.png" title="papertape" data="papertape" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/loop.png" title="looplimit" data="looplimit" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/sequential.png" title="sequential" data="sequential" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/terminator.png" title="terminator" data="terminator" ondragstart="drag(event)"/>
		  </div>
		</div>
	</div>
	<a class="nav-header collapsed"  data-toggle="collapse" data-parent="#widgetgroup" href="#bwf" name="workflow"  if={widgetgroup.workflow.visible}>
		<i class="fa {widgetgroup.workflow.selected?'fa-caret-down':'fa-caret-right'}" style="margin-top:1px;"></i>业务流程图
	</a>
	<div id="bwf" class="panel-collapse {widgetgroup.workflow.selected?'':'collapse'} workflow" if={widgetgroup.workflow.visible}>
		<div class="panel-body">
		  <div  class="btn-widgets sortable">
		  	  <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/zuantai.png" title="钻台" data="image:images/workflow/zuantai.png;size:60" ondragstart="drag(event)"/>
		  	  <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/01.png" title="开始节点" data="image:images/workflow/01.png;size:60" ondragstart="drag(event)"/>
		  	  <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/1.png" title="审批节点" data="image:images/workflow/1.png;size:60" ondragstart="drag(event)"/>		     
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/2.png" title="自动处理节点" data="image:images/workflow/2.png;size:60" ondragstart="drag(event)"/>		      
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/3.png" title="加签节点（与）" data="image:images/workflow/3.png;size:60" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/4.png" title="或签节点" data="image:images/workflow/4.png;size:60" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/6.png" title="结束节点" data="image:images/workflow/6.png;size:60" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/7.png" title="系统集成" data="image:images/workflow/7.png;size:60" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/8.png" title="判定节点" data="image:images/workflow/8.png;size:60" ondragstart="drag(event)"/>
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/workflow/9.png" title="消息节点" data="image:images/workflow/9.png;size:60" ondragstart="drag(event)"/>
		  </div>
		</div>
	</div>
	
	<a class="nav-header collapsed er"  data-toggle="collapse" data-parent="#widgetgroup" href="#er" name="database"  if={widgetgroup.database.visible}>
		<i class="fa {widgetgroup.database.selected?'fa-caret-down':'fa-caret-right'}" style="margin-top:1px;"></i>数据库
	</a>
	<div id="er" class="panel-collapse {widgetgroup.database.selected?'':'collapse'} er" if={widgetgroup.database.visible}>
		<div class="panel-body">
		  <div  class="btn-widgets">		      		      
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-4 col-xs-4" style="padding:2px;" src="images/table.png" title="table" data="table" ondragstart="drag(event)"/>		      
		      <img class="btn btn-default col-lg-3 col-md-3 col-sm-4 col-xs-4" style="padding:2px;" src="images/objectTree.png" title="objectTree" data="objectTree" ondragstart="drag(event)"/>
		  </div>
		</div>
	</div>
	
	<a class="nav-header collapsed entity"  data-toggle="collapse" data-parent="#widgetgroup" href="#entity" name="entity"  if={widgetgroup.entity.visible}>
		<i class="fa {widgetgroup.entity.selected?'fa-caret-down':'fa-caret-right'} " style="margin-top:1px;"></i>实体对象
	</a>
	<div id="entity" class="panel-collapse {widgetgroup.entity.selected?'':'collapse'} entity"  if={widgetgroup.entity.visible}>
		<div class="panel-body">
		  <div  class="btn-widgets">	      		      
   		      <img class="btn btn-default col-lg-3 col-md-4 col-sm-4 col-xs-4" style="padding:2px;" src="images/entity.png" title="entity" data="entity" ondragstart="drag(event)"/>
		  </div>
		</div>
	</div>	
</div>
<script>
var parent=this;
while(parent.parent!=null)
   parent=parent.parent;
this.fontawesomes=[];
var ths=this;
this.widgetgroup=parent.opts.widgetgroup||{
		basic:{visible:true,selected:true},
		workflow:{visible:true,selected:false},
		vectorgraph:{visible:true,selected:false},
		myfile:{visible:true,selected:false},
		bwf:{visible:true,selected:false},
		icon:{visible:true,selected:false},
		database:{visible:true,selected:false},
		entity:{visible:true,selected:false},
		shared:{visible:true,selected:false},
		published:{visible:true,selected:false},
		ui:{visible:true,selected:false}
};
/*changeselected(e){
	var target=e.target||e.currentTarget;
	var name=target.name;
	ths.widgetgroup[name].selected=!ths.widgetgroup[name].selected;
}*/
changevisible(e){
	var target=e.target||e.currentTarget;
	var name=target.name;
	this.widgetgroup[name].visible=!this.widgetgroup[name].visible;
}
   
this.on("mount",function(){
	
}) 
init();
function init(){
	var html=` <img class="btn btn-default col-lg-3 col-md-3 col-sm-3 col-xs-3 " style="padding:2px;" src="images/zuantai.png" title="picture" data="picture" ondragstart="drag(event)"/>`
	setTimeout(function(){
	$('#btn-widgets').append(html)

	},1000)

}
</script>
</widgets>