var offsetX,offsetY=0;
var mydesigner;
var activeType="";
var connectionType="";
var currentconnector=null;

function allowDrop(ev){	
  ev.preventDefault();
}


function drag(ev){
	ev.dataTransfer.effectAllowed = "drag";
 	ev.dataTransfer.setData("text","widget:"+ev.target.attributes["data"].value);
}

function drop(ev){	
	designer.drop(ev);
}

$(document).ready(function(){
	
	var showscale=localStorage.getItem("showscale")||true;
	var documentType="";
	

	var prefix="slide";
	
	var widgetgroup={
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

	if(documentType=="workflow"){
		$("#entity-relationship,#table-relationship").hide();
		widgetgroup.vectorgraph.visible=false;
		widgetgroup.myfile.visible=false;
		widgetgroup.icon.visible=false;
		widgetgroup.database.visible=false;
		widgetgroup.entity.visible=false;
		widgetgroup.shared.visible=false;
		widgetgroup.published.visible=false;
		widgetgroup.ui.visible=false;
		prefix="flow";
	}
	else if(documentType=="er"){
		widgetgroup.basic.visible=false;
		widgetgroup.workflow.visible=false;
		widgetgroup.bwf.visible=false;
		widgetgroup.vectorgraph.visible=false;
		widgetgroup.myfile.visible=false;
		widgetgroup.icon.visible=false;
		widgetgroup.entity.visible=false;
		widgetgroup.shared.visible=false;
		widgetgroup.published.visible=false;
		widgetgroup.ui.visible=false;
		widgetgroup.database.selected=true;
		prefix="Page";
	}
	else if(documentType=="entity"){		
		widgetgroup.workflow.visible=false;
		widgetgroup.bwf.visible=false;
		widgetgroup.vectorgraph.visible=false;
		widgetgroup.myfile.visible=false;
		widgetgroup.icon.visible=false;
		widgetgroup.database.visible=false;
		widgetgroup.shared.visible=false;
		widgetgroup.published.visible=false;
		widgetgroup.ui.visible=false;
		widgetgroup.entity.selected=true;
		prefix="Panel";
	}
	else{
		documentType="slideshow";
	}
	
	mydesigner=new designer("#workspace","#propertyEditorForm",{			 
		 type: documentType,
		 prefix:prefix,
		 preSaveDocument:function(r){
			var item={};
			item.name=r.title;	
			return true;
		 },
		 widgetgroup:widgetgroup,
		 showscale:showscale,
	});
	
	
	 function stop(){
		 return false;
	 }
	 document.oncontextmenu=stop;
	
	
 }); 
	